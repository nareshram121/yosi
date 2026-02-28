'use client';

import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import type { SudokuPuzzleConfig, SolveState } from '@/types/puzzle';
import type { EngineHandle } from '@/components/puzzle/PuzzleShell';

interface Props {
  config: SudokuPuzzleConfig;
  onSolve?: (state: SolveState) => void;
}

const SudokuEngineWrapper = forwardRef<EngineHandle, Props>(function SudokuEngineWrapper(
  { config, onSolve },
  ref
) {
  const mountRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<any>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let active = true;
    import('@/lib/engines/sudoku-engine').then(({ SudokuEngine }) => {
      if (!active || !mountRef.current) return;
      mountRef.current.innerHTML = '';
      const engine = new SudokuEngine(mountRef.current, config);
      engine.onSolve = (state: SolveState) => onSolve?.(state);
      engineRef.current = engine;
    });

    return () => {
      active = false;
      if (mountRef.current) mountRef.current.innerHTML = '';
      engineRef.current = null;
    };
  }, [config.id]);

  useImperativeHandle(ref, () => ({
    reset: () => engineRef.current?.reset(),
    getState: () => engineRef.current?.getState() ?? { solved: false },
  }));

  return <div ref={mountRef} className="puzzle-mount" />;
});

export default SudokuEngineWrapper;
