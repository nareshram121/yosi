import { getTodayDateString, getPuzzleByDate } from '@/lib/puzzles/index';
import { getAttempt } from '@/lib/attempts';
import { getUser } from '@/lib/auth';
import { PuzzleClientPage } from '@/components/puzzle/PuzzleClientPage';
import { LandingPage } from '@/components/landing/LandingPage';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function HomePage() {
  const user = await getUser();

  // Unauthenticated visitors see the marketing landing page
  if (!user) {
    return <LandingPage />;
  }

  const today = getTodayDateString();
  const puzzle = await getPuzzleByDate(today);

  if (!puzzle) {
    return (
      <main className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
        <div className="text-5xl mb-4">🏮</div>
        <h2 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-ink)' }}>
          No puzzle today
        </h2>
        <p className="text-sm mb-6 max-w-xs" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
          Chatur is working on something new. Come back tomorrow.
        </p>
        <Link href="/archive" style={{ color: 'var(--color-teal)' }} className="text-sm hover:underline font-medium">
          Browse past puzzles →
        </Link>
      </main>
    );
  }

  const previousAttempt = await getAttempt(puzzle.id);

  return (
    <main>
      <PuzzleClientPage
        puzzle={puzzle}
        isPastPuzzle={false}
        previousAttempt={previousAttempt}
      />
    </main>
  );
}
