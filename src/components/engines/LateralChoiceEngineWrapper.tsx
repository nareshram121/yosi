'use client';

import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import type { LateralChoicePuzzleConfig, SolveState } from '@/types/puzzle';
import type { EngineHandle } from '@/components/puzzle/PuzzleShell';

interface Props {
  config: LateralChoicePuzzleConfig;
  onSolve?: (state: SolveState) => void;
  onWrongGuess?: (data: { selected: number }) => void;
}

const LateralChoiceEngineWrapper = forwardRef<EngineHandle, Props>(function LateralChoiceEngineWrapper(
  { config, onSolve, onWrongGuess },
  ref
) {
  const mountRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<any>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    let active = true;
    import('@/lib/engines/lateral-choice-engine').then(({ LateralChoiceEngine }) => {
      if (!active || !mountRef.current) return;
      mountRef.current.innerHTML = '';
      const engine = new LateralChoiceEngine(mountRef.current, config);
      engine.onSolve = (state: SolveState) => onSolve?.(state);
      engine.onWrongGuess = (data: { selected: number }) => onWrongGuess?.(data);
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

export default LateralChoiceEngineWrapper;
