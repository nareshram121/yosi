'use client';

import type { AnyPuzzleConfig, EngineType } from '@/types/puzzle';

interface SolutionViewProps {
  engineType: EngineType;
  config: AnyPuzzleConfig;
}

export function SolutionView({ engineType, config }: SolutionViewProps) {
  return (
    <div className="rounded-xl p-4 mt-4" style={{ background: 'var(--color-parch)', border: '1px solid var(--color-border)' }}>
      <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-caps)', letterSpacing: '0.1em' }}>
        Solution
      </h3>
      <SolutionContent engineType={engineType} config={config} />
    </div>
  );
}

function SolutionContent({ engineType, config }: SolutionViewProps) {
  if (engineType === 'deduction') {
    const cfg = config as import('@/types/puzzle').DeductionPuzzleConfig;
    return (
      <div className="space-y-2">
        {Object.entries(cfg.solution).map(([cat, answer]) => (
          <div key={cat} className="flex items-center justify-between text-sm">
            <span style={{ color: 'var(--color-muted)' }}>{cat}</span>
            <span className="font-medium" style={{ color: 'var(--color-ink)' }}>{answer}</span>
          </div>
        ))}
      </div>
    );
  }

  if (engineType === 'connections') {
    const cfg = config as import('@/types/puzzle').ConnectionsPuzzleConfig;
    return (
      <div className="space-y-3">
        {cfg.groups.map(g => (
          <div key={g.id} className="rounded-lg p-2.5" style={{ background: g.color + '22', border: `1px solid ${g.color}44` }}>
            <div className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: g.color }}>
              {g.label}
            </div>
            <div className="text-sm flex flex-wrap gap-2">
              {g.tiles.map(t => (
                <span key={t.text} style={{ color: 'var(--color-ink)' }}>{t.icon} {t.text}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (engineType === 'sudoku') {
    const cfg = config as import('@/types/puzzle').SudokuPuzzleConfig;
    const N = cfg.size;
    return (
      <div>
        <div className="inline-grid gap-0.5" style={{ gridTemplateColumns: `repeat(${N}, 1fr)` }}>
          {cfg.solution.map((v, i) => (
            <div key={i}
              className="w-8 h-8 flex items-center justify-center text-sm font-medium rounded"
              style={{
                background: cfg.givens[i] !== 0 ? 'var(--color-border)' : 'var(--color-parch)',
                color: cfg.givens[i] !== 0 ? 'var(--color-ink)' : 'var(--color-teal)',
              }}>
              {v}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (engineType === 'lateral' || engineType === 'visual') {
    const cfg = config as import('@/types/puzzle').LateralChoicePuzzleConfig;
    return (
      <div>
        <div className="text-sm font-medium mb-1" style={{ color: 'var(--color-ink)' }}>
          {cfg.options[cfg.correctIndex].text}
        </div>
        <div className="text-sm" style={{ color: 'var(--color-muted)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
          {cfg.explanation}
        </div>
      </div>
    );
  }

  if (engineType === 'word') {
    const cfg = config as import('@/types/puzzle').WordInputPuzzleConfig;
    return (
      <div className="flex items-center gap-2 flex-wrap text-sm">
        {cfg.validPath.map((word, i) => (
          <span key={i}>
            <span className="font-mono px-2 py-0.5 rounded" style={{ background: 'var(--color-cream)', border: '1px solid var(--color-border)', color: 'var(--color-ink)' }}>
              {word}
            </span>
            {i < cfg.validPath.length - 1 && <span className="mx-1" style={{ color: 'var(--color-muted)' }}>→</span>}
          </span>
        ))}
      </div>
    );
  }

  // Flow / Drag — no simple textual solution
  return (
    <p className="text-sm italic" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-serif)' }}>
      Try resetting the puzzle to attempt it again.
    </p>
  );
}
