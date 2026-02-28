'use client';

import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import type { WordInputPuzzleConfig, SolveState } from '@/types/puzzle';
import type { EngineHandle } from '@/components/puzzle/PuzzleShell';

interface Props {
  config: WordInputPuzzleConfig;
  onSolve?: (state: SolveState) => void;
  onProgress?: (pct: number) => void;
}

const WordInputEngineWrapper = forwardRef<EngineHandle, Props>(function WordInputEngineWrapper(
  { config, onSolve, onProgress },
  ref
) {
  const mountRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<any>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    let active = true;
    import('@/lib/engines/word-input-engine').then(({ WordInputEngine }) => {
      if (!active || !mountRef.current) return;
      mountRef.current.innerHTML = '';
      const engine = new WordInputEngine(mountRef.current, config);
      engine.onSolve = (state: SolveState) => onSolve?.(state);
      engine.onProgress = (pct: number) => onProgress?.(pct);
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

export default WordInputEngineWrapper;
