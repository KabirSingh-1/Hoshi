// Fine gold line-art. Every stroke carries pathLength=1 so CSS can draw it in.
const G = '#C9A24A', NV = '#0F1B33'
const L = { pathLength: 1 }

/* the private study: arched window, desk, laptop with a live mentor, lamp, globe, child */
export function StudyScene({ className = '' }) {
  return (
    <svg data-reveal viewBox="0 0 560 520" className={className} role="img" aria-label="Line drawing of a child at a home study desk, learning live with a mentor on a laptop">
      <defs>
        <linearGradient id="lamp" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F2D58A" stopOpacity="0.55" />
          <stop offset="1" stopColor="#F2D58A" stopOpacity="0" />
        </linearGradient>
        <clipPath id="archTop"><path d="M76 200V146Q76 58 150 58T224 146V200Z" /></clipPath>
      </defs>
      {/* warm lamp light from the shade's mouth, gently breathing */}
      <path className="glow" d="M492 292 526 312 552 398H446Z" fill="url(#lamp)" />
      <g className="draw" fill="none" stroke={G} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {/* haveli arch window */}
        <path {...L} d="M60 330V140Q60 40 150 40T240 140V330Z" />
        <path {...L} d="M76 330V146Q76 58 150 58T224 146V330" />
        <path {...L} d="M150 58V330M76 200H224M76 268H224" />
        <g clipPath="url(#archTop)" strokeWidth="0.9" opacity="0.55">
          {Array.from({ length: 9 }, (_, i) => <path key={i} {...L} d={`M${40 + i * 24} 200l90-150M${40 + i * 24} 50l90 150`} />)}
        </g>
        <circle {...L} cx="196" cy="110" r="10" fill={G} fillOpacity="0.25" />
        {/* wall shelf */}
        <path {...L} d="M320 196H520" />
        <rect {...L} x="336" y="148" width="12" height="48" />
        <rect {...L} x="350" y="140" width="14" height="56" />
        <rect {...L} x="366" y="154" width="10" height="42" />
        <path {...L} d="M382 196l18-50 12 4-18 50" />
        <path {...L} d="M470 196v-18h28v18M478 178c-6-14 4-26 6-30M490 178c6-12 0-22-4-26" />
        {/* desk */}
        <path {...L} d="M40 400H530M40 412H530M64 412V508M506 412V508" />
        <rect {...L} x="388" y="412" width="104" height="30" />
        <path {...L} d="M432 427h16" />
        {/* books + globe (navy fill hides the window lines behind) */}
        <rect {...L} x="92" y="384" width="124" height="16" fill={NV} />
        <rect {...L} x="100" y="370" width="108" height="14" fill={NV} />
        <rect {...L} x="110" y="356" width="88" height="14" fill={NV} />
        <path {...L} d="M154 356v-10M128 334q26 30 52 0" />
        <circle {...L} cx="154" cy="306" r="30" fill={NV} />
        <ellipse {...L} cx="154" cy="306" rx="12" ry="30" />
        <path {...L} d="M124 306h60M130 290h48M130 322h48" />
        {/* laptop with live mentor */}
        <rect {...L} x="292" y="262" width="164" height="110" rx="6" fill={NV} />
        <circle {...L} cx="374" cy="300" r="14" />
        <path {...L} d="M344 352q30-36 60 0M359 300q15-26 30 0" />
        <path {...L} d="M276 372h196l12 22H264Z" fill={NV} />
        {/* lamp */}
        <ellipse {...L} cx="506" cy="398" rx="22" ry="4" />
        <path {...L} d="M506 396 484 330l34-40" />
        <path {...L} d="M502 278l38 22-14 12-34-22Z" fill={NV} />
        {/* the child, back to us: head below the screen, chair back nearest the viewer */}
        <path {...L} d="M322 454q48-58 96 0Z" fill={NV} />
        <circle {...L} cx="370" cy="394" r="22" fill={NV} />
        <path {...L} d="M348 390q22-24 44 0M390 398q12 8 8 24" />
        <rect {...L} x="314" y="448" width="112" height="60" rx="10" fill={NV} />
        <path {...L} d="M332 508v8M408 508v8" />
      </g>
      <circle cx="306" cy="276" r="3.5" fill={G} />
    </svg>
  )
}

/* small haveli-arch monogram for letterheads */
export function ArchMark({ className = '' }) {
  return (
    <svg viewBox="0 0 32 40" className={`draw ${className}`} fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path {...L} d="M3 39V16Q3 3 16 3t13 13v23Z" />
      <path {...L} d="M8 39V17q0-8 8-8t8 8v22" />
      <path {...L} d="M16 15l3 4-3 4-3-4Z" />
    </svg>
  )
}

/* line icons, one 1.5 stroke, 48 box */
const ICONS = {
  book: <><path d="M6 12q9-4 18 0v26q-9-4-18 0Z" /><path d="M42 12q-9-4-18 0v26q9-4 18 0Z" /></>,
  compass: <><circle cx="24" cy="24" r="17" /><path d="M30 18l-4 10-10 4 4-10Z" /><circle cx="24" cy="24" r="1.5" /></>,
  nib: <><path d="M24 6l10 14-10 22L14 20Z" /><path d="M24 30v12M24 22v3" /></>,
  key: <><circle cx="16" cy="24" r="8" /><path d="M24 24h18M36 24v6M41 24v5" /></>,
  seal: <><circle cx="24" cy="22" r="13" /><path d="M18 22l4 4 8-8M17 33l-3 10 10-4 10 4-3-10" /></>,
  scroll: <><rect x="8" y="10" width="32" height="24" rx="2" /><path d="M14 18h20M14 24h12" /><circle cx="33" cy="33" r="5" /><path d="M30 37l-2 6 5-2 5 2-2-6" /></>,
  school: <><path d="M6 20 24 8l18 12M10 20v20h28V20M20 40V30h8v10" /></>,
  globe: <><circle cx="24" cy="24" r="17" /><ellipse cx="24" cy="24" rx="7" ry="17" /><path d="M7 24h34M10 15h28M10 33h28" /></>,
}
export function LineIcon({ name, className = '' }) {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  )
}
