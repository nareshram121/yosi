import type { EngineType } from '@/types/puzzle';
import { engineLabel, getPuzzleNumber } from '@/lib/puzzles/index';
import { formatTime } from '@/lib/timer';

const ENGINE_EMOJI: Record<EngineType, string> = {
  flow: '🌊',
  deduction: '🔍',
  sudoku: '⭐',
  connections: '🔗',
  drag: '🧩',
  visual: '👁️',
  word: '📝',
  lateral: '💡',
};

export function buildShareText(params: {
  puzzleDate: string;
  engineType: EngineType;
  puzzleTitle: string;
  timeTakenSeconds: number;
  moves?: number;
  hintsUsed?: number;
}): string {
  const { puzzleDate, engineType, puzzleTitle, timeTakenSeconds, moves, hintsUsed } = params;
  const num = getPuzzleNumber(puzzleDate);
  const emoji = ENGINE_EMOJI[engineType] ?? '🧠';
  const label = engineLabel(engineType);
  const time = formatTime(timeTakenSeconds);

  const lines = [
    `Yosi #${num} ${emoji} ${label}`,
    puzzleTitle,
    ``,
    `Solved in ${time}${moves ? ` · ${moves} moves` : ''}${hintsUsed ? ` · ${hintsUsed} hint${hintsUsed > 1 ? 's' : ''}` : ''}`,
    `yosi.in`,
  ];

  return lines.join('\n');
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export function canNativeShare(): boolean {
  return typeof navigator !== 'undefined' && !!navigator.share;
}

export async function nativeShare(text: string): Promise<void> {
  await navigator.share({ text, title: 'Yosi Daily Puzzle' });
}
