'use client';

import { useRef, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { PuzzleShell, type EngineHandle, type EngineCallbacks } from './PuzzleShell';
import { buildShareText } from '@/lib/share';
import type { PuzzleEntry, SolveState } from '@/types/puzzle';

const FlowEngine = dynamic(() => import('@/components/engines/FlowEngineWrapper'), { ssr: false });
const DeductionEngine = dynamic(() => import('@/components/engines/DeductionEngineWrapper'), { ssr: false });
const SudokuEngine = dynamic(() => import('@/components/engines/SudokuEngineWrapper'), { ssr: false });
const ConnectionsEngine = dynamic(() => import('@/components/engines/ConnectionsEngineWrapper'), { ssr: false });
const DragSpatialEngine = dynamic(() => import('@/components/engines/DragSpatialEngineWrapper'), { ssr: false });
const VisualPatternEngine = dynamic(() => import('@/components/engines/VisualPatternEngineWrapper'), { ssr: false });
const WordInputEngine = dynamic(() => import('@/components/engines/WordInputEngineWrapper'), { ssr: false });
const LateralChoiceEngine = dynamic(() => import('@/components/engines/LateralChoiceEngineWrapper'), { ssr: false });

interface Props {
  puzzle: PuzzleEntry;
  isPastPuzzle?: boolean;
  previousAttempt?: {
    completed: boolean;
    time_taken_seconds: number | null;
    moves: number | null;
    hints_used: number;
  } | null;
  onSolveRecord?: (data: {
    completed: boolean;
    timeTakenSeconds: number;
    moves?: number;
    hintsUsed: number;
    shareText: string;
  }) => void;
}

export function PuzzleRenderer({ puzzle, isPastPuzzle, previousAttempt, onSolveRecord }: Props) {
  const engineRef = useRef<EngineHandle>(null);

  const handleSolveRecord = useCallback((state: SolveState & { timeTakenSeconds: number; hintsUsed: number }) => {
    const shareText = buildShareText({
      puzzleDate: puzzle.puzzle_date,
      engineType: puzzle.engine_type,
      puzzleTitle: puzzle.config.title,
      timeTakenSeconds: state.timeTakenSeconds,
      moves: state.moves,
      hintsUsed: state.hintsUsed,
    });
    onSolveRecord?.({
      completed: true,
      timeTakenSeconds: state.timeTakenSeconds,
      moves: state.moves,
      hintsUsed: state.hintsUsed,
      shareText,
    });
  }, [puzzle, onSolveRecord]);

  return (
    <PuzzleShell
      puzzleDate={puzzle.puzzle_date}
      engineType={puzzle.engine_type}
      config={puzzle.config}
      engineRef={engineRef}
      onSolveRecord={handleSolveRecord}
      isPastPuzzle={isPastPuzzle}
      previousAttempt={previousAttempt}>
      {({ onSolve, onProgress }: EngineCallbacks) => {
        const cfg = puzzle.config as any;
        switch (puzzle.engine_type) {
          case 'flow':
            return <FlowEngine ref={engineRef} config={cfg} onSolve={onSolve} onProgress={onProgress} />;
          case 'deduction':
            return <DeductionEngine ref={engineRef} config={cfg} onSolve={onSolve} />;
          case 'sudoku':
            return <SudokuEngine ref={engineRef} config={cfg} onSolve={onSolve} />;
          case 'connections':
            return <ConnectionsEngine ref={engineRef} config={cfg} onSolve={onSolve} />;
          case 'drag':
            return <DragSpatialEngine ref={engineRef} config={cfg} onSolve={onSolve} onProgress={onProgress} />;
          case 'visual':
            return <VisualPatternEngine ref={engineRef} config={cfg} onSolve={onSolve} />;
          case 'word':
            return <WordInputEngine ref={engineRef} config={cfg} onSolve={onSolve} onProgress={onProgress} />;
          case 'lateral':
            return <LateralChoiceEngine ref={engineRef} config={cfg} onSolve={onSolve} />;
          default:
            return <div className="p-8 text-center" style={{ color: 'var(--color-muted)' }}>Unknown engine type</div>;
        }
      }}
    </PuzzleShell>
  );
}
