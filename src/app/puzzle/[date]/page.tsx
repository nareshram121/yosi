import { notFound } from 'next/navigation';
import { getPuzzleByDate, getTodayDateString } from '@/lib/puzzles/index';
import { getAttempt } from '@/lib/attempts';
import { getUser } from '@/lib/auth';
import { PuzzleClientPage } from '@/components/puzzle/PuzzleClientPage';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ date: string }>;
}

export default async function PuzzlePage({ params }: Props) {
  const { date } = await params;

  // Validate date format
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) notFound();

  const puzzle = await getPuzzleByDate(date);
  if (!puzzle) notFound();

  const today = getTodayDateString();
  const isPastPuzzle = date < today;

  const user = await getUser();
  const previousAttempt = user ? await getAttempt(puzzle.id) : null;

  return (
    <main>
      <div className="max-w-lg mx-auto px-4 pt-4">
        <Link href="/archive"
          className="inline-flex items-center gap-1 text-sm hover:underline"
          style={{ color: 'var(--color-muted)' }}>
          ← Archive
        </Link>
      </div>
      <PuzzleClientPage
        puzzle={puzzle}
        isPastPuzzle={isPastPuzzle}
        previousAttempt={previousAttempt}
      />
    </main>
  );
}
