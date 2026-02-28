-- ============================================================
-- Yosi — Initial Schema
-- ============================================================

-- Profiles (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS profiles (
  id              UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username        TEXT UNIQUE,
  display_name    TEXT,
  avatar_url      TEXT,
  version         TEXT NOT NULL DEFAULT 'public',  -- 'public' | 'orchids'
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "profiles_own" ON profiles
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);
-- Allow reading public profiles (for leaderboards later)
CREATE POLICY "profiles_read_public" ON profiles
  FOR SELECT USING (true);

-- Auto-create profile on signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name)
  VALUES (new.id, new.raw_user_meta_data->>'full_name')
  ON CONFLICT (id) DO NOTHING;
  RETURN new;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE handle_new_user();

-- ============================================================
-- Puzzle catalog
-- ============================================================
CREATE TABLE IF NOT EXISTS puzzles (
  id              TEXT PRIMARY KEY,               -- "2026-03-01"
  puzzle_date     DATE UNIQUE NOT NULL,
  engine_type     TEXT NOT NULL,                  -- 'flow' | 'deduction' | 'sudoku' | 'connections' | 'drag' | 'visual' | 'word' | 'lateral'
  config          JSONB NOT NULL,
  day_of_week     SMALLINT,                       -- 0=Mon, 6=Sun
  week_number     SMALLINT,                       -- 1–4
  grade_band      TEXT,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Puzzles are public-read (no auth needed to view puzzle config)
ALTER TABLE puzzles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "puzzles_public_read" ON puzzles
  FOR SELECT USING (true);

-- ============================================================
-- Attempts
-- ============================================================
CREATE TABLE IF NOT EXISTS attempts (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id             UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  puzzle_id           TEXT NOT NULL REFERENCES puzzles(id),
  started_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  completed_at        TIMESTAMPTZ,
  time_taken_seconds  INTEGER,          -- NULL if abandoned
  completed           BOOLEAN NOT NULL DEFAULT FALSE,
  moves               INTEGER,
  hints_used          INTEGER NOT NULL DEFAULT 0,
  share_text          TEXT,             -- Emoji share string
  UNIQUE(user_id, puzzle_id)
);

ALTER TABLE attempts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "attempts_own" ON attempts
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Index for profile stats
CREATE INDEX attempts_user_idx ON attempts(user_id);
CREATE INDEX attempts_puzzle_idx ON attempts(puzzle_id);
CREATE INDEX attempts_completed_idx ON attempts(user_id, completed) WHERE completed = true;

-- ============================================================
-- User sessions (for analytics — Orchids version)
-- ============================================================
CREATE TABLE IF NOT EXISTS user_sessions (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id             UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  started_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  ended_at            TIMESTAMPTZ,
  puzzles_attempted   INTEGER NOT NULL DEFAULT 0,
  version             TEXT NOT NULL DEFAULT 'public'
);

ALTER TABLE user_sessions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "sessions_own" ON user_sessions
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);
