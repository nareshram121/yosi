'use client';

import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import type { FlowPuzzleConfig, SolveState } from '@/types/puzzle';
import type { EngineHandle } from '@/components/puzzle/PuzzleShell';

interface Props {
  config: FlowPuzzleConfig;
  onSolve?: (state: SolveState) => void;
  onProgress?: (pct: number) => void;
}

const FlowEngineWrapper = forwardRef<EngineHandle, Props>(function FlowEngineWrapper(
  { config, onSolve, onProgress },
  ref
) {
  const mountRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<any>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let active = true;
    import('@/lib/engines/flow-engine').then(({ FlowEngine }) => {
      if (!active || !mountRef.current) return;
      mountRef.current.innerHTML = '';
      const engine = new FlowEngine(mountRef.current, config);
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

export default FlowEngineWrapper;
