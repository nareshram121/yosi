'use client';

import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export function SignOutButton() {
  const router = useRouter();
  const supabase = createClient();

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push('/login');
    router.refresh();
  }

  return (
    <button onClick={handleSignOut}
      className="text-sm hover:underline px-3 py-1.5 rounded-lg"
      style={{ color: 'var(--color-muted)', border: '1px solid var(--color-border)', background: 'white' }}>
      Sign out
    </button>
  );
}
