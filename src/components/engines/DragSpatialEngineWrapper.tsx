'use client';

import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import type { DragSpatialPuzzleConfig, SolveState } from '@/types/puzzle';
import type { EngineHandle } from '@/components/puzzle/PuzzleShell';

interface Props {
  config: DragSpatialPuzzleConfig;
  onSolve?: (state: SolveState) => void;
  onProgress?: (moves: number) => void;
}

const DragSpatialEngineWrapper = forwardRef<EngineHandle, Props>(function DragSpatialEngineWrapper(
  { config, onSolve, onProgress },
  ref
) {
  const mountRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<any>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    let active = true;
    import('@/lib/engines/drag-spatial-engine').then(({ DragSpatialEngine }) => {
      if (!active || !mountRef.current) return;
      mountRef.current.innerHTML = '';
      const engine = new DragSpatialEngine(mountRef.current, config);
      engine.onSolve = (state: SolveState) => onSolve?.(state);
      engine.onProgress = (moves: number) => onProgress?.(moves);
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

export default DragSpatialEngineWrapper;
