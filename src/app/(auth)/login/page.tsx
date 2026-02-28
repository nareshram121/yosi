'use client';

import { useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push('/');
      router.refresh();
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'var(--color-cream)' }}>
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-5xl mb-1" style={{ fontFamily: 'var(--font-caps)', color: 'var(--color-teal)' }}>
            YOSI
          </h1>
          <p className="text-sm" style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
            Daily puzzles from Budhipur
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-ink)' }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-lg border text-sm"
              style={{ borderColor: 'var(--color-border)', background: '#fff', color: 'var(--color-ink)' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: 'var(--color-ink)' }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 rounded-lg border text-sm"
              style={{ borderColor: 'var(--color-border)', background: '#fff', color: 'var(--color-ink)' }}
            />
          </div>

          {error && (
            <p className="text-sm px-3 py-2 rounded-lg"
              style={{ background: '#fef2f2', color: 'var(--color-rose)', border: '1px solid #fecaca' }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 rounded-lg font-medium text-sm transition-opacity"
            style={{ background: 'var(--color-teal)', color: '#fff', opacity: loading ? 0.7 : 1 }}>
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <p className="text-center text-sm mt-6" style={{ color: 'var(--color-muted)' }}>
          No account?{' '}
          <Link href="/signup" style={{ color: 'var(--color-teal)' }} className="font-medium hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </main>
  );
}
