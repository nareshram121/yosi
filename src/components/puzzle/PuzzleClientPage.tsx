'use client';

import { useCallback } from 'react';
import { PuzzleRenderer } from './PuzzleRenderer';
import { upsertAttempt } from '@/lib/attempts';
import type { PuzzleEntry } from '@/types/puzzle';

interface Props {
  puzzle: PuzzleEntry;
  isPastPuzzle?: boolean;
  previousAttempt?: {
    completed: boolean;
    time_taken_seconds: number | null;
    moves: number | null;
    hints_used: number;
  } | null;
}

export function PuzzleClientPage({ puzzle, isPastPuzzle, previousAttempt }: Props) {
  const handleSolveRecord = useCallback(async (data: {
    completed: boolean;
    timeTakenSeconds: number;
    moves?: number;
    hintsUsed: number;
    shareText: string;
  }) => {
    // Fire and forget — save attempt to DB
    upsertAttempt({
      puzzleId: puzzle.id,
      completed: data.completed,
      timeTakenSeconds: data.timeTakenSeconds,
      moves: data.moves,
      hintsUsed: data.hintsUsed,
      shareText: data.shareText,
    }).catch(console.error);
  }, [puzzle.id]);

  return (
    <PuzzleRenderer
      puzzle={puzzle}
      isPastPuzzle={isPastPuzzle}
      previousAttempt={previousAttempt}
      onSolveRecord={handleSolveRecord}
    />
  );
}
