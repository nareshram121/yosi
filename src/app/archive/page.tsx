import Link from 'next/link';
import { getPuzzleList, getTodayDateString, engineLabel, engineDayColor } from '@/lib/puzzles/index';
import { getUser } from '@/lib/auth';
import { getUserAttempts } from '@/lib/attempts';

export const dynamic = 'force-dynamic';

export default async function ArchivePage() {
  const puzzles = await getPuzzleList();
  const today = getTodayDateString();

  const user = await getUser();
  const attempts = user ? await getUserAttempts(200) : [];
  const completedIds = new Set(attempts.filter((a: any) => a.completed).map((a: any) => a.puzzle_id));

  // Group by month
  const byMonth: Record<string, typeof puzzles> = {};
  for (const p of puzzles) {
    const month = p.puzzle_date.slice(0, 7); // "YYYY-MM"
    if (!byMonth[month]) byMonth[month] = [];
    byMonth[month].push(p);
  }

  const months = Object.keys(byMonth).sort().reverse();

  return (
    <main className="max-w-lg mx-auto px-4 py-8">
      <h1 className="text-3xl mb-1" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--color-ink)' }}>
        Puzzle Archive
      </h1>
      <p className="text-sm mb-8" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
        Every day, a new challenge from Budhipur.
      </p>

      {months.map(month => (
        <div key={month} className="mb-8">
          <h2 className="text-xs uppercase tracking-widest mb-3 font-semibold"
            style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-caps)' }}>
            {new Date(month + '-01').toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
          </h2>
          <div className="space-y-2">
            {byMonth[month].map(p => {
              const isFuture = p.puzzle_date > today && process.env.NEXT_PUBLIC_PREVIEW !== 'true';
              const isToday = p.puzzle_date === today;
              const isSolved = completedIds.has(p.id);
              const accentColor = engineDayColor(p.engine_type as any);

              return (
                <Link
                  key={p.id}
                  href={isFuture ? '#' : (isToday ? '/' : `/puzzle/${p.puzzle_date}`)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl transition-opacity"
                  style={{
                    background: isToday ? 'var(--color-parch)' : 'white',
                    border: `1px solid ${isToday ? accentColor : 'var(--color-border)'}`,
                    opacity: isFuture ? 0.4 : 1,
                    cursor: isFuture ? 'not-allowed' : 'pointer',
                    textDecoration: 'none',
                    pointerEvents: isFuture ? 'none' : 'auto',
                  }}>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: accentColor }} />
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide" style={{ color: accentColor, fontFamily: 'var(--font-caps)' }}>
                        {engineLabel(p.engine_type as any)}
                      </div>
                      <div className="text-xs" style={{ color: 'var(--color-muted)' }}>
                        {new Date(p.puzzle_date + 'T00:00:00').toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' })}
                        {isToday && <span className="ml-2 font-semibold" style={{ color: accentColor }}>Today</span>}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {isSolved && <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: '#f0fdf4', color: '#166534' }}>✓ Solved</span>}
                    {!isFuture && !isSolved && !isToday && <span className="text-xs" style={{ color: 'var(--color-muted)' }}>Try it →</span>}
                    {isFuture && <span className="text-xs" style={{ color: 'var(--color-muted)' }}>Coming soon</span>}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}

      {puzzles.length === 0 && (
        <p className="text-sm text-center py-12" style={{ color: 'var(--color-muted)' }}>
          No puzzles yet. Check back soon.
        </p>
      )}
    </main>
  );
}
