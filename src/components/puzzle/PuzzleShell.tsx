'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { useTimer, formatTime } from '@/lib/timer';
import { WinPanel } from './WinPanel';
import { SolutionView } from './SolutionView';
import { SceneIllustration } from './SceneIllustration';
import type { AnyPuzzleConfig, EngineType, SolveState } from '@/types/puzzle';
import type { RefObject } from 'react';
import { engineDayColor, engineLabel } from '@/lib/puzzles/index';

export interface EngineHandle {
  reset: () => void;
  getState: () => SolveState;
}

export interface EngineCallbacks {
  onSolve: (state: SolveState) => void;
  onProgress: () => void;
}

interface PuzzleShellProps {
  puzzleDate: string;
  engineType: EngineType;
  config: AnyPuzzleConfig;
  engineRef: RefObject<EngineHandle | null>;
  onSolveRecord?: (state: SolveState & { timeTakenSeconds: number; hintsUsed: number }) => void;
  /** Render prop — receives onSolve/onProgress and renders the engine wrapper */
  children: (callbacks: EngineCallbacks) => React.ReactNode;
  isPastPuzzle?: boolean;
  previousAttempt?: {
    completed: boolean;
    time_taken_seconds: number | null;
    moves: number | null;
    hints_used: number;
  } | null;
}

export function PuzzleShell({
  puzzleDate,
  engineType,
  config,
  engineRef,
  onSolveRecord,
  children,
  isPastPuzzle = false,
  previousAttempt,
}: PuzzleShellProps) {
  const { seconds, running, start, stop, reset: resetTimer } = useTimer();
  const [solved, setSolved] = useState(false);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [showWinPanel, setShowWinPanel] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [finalMoves, setFinalMoves] = useState<number | undefined>(undefined);
  const accentColor = engineDayColor(engineType);

  // If user already completed this puzzle in a previous session, show that
  const alreadySolved = previousAttempt?.completed ?? false;
  const prevTime = previousAttempt?.time_taken_seconds ?? null;
  const prevMoves = previousAttempt?.moves ?? null;

  function handleProgress() {
    if (!solved && !alreadySolved) start();
  }

  function handleSolve(state: SolveState) {
    stop();
    const moves = state.moves;
    setFinalMoves(moves);
    setSolved(true);
    setShowWinPanel(true);
    onSolveRecord?.({ ...state, timeTakenSeconds: seconds, hintsUsed });
  }

  function handleReset() {
    engineRef.current?.reset();
    resetTimer();
    setSolved(false);
    setShowHint(false);
  }

  function handleHint() {
    if (!running && !solved) start();
    setHintsUsed(h => h + 1);
    setShowHint(true);
  }

  const displaySeconds = alreadySolved && prevTime !== null ? prevTime : seconds;
  const displayMoves = alreadySolved && prevMoves !== null ? prevMoves : finalMoves;

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-6">
      {/* Engine label + date */}
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: accentColor, fontFamily: 'var(--font-caps)' }}>
          {engineLabel(engineType)}
        </span>
        <span className="text-xs" style={{ color: 'var(--color-muted)' }}>
          {new Date(puzzleDate + 'T00:00:00').toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-2xl mb-3" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--color-ink)' }}>
        {config.title}
      </h1>

      {/* Scene illustration — Chatur + location atmosphere */}
      <SceneIllustration engineType={engineType} />

      {/* Story beat */}
      <div className="rounded-xl px-4 py-3 mb-4 text-sm leading-relaxed"
        style={{ background: 'var(--color-parch)', borderLeft: `3px solid ${accentColor}`, color: 'var(--color-muted)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
        {config.storyBeat}
      </div>

      {/* Timer + stats bar */}
      <div className="flex items-center justify-between mb-4 text-sm">
        <div className="flex items-center gap-3">
          <span className="tabular-nums font-medium" style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-mono)' }}>
            {formatTime(displaySeconds)}
          </span>
          {(alreadySolved || solved) && displayMoves !== undefined && (
            <span style={{ color: 'var(--color-muted)' }}>{displayMoves} moves</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={handleHint} disabled={solved || alreadySolved}
            className="px-2.5 py-1 rounded-lg text-xs font-medium disabled:opacity-40"
            style={{ background: 'var(--color-parch)', color: 'var(--color-muted)', border: '1px solid var(--color-border)' }}>
            Hint {hintsUsed > 0 ? `(${hintsUsed})` : ''}
          </button>
          <button onClick={handleReset}
            className="px-2.5 py-1 rounded-lg text-xs font-medium"
            style={{ background: 'var(--color-parch)', color: 'var(--color-muted)', border: '1px solid var(--color-border)' }}>
            Reset
          </button>
        </div>
      </div>

      {/* Hint reveal */}
      {showHint && (
        <div className="rounded-lg px-4 py-3 mb-4 text-sm"
          style={{ background: '#fffbeb', border: '1px solid var(--color-gold)', color: 'var(--color-ink)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
          💡 {config.hint}
        </div>
      )}

      {/* Already solved banner */}
      {alreadySolved && (
        <div className="rounded-lg px-4 py-2.5 mb-4 text-sm text-center"
          style={{ background: '#f0fdf4', border: '1px solid #86efac', color: '#166534' }}>
          ✓ You solved this in {formatTime(prevTime ?? 0)}{prevMoves ? ` · ${prevMoves} moves` : ''}
        </div>
      )}

      {/* Engine — render prop supplies callbacks */}
      <div className="puzzle-mount" onPointerDown={handleProgress} onKeyDown={handleProgress}>
        {children({ onSolve: handleSolve, onProgress: handleProgress })}
      </div>

      {/* Solution (past puzzles or after solve) */}
      {(isPastPuzzle || alreadySolved || solved) && (
        <div className="mt-4">
          <button onClick={() => setShowSolution(s => !s)}
            className="text-sm hover:underline"
            style={{ color: 'var(--color-teal)' }}>
            {showSolution ? 'Hide solution' : 'Show solution'}
          </button>
          {showSolution && <SolutionView engineType={engineType} config={config} />}
        </div>
      )}

      {/* Win panel overlay */}
      {showWinPanel && (
        <WinPanel
          puzzleDate={puzzleDate}
          engineType={engineType}
          puzzleTitle={config.title}
          winMessage={config.winMessage}
          timeTakenSeconds={seconds}
          moves={finalMoves}
          hintsUsed={hintsUsed > 0 ? hintsUsed : undefined}
          onClose={() => setShowWinPanel(false)}
          onViewSolution={() => { setShowWinPanel(false); setShowSolution(true); }}
        />
      )}
    </div>
  );
}
