# Yosi — Budhipur Daily Puzzles · CLAUDE.md

## Project overview
Daily puzzle app set in the fictional Indian city of Budhipur, narrated by Chatur. One puzzle per day, 8 rotating engine types. Built for grades 1–10.

**Stack**: Next.js 16.1.6 · React 19 · TypeScript · Tailwind v4 · Supabase (Postgres + Auth + RLS)
**Deployed**: Vercel (auto-deploy from `main` branch)

---

## How puzzle data works

**The app reads puzzles from TypeScript static files — NOT from Supabase.**

```
src/lib/puzzles/index.ts          ← getPuzzleByDate(), getPuzzleList()
src/lib/puzzles/month-1/index.ts  ← MONTH_1_PUZZLES[] — all 41 puzzle configs (Feb 19 – Mar 31)
```

Supabase's `puzzles` table is only needed for the FK constraint on `attempts`. Run both seed files once in the Supabase SQL editor after schema migrations:
- `supabase/migrations/001_initial.sql` — schema + RLS
- `supabase/seed.sql` — March 2026 puzzles (idempotent, ON CONFLICT DO UPDATE)
- `supabase/seed-feb-2026.sql` — Feb 19–28 puzzles (idempotent)

---

## 8 puzzle engines

Each engine is a **vanilla JS ES module** in `src/lib/engines/`. Each has a matching React wrapper in `src/components/engines/`.

| Engine type | JS file | Description |
|-------------|---------|-------------|
| `flow` | `flow-engine.js` | Connect coloured dot pairs, fill all cells |
| `deduction` | `deduction-engine.js` | Logic grid — match suspects to locations |
| `sudoku` | `sudoku-engine.js` | Number/emoji grid with regions |
| `connections` | `connections-engine.js` | Group 16 tiles into 4 themed sets |
| `drag` | `drag-spatial-engine.js` | Slide blocks to move target to exit |
| `visual` | `visual-pattern-engine.js` | Odd-one-out or sequence completion |
| `word` | `word-input-engine.js` | Word ladder — change one letter per step |
| `lateral` | `lateral-choice-engine.js` | Multiple-choice lateral thinking |

### Engines requiring pre-built DOM shells
Two engines query the DOM directly and need HTML injected before mounting:

- **ConnectionsEngine**: queries `#tileGrid`, `#solvedGroups`, `#winPanel`, `#winText`, `#submitBtn`, `#selCount`, `#life-0..3` — wrapper injects `CONNECTIONS_SHELL` HTML string
- **DeductionEngine**: queries `[data-de="name"]` attributes — wrapper injects `DEDUCTION_SHELL` HTML string

All other engines render into a bare `<div>` mount point.

---

## Key source files

```
src/
  app/
    page.tsx                     ← Home: unauthenticated → LandingPage; authenticated → today's puzzle
    puzzle/[date]/page.tsx       ← Archive puzzle by date
    archive/page.tsx             ← Puzzle history list
    profile/page.tsx             ← User profile + stats
    (auth)/login/page.tsx
    (auth)/signup/page.tsx
  lib/
    puzzles/
      index.ts                   ← getPuzzleByDate(), getPuzzleList(), engineLabel(), engineDayColor()
      month-1/index.ts           ← MONTH_1_PUZZLES[] — edit this to add/fix puzzles
    engines/                     ← vanilla JS engines (see table above)
    auth.ts                      ← signUp, signIn, signOut, getUser (server actions)
    attempts.ts                  ← getAttempt, saveAttempt
    share.ts                     ← generateShareText
    format.ts                    ← formatTime (extracted from timer.ts for server compat)
    timer.ts                     ← useTimer hook (client only)
    supabase/
      client.ts                  ← createBrowserClient()
      server.ts                  ← createServerClient() with cookie handling
  components/
    engines/                     ← React wrappers (one per engine)
    puzzle/
      PuzzleShell.tsx            ← render-prop shell: children: (callbacks) => ReactNode
      PuzzleClientPage.tsx       ← client orchestrator
      PuzzleRenderer.tsx         ← routes engine_type → wrapper component
      WinPanel.tsx               ← post-solve UI
    landing/LandingPage.tsx
    ui/Nav.tsx, SignOutButton.tsx
  proxy.ts                       ← Supabase auth middleware (Next.js 16 picks this up natively)
  types/puzzle.ts                ← all TypeScript types
```

---

## TypeScript types (`src/types/puzzle.ts`)

Each engine has its own config interface extending `BasePuzzleConfig`. Key ones:

```typescript
FlowPuzzleConfig      { grid: number; pairs: [{id, color, start:[r,c], end:[r,c]}] }
DeductionPuzzleConfig { categories: [{name, icon, items}]; clues; solution: Record<string,string> }
SudokuPuzzleConfig    { size; digits: (number|string)[]; givens: (number|string)[]; solution: (number|string)[]; regions: number[][] }
ConnectionsPuzzleConfig { groups: [{id, color, label, connection, tiles: [{text, icon}]}] }
DragSpatialPuzzleConfig { gridSize; blocks: [{id, color, row, col, length, orientation, isTarget?}]; exitRow; exitSide }
VisualPatternPuzzleConfig { mode: 'odd-one-out'|'sequence'; items: [{text, icon}]; correctIndex; explanation }
WordInputPuzzleConfig { mode: 'word-ladder'; startWord; endWord; validPath: string[]; wordLength }
LateralChoicePuzzleConfig { prompt; options: [{text, icon?}]; correctIndex; explanation }
```

**Sudoku `regions` format**: flat cell indices per region (NOT a 2D grid).
For a 4×4: `[[0,1,4,5],[2,3,6,7],[8,9,12,13],[10,11,14,15]]`
For a 6×6: `[[0,1,2,6,7,8],[3,4,5,9,10,11],...]`

**Word ladder `validPath`**: intermediate words ONLY (not start or end word).
e.g. LAMP→SALE: `validPath: ["LAME","SAME"]`

---

## Middleware (Next.js 16)

Auth middleware lives in `src/proxy.ts` (exports `proxy` function + `config`).
**Do NOT create `src/middleware.ts`** — Next.js 16 picks up `proxy.ts` natively as the middleware proxy. Having both files causes a Vercel build error: _"Both middleware file and proxy file are detected."_

---

## Build gotchas

- All pages using Supabase need `export const dynamic = 'force-dynamic'`
- `.env.local` needs a valid-format Supabase URL even as placeholder (`https://placeholder.supabase.co`)
- CSS: `@import url(...)` (Google Fonts) must come **before** `@import "tailwindcss"`
- `timer.ts` is a client-only hook — never import it from server components; use `format.ts` for `formatTime`
- `SudokuPuzzleConfig` uses `(number | string)[]` for digits/givens/solution to support emoji sudokus

---

## Adding or editing puzzles

Edit **`src/lib/puzzles/month-1/index.ts`** — the app reads from this file, not Supabase.

Each `PuzzleEntry` shape:
```typescript
{
  id: "2026-MM-DD",
  puzzle_date: "2026-MM-DD",
  engine_type: EngineType,
  day_of_week: 0-6,   // 0=Sunday
  week_number: number,
  grade_band: string,
  config: AnyPuzzleConfig
}
```

After editing, also run the corresponding SQL in Supabase to keep the `puzzles` table in sync (for FK on `attempts`). Both seed files use `ON CONFLICT (id) DO UPDATE`.

---

## Supabase schema summary

```sql
puzzles  (id, puzzle_date, engine_type, config, day_of_week, week_number, grade_band)
attempts (id, user_id, puzzle_id → puzzles.id, started_at, completed_at,
          time_taken_seconds, completed, moves, hints_used, share_text)
```
RLS: users can only read/write their own attempts.

---

## Common commands

```bash
npm run dev        # local dev server
npm run build      # production build (must pass before pushing)
npx tsc --noEmit   # type-check only
git push origin main  # triggers Vercel deploy
```
