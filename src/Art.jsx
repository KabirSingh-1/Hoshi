// Hand-cut tissue-paper illustrations. Overlaps use mix-blend multiply, like real tissue.
const N = '#1B2A41', R = '#C2255C', M = '#F2A900', T = '#1F8A84', B = '#C9A46A', S = '#A9CDE0'
const t = { mixBlendMode: 'multiply' }

/* small decorative kite, used in skies */
export function MiniKite({ c = [R, M, T, N], className = '', style }) {
  return (
    <svg viewBox="0 0 40 70" className={className} style={style} aria-hidden="true">
      <path d="M20 1 39 20 20 20Z" fill={c[1]} style={t} />
      <path d="M20 1 1 20 20 20Z" fill={c[0]} style={t} />
      <path d="M39 20 20 39 20 20Z" fill={c[2]} style={t} />
      <path d="M1 20 20 39 20 20Z" fill={c[3]} style={t} />
      <path d="M20 37 15 45h10Z" fill={c[0]} />
      <path d="M20 45C24 52 16 58 21 69" fill="none" stroke={B} strokeWidth="0.8" />
    </svg>
  )
}

/* drifting kites for a section background */
const SKY = [
  { x: 6, y: 18, s: 34, d: 9, c: [M, T, R, N] },
  { x: 38, y: 8, s: 22, d: 11, c: [T, R, M, N] },
  { x: 52, y: 30, s: 16, d: 8, c: [R, N, T, M] },
  { x: 88, y: 12, s: 28, d: 10, c: [N, M, R, T] },
  { x: 74, y: 40, s: 18, d: 12, c: [M, R, N, T] },
]
export function SkyKites({ tone, className = '' }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      {SKY.map((k, i) => (
        <MiniKite
          key={i}
          c={tone ? [tone, tone, tone, tone] : k.c}
          className="drift absolute"
          style={{ left: `${k.x}%`, top: `${k.y}%`, width: k.s, opacity: tone ? 0.22 : 0.8, animationDuration: `${k.d}s`, animationDelay: `${-i * 1.7}s` }}
        />
      ))}
    </div>
  )
}

/* Gujarati rooftops: parapets, water tanks, a shikhara, neem trees, a washing line */
export function Skyline({ night = false, className = '' }) {
  const back = night ? '#24344f' : T
  const mid = night ? '#1a2638' : N
  const front = night ? '#0b1320' : N
  return (
    <svg viewBox="0 0 1440 240" preserveAspectRatio="xMidYMax slice" className={className} aria-hidden="true">
      {/* far layer */}
      <g fill={back} opacity={night ? 1 : 0.35} style={night ? undefined : t}>
        <path d="M0 150h90v-30h60v30h40V100h70v50h50v-20h80v20h30V70h14l6-14 6 14h14v80h70v-40h90v40h50v-60h40l20-40 20 40h40v60h60v-30h80v30h70V110h90v40h60v-24h60v24h60V90h80v60h56v90H0Z" />
        <circle cx="1210" cy="88" r="14" />
      </g>
      {/* shikhara */}
      <path d="M590 150c0-40 18-70 30-96 12 26 30 56 30 96Z" fill={night ? '#2b3d5c' : R} opacity={night ? 1 : 0.55} style={night ? undefined : t} />
      <path d="M620 54v-14" stroke={night ? '#2b3d5c' : R} strokeWidth="3" />
      <path d="M620 40l12 5-12 5Z" fill={night ? '#2b3d5c' : M} />
      {/* neem trees */}
      <g fill={night ? '#16303a' : T} opacity={night ? 1 : 0.6} style={night ? undefined : t}>
        <circle cx="250" cy="150" r="34" /><circle cx="285" cy="140" r="28" /><circle cx="220" cy="158" r="24" />
        <circle cx="900" cy="150" r="30" /><circle cx="930" cy="160" r="22" />
      </g>
      {/* mid layer: houses with notched parapets */}
      <g fill={mid} opacity={night ? 1 : 0.8}>
        <path d="M0 175h120v-10h10v10h10v-10h10v10h10v-10h10v10h70v-40h120v40h40v-30h100v30h140v-20h12v-10h36v10h12v20h110v-35h130v35h60v-50h110v50h90v-25h100v25h200v65H0Z" />
      </g>
      {/* water tanks */}
      <g fill={night ? '#22324a' : M}>
        <rect x="350" y="118" width="34" height="18" rx="4" /><rect x="1060" y="128" width="30" height="16" rx="4" /><rect x="1255" y="100" width="34" height="16" rx="4" />
      </g>
      {/* jharokha windows */}
      <g fill={night ? '#f7a531' : R} opacity={night ? 0.85 : 1}>
        <path d="M262 205v-14a8 8 0 0 1 16 0v14Z" /><path d="M300 205v-14a8 8 0 0 1 16 0v14Z" />
        <path d="M770 210v-14a8 8 0 0 1 16 0v14Z" /><path d="M1150 205v-14a8 8 0 0 1 16 0v14Z" /><path d="M1188 205v-14a8 8 0 0 1 16 0v14Z" />
      </g>
      {/* washing line */}
      <path d="M460 150q60 14 120 0" fill="none" stroke={night ? '#33445f' : N} strokeWidth="1.2" />
      <g className="flutter" style={{ transformOrigin: '520px 150px' }}>
        <path d="M478 153h16l-2 20h-12Z" fill={night ? '#33445f' : M} />
        <path d="M505 156h18l-3 26h-12Z" fill={night ? '#33445f' : R} />
        <path d="M535 156h14l-1 16h-12Z" fill={night ? '#33445f' : S} />
        <path d="M556 153h14l-2 22h-10Z" fill={night ? '#33445f' : T} />
      </g>
      {/* front terrace with jaali parapet */}
      <path d="M0 214h1440v26H0Z" fill={front} />
      <g fill={night ? '#1b2a41' : S} opacity="0.5">
        {Array.from({ length: 48 }, (_, i) => <rect key={i} x={14 + i * 30} y="222" width="8" height="8" rx="1" />)}
      </g>
    </svg>
  )
}

/* the child on the terrace, seen from behind, string hand raised */
export function Child(props) {
  return (
    <svg viewBox="0 0 120 200" aria-hidden="true" {...props}>
      <rect x="44" y="140" width="13" height="56" rx="5" fill={N} />
      <rect x="62" y="140" width="13" height="56" rx="5" fill={N} />
      <path d="M38 78h44l10 74H28Z" fill={M} />
      <path d="M40 80l42 2-6 30-40-6Z" fill={R} style={t} opacity="0.85" />
      {/* raised arm */}
      <path d="M76 84 104 22" stroke="#8A5A3B" strokeWidth="11" strokeLinecap="round" />
      <path d="M76 84 96 40" stroke={M} strokeWidth="12" strokeLinecap="round" />
      {/* other arm + firki */}
      <path d="M42 86 24 128" stroke="#8A5A3B" strokeWidth="10" strokeLinecap="round" />
      <g transform="translate(8 120)">
        <rect x="6" y="0" width="22" height="20" fill={M} /><rect x="2" y="-3" width="30" height="5" rx="2" fill={R} /><rect x="2" y="18" width="30" height="5" rx="2" fill={R} />
        <rect x="15" y="23" width="4" height="14" rx="2" fill={B} />
      </g>
      <circle cx="60" cy="58" r="20" fill="#8A5A3B" />
      <path d="M40 58a20 20 0 0 1 40 0c0-6-4-24-20-24S40 52 40 58Z" fill={N} />
      <path d="M60 70c-3 14 2 22-2 34" stroke={N} strokeWidth="7" strokeLinecap="round" fill="none" />
    </svg>
  )
}

/* ---------- pillar vignettes ---------- */
export function PillarArt({ i }) {
  const bg = [N, R, M, T][i]
  return (
    <svg viewBox="0 0 200 200" className="w-full" aria-hidden="true">
      <polygon points="100,4 196,100 100,196 4,100" fill={bg} />
      {i === 0 && (
        <g>
          <path d="M44 120c20-10 40-10 56 0v-50c-16-10-36-10-56 0Z" fill="#fff" />
          <path d="M156 120c-20-10-40-10-56 0v-50c16-10 36-10 56 0Z" fill={S} />
          <path className="page-flip" d="M100 70c14-8 30-9 46-4v48c-16-5-32-4-46 4Z" fill={M} style={{ ...t, transformOrigin: '100px 90px' }} />
          <g stroke={N} strokeWidth="2" opacity="0.5"><path d="M54 84h36M54 94h30M54 104h34" /></g>
          <path d="M120 132l40-40 8 8-40 40-12 4Z" fill={R} />
        </g>
      )}
      {i === 1 && (
        <g>
          <path d="M60 130c0-40 30-64 74-64-4 42-30 66-74 64Z" fill={T} />
          <path d="M62 128 128 70" stroke="#fff" strokeWidth="2" />
          <g className="bob">
            <circle cx="108" cy="96" r="30" fill="#fff" fillOpacity="0.35" stroke="#fff" strokeWidth="7" />
            <path d="M130 118l26 26" stroke={N} strokeWidth="11" strokeLinecap="round" />
          </g>
        </g>
      )}
      {i === 2 && (
        <g>
          <g className="spin" style={{ transformOrigin: '84px 100px' }}>
            <path d="M84 62l7 9 11-3 2 11 11 4-5 10 7 9-10 6 1 11-11 1-4 11-10-5-9 7-6-10-11 1v-11l-10-5 6-10-5-10 11-4 1-11 11 3Z" fill={N} />
            <circle cx="84" cy="100" r="12" fill={M} />
          </g>
          <rect x="112" y="92" width="44" height="34" rx="6" fill="#fff" />
          <circle cx="125" cy="108" r="5" fill={R} /><circle cx="143" cy="108" r="5" fill={R} />
          <path d="M134 92V80" stroke="#fff" strokeWidth="3" /><circle cx="134" cy="78" r="4" fill={R} />
          <rect x="116" y="126" width="36" height="8" rx="2" fill={N} />
        </g>
      )}
      {i === 3 && (
        <g>
          <path d="M50 78h100l-8 18H58Z" fill={R} />
          <g className="flutter" style={{ transformOrigin: '100px 78px' }}>
            {[0, 1, 2, 3, 4].map((k) => <path key={k} d={`M${54 + k * 19} 96l9 12 10-12Z`} fill={k % 2 ? M : '#fff'} />)}
          </g>
          <rect x="62" y="110" width="76" height="34" fill="#fff" />
          <rect x="72" y="126" width="10" height="18" fill={N} /><rect x="88" y="118" width="10" height="26" fill={R} /><rect x="104" y="122" width="10" height="22" fill={M} /><rect x="120" y="114" width="10" height="30" fill={N} />
        </g>
      )}
    </svg>
  )
}

/* ---------- legal icons ---------- */
export function LegalIcon({ i }) {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true">
      {i === 0 && (<g><circle cx="32" cy="32" r="26" fill={T} /><path d="M20 33l8 8 17-18" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" /></g>)}
      {i === 1 && (<g><rect x="8" y="12" width="48" height="34" rx="3" fill="#fff" stroke={N} strokeWidth="2.5" /><path d="M16 22h32M16 29h22" stroke={N} strokeWidth="2.5" /><circle cx="44" cy="40" r="9" fill={M} /><path d="M39 47l-3 12 8-4 8 4-3-12" fill={R} /></g>)}
      {i === 2 && (<g><path d="M8 28 32 12l24 16Z" fill={R} /><rect x="12" y="28" width="40" height="26" fill={S} /><rect x="27" y="38" width="10" height="16" fill={N} /><path d="M44 8a14 14 0 1 1-12 3" fill="none" stroke={T} strokeWidth="3" strokeLinecap="round" /><path d="M28 6l5 5-6 3" fill="none" stroke={T} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></g>)}
      {i === 3 && (<g><circle cx="30" cy="34" r="22" fill={S} /><path d="M10 30c8 2 12 8 20 6s8-12 18-10M14 46c8-4 18-2 24 4" fill="none" stroke={T} strokeWidth="3" /><path d="M40 14l20-6-8 18-4-6Z" fill={M} /></g>)}
    </svg>
  )
}

/* ---------- project vignettes ---------- */
export function ProjectArt({ i }) {
  const bg = [S, R, M, T][i]
  return (
    <svg viewBox="0 0 320 200" className="w-full rounded-2xl" aria-hidden="true">
      <rect width="320" height="200" fill={bg} />
      {i === 0 && (
        <g>
          <g className="bob"><MiniKiteG x={60} y={30} s={1.6} /></g>
          <g className="bob" style={{ animationDelay: '-1s' }}><MiniKiteG x={130} y={60} s={1.1} /></g>
          <g className="bob" style={{ animationDelay: '-2s' }}><MiniKiteG x={190} y={86} s={0.8} /></g>
          <rect x="230" y="120" width="16" height="50" fill={N} /><rect x="252" y="100" width="16" height="70" fill={R} /><rect x="274" y="140" width="16" height="30" fill={M} />
          <path d="M224 170h74" stroke={N} strokeWidth="2" />
        </g>
      )}
      {i === 1 && (
        <g>
          <path d="M60 50c30-8 60-8 100 6v110c-40-14-70-14-100-6Z" fill="#fff" />
          <path d="M260 50c-30-8-60-8-100 6v110c40-14 70-14 100-6Z" fill="#fde7ef" />
          <circle cx="110" cy="90" r="16" fill={M} /><path d="M70 140l30-30 26 22 18-14 14 22Z" fill={T} style={t} />
          <path d="M184 90h56M184 104h48M184 118h52M184 132h40" stroke={R} strokeWidth="3" opacity="0.5" />
          <rect x="90" y="176" width="70" height="8" rx="4" fill={N} transform="rotate(-8 125 180)" />
        </g>
      )}
      {i === 2 && (
        <g>
          <path d="M40 60h240l-14 26H54Z" fill={R} />
          {[0, 1, 2, 3, 4, 5, 6].map((k) => <path key={k} d={`M${48 + k * 33} 86l14 16 16-16Z`} fill={k % 2 ? N : '#fff'} />)}
          <rect x="60" y="104" width="200" height="70" fill="#fff" />
          {[0, 1, 2, 3, 4].map((k) => <rect key={k} x={72 + k * 38} y="114" width="24" height="22" rx="4" fill={[T, M, R, N, T][k]} style={t} />)}
          <rect x="72" y="144" width="176" height="6" fill={N} opacity="0.3" />
          <rect x="200" y="148" width="40" height="28" rx="4" fill={N} /><rect x="205" y="152" width="30" height="18" rx="2" fill={S} />
        </g>
      )}
      {i === 3 && (
        <g>
          <path d="M60 50h120v20h-40v20h-20V70H60Z" fill={N} />
          <rect x="130" y="88" width="14" height="10" fill={N} />
          <path className="drip" d="M137 104c-5 8-7 12-7 16a7 7 0 0 0 14 0c0-4-2-8-7-16Z" fill="#fff" />
          <path d="M110 150h56l-6 34h-44Z" fill="#fff" fillOpacity="0.9" /><path d="M114 162h48l-3 22h-42Z" fill={S} />
          <rect x="200" y="90" width="70" height="90" rx="6" fill="#fff" /><rect x="222" y="84" width="26" height="12" rx="3" fill={M} />
          <path d="M212 116l8 8 14-14M212 146l8 8 14-14" fill="none" stroke={T} strokeWidth="4" strokeLinecap="round" />
        </g>
      )}
    </svg>
  )
}

function MiniKiteG({ x, y, s }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M20 1 39 20 20 20Z" fill={M} style={t} /><path d="M20 1 1 20 20 20Z" fill={R} style={t} />
      <path d="M39 20 20 39 20 20Z" fill={T} style={t} /><path d="M1 20 20 39 20 20Z" fill={N} style={t} />
      <path d="M20 39C26 50 14 60 22 74" fill="none" stroke={N} strokeWidth="1" />
    </g>
  )
}

/* the firki: the spool every Uttarayan string winds back to */
export function Firki({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <rect x="54" y="80" width="12" height="38" rx="5" fill={B} />
      <ellipse cx="60" cy="22" rx="40" ry="10" fill={R} />
      <rect x="28" y="22" width="64" height="58" fill={M} />
      {Array.from({ length: 8 }, (_, i) => <path key={i} d={`M28 ${28 + i * 6.5}h64`} stroke="#C08A1E" strokeWidth="1.2" />)}
      <ellipse cx="60" cy="80" rx="40" ry="10" fill={R} />
    </svg>
  )
}
