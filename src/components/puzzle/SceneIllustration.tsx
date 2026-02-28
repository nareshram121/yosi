'use client';

import type { EngineType } from '@/types/puzzle';

// ── Chatur SVG character (restored from original prototype) ───────────────
// Dark-robed young girl with golden eye, holding a scroll
function ChaturSvg({ scale = 1 }: { scale?: number }) {
  const w = Math.round(110 * scale);
  const h = Math.round(170 * scale);
  return (
    <svg
      viewBox="0 0 110 170"
      width={w}
      height={h}
      fill="none"
      aria-label="Chatur"
      style={{ display: 'block' }}
    >
      {/* Body — dark robe */}
      <ellipse cx="55" cy="110" rx="30" ry="36" fill="#1a1a1a" />
      {/* Arms / sleeves */}
      <path d="M26 98 Q18 115 23 132 Q34 120 39 108Z" fill="#2a2a2a" />
      <path d="M84 98 Q92 115 87 132 Q76 120 71 108Z" fill="#2a2a2a" />
      {/* White collar detail */}
      <path d="M29 107 Q24 119 28 128 Q36 119 40 107Z" fill="white" opacity=".9" />
      <path d="M81 107 Q86 119 82 128 Q74 119 70 107Z" fill="white" opacity=".9" />
      {/* Hem */}
      <path d="M43 140 Q55 155 67 140 Q60 150 55 153 Q50 150 43 140Z" fill="#111" />
      {/* Head */}
      <ellipse cx="55" cy="72" rx="22" ry="20" fill="#1a1a1a" />
      {/* Right eye — golden (her notable feature) */}
      <path d="M65 67 Q74 64 76 70 Q74 76 65 74 Q60 73 59 69 Q59 65 65 67Z" fill="#e8a820" />
      <circle cx="64" cy="69" r="4.5" fill="#e8a820" />
      <circle cx="64" cy="69" r="2.8" fill="#1a0a00" />
      <circle cx="62" cy="67" r="1" fill="white" opacity=".8" />
      {/* Nose / lower face */}
      <path d="M54 79 Q59 81 63 79 Q61 86 55 88 Q51 85 54 79Z" fill="#c8720a" />
      {/* Left eye */}
      <circle cx="47" cy="71" r="3" fill="#2a2a2a" />
      <circle cx="47" cy="71" r="1.8" fill="#1a0a00" />
      <ellipse cx="47" cy="76" rx="4" ry="2.5" fill="#e8a820" opacity=".7" />
      {/* Legs */}
      <line x1="47" y1="143" x2="44" y2="157" stroke="#c8720a" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="63" y1="143" x2="66" y2="157" stroke="#c8720a" strokeWidth="1.8" strokeLinecap="round" />
      {/* Satchel (teal glow) */}
      <ellipse cx="47" cy="98" rx="10" ry="15" fill="#1b7c7c" opacity=".3" transform="rotate(-15 47 98)" />
      {/* Scroll in hand */}
      <rect x="68" y="128" width="16" height="13" rx="1.5" fill="#fdf4e3" opacity=".9" transform="rotate(10 68 128)" />
      <line x1="70" y1="132" x2="80" y2="131" stroke="#c8720a" strokeWidth="1" opacity=".5" />
      <line x1="70" y1="136" x2="82" y2="135" stroke="#c8720a" strokeWidth=".8" opacity=".35" />
    </svg>
  );
}

// ── Scene SVG backgrounds ─────────────────────────────────────────────────

/** Bazaar Night — warm dark browns, stalls, awnings, lanterns, spice pots */
function BazaarScene() {
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      viewBox="0 0 800 360" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <linearGradient id="bazSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a0a02" />
          <stop offset="100%" stopColor="#5c2d06" />
        </linearGradient>
        <radialGradient id="lamp1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8a820" stopOpacity=".35" />
          <stop offset="100%" stopColor="#e8a820" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="lamp2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c8720a" stopOpacity=".3" />
          <stop offset="100%" stopColor="#c8720a" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Sky */}
      <rect width="800" height="360" fill="url(#bazSky)" />
      {/* Stars */}
      <circle cx="650" cy="40" r="1.5" fill="white" opacity=".6" />
      <circle cx="700" cy="25" r="1" fill="white" opacity=".4" />
      <circle cx="720" cy="60" r="1.5" fill="white" opacity=".5" />
      <circle cx="760" cy="35" r="1" fill="white" opacity=".6" />
      <circle cx="600" cy="55" r="1" fill="white" opacity=".3" />
      <circle cx="680" cy="15" r="1" fill="white" opacity=".5" />
      {/* Ground */}
      <rect x="0" y="290" width="800" height="70" fill="#2a1205" />
      {/* Cobblestone lines */}
      <path d="M0 300 Q50 295 100 300 Q150 295 200 300 Q250 295 300 300 Q350 295 400 300" stroke="#3d2010" strokeWidth="2" />
      <path d="M0 315 Q60 310 120 315 Q180 310 240 315 Q300 310 360 315" stroke="#3d2010" strokeWidth="2" />
      {/* Main stall right */}
      <rect x="400" y="140" width="180" height="150" fill="#3d1a06" />
      <path d="M390 140 L580 140 L560 110 L410 110Z" fill="#c8720a" />
      <path d="M390 140 L420 140 L420 200 L390 200Z" fill="#5a2808" />
      <path d="M555 140 L580 140 L580 200 L555 200Z" fill="#5a2808" />
      {/* Awning fringe */}
      <path d="M390 140 Q400 150 410 140 Q420 150 430 140 Q440 150 450 140 Q460 150 470 140 Q480 150 490 140 Q500 150 510 140 Q520 150 530 140 Q540 150 550 140 Q560 150 570 140 Q575 145 580 140" stroke="#e8a820" strokeWidth="2" />
      {/* Lantern glow halos */}
      <ellipse cx="460" cy="100" rx="50" ry="40" fill="url(#lamp1)" />
      <ellipse cx="520" cy="105" rx="40" ry="32" fill="url(#lamp2)" />
      {/* Lanterns */}
      <ellipse cx="460" cy="115" rx="10" ry="14" fill="#e8a820" opacity=".8" />
      <rect x="458" y="101" width="4" height="10" fill="#c8720a" />
      <ellipse cx="520" cy="120" rx="8" ry="11" fill="#c8720a" opacity=".9" />
      <rect x="518" y="109" width="4" height="8" fill="#8b4e06" />
      {/* Spice pots */}
      <ellipse cx="450" cy="278" rx="25" ry="12" fill="#8b4e06" />
      <ellipse cx="450" cy="270" rx="25" ry="10" fill="#c8720a" />
      <ellipse cx="500" cy="278" rx="20" ry="9" fill="#6b2808" />
      <ellipse cx="500" cy="271" rx="20" ry="8" fill="#e8a820" />
      {/* Left stall */}
      <rect x="60" y="150" width="140" height="140" fill="#2a1010" />
      <path d="M55 150 L205 150 L190 125 L70 125Z" fill="#b83232" />
      <path d="M55 150 L75 150 L75 200 L55 200Z" fill="#800000" />
      <path d="M190 150 L205 150 L205 200 L190 200Z" fill="#800000" />
      {/* Fabric rolls */}
      <rect x="80" y="230" width="30" height="60" rx="3" fill="#2d3a8c" />
      <rect x="118" y="235" width="25" height="55" rx="3" fill="#c8720a" />
      <rect x="150" y="233" width="28" height="57" rx="3" fill="#1a6b6b" />
      {/* Awning fringe left */}
      <path d="M55 150 Q65 160 75 150 Q85 160 95 150 Q105 160 115 150 Q125 160 135 150 Q145 160 155 150 Q165 160 175 150 Q185 160 195 150" stroke="#c8720a" strokeWidth="1.5" />
      {/* Distant stall center */}
      <rect x="230" y="200" width="80" height="90" fill="#1c0c04" opacity=".7" />
      <path d="M225 200 L315 200 L305 180 L235 180Z" fill="#7c3a0a" opacity=".8" />
      {/* String of lights across top */}
      <path d="M100 100 Q200 90 300 100 Q400 90 500 100 Q600 90 700 100" stroke="#e8a820" strokeWidth="1" opacity=".4" strokeDasharray="4 8" />
    </svg>
  );
}

/** Archive Night — dark indigo, stone arch, scroll shelves, oil lamp */
function ArchiveScene() {
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      viewBox="0 0 800 360" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <linearGradient id="arcSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#040812" />
          <stop offset="100%" stopColor="#0e1c40" />
        </linearGradient>
        <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8a820" stopOpacity=".5" />
          <stop offset="100%" stopColor="#e8a820" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Background */}
      <rect width="800" height="360" fill="url(#arcSky)" />
      {/* Stars */}
      <circle cx="100" cy="30" r="1.5" fill="white" opacity=".5" />
      <circle cx="150" cy="55" r="1" fill="white" opacity=".4" />
      <circle cx="700" cy="25" r="1.5" fill="white" opacity=".6" />
      <circle cx="650" cy="50" r="1" fill="white" opacity=".3" />
      <circle cx="750" cy="40" r="1" fill="white" opacity=".5" />
      {/* Stone floor */}
      <rect x="0" y="300" width="800" height="60" fill="#0a0f20" />
      <line x1="0" y1="310" x2="800" y2="310" stroke="#161f40" strokeWidth="1.5" />
      <line x1="0" y1="330" x2="800" y2="330" stroke="#161f40" strokeWidth="1" />
      {/* Left bookshelf */}
      <rect x="0" y="80" width="180" height="220" fill="#0c1428" />
      <rect x="0" y="80" width="180" height="5" fill="#1a2540" />
      {/* Shelf lines */}
      <line x1="0" y1="140" x2="180" y2="140" stroke="#1a2540" strokeWidth="2" />
      <line x1="0" y1="200" x2="180" y2="200" stroke="#1a2540" strokeWidth="2" />
      <line x1="0" y1="260" x2="180" y2="260" stroke="#1a2540" strokeWidth="2" />
      {/* Scrolls on shelves */}
      <ellipse cx="30" cy="132" rx="8" ry="6" fill="#c8a880" opacity=".7" />
      <ellipse cx="55" cy="130" rx="9" ry="7" fill="#d4b896" opacity=".6" />
      <ellipse cx="82" cy="133" rx="7" ry="5" fill="#a88060" opacity=".8" />
      <ellipse cx="105" cy="131" rx="8" ry="6" fill="#e8c89a" opacity=".5" />
      <ellipse cx="130" cy="132" rx="9" ry="7" fill="#c8a880" opacity=".7" />
      <ellipse cx="30" cy="192" rx="8" ry="6" fill="#d4b896" opacity=".6" />
      <ellipse cx="60" cy="190" rx="7" ry="5" fill="#c8a880" opacity=".7" />
      <ellipse cx="90" cy="192" rx="9" ry="7" fill="#a88060" opacity=".6" />
      <ellipse cx="120" cy="191" rx="8" ry="6" fill="#e8c89a" opacity=".5" />
      <ellipse cx="30" cy="252" rx="9" ry="7" fill="#c8a880" opacity=".6" />
      <ellipse cx="60" cy="250" rx="8" ry="6" fill="#d4b896" opacity=".7" />
      <ellipse cx="90" cy="252" rx="7" ry="5" fill="#a88060" opacity=".8" />
      {/* Right bookshelf */}
      <rect x="620" y="80" width="180" height="220" fill="#0c1428" />
      <rect x="620" y="80" width="180" height="5" fill="#1a2540" />
      <line x1="620" y1="140" x2="800" y2="140" stroke="#1a2540" strokeWidth="2" />
      <line x1="620" y1="200" x2="800" y2="200" stroke="#1a2540" strokeWidth="2" />
      <line x1="620" y1="260" x2="800" y2="260" stroke="#1a2540" strokeWidth="2" />
      <ellipse cx="640" cy="132" rx="8" ry="6" fill="#c8a880" opacity=".7" />
      <ellipse cx="665" cy="130" rx="9" ry="7" fill="#d4b896" opacity=".6" />
      <ellipse cx="692" cy="133" rx="7" ry="5" fill="#a88060" opacity=".8" />
      <ellipse cx="720" cy="131" rx="8" ry="6" fill="#e8c89a" opacity=".5" />
      <ellipse cx="750" cy="132" rx="9" ry="7" fill="#c8a880" opacity=".7" />
      <ellipse cx="780" cy="130" rx="8" ry="6" fill="#d4b896" opacity=".6" />
      <ellipse cx="640" cy="192" rx="9" ry="7" fill="#d4b896" opacity=".6" />
      <ellipse cx="670" cy="190" rx="7" ry="5" fill="#c8a880" opacity=".7" />
      <ellipse cx="700" cy="192" rx="9" ry="7" fill="#a88060" opacity=".6" />
      <ellipse cx="730" cy="191" rx="8" ry="6" fill="#e8c89a" opacity=".5" />
      {/* Central arch */}
      <path d="M280 360 L280 140 Q400 80 520 140 L520 360Z" fill="#0a1228" />
      <path d="M285 360 L285 145 Q400 88 515 145 L515 360Z" fill="#0c1530" />
      {/* Stars through arch */}
      <circle cx="350" cy="110" r="1.5" fill="white" opacity=".6" />
      <circle cx="400" cy="90" r="2" fill="white" opacity=".5" />
      <circle cx="450" cy="105" r="1.5" fill="white" opacity=".6" />
      <circle cx="380" cy="130" r="1" fill="white" opacity=".4" />
      {/* Oil lamp on pedestal center */}
      <ellipse cx="400" cy="296" rx="16" ry="200" fill="url(#lampGlow)" />
      <rect x="392" y="270" width="16" height="24" rx="2" fill="#1a2a18" />
      <ellipse cx="400" cy="268" rx="10" ry="4" fill="#2a3a28" />
      <ellipse cx="400" cy="264" rx="7" ry="3" fill="#e8a820" opacity=".9" />
      <path d="M397 255 Q400 242 403 255" fill="#e8c820" opacity=".8" />
      {/* Lamp glow on floor */}
      <ellipse cx="400" cy="310" rx="80" ry="20" fill="#e8a820" opacity=".08" />
    </svg>
  );
}

/** River Ghat — deep teal night, stone steps, water, boat, moon */
function RiverGhatScene() {
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      viewBox="0 0 800 360" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <linearGradient id="ghatSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#020c0c" />
          <stop offset="55%" stopColor="#062020" />
          <stop offset="100%" stopColor="#0a3030" />
        </linearGradient>
        <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a3030" />
          <stop offset="100%" stopColor="#041818" />
        </linearGradient>
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fdf4e3" stopOpacity=".25" />
          <stop offset="100%" stopColor="#fdf4e3" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Sky */}
      <rect width="800" height="220" fill="url(#ghatSky)" />
      {/* Moon */}
      <ellipse cx="680" cy="55" rx="55" ry="55" fill="url(#moonGlow)" />
      <circle cx="680" cy="55" r="22" fill="#fdf4e3" opacity=".85" />
      <circle cx="670" cy="48" r="6" fill="#e8d4a8" opacity=".5" />
      {/* Stars */}
      <circle cx="100" cy="30" r="1.5" fill="white" opacity=".6" />
      <circle cx="200" cy="50" r="1" fill="white" opacity=".4" />
      <circle cx="350" cy="25" r="1.5" fill="white" opacity=".5" />
      <circle cx="500" cy="40" r="1" fill="white" opacity=".6" />
      <circle cx="150" cy="70" r="1" fill="white" opacity=".3" />
      <circle cx="450" cy="15" r="1" fill="white" opacity=".5" />
      <circle cx="600" cy="30" r="1" fill="white" opacity=".4" />
      {/* Distant temple silhouettes */}
      <rect x="80" y="110" width="40" height="110" fill="#041818" opacity=".7" />
      <path d="M80 110 L100 85 L120 110Z" fill="#041818" opacity=".7" />
      <rect x="95" y="90" width="10" height="20" fill="#041818" opacity=".7" />
      <rect x="150" y="130" width="30" height="90" fill="#041818" opacity=".5" />
      <path d="M150 130 L165 112 L180 130Z" fill="#041818" opacity=".5" />
      {/* Water */}
      <rect x="0" y="220" width="800" height="140" fill="url(#water)" />
      {/* Moon reflection */}
      <ellipse cx="680" cy="280" rx="30" ry="60" fill="#fdf4e3" opacity=".07" />
      {/* Water ripples */}
      <path d="M100 235 Q200 230 300 235 Q400 230 500 235" stroke="#1a5050" strokeWidth="1.5" opacity=".5" />
      <path d="M50 250 Q150 245 250 250 Q350 245 450 250 Q550 245 650 250" stroke="#1a5050" strokeWidth="1" opacity=".4" />
      <path d="M0 270 Q100 265 200 270 Q300 265 400 270 Q500 265 600 270 Q700 265 800 270" stroke="#1a5050" strokeWidth="1" opacity=".3" />
      <path d="M200 290 Q300 285 400 290 Q500 285 600 290" stroke="#1a5050" strokeWidth="1" opacity=".25" />
      {/* Stone steps */}
      <rect x="0" y="190" width="350" height="20" fill="#1a3030" />
      <rect x="0" y="210" width="380" height="20" fill="#143030" />
      <rect x="0" y="230" width="360" height="20" fill="#0e2828" />
      {/* Step edge highlights */}
      <line x1="0" y1="190" x2="350" y2="190" stroke="#2a4848" strokeWidth="1.5" />
      <line x1="0" y1="210" x2="380" y2="210" stroke="#244040" strokeWidth="1" />
      <line x1="0" y1="230" x2="360" y2="230" stroke="#1e3838" strokeWidth="1" />
      {/* Boat / coracle */}
      <path d="M480 248 Q530 238 580 248 Q575 268 530 272 Q485 268 480 248Z" fill="#0c2020" />
      <path d="M530 238 L530 210" stroke="#1a3030" strokeWidth="2" strokeLinecap="round" />
      <path d="M530 210 L555 220" stroke="#1a3030" strokeWidth="1.5" strokeLinecap="round" />
      {/* Oil lamp on boat */}
      <ellipse cx="510" cy="244" rx="5" ry="3" fill="#e8a820" opacity=".7" />
      <ellipse cx="510" cy="238" rx="15" ry="10" fill="#e8a820" opacity=".12" />
      {/* Lamp glow on water */}
      <ellipse cx="510" cy="270" rx="30" ry="15" fill="#e8a820" opacity=".08" />
      {/* Rope from boat to step */}
      <path d="M480 260 Q450 258 420 252" stroke="#1a3030" strokeWidth="1.5" strokeDasharray="4 3" />
    </svg>
  );
}

/** School of Questions — warm amber dusk, pillared facade, courtyard */
function SchoolScene() {
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      viewBox="0 0 800 360" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <linearGradient id="schoolSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a0c04" />
          <stop offset="40%" stopColor="#4a2010" />
          <stop offset="100%" stopColor="#6b3218" />
        </linearGradient>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8a820" stopOpacity=".4" />
          <stop offset="100%" stopColor="#e8a820" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Warm amber sky */}
      <rect width="800" height="360" fill="url(#schoolSky)" />
      {/* Rising sun glow */}
      <ellipse cx="400" cy="100" rx="200" ry="120" fill="url(#sunGlow)" />
      <circle cx="400" cy="80" r="28" fill="#e8a820" opacity=".6" />
      {/* Ground courtyard */}
      <rect x="0" y="290" width="800" height="70" fill="#2a1408" />
      <line x1="0" y1="295" x2="800" y2="295" stroke="#3d2010" strokeWidth="1.5" />
      {/* Trees left */}
      <rect x="50" y="180" width="12" height="120" fill="#1a0c04" />
      <ellipse cx="56" cy="165" rx="32" ry="38" fill="#1a3010" opacity=".8" />
      <ellipse cx="56" cy="155" rx="24" ry="28" fill="#234018" opacity=".9" />
      <rect x="160" y="200" width="10" height="100" fill="#1a0c04" />
      <ellipse cx="165" cy="188" rx="26" ry="30" fill="#1a3010" opacity=".7" />
      {/* Trees right */}
      <rect x="730" y="180" width="12" height="120" fill="#1a0c04" />
      <ellipse cx="736" cy="165" rx="32" ry="38" fill="#1a3010" opacity=".8" />
      <ellipse cx="736" cy="155" rx="24" ry="28" fill="#234018" opacity=".9" />
      <rect x="620" y="200" width="10" height="100" fill="#1a0c04" />
      <ellipse cx="625" cy="188" rx="26" ry="30" fill="#1a3010" opacity=".7" />
      {/* Building facade */}
      <rect x="200" y="130" width="400" height="170" fill="#1c0e06" />
      {/* Roof cornice */}
      <rect x="185" y="120" width="430" height="18" fill="#2a1808" />
      <rect x="195" y="112" width="410" height="12" fill="#341e0c" />
      {/* Columns */}
      {[240, 300, 360, 420, 480, 540].map(x => (
        <g key={x}>
          <rect x={x} y="130" width="18" height="160" fill="#2a1808" />
          <rect x={x - 4} y="126" width="26" height="8" fill="#341e0c" />
          <rect x={x - 4} y="286" width="26" height="6" fill="#341e0c" />
        </g>
      ))}
      {/* Windows with warm glow */}
      <rect x="250" y="175" width="60" height="80" rx="2" fill="#3d2010" />
      <rect x="255" y="180" width="50" height="70" rx="1" fill="#c8720a" opacity=".25" />
      <rect x="360" y="165" width="80" height="110" rx="2" fill="#3d2010" />
      <rect x="365" y="170" width="70" height="100" rx="1" fill="#c8720a" opacity=".3" />
      <line x1="400" y1="170" x2="400" y2="270" stroke="#2a1408" strokeWidth="2" />
      <rect x="470" y="175" width="60" height="80" rx="2" fill="#3d2010" />
      <rect x="475" y="180" width="50" height="70" rx="1" fill="#c8720a" opacity=".2" />
      {/* Door */}
      <path d="M378 295 L378 230 Q400 215 422 230 L422 295Z" fill="#2a1408" />
      <circle cx="380" cy="265" r="3" fill="#e8a820" opacity=".6" />
      {/* Steps to door */}
      <rect x="350" y="292" width="100" height="8" fill="#281208" />
      <rect x="340" y="298" width="120" height="8" fill="#201008" />
      {/* Sign above door */}
      <rect x="358" y="145" width="84" height="22" rx="2" fill="#2a1808" />
      <line x1="368" y1="152" x2="432" y2="152" stroke="#e8a820" strokeWidth="1" opacity=".4" />
      <line x1="368" y1="159" x2="432" y2="159" stroke="#e8a820" strokeWidth=".8" opacity=".3" />
    </svg>
  );
}

/** Festival Lane — deep night with lanterns, colour, celebration */
function FestivalScene() {
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      viewBox="0 0 800 360" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <linearGradient id="festSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#08020f" />
          <stop offset="100%" stopColor="#200830" />
        </linearGradient>
        <radialGradient id="festGlow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e8a820" stopOpacity=".4" />
          <stop offset="100%" stopColor="#e8a820" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="festGlow2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#b83232" stopOpacity=".35" />
          <stop offset="100%" stopColor="#b83232" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="festGlow3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#3a7d44" stopOpacity=".3" />
          <stop offset="100%" stopColor="#3a7d44" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Sky */}
      <rect width="800" height="360" fill="url(#festSky)" />
      {/* Stars */}
      {[50, 120, 200, 280, 400, 480, 560, 650, 720].map((x, i) => (
        <circle key={i} cx={x} cy={20 + (i % 3) * 18} r={i % 2 === 0 ? 1.5 : 1} fill="white" opacity={0.3 + (i % 3) * 0.1} />
      ))}
      {/* Ground */}
      <rect x="0" y="300" width="800" height="60" fill="#100818" />
      {/* Left building */}
      <rect x="0" y="80" width="160" height="280" fill="#0c0618" />
      <rect x="0" y="75" width="165" height="10" fill="#180a28" />
      <rect x="30" y="120" width="50" height="60" fill="#180a28" />
      <rect x="33" y="123" width="44" height="54" fill="#b83232" opacity=".15" />
      <rect x="30" y="220" width="50" height="60" fill="#180a28" />
      <rect x="33" y="223" width="44" height="54" fill="#e8a820" opacity=".12" />
      <rect x="95" y="140" width="45" height="50" fill="#180a28" />
      <rect x="98" y="143" width="39" height="44" fill="#3a7d44" opacity=".15" />
      {/* Right building */}
      <rect x="640" y="80" width="160" height="280" fill="#0c0618" />
      <rect x="635" y="75" width="165" height="10" fill="#180a28" />
      <rect x="660" y="120" width="50" height="60" fill="#180a28" />
      <rect x="663" y="123" width="44" height="54" fill="#e8a820" opacity=".15" />
      <rect x="660" y="220" width="50" height="60" fill="#180a28" />
      <rect x="663" y="223" width="44" height="54" fill="#b83232" opacity=".12" />
      <rect x="715" y="140" width="45" height="50" fill="#180a28" />
      <rect x="718" y="143" width="39" height="44" fill="#3a7d44" opacity=".12" />
      {/* Strings of lanterns across */}
      <path d="M0 95 Q200 85 400 90 Q600 85 800 95" stroke="#1a0c28" strokeWidth="1.5" />
      <path d="M0 155 Q200 145 400 150 Q600 145 800 155" stroke="#1a0c28" strokeWidth="1.5" />
      {/* Lanterns on first string */}
      {[80, 160, 240, 320, 400, 480, 560, 640, 720].map((x, i) => {
        const colors = ['#e8a820', '#b83232', '#3a7d44', '#2d3a8c', '#e8a820', '#b83232', '#3a7d44', '#e8a820', '#b83232'];
        const glows = ['festGlow1', 'festGlow2', 'festGlow3', 'festGlow1', 'festGlow1', 'festGlow2', 'festGlow3', 'festGlow1', 'festGlow2'];
        return (
          <g key={`l1-${i}`}>
            <ellipse cx={x} cy={78 + (i % 3) * 6} rx={50} ry={40} fill={`url(#${glows[i]})`} />
            <ellipse cx={x} cy={90 + (i % 3) * 4} rx="10" ry="14" fill={colors[i]} opacity=".85" />
            <rect x={x - 2} y={76 + (i % 3) * 4} width="4" height="10" fill="#0c0618" />
          </g>
        );
      })}
      {/* Lanterns on second string */}
      {[120, 240, 360, 480, 600, 720].map((x, i) => {
        const colors = ['#b83232', '#e8a820', '#2d3a8c', '#3a7d44', '#b83232', '#e8a820'];
        return (
          <g key={`l2-${i}`}>
            <ellipse cx={x} cy={148 + (i % 2) * 5} rx="8" ry="12" fill={colors[i]} opacity=".7" />
            <rect x={x - 2} y={136 + (i % 2) * 5} width="4" height="8" fill="#0c0618" />
          </g>
        );
      })}
      {/* Celebration crowd silhouettes at base */}
      {[100, 160, 220, 290, 380, 460, 540, 610, 680].map((x, i) => (
        <g key={`p-${i}`}>
          <ellipse cx={x} cy={318} rx={10} ry={18} fill="#0c0618" opacity={0.5 + (i % 3) * 0.15} />
          <circle cx={x} cy={295} r={8} fill="#0c0618" opacity={0.5 + (i % 3) * 0.15} />
        </g>
      ))}
      {/* Marigold garlands */}
      <path d="M160 200 Q200 210 240 200 Q280 210 320 200" stroke="#e8a820" strokeWidth="2" opacity=".5" />
      <path d="M480 190 Q520 200 560 190 Q600 200 640 190" stroke="#e8a820" strokeWidth="2" opacity=".5" />
    </svg>
  );
}

/** Spice Quarter daytime — warm afternoon, colorful mounds, market bustle */
function SpiceScene() {
  return (
    <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      viewBox="0 0 800 360" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <linearGradient id="spiceSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a1205" />
          <stop offset="100%" stopColor="#8b4e18" />
        </linearGradient>
      </defs>
      <rect width="800" height="360" fill="url(#spiceSky)" />
      {/* Sun */}
      <circle cx="650" cy="70" r="35" fill="#e8c820" opacity=".7" />
      <circle cx="650" cy="70" r="55" fill="#e8a820" opacity=".2" />
      {/* Ground */}
      <rect x="0" y="285" width="800" height="75" fill="#3d1a06" />
      <line x1="0" y1="290" x2="800" y2="290" stroke="#5a2808" strokeWidth="1.5" />
      {/* Spice mounds — large colorful piles */}
      <ellipse cx="150" cy="290" rx="80" ry="30" fill="#e8a820" opacity=".9" />
      <ellipse cx="150" cy="278" rx="72" ry="24" fill="#f0c040" />
      <ellipse cx="280" cy="290" rx="70" ry="28" fill="#b83232" opacity=".9" />
      <ellipse cx="280" cy="278" rx="62" ry="22" fill="#c84040" />
      <ellipse cx="400" cy="290" rx="75" ry="30" fill="#c8720a" opacity=".9" />
      <ellipse cx="400" cy="278" rx="67" ry="24" fill="#e8820a" />
      <ellipse cx="520" cy="290" rx="65" ry="26" fill="#1a6b6b" opacity=".9" />
      <ellipse cx="520" cy="280" rx="57" ry="20" fill="#2a8b8b" />
      <ellipse cx="640" cy="290" rx="70" ry="28" fill="#8b2d8b" opacity=".8" />
      <ellipse cx="640" cy="279" rx="62" ry="22" fill="#a030a0" />
      {/* Market stall awnings */}
      <path d="M60 120 L260 120 L240 95 L80 95Z" fill="#c8720a" />
      <path d="M60 120 L80 120 L80 180 L60 180Z" fill="#8b4e06" />
      <path d="M240 120 L260 120 L260 180 L240 180Z" fill="#8b4e06" />
      <path d="M60 120 Q72 132 84 120 Q96 132 108 120 Q120 132 132 120 Q144 132 156 120 Q168 132 180 120 Q192 132 204 120 Q216 132 228 120 Q240 132 252 120 Q256 126 260 120" stroke="#e8a820" strokeWidth="2" fill="none" />
      {/* Right awning */}
      <path d="M540 130 L720 130 L705 108 L555 108Z" fill="#b83232" />
      <path d="M540 130 L555 130 L555 185 L540 185Z" fill="#800000" />
      <path d="M705 130 L720 130 L720 185 L705 185Z" fill="#800000" />
      <path d="M540 130 Q552 142 564 130 Q576 142 588 130 Q600 142 612 130 Q624 142 636 130 Q648 142 660 130 Q672 142 684 130 Q696 142 708 130 Q714 136 720 130" stroke="#e8a820" strokeWidth="2" fill="none" />
      {/* Hanging bunches */}
      <line x1="120" y1="95" x2="120" y2="115" stroke="#8b4e06" strokeWidth="1.5" />
      <ellipse cx="120" cy="118" rx="7" ry="5" fill="#e8a820" opacity=".8" />
      <line x1="160" y1="95" x2="160" y2="112" stroke="#8b4e06" strokeWidth="1.5" />
      <ellipse cx="160" cy="115" rx="6" ry="4" fill="#c8720a" opacity=".9" />
      <line x1="200" y1="95" x2="200" y2="114" stroke="#8b4e06" strokeWidth="1.5" />
      <ellipse cx="200" cy="117" rx="7" ry="5" fill="#b83232" opacity=".8" />
      {/* Clay pots */}
      <ellipse cx="100" cy="258" rx="18" ry="8" fill="#8b4e06" />
      <ellipse cx="100" cy="252" rx="18" ry="7" fill="#c8720a" />
      <ellipse cx="160" cy="260" rx="15" ry="7" fill="#6b2808" />
      <ellipse cx="160" cy="254" rx="15" ry="6" fill="#e8a820" />
    </svg>
  );
}

// ── Location data ─────────────────────────────────────────────────────────

interface SceneDef {
  bg: string;
  SceneBg: React.FC;
  location: string;
  chaturBottom?: number;
  chaturRight?: number;
}

const SCENE_MAP: Record<EngineType, SceneDef> = {
  deduction: {
    bg: 'linear-gradient(160deg, #040812 0%, #0e1c40 60%, #080f28 100%)',
    SceneBg: ArchiveScene,
    location: 'The Old Archive · Night',
    chaturBottom: 0,
    chaturRight: 0,
  },
  flow: {
    bg: 'linear-gradient(160deg, #1a0a02 0%, #5c2d06 60%, #2a1205 100%)',
    SceneBg: BazaarScene,
    location: 'The Bazaar · Night',
    chaturBottom: 0,
    chaturRight: 0,
  },
  connections: {
    bg: 'linear-gradient(160deg, #08020f 0%, #200830 60%, #0c0418 100%)',
    SceneBg: FestivalScene,
    location: 'Festival Lane · Night',
    chaturBottom: 0,
    chaturRight: 0,
  },
  sudoku: {
    bg: 'linear-gradient(160deg, #1a0c04 0%, #4a2010 50%, #6b3218 100%)',
    SceneBg: SchoolScene,
    location: 'School of Questions · Dawn',
    chaturBottom: 0,
    chaturRight: 0,
  },
  visual: {
    bg: 'linear-gradient(160deg, #2a1205 0%, #8b4e18 60%, #6b3210 100%)',
    SceneBg: SpiceScene,
    location: 'Spice Quarter · Afternoon',
    chaturBottom: 0,
    chaturRight: 0,
  },
  lateral: {
    bg: 'linear-gradient(160deg, #020c0c 0%, #062020 50%, #0a3030 100%)',
    SceneBg: RiverGhatScene,
    location: 'River Ghat · Evening',
    chaturBottom: 0,
    chaturRight: 0,
  },
  word: {
    bg: 'linear-gradient(160deg, #1a0c04 0%, #4a2010 50%, #6b3218 100%)',
    SceneBg: SchoolScene,
    location: 'School of Questions · Morning',
    chaturBottom: 0,
    chaturRight: 0,
  },
  drag: {
    bg: 'linear-gradient(160deg, #1a0a02 0%, #5c2d06 60%, #2a1205 100%)',
    SceneBg: BazaarScene,
    location: 'Festival Cart · The Bazaar',
    chaturBottom: 0,
    chaturRight: 0,
  },
};

// ── Main component ────────────────────────────────────────────────────────

interface Props {
  engineType: EngineType;
  /** Height of the scene banner in px. Default 148. */
  height?: number;
  /** Scale factor for Chatur character. Default 1 (110×170px). */
  chaturScale?: number;
}

export function SceneIllustration({ engineType, height = 148, chaturScale = 0.7 }: Props) {
  const def = SCENE_MAP[engineType] ?? SCENE_MAP.flow;
  const { SceneBg, bg, location } = def;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height,
        borderRadius: '14px',
        overflow: 'hidden',
        background: bg,
        marginBottom: '12px',
        flexShrink: 0,
      }}
    >
      {/* SVG scene background */}
      <SceneBg />

      {/* Location label — top left */}
      <div
        style={{
          position: 'absolute',
          top: 10,
          left: 14,
          zIndex: 4,
          fontFamily: 'var(--font-caps, sans-serif)',
          fontSize: 9,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(245,232,200,0.65)',
          lineHeight: 1,
          pointerEvents: 'none',
        }}
      >
        {location}
      </div>

      {/* Chatur character — bottom right */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          zIndex: 3,
          pointerEvents: 'none',
          lineHeight: 0,
        }}
      >
        <ChaturSvg scale={chaturScale} />
      </div>
    </div>
  );
}

// Also export ChaturSvg and individual scenes for use in the landing page
export { ChaturSvg, BazaarScene, ArchiveScene, RiverGhatScene, FestivalScene, SchoolScene, SpiceScene };
