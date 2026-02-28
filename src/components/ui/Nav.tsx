'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';
import type { User } from '@supabase/supabase-js';

export function Nav() {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  // Hide nav on auth pages
  if (pathname.startsWith('/login') || pathname.startsWith('/signup')) return null;

  async function handleSignOut() {
    await supabase.auth.signOut();
    window.location.href = '/login';
  }

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 border-b"
      style={{ background: 'var(--color-cream)', borderColor: 'var(--color-border)' }}>
      {/* Logo */}
      <Link href="/" className="text-2xl tracking-wide"
        style={{ fontFamily: 'var(--font-caps)', color: 'var(--color-teal)', textDecoration: 'none' }}>
        YOSI
      </Link>

      {/* Links */}
      <div className="flex items-center gap-4 text-sm" style={{ color: 'var(--color-ink)' }}>
        <NavLink href="/archive" current={pathname}>Archive</NavLink>
        {user ? (
          <>
            <NavLink href="/profile" current={pathname}>Profile</NavLink>
            <button onClick={handleSignOut}
              className="text-sm hover:underline"
              style={{ color: 'var(--color-muted)', background: 'none', border: 'none', cursor: 'pointer' }}>
              Sign out
            </button>
          </>
        ) : (
          <Link href="/login"
            className="px-3 py-1.5 rounded-lg text-sm font-medium"
            style={{ background: 'var(--color-teal)', color: '#fff', textDecoration: 'none' }}>
            Sign in
          </Link>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, current, children }: { href: string; current: string; children: React.ReactNode }) {
  const active = current === href;
  return (
    <Link href={href}
      className="hover:underline"
      style={{ color: active ? 'var(--color-teal)' : 'var(--color-muted)', textDecoration: 'none', fontWeight: active ? 600 : 400 }}>
      {children}
    </Link>
  );
}
