'use server';

import { createClient } from '@/lib/supabase/server';

export async function upsertAttempt(params: {
  puzzleId: string;
  completed: boolean;
  timeTakenSeconds?: number;
  moves?: number;
  hintsUsed?: number;
  shareText?: string;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from('attempts')
    .upsert({
      user_id: user.id,
      puzzle_id: params.puzzleId,
      completed: params.completed,
      completed_at: params.completed ? new Date().toISOString() : null,
      time_taken_seconds: params.timeTakenSeconds ?? null,
      moves: params.moves ?? null,
      hints_used: params.hintsUsed ?? 0,
      share_text: params.shareText ?? null,
    }, {
      onConflict: 'user_id,puzzle_id',
      ignoreDuplicates: false,
    })
    .select()
    .single();

  if (error) console.error('upsertAttempt error:', error);
  return data;
}

export async function getAttempt(puzzleId: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data } = await supabase
    .from('attempts')
    .select('*')
    .eq('user_id', user.id)
    .eq('puzzle_id', puzzleId)
    .single();

  return data;
}

export async function getUserAttempts(limit = 50) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return [];

  const { data } = await supabase
    .from('attempts')
    .select('*, puzzles(puzzle_date, engine_type, config)')
    .eq('user_id', user.id)
    .order('started_at', { ascending: false })
    .limit(limit);

  return data ?? [];
}

export async function getUserStats() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: attempts } = await supabase
    .from('attempts')
    .select('completed, time_taken_seconds, hints_used, started_at')
    .eq('user_id', user.id);

  if (!attempts) return null;

  const completed = attempts.filter(a => a.completed);
  const totalSolved = completed.length;
  const avgTime = totalSolved > 0
    ? Math.round(completed.reduce((sum, a) => sum + (a.time_taken_seconds ?? 0), 0) / totalSolved)
    : 0;

  // Streak calculation
  const solvedDates = completed
    .map(a => a.started_at.split('T')[0])
    .sort()
    .reverse();

  let streak = 0;
  const today = new Date().toISOString().split('T')[0];
  let checkDate = today;
  for (const d of solvedDates) {
    if (d === checkDate) {
      streak++;
      const prev = new Date(checkDate);
      prev.setDate(prev.getDate() - 1);
      checkDate = prev.toISOString().split('T')[0];
    } else break;
  }

  return { totalSolved, avgTime, streak, totalAttempts: attempts.length };
}
