import type { Metadata } from 'next';
import './globals.css';
import { Nav } from '@/components/ui/Nav';

export const metadata: Metadata = {
  title: 'Yosi — Daily Puzzles from Budhipur',
  description: 'A daily thinking puzzle. Follow Chatur through the world of Budhipur.',
  openGraph: {
    title: 'Yosi',
    description: 'Daily puzzles from the world of Budhipur',
    siteName: 'Yosi',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <div className="min-h-screen" style={{ background: 'var(--color-cream)' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
