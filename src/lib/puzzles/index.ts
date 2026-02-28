import type { PuzzleEntry, EngineType } from '@/types/puzzle';

// Lazy-load month configs
async function loadMonth1(): Promise<PuzzleEntry[]> {
  const { MONTH_1_PUZZLES } = await import('./month-1');
  return MONTH_1_PUZZLES;
}

let _cache: PuzzleEntry[] | null = null;

async function getAllPuzzles(): Promise<PuzzleEntry[]> {
  if (_cache) return _cache;
  _cache = await loadMonth1();
  return _cache;
}

export async function getPuzzleByDate(date: string): Promise<PuzzleEntry | null> {
  const puzzles = await getAllPuzzles();
  return puzzles.find(p => p.puzzle_date === date) ?? null;
}

export async function getPuzzleList(): Promise<Pick<PuzzleEntry, 'id' | 'puzzle_date' | 'engine_type' | 'day_of_week' | 'week_number'>[]> {
  const puzzles = await getAllPuzzles();
  return puzzles.map(({ id, puzzle_date, engine_type, day_of_week, week_number }) => ({
    id, puzzle_date, engine_type, day_of_week, week_number,
  }));
}

export function getTodayDateString(): string {
  return new Date().toISOString().split('T')[0];
}

export function getPuzzleNumber(puzzleDate: string, startDate = '2026-03-01'): number {
  const start = new Date(startDate);
  const target = new Date(puzzleDate);
  const diff = Math.floor((target.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return diff + 1;
}

export function engineLabel(type: EngineType): string {
  const labels: Record<EngineType, string> = {
    flow: 'Flow Puzzle',
    deduction: 'Mystery Grid',
    sudoku: 'Star Sudoku',
    connections: 'Connections',
    drag: 'Slide & Clear',
    visual: 'Odd One Out',
    word: 'Word Ladder',
    lateral: 'Think Lateral',
  };
  return labels[type] ?? type;
}

export function engineDayColor(type: EngineType): string {
  const colors: Record<EngineType, string> = {
    flow: 'var(--color-ochre)',
    drag: 'var(--color-ochre)',
    deduction: 'var(--color-indigo)',
    visual: 'var(--color-forest)',
    connections: 'var(--color-crimson)',
    word: 'var(--color-crimson)',
    sudoku: 'var(--color-jade)',
    lateral: 'var(--color-jade)',
  };
  return colors[type] ?? 'var(--color-teal)';
}
