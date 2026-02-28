export const dynamic = 'force-dynamic';

import { redirect } from 'next/navigation';
import { getUser } from '@/lib/auth';
import { getUserStats, getUserAttempts } from '@/lib/attempts';
import { formatTime } from '@/lib/format';
import { engineLabel } from '@/lib/puzzles/index';
import Link from 'next/link';
import { SignOutButton } from '@/components/ui/SignOutButton';

export default async function ProfilePage() {
  const user = await getUser();
  if (!user) redirect('/login?redirect=/profile');

  const [stats, recentAttempts] = await Promise.all([
    getUserStats(),
    getUserAttempts(10),
  ]);

  const displayName = user.user_metadata?.full_name ?? user.email ?? 'Puzzler';

  return (
    <main className="max-w-lg mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-3xl mb-0.5" style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--color-ink)' }}>
            {displayName}
          </h1>
          <p className="text-sm" style={{ color: 'var(--color-muted)' }}>{user.email}</p>
        </div>
        <SignOutButton />
      </div>

      {/* Stats */}
      {stats && (
        <div className="grid grid-cols-3 gap-3 mb-8">
          <StatCard label="Solved" value={String(stats.totalSolved)} />
          <StatCard label="Avg time" value={stats.totalSolved > 0 ? formatTime(stats.avgTime) : '—'} />
          <StatCard label="Streak" value={`${stats.streak}d`} />
        </div>
      )}

      {/* Recent puzzles */}
      <h2 className="text-sm uppercase tracking-widest font-semibold mb-3"
        style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-caps)' }}>
        Recent Puzzles
      </h2>

      {recentAttempts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-sm mb-4" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
            No puzzles attempted yet.
          </p>
          <Link href="/" style={{ color: 'var(--color-teal)' }} className="text-sm font-medium hover:underline">
            Play today's puzzle →
          </Link>
        </div>
      ) : (
        <div className="space-y-2">
          {recentAttempts.map((a: any) => (
            <Link key={a.id} href={`/puzzle/${a.puzzle_id}`}
              className="flex items-center justify-between px-4 py-3 rounded-xl"
              style={{ background: 'white', border: '1px solid var(--color-border)', textDecoration: 'none' }}>
              <div>
                <div className="text-sm font-medium" style={{ color: 'var(--color-ink)' }}>
                  {a.puzzles ? engineLabel(a.puzzles.engine_type) : a.puzzle_id}
                </div>
                <div className="text-xs" style={{ color: 'var(--color-muted)' }}>
                  {a.puzzle_id}
                </div>
              </div>
              <div className="text-right">
                {a.completed ? (
                  <span className="text-xs font-medium" style={{ color: '#166534' }}>
                    ✓ {a.time_taken_seconds ? formatTime(a.time_taken_seconds) : '—'}
                  </span>
                ) : (
                  <span className="text-xs" style={{ color: 'var(--color-muted)' }}>In progress</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl p-4 text-center"
      style={{ background: 'var(--color-parch)', border: '1px solid var(--color-border)' }}>
      <div className="text-2xl font-semibold" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-ink)' }}>
        {value}
      </div>
      <div className="text-xs mt-0.5" style={{ color: 'var(--color-muted)' }}>{label}</div>
    </div>
  );
}
