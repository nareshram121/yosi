'use client';

import Link from 'next/link';
import { ChaturSvg, BazaarScene, ArchiveScene, RiverGhatScene, FestivalScene, SchoolScene, SpiceScene } from '@/components/puzzle/SceneIllustration';

// ── Puzzle type showcase data ─────────────────────────────────────────────

const PUZZLE_TYPES = [
  {
    label: 'Flow',
    day: 'Mondays',
    icon: '🔴',
    color: '#c8720a',
    bg: 'linear-gradient(135deg, #1a0a02 0%, #5c2d06 100%)',
    Scene: BazaarScene,
    desc: 'Connect matching colours across the Bazaar without crossing paths.',
  },
  {
    label: 'Mystery Grid',
    day: 'Tuesdays',
    icon: '🔍',
    color: '#2d3a8c',
    bg: 'linear-gradient(135deg, #040812 0%, #0e1c40 100%)',
    Scene: ArchiveScene,
    desc: 'Read the clues. Eliminate the impossible. Find the truth.',
  },
  {
    label: 'Connections',
    day: 'Wednesdays',
    icon: '🪔',
    color: '#b83232',
    bg: 'linear-gradient(135deg, #08020f 0%, #200830 100%)',
    Scene: FestivalScene,
    desc: 'Group sixteen tiles into four hidden categories from Budhipur lore.',
  },
  {
    label: 'Star Sudoku',
    day: 'Thursdays',
    icon: '⭐',
    color: '#e8a820',
    bg: 'linear-gradient(135deg, #1a0c04 0%, #4a2010 100%)',
    Scene: SchoolScene,
    desc: 'Place unique symbols in each row, column and region of the grid.',
  },
  {
    label: 'Odd One Out',
    day: 'Fridays',
    icon: '👁️',
    color: '#3a7d44',
    bg: 'linear-gradient(135deg, #2a1205 0%, #8b4e18 100%)',
    Scene: SpiceScene,
    desc: 'Four items — only three belong. Can you see what Chatur sees?',
  },
  {
    label: 'Word Ladder',
    day: 'Weekends',
    icon: '📜',
    color: '#1a6b6b',
    bg: 'linear-gradient(135deg, #020c0c 0%, #062020 100%)',
    Scene: RiverGhatScene,
    desc: 'Walk a word from start to end, one letter at a time.',
  },
];

// ── How it works steps ────────────────────────────────────────────────────

const HOW_IT_WORKS = [
  {
    n: '01',
    title: 'A new puzzle every morning',
    body: 'Each day brings a fresh challenge set in Budhipur — a different location, a different engine, a different kind of thinking.',
  },
  {
    n: '02',
    title: "Follow Chatur's story",
    body: 'Every puzzle opens with a story beat. You are not just solving a problem — you are living a moment in Budhipur alongside its most curious resident.',
  },
  {
    n: '03',
    title: 'Solve, reflect, grow',
    body: 'When you find the answer, Chatur explains why. Not just what is correct — but what made it interesting. That is the whole point.',
  },
];

// ── Component ─────────────────────────────────────────────────────────────

export function LandingPage() {
  return (
    <div style={{ background: 'var(--color-cream)', color: 'var(--color-ink)' }}>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', width: '100%', minHeight: 420, overflow: 'hidden',
        background: 'linear-gradient(160deg, #1a0a02 0%, #5c2d06 55%, #2a1205 100%)' }}>
        {/* Full-width Bazaar scene */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <BazaarScene />
        </div>

        {/* Dark overlay for legibility */}
        <div style={{ position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(10,5,0,0.75) 0%, rgba(10,5,0,0.3) 60%, transparent 100%)' }} />

        {/* Chatur — large, right side */}
        <div style={{ position: 'absolute', bottom: 0, right: '8%', zIndex: 3, lineHeight: 0 }}>
          <ChaturSvg scale={1.6} />
        </div>

        {/* Hero text */}
        <div style={{ position: 'relative', zIndex: 4, padding: '64px 32px 80px',
          maxWidth: 560, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <p style={{ fontFamily: 'var(--font-caps)', fontSize: 11, letterSpacing: '0.22em',
            color: '#e8a820', textTransform: 'uppercase', margin: 0 }}>
            Budhipur · A Daily Thinking Puzzle
          </p>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 7vw, 56px)',
            fontWeight: 700, color: '#fdf4e3', lineHeight: 1.1, margin: 0 }}>
            Think like<br />Chatur.
          </h1>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 18,
            color: 'rgba(245,232,200,0.8)', lineHeight: 1.6, margin: 0, maxWidth: 440 }}>
            One puzzle every morning. One story. One small, satisfying victory before the day begins.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
            <Link href="/signup"
              style={{ display: 'inline-block', padding: '13px 28px', borderRadius: 10,
                background: '#e8a820', color: '#1c1408', fontFamily: 'var(--font-caps)',
                fontSize: 14, letterSpacing: '0.14em', textDecoration: 'none',
                textTransform: 'uppercase', fontWeight: 700 }}>
              Begin your journey
            </Link>
            <Link href="/login"
              style={{ display: 'inline-block', padding: '13px 24px', borderRadius: 10,
                border: '1px solid rgba(245,232,200,0.35)', color: 'rgba(245,232,200,0.8)',
                fontFamily: 'var(--font-caps)', fontSize: 14, letterSpacing: '0.14em',
                textDecoration: 'none', textTransform: 'uppercase' }}>
              Sign in
            </Link>
          </div>
        </div>
      </section>

      {/* ── WORLD INTRO ───────────────────────────────────────────────── */}
      <section style={{ maxWidth: 720, margin: '0 auto', padding: '72px 32px 64px' }}>
        <p style={{ fontFamily: 'var(--font-caps)', fontSize: 10, letterSpacing: '0.22em',
          color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: 16 }}>
          The World of Budhipur
        </p>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 4vw, 36px)',
          fontWeight: 700, lineHeight: 1.25, marginBottom: 24, color: 'var(--color-ink)' }}>
          A river city. A bazaar. A girl who notices everything.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, lineHeight: 1.75,
            color: 'var(--color-muted)', margin: 0 }}>
            Budhipur is an ancient city on the banks of a great river — a place of spice merchants and
            star-readers, archive-keepers and festival-makers. It is a city where questions matter more
            than answers, and where the most dangerous thing you can do is stop paying attention.
          </p>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 16, lineHeight: 1.75,
            color: 'var(--color-muted)', margin: 0 }}>
            Chatur has lived here all her life. She has one golden eye — she says it is the eye that
            sees patterns. Every morning she finds a new puzzle waiting for her, somewhere in the city.
            Every morning she solves it before her chai goes cold. You are here to follow along — and
            maybe, if you pay close attention, to keep up.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-parch)', borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)', padding: '64px 32px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-caps)', fontSize: 10, letterSpacing: '0.22em',
            color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: 16, textAlign: 'center' }}>
            How it works
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.5vw, 32px)',
            fontWeight: 700, textAlign: 'center', marginBottom: 52, color: 'var(--color-ink)' }}>
            Three minutes every morning
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 40 }}>
            {HOW_IT_WORKS.map(step => (
              <div key={step.n}>
                <div style={{ fontFamily: 'var(--font-caps)', fontSize: 36, color: 'var(--color-gold)',
                  opacity: 0.4, lineHeight: 1, marginBottom: 12 }}>
                  {step.n}
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 19, fontWeight: 700,
                  marginBottom: 10, color: 'var(--color-ink)' }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 15, lineHeight: 1.7,
                  color: 'var(--color-muted)', margin: 0 }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PUZZLE TYPES ──────────────────────────────────────────────── */}
      <section style={{ padding: '72px 32px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-caps)', fontSize: 10, letterSpacing: '0.22em',
            color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: 16 }}>
            Six kinds of thinking
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.5vw, 32px)',
            fontWeight: 700, marginBottom: 40, color: 'var(--color-ink)' }}>
            A different puzzle every day
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {PUZZLE_TYPES.map(pt => (
              <div key={pt.label}
                style={{ borderRadius: 14, overflow: 'hidden', border: '1px solid var(--color-border)',
                  background: 'var(--color-parch)', display: 'flex', flexDirection: 'column' }}>
                {/* Mini scene header */}
                <div style={{ position: 'relative', height: 100, background: pt.bg, flexShrink: 0 }}>
                  <div style={{ position: 'absolute', inset: 0 }}>
                    <pt.Scene />
                  </div>
                  <div style={{ position: 'absolute', inset: 0,
                    background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55) 100%)' }} />
                  {/* Day label */}
                  <div style={{ position: 'absolute', top: 10, left: 12, fontFamily: 'var(--font-caps)',
                    fontSize: 9, letterSpacing: '0.18em', color: 'rgba(245,232,200,0.65)',
                    textTransform: 'uppercase' }}>
                    {pt.day}
                  </div>
                  {/* Icon */}
                  <div style={{ position: 'absolute', bottom: 10, right: 12, fontSize: 20 }}>
                    {pt.icon}
                  </div>
                </div>
                {/* Card body */}
                <div style={{ padding: '16px 18px 20px' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 700,
                    marginBottom: 6, color: 'var(--color-ink)' }}>
                    {pt.label}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: 14, lineHeight: 1.6,
                    color: 'var(--color-muted)', margin: 0 }}>
                    {pt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAMPLE STORY BEAT ─────────────────────────────────────────── */}
      <section style={{ background: 'var(--color-parch)', borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)', padding: '72px 32px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-caps)', fontSize: 10, letterSpacing: '0.22em',
            color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: 16, textAlign: 'center' }}>
            Every puzzle begins like this
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(22px, 3vw, 28px)',
            fontWeight: 700, textAlign: 'center', marginBottom: 40, color: 'var(--color-ink)' }}>
            A story. A problem. A moment of clarity.
          </h2>

          {/* Mock puzzle card */}
          <div style={{ background: 'var(--color-cream)', borderRadius: 16,
            border: '1px solid var(--color-border)', overflow: 'hidden',
            boxShadow: '0 4px 32px rgba(28,20,8,0.10)' }}>
            {/* Scene banner */}
            <div style={{ position: 'relative', height: 140,
              background: 'linear-gradient(160deg, #1a0a02 0%, #5c2d06 55%, #2a1205 100%)' }}>
              <BazaarScene />
              <div style={{ position: 'absolute', top: 10, left: 14, fontFamily: 'var(--font-caps)',
                fontSize: 9, letterSpacing: '0.18em', color: 'rgba(245,232,200,0.65)',
                textTransform: 'uppercase', zIndex: 4 }}>
                The Bazaar · Night
              </div>
              <div style={{ position: 'absolute', bottom: 0, right: 0, zIndex: 3, lineHeight: 0 }}>
                <ChaturSvg scale={0.65} />
              </div>
            </div>

            {/* Puzzle content */}
            <div style={{ padding: '20px 24px 28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontFamily: 'var(--font-caps)', fontSize: 9, letterSpacing: '0.18em',
                  color: '#c8720a', textTransform: 'uppercase' }}>Flow Puzzle</span>
                <span style={{ fontSize: 11, color: 'var(--color-muted)' }}>1 March 2026</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 700,
                color: 'var(--color-ink)', marginBottom: 14 }}>
                The Merchant's Colour Problem
              </h3>
              <div style={{ borderRadius: 10, padding: '14px 18px', marginBottom: 18,
                background: 'var(--color-parch)', borderLeft: '3px solid #c8720a' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 14,
                  lineHeight: 1.7, color: 'var(--color-muted)', margin: 0 }}>
                  Old Mehta had arranged coloured threads across his stall counter in a way that only
                  made sense if you connected each one to its matching spool — without ever crossing
                  another thread. Chatur looked at the tangle for one breath. Then she began.
                </p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--color-muted)' }}>
                  0:00
                </span>
                <div style={{ display: 'flex', gap: 8 }}>
                  <div style={{ padding: '6px 14px', borderRadius: 8, border: '1px solid var(--color-border)',
                    background: 'var(--color-parch)', fontSize: 12, color: 'var(--color-muted)',
                    fontFamily: 'var(--font-sans)' }}>Hint</div>
                  <div style={{ padding: '6px 14px', borderRadius: 8, border: '1px solid var(--color-border)',
                    background: 'var(--color-parch)', fontSize: 12, color: 'var(--color-muted)',
                    fontFamily: 'var(--font-sans)' }}>Reset</div>
                </div>
              </div>
              {/* Mock flow grid */}
              <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
                gap: 4, maxWidth: 200, margin: '18px auto 0' }}>
                {[
                  '#c8720a', null, null, null, '#2d3a8c',
                  null, '#c8720a', null, '#2d3a8c', null,
                  null, null, '#1a6b6b', null, null,
                  null, '#1a6b6b', null, '#b83232', null,
                  '#3a7d44', null, null, null, '#b83232',
                ].map((color, i) => (
                  <div key={i} style={{ width: '100%', aspectRatio: '1',
                    borderRadius: 6, background: color ? color : 'var(--color-parch)',
                    border: '1px solid var(--color-border)',
                    boxShadow: color ? `0 0 8px ${color}55` : 'none' }} />
                ))}
              </div>
              <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--color-muted)',
                fontFamily: 'var(--font-serif)', fontStyle: 'italic', marginTop: 14, marginBottom: 0 }}>
                Connect each colour to its match — without crossing paths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHARACTERS ────────────────────────────────────────────────── */}
      <section style={{ padding: '72px 32px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-caps)', fontSize: 10, letterSpacing: '0.22em',
            color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: 16 }}>
            The characters
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.5vw, 32px)',
            fontWeight: 700, marginBottom: 40, color: 'var(--color-ink)' }}>
            You will not be alone in Budhipur
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 32 }}>
            {/* Chatur card */}
            <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start',
              padding: '24px', borderRadius: 14, background: 'var(--color-parch)',
              border: '1px solid var(--color-border)' }}>
              <div style={{ flexShrink: 0, background: 'linear-gradient(135deg, #1a0a02, #5c2d06)',
                borderRadius: 12, overflow: 'hidden', width: 80, height: 100,
                display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                <ChaturSvg scale={0.52} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 700,
                  marginBottom: 4, color: 'var(--color-ink)' }}>Chatur</h3>
                <p style={{ fontFamily: 'var(--font-caps)', fontSize: 9, letterSpacing: '0.18em',
                  color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: 10 }}>
                  The Puzzle-Solver
                </p>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 14, lineHeight: 1.7,
                  color: 'var(--color-muted)', margin: 0 }}>
                  Chatur has one golden eye. She says it is the eye that sees patterns where others
                  see noise. She has been solving puzzles since before she could read — and she has
                  never once needed to be told she was right. She just knows.
                </p>
              </div>
            </div>

            {/* Hari card */}
            <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start',
              padding: '24px', borderRadius: 14, background: 'var(--color-parch)',
              border: '1px solid var(--color-border)' }}>
              <div style={{ flexShrink: 0, background: 'linear-gradient(135deg, #040812, #0e1c40)',
                borderRadius: 12, width: 80, height: 100,
                display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 40 }}>👦🏽</span>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 700,
                  marginBottom: 4, color: 'var(--color-ink)' }}>Hari</h3>
                <p style={{ fontFamily: 'var(--font-caps)', fontSize: 9, letterSpacing: '0.18em',
                  color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: 10 }}>
                  The Enthusiastic Rival
                </p>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: 14, lineHeight: 1.7,
                  color: 'var(--color-muted)', margin: 0 }}>
                  Hari is confident, curious, and perpetually surprised when Chatur beats him to the
                  answer. He brings the riddles and bets mangoes on the outcome. He has never once
                  collected on a winning bet. He keeps trying anyway. That is perhaps his greatest quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(160deg, #1a0a02 0%, #5c2d06 55%, #2a1205 100%)',
        padding: '80px 32px 100px', textAlign: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.35 }}>
          <FestivalScene />
        </div>
        <div style={{ position: 'absolute', inset: 0,
          background: 'rgba(10,5,0,0.55)' }} />
        <div style={{ position: 'relative', zIndex: 4, maxWidth: 560, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-caps)', fontSize: 10, letterSpacing: '0.22em',
            color: '#e8a820', textTransform: 'uppercase', marginBottom: 20 }}>
            Free to play · One puzzle per day
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 5vw, 44px)',
            fontWeight: 700, color: '#fdf4e3', lineHeight: 1.15, marginBottom: 20 }}>
            Budhipur is waiting.<br />The puzzle is ready.
          </h2>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 17,
            color: 'rgba(245,232,200,0.75)', lineHeight: 1.65, marginBottom: 36 }}>
            Join Chatur every morning. No installation, no cost, no catch — just one good puzzle
            and one good story, seven days a week.
          </p>
          <Link href="/signup"
            style={{ display: 'inline-block', padding: '15px 36px', borderRadius: 12,
              background: '#e8a820', color: '#1c1408', fontFamily: 'var(--font-caps)',
              fontSize: 15, letterSpacing: '0.14em', textDecoration: 'none',
              textTransform: 'uppercase', fontWeight: 700 }}>
            Start your first puzzle →
          </Link>
          <p style={{ marginTop: 20, fontSize: 13, color: 'rgba(245,232,200,0.45)',
            fontFamily: 'var(--font-serif)' }}>
            Already have an account?{' '}
            <Link href="/login" style={{ color: 'rgba(245,232,200,0.7)', textDecoration: 'underline' }}>
              Sign in
            </Link>
          </p>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────── */}
      <footer style={{ background: '#1c1408', padding: '28px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontFamily: 'var(--font-caps)', fontSize: 18, letterSpacing: '0.12em',
            color: '#e8a820' }}>YOSI</span>
          <span style={{ fontSize: 12, color: 'rgba(245,232,200,0.35)',
            fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
            Daily puzzles from Budhipur
          </span>
        </div>
        <div style={{ display: 'flex', gap: 20 }}>
          <Link href="/archive" style={{ fontSize: 12, color: 'rgba(245,232,200,0.45)',
            fontFamily: 'var(--font-sans)', textDecoration: 'none' }}>Archive</Link>
          <Link href="/login" style={{ fontSize: 12, color: 'rgba(245,232,200,0.45)',
            fontFamily: 'var(--font-sans)', textDecoration: 'none' }}>Sign in</Link>
        </div>
      </footer>
    </div>
  );
}
