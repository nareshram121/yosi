'use client';

import { useState } from 'react';
import { formatTime } from '@/lib/timer';
import { buildShareText, copyToClipboard, canNativeShare, nativeShare } from '@/lib/share';
import type { EngineType } from '@/types/puzzle';

interface WinPanelProps {
  puzzleDate: string;
  engineType: EngineType;
  puzzleTitle: string;
  winMessage: string;
  timeTakenSeconds: number;
  moves?: number;
  hintsUsed?: number;
  onClose?: () => void;
  onViewSolution?: () => void;
}

export function WinPanel({
  puzzleDate,
  engineType,
  puzzleTitle,
  winMessage,
  timeTakenSeconds,
  moves,
  hintsUsed,
  onClose,
  onViewSolution,
}: WinPanelProps) {
  const [copied, setCopied] = useState(false);

  const shareText = buildShareText({ puzzleDate, engineType, puzzleTitle, timeTakenSeconds, moves, hintsUsed });

  async function handleShare() {
    if (canNativeShare()) {
      await nativeShare(shareText);
    } else {
      const ok = await copyToClipboard(shareText);
      if (ok) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      style={{ background: 'rgba(28, 20, 8, 0.6)', backdropFilter: 'blur(4px)' }}>
      <div className="w-full max-w-sm rounded-2xl p-6 text-center shadow-2xl animate-in slide-in-from-bottom-4"
        style={{ background: 'var(--color-cream)', border: '1px solid var(--color-border)' }}>

        {/* Celebration */}
        <div className="text-4xl mb-3">🎉</div>

        <h2 className="text-2xl mb-1" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--color-ink)' }}>
          Solved!
        </h2>
        <p className="text-sm mb-5 leading-relaxed" style={{ color: 'var(--color-muted)', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
          {winMessage}
        </p>

        {/* Stats */}
        <div className="flex justify-center gap-6 mb-5 py-4 rounded-xl"
          style={{ background: 'var(--color-parch)' }}>
          <Stat label="Time" value={formatTime(timeTakenSeconds)} />
          {moves !== undefined && <Stat label="Moves" value={String(moves)} />}
          {hintsUsed !== undefined && hintsUsed > 0 && <Stat label="Hints" value={String(hintsUsed)} />}
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2">
          <button onClick={handleShare}
            className="w-full py-2.5 rounded-xl font-medium text-sm transition-opacity active:opacity-80"
            style={{ background: 'var(--color-teal)', color: '#fff' }}>
            {copied ? '✓ Copied to clipboard!' : canNativeShare() ? 'Share results' : 'Copy results'}
          </button>

          {onViewSolution && (
            <button onClick={onViewSolution}
              className="w-full py-2.5 rounded-xl font-medium text-sm"
              style={{ background: 'var(--color-parch)', color: 'var(--color-ink)', border: '1px solid var(--color-border)' }}>
              View solution
            </button>
          )}

          {onClose && (
            <button onClick={onClose}
              className="w-full py-2 text-sm"
              style={{ color: 'var(--color-muted)' }}>
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xl font-semibold" style={{ color: 'var(--color-ink)', fontFamily: 'var(--font-serif)' }}>{value}</div>
      <div className="text-xs" style={{ color: 'var(--color-muted)' }}>{label}</div>
    </div>
  );
}
