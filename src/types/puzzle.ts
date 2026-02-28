// ============================================================
// Puzzle & Engine Types
// ============================================================

export type EngineType =
  | 'flow'
  | 'deduction'
  | 'sudoku'
  | 'connections'
  | 'drag'
  | 'visual'
  | 'word'
  | 'lateral';

export interface BasePuzzleConfig {
  id: string;
  title: string;
  storyBeat: string;
  hint: string;
  winMessage: string;
  grade: string;
  category: string;
}

// E1 — Flow
export interface FlowPuzzleConfig extends BasePuzzleConfig {
  grid: number;
  pairs: Array<{
    id: string;
    color: string;
    start: [number, number];
    end: [number, number];
  }>;
}

// E3 — Deduction
export interface DeductionPuzzleConfig extends BasePuzzleConfig {
  categories: Array<{
    name: string;
    icon: string;
    items: Array<{ name: string; icon: string }>;
  }>;
  clues: Array<{ id: number; text: string }>;
  solution: Record<string, string>;
}

// E4 — Sudoku
export interface SudokuPuzzleConfig extends BasePuzzleConfig {
  size: number;
  digits: number[];
  givens: number[];
  solution: number[];
  regions: number[][];
}

// E7 — Connections
export interface ConnectionsPuzzleConfig extends BasePuzzleConfig {
  groups: Array<{
    id: string;
    color: string;
    label: string;
    connection: string;
    tiles: Array<{ text: string; icon: string }>;
  }>;
}

// E2 — DragSpatial
export interface DragSpatialPuzzleConfig extends BasePuzzleConfig {
  gridSize: number;
  blocks: Array<{
    id: string;
    color: string;
    row: number;
    col: number;
    length: number;
    orientation: 'h' | 'v';
    isTarget?: boolean;
  }>;
  exitRow: number;
  exitSide: 'right' | 'left' | 'top' | 'bottom';
}

// E5 — VisualPattern
export interface VisualPatternPuzzleConfig extends BasePuzzleConfig {
  mode: 'odd-one-out' | 'sequence';
  items: Array<{ text: string; icon: string }>;
  correctIndex: number;
  explanation: string;
}

// E6 — WordInput
export interface WordInputPuzzleConfig extends BasePuzzleConfig {
  mode: 'word-ladder';
  startWord: string;
  endWord: string;
  validPath: string[];    // one valid solution path (other paths allowed if valid)
  wordLength: number;
}

// E8 — LateralChoice
export interface LateralChoicePuzzleConfig extends BasePuzzleConfig {
  prompt: string;
  options: Array<{ text: string; icon?: string }>;
  correctIndex: number;
  explanation: string;
}

export type AnyPuzzleConfig =
  | FlowPuzzleConfig
  | DeductionPuzzleConfig
  | SudokuPuzzleConfig
  | ConnectionsPuzzleConfig
  | DragSpatialPuzzleConfig
  | VisualPatternPuzzleConfig
  | WordInputPuzzleConfig
  | LateralChoicePuzzleConfig;

// ============================================================
// Puzzle catalog entry (DB row shape)
// ============================================================
export interface PuzzleEntry {
  id: string;
  puzzle_date: string;        // ISO date "YYYY-MM-DD"
  engine_type: EngineType;
  config: AnyPuzzleConfig;
  day_of_week: number;
  week_number: number;
  grade_band: string;
}

// ============================================================
// Attempt (DB row shape)
// ============================================================
export interface Attempt {
  id: string;
  user_id: string;
  puzzle_id: string;
  started_at: string;
  completed_at: string | null;
  time_taken_seconds: number | null;
  completed: boolean;
  moves: number | null;
  hints_used: number;
  share_text: string | null;
}

// ============================================================
// Engine solve state (returned by engine.getState())
// ============================================================
export interface SolveState {
  solved: boolean;
  moves?: number;
  errors?: number;
  lives?: number;
  pct?: number;
  timeTakenSeconds?: number;
}
