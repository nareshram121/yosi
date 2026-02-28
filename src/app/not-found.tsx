import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="text-5xl mb-4">🏮</div>
      <h2 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-ink)' }}>
        This lane doesn't exist
      </h2>
      <p className="text-sm mb-6 max-w-xs" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
        Chatur searched every corner of Budhipur. Whatever you were looking for isn't here.
      </p>
      <Link href="/" style={{ color: 'var(--color-teal)' }} className="text-sm hover:underline font-medium">
        ← Back to the Bazaar
      </Link>
    </main>
  );
}
