import { useEffect, useRef, useState } from 'react'
import {
  PHONE, WA_TEXT, AGES, AGE_NOTES, INTERESTS, PILLARS, TRUTHS, LEGAL,
  AI_MONTHS, PROJECTS, WEEK, MENTORS, FAQ,
} from './content'
import { SkyKites, Skyline, Child, PillarArt, LegalIcon, ProjectArt, MiniKite, Firki } from './Art'

// ponytail: pushes to GTM/GA4 dataLayer when present; no-op until analytics is installed.
const track = (event, data = {}) => window.dataLayer?.push({ event, ...data })
const waLink = (text = WA_TEXT, source = 'site') =>
  `https://wa.me/91${PHONE}?text=${encodeURIComponent(`${text} [${source}]`)}`

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function useInView(opts = { threshold: 0.3 }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), opts)
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return [ref, seen]
}

/* ---------- icons (authored, one 2px stroke) ---------- */
const Icon = {
  phone: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
      <path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 7 7L16 14l5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z" />
    </svg>
  ),
  chat: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
      <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.2Z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a4 4 0 0 1-1.8-1.8l.8-1-1-2Z" strokeWidth="1.5" />
    </svg>
  ),
  arrow: (p) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  plus: (p) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true" {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
}

/* ---------- the kite ---------- */
// Four tissue quadrants on a bamboo spine and bow. Clockwise from top-left: Learn, Explore, Create, Apply.
const QUADS = ['100,6 6,100 100,100', '100,6 194,100 100,100', '194,100 100,194 100,100', '100,194 6,100 100,100']
const CENTROIDS = [[69, 72], [131, 72], [131, 136], [69, 136]]

function KiteShape({ colors, words = true }) {
  return (
    <g>
      {QUADS.map((pts, i) => (
        <polygon key={i} points={pts} className="tissue" style={{ fill: colors[i], fillOpacity: 0.92, transition: 'fill 0.7s var(--ease-wind)' }} />
      ))}
      <polygon points="100,6 194,100 100,194 6,100" fill="none" stroke="#1B2A41" strokeOpacity="0.35" strokeWidth="1" />
      <path d="M100 6V194" stroke="#C9A46A" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M8 100Q100 46 192 100" fill="none" stroke="#C9A46A" strokeWidth="2.4" strokeLinecap="round" />
      <polygon points="100,190 84,218 116,218" className="tissue" style={{ fill: colors[0], fillOpacity: 0.9, transition: 'fill 0.7s' }} />
      {words && PILLARS.map((p, i) => (
        <text key={p.word} x={CENTROIDS[i][0]} y={CENTROIDS[i][1]} textAnchor="middle" fill="#fff" style={{ fontSize: 10.5, fontWeight: 800, fontStretch: '125%', letterSpacing: '0.04em' }}>
          {p.word.toUpperCase()}
        </text>
      ))}
    </g>
  )
}

/* ---------- header ---------- */
function Wordmark({ light = false }) {
  return (
    <span className="inline-flex flex-col leading-none">
      <span className="flex items-baseline gap-1.5" style={{ fontStretch: '125%' }}>
        <span className={`text-[1.35rem] font-extrabold tracking-wide ${light ? 'text-white' : 'text-navy'}`}>HOSHI</span>
        <span className={`text-[0.8rem] font-bold tracking-[0.2em] ${light ? 'text-marigold' : 'text-gold-deep'}`}>ACADEMY</span>
      </span>
      <span className="mt-1 h-px w-full bg-gold" />
    </span>
  )
}

const NAV = [
  ['#model', 'How it works'],
  ['#legal', 'Legal & certificates'],
  ['#ai', 'AI & skills'],
  ['#week', 'A week'],
  ['#faq', 'FAQ'],
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`sticky top-0 z-40 bg-sky transition-shadow duration-300 ${scrolled ? 'shadow-[0_8px_24px_-18px_rgb(17_28_45/0.5)]' : ''}`}>
      <div className="mx-auto flex h-[4.5rem] max-w-[77.5rem] items-center justify-between gap-3 px-4 md:gap-6 md:px-10">
        <a href="#top" aria-label="Hoshi Academy, back to top"><Wordmark /></a>
        <nav aria-label="Sections" className="hidden lg:block">
          <ul className="flex gap-7 text-[0.95rem] font-semibold text-ink-soft">
            {NAV.map(([href, label]) => (
              <li key={href}><a href={href} className="hover:text-navy hover:underline">{label}</a></li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <a href={waLink(WA_TEXT, 'header')} onClick={() => track('whatsapp_click', { where: 'header' })} target="_blank" rel="noopener" aria-label="Chat on WhatsApp" className="hidden size-11 place-items-center sm:grid rounded-full text-navy hover:bg-navy/5">
            <Icon.chat />
          </a>
          <a href="#enquire" onClick={() => track('cta_click', { where: 'header' })} className="btn btn-primary !min-h-11 !px-5 text-[0.95rem]">Book a call</a>
        </div>
      </div>
    </header>
  )
}

/* ---------- hero: build your child's kite ---------- */
function Radio({ name, value, checked, onChange, children }) {
  return (
    <label className={`relative inline-flex min-h-11 cursor-pointer items-center rounded-full px-4 text-[0.95rem] font-semibold transition-colors duration-200 ${checked ? 'bg-navy text-white' : 'bg-white/60 text-navy hover:bg-white'}`}>
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="peer absolute inset-0 cursor-pointer opacity-0" />
      <span className="pointer-events-none">{children}</span>
      <span className="pointer-events-none absolute inset-0 rounded-full peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-rani" />
    </label>
  )
}

// The kite swings on its string around the child's hand, like the real thing.
function HeroScene({ colors }) {
  return (
    <svg viewBox="0 0 520 760" className="w-full" role="img" aria-label="A child on a rooftop flying a kite with four panels: Learn, Explore, Create, Apply">
      <g className="kite-swing" style={{ transformOrigin: '474px 582px' }}>
        <path d="M250 216Q440 360 474 582" fill="none" stroke="#C08A1E" strokeWidth="1.6" />
        <g transform="translate(70 0) scale(1.8)" style={{ filter: 'drop-shadow(0 18px 22px rgb(27 42 65 / 0.18))' }}>
          <KiteShape colors={colors} />
        </g>
      </g>
      <Child x="370" y="560" width="120" height="200" />
    </svg>
  )
}

function Hero({ plan, setPlan }) {
  const interest = INTERESTS.find((x) => x.id === plan.interest)
  return (
    <section id="top" className="relative overflow-hidden">
      <SkyKites className="hidden md:block" />
      <Skyline className="absolute inset-x-0 bottom-0 h-[240px] w-full" />
      <div className="relative z-10 mx-auto grid max-w-[77.5rem] gap-4 px-4 pt-8 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pt-14">
        <div className="pb-6 lg:pb-[230px]">
          <h1 className="display text-[clamp(2.75rem,8.4vw,5.6rem)]">
            Learning beyond <span className="text-rani">classrooms.</span>
          </h1>
          <p className="mt-6 max-w-[32rem] text-[1.15rem] leading-relaxed text-ink-soft md:text-[1.25rem]">
            Homeschooling in Gandhinagar with strong academics, real AI skills and a path built around your child.
          </p>

          <form className="mt-8 max-w-[36rem] space-y-5" onSubmit={(e) => e.preventDefault()} aria-label="Build an example learning path">
            <fieldset>
              <legend className="label text-navy">Your child’s age</legend>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {AGES.map((a) => (
                  <Radio key={a} name="age" value={a} checked={plan.age === a} onChange={() => setPlan({ ...plan, age: a })}>{a}</Radio>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="label text-navy">They light up for</legend>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {INTERESTS.map((x) => (
                  <Radio key={x.id} name="interest" value={x.id} checked={plan.interest === x.id} onChange={() => setPlan({ ...plan, interest: x.id })}>{x.name}</Radio>
                ))}
              </div>
            </fieldset>
          </form>

          <ol className="mt-6 grid max-w-[36rem] gap-x-6 gap-y-2 sm:grid-cols-2" aria-live="polite" aria-label={`Example path for a ${plan.age} year-old`}>
            {interest.panels.map((line, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[0.95rem] leading-snug text-ink">
                <svg viewBox="0 0 10 10" width="12" height="12" className="mt-1 shrink-0" aria-hidden="true"><path d="M5 0 10 5 5 10 0 5Z" fill={interest.colors[i]} style={{ transition: 'fill .7s' }} /></svg>
                {line}
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#enquire" onClick={() => track('cta_click', { where: 'hero', ...plan })} className="btn btn-primary text-[1.05rem]">
              Book a free counselling call <Icon.arrow />
            </a>
            <a href={waLink(WA_TEXT, 'hero')} onClick={() => track('whatsapp_click', { where: 'hero' })} target="_blank" rel="noopener" className="btn btn-ghost bg-sky/70 text-[1.05rem]">
              <Icon.chat /> Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="mx-auto mb-[22px] w-[min(86vw,30rem)] self-end lg:w-[34rem] lg:max-w-full">
          <HeroScene colors={interest.colors} />
        </div>
      </div>
    </section>
  )
}

/* ---------- the problem ---------- */
function Truths() {
  return (
    <section className="relative overflow-hidden bg-rani text-white">
      <SkyKites tone="#ffffff" />
      <div className="relative mx-auto max-w-[77.5rem] px-4 py-20 md:px-10 md:py-28">
        <h2 data-reveal className="text-[1.35rem] font-semibold !text-white/90 md:text-[1.6rem]">Sound familiar?</h2>
        <ul className="mt-8 space-y-8 md:mt-12 md:space-y-10">
          {TRUTHS.map(([a, b]) => (
            <li key={a} data-reveal className="display text-[clamp(2rem,5.6vw,4.4rem)] !leading-[0.98]">
              {a}<br /><span className="text-marigold">{b}</span>
            </li>
          ))}
        </ul>
        <p data-reveal className="mt-12 max-w-[34rem] text-[1.15rem] text-white/90">
          School wasn’t built around one child at a time. Hoshi is.
        </p>
      </div>
    </section>
  )
}

/* ---------- the model: one kite, four panels ---------- */
function Model() {
  return (
    <section id="model" className="mx-auto max-w-[77.5rem] px-4 py-24 md:px-10 md:py-32">
      <div data-reveal className="max-w-[44rem]">
        <h2 className="display text-[clamp(2.2rem,5vw,3.8rem)]">One kite, four panels.</h2>
        <p className="mt-5 text-ink-soft">A kite only flies when every panel is on. So does a child.</p>
      </div>
      <ol className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-x-10">
        {PILLARS.map((p, i) => (
          <li key={p.word} data-reveal style={{ transitionDelay: `${i * 90}ms` }} className="group text-center">
            <div className="mx-auto w-[min(40vw,13rem)] transition-transform duration-700 ease-[var(--ease-wind)] group-hover:-translate-y-2 group-hover:rotate-3">
              <PillarArt i={i} />
            </div>
            <h3 className="display mt-6 text-[1.6rem] md:text-[2rem]" style={{ color: ['#1B2A41', '#C2255C', '#8A5F0D', '#1F8A84'][i] }}>{p.word}</h3>
            <p className="mx-auto mt-2 max-w-[15rem] text-[0.98rem] leading-snug text-ink">{p.line}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

/* ---------- legal and recognised ---------- */
function Legal() {
  return (
    <section id="legal" className="bg-paper">
      <div className="mx-auto max-w-[77.5rem] px-4 py-24 md:px-10 md:py-32">
        <h2 data-reveal className="display max-w-[46rem] text-[clamp(2.2rem,5vw,3.8rem)]">The four questions every parent asks.</h2>
        <dl className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {LEGAL.map((x, i) => (
            <div key={x.q} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
              <LegalIcon i={i} />
              <dt className="mt-5 text-[1.35rem] font-extrabold leading-tight text-navy" style={{ fontStretch: '115%' }}>{x.q}</dt>
              <dd className="mt-2 text-ink">{x.a}</dd>
              {x.src && <dd className="mt-2 text-[0.8rem] font-semibold text-ink-soft">Source: {x.src}</dd>}
            </div>
          ))}
        </dl>
        <p className="mt-14 text-[0.85rem] text-ink-soft">General information, not legal advice. We confirm your child’s route on the call.</p>
      </div>
    </section>
  )
}

/* ---------- AI and skills ---------- */
const CHAT = [
  ['Child', 'How far is the Sun from Earth?'],
  ['AI', 'The Sun is about 15 million km from Earth.'],
  ['Child', 'My textbook says 150 million km. Can you check?'],
  ['AI', 'You’re right, I made a mistake. It is about 150 million km.'],
]

function ChatDemo() {
  const [ref, seen] = useInView({ threshold: 0.4 })
  const [shown, setShown] = useState(() => (reduced() ? CHAT.length : 0))
  useEffect(() => {
    if (!seen || shown >= CHAT.length) return
    const id = setTimeout(() => setShown((n) => n + 1), shown === 0 ? 200 : 1100)
    return () => clearTimeout(id)
  }, [seen, shown])
  return (
    <figure ref={ref} className="relative overflow-hidden rounded-[1.75rem] bg-navy p-6 text-white md:p-9">
      <MiniKite className="drift absolute -right-2 top-4 w-16 opacity-30" />
      <ol className="relative space-y-5" aria-label="Example AI lab exchange">
        {CHAT.map(([who, text], i) => (
          <li key={i} className={`max-w-[28rem] transition-all duration-700 ${who === 'Child' ? 'ml-auto text-right' : ''} ${i < shown ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}>
            <span className={`label block ${who === 'Child' ? 'text-marigold' : 'text-sky-deep'}`}>{who}</span>
            <span className={`mt-1 block text-[1.1rem] leading-snug ${i === shown - 1 && i < CHAT.length - 1 ? 'caret' : ''}`}>
              {i === 1 ? <>The Sun is about <mark className="rounded bg-rani px-1 text-white">15 million km</mark> from Earth.</> : text}
            </span>
          </li>
        ))}
      </ol>
      <figcaption className="relative mt-8 border-t border-white/20 pt-5 text-[0.95rem] text-white/80">
        The skill isn’t asking AI. It’s noticing when it’s wrong.
      </figcaption>
    </figure>
  )
}

const Check = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" className="mt-0.5 shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#1F8A84" /><path d="M7 12.5l3.2 3.2L17 9" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
)

function AISkills() {
  return (
    <section id="ai" className="mx-auto max-w-[77.5rem] px-4 py-24 md:px-10 md:py-32">
      <div data-reveal>
        <h2 className="display max-w-[54rem] text-[clamp(2.2rem,5vw,3.8rem)]">AI is a skill they learn, not a shortcut they take.</h2>
        <p className="mt-5 max-w-[34rem] text-ink-soft">Every week, with a mentor beside them. Here’s an example six months.</p>
      </div>

      <ol className="relative mt-14 grid gap-7 md:grid-cols-6 md:gap-5">
        <svg data-reveal className="pointer-events-none absolute left-0 top-[7px] hidden h-6 w-full md:block" viewBox="0 0 600 24" preserveAspectRatio="none" aria-hidden="true">
          <path className="string-draw" d="M0 6C100 18 200 0 300 8S500 16 600 4" fill="none" stroke="#C08A1E" strokeWidth="1.5" vectorEffect="non-scaling-stroke" pathLength="1" />
        </svg>
        {AI_MONTHS.map(([title, d], i) => (
          <li key={title} data-reveal style={{ transitionDelay: `${i * 80}ms` }} className="relative grid grid-cols-[auto_1fr] gap-4 md:block">
            <svg viewBox="0 0 20 26" width="20" height="26" className="relative z-10" aria-hidden="true">
              <path d="M10 0 20 10 10 20 0 10Z" fill={['#1B2A41', '#C2255C', '#F2A900', '#1F8A84', '#E0457B', '#1B2A41'][i]} />
              <path d="M10 20 7 26h6Z" fill="#C9A46A" />
            </svg>
            <div className="md:mt-4">
              <span className="label text-ink-soft">Month {i + 1}</span>
              <p className="mt-1 text-[1.1rem] font-bold leading-tight text-navy">{title}</p>
              <p className="mt-1.5 text-[0.95rem] leading-snug text-ink">{d}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-20 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <ChatDemo />
        <div data-reveal>
          <h3 className="text-[1.6rem] font-bold leading-tight text-navy" style={{ fontStretch: '110%' }}>Safe, supervised, honest.</h3>
          <ul className="mt-6 space-y-4 text-ink">
            {['Always with a mentor, on supervised accounts', 'No names, photos or addresses shared', 'Every project shows what AI did', 'Parents see it in the weekly update'].map((x) => (
              <li key={x} className="flex gap-3"><Check />{x}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-24">
        <div data-reveal className="flex flex-wrap items-end justify-between gap-4">
          <h3 className="display text-[clamp(1.8rem,3.6vw,2.6rem)]">What children make</h3>
          <p className="text-[0.9rem] text-ink-soft">Example projects</p>
        </div>
        <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((p, i) => (
            <li key={p.title} data-reveal style={{ transitionDelay: `${i * 90}ms` }} className="group">
              <div className="overflow-hidden rounded-2xl transition-transform duration-700 ease-[var(--ease-wind)] group-hover:-translate-y-1.5">
                <ProjectArt i={i} />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-3">
                <h4 className="text-[1.3rem] font-extrabold leading-tight text-navy" style={{ fontStretch: '115%' }}>{p.title}</h4>
                <span className="shrink-0 text-[0.85rem] font-semibold text-ink-soft">Age {p.age}</span>
              </div>
              <p className="mt-2 text-[0.98rem] leading-snug text-ink">{p.text}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((tag) => (
                  <li key={tag} className="rounded-full px-2.5 py-0.5 text-[0.75rem] font-bold text-white" style={{ background: tag === 'AI' ? '#1B2A41' : ['#1F8A84', '#C2255C', '#8A5F0D', '#1F8A84'][i] }}>{tag}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------- a week ---------- */
const kindOf = (c) =>
  /live/i.test(c) ? 'live' : /self/i.test(c) ? 'self' : /reading|outdoors|free/i.test(c) ? 'out' : 'make'

function Week() {
  return (
    <section id="week" className="bg-sky-deep/45">
      <div className="mx-auto max-w-[77.5rem] px-4 py-24 md:px-10 md:py-32">
        <h2 className="display text-[clamp(2.2rem,5vw,3.8rem)]">What a week looks like.</h2>
        <p className="mt-5 max-w-[36rem] text-ink-soft">A sample week for a 9 to 11 year-old.</p>

        <div className="mt-12 overflow-x-auto pb-2">
          <table className="w-full min-w-[44rem] border-separate border-spacing-1.5 text-[0.95rem]">
            <caption className="sr-only">Sample weekly timetable</caption>
            <thead>
              <tr>
                <th className="w-28" />
                {WEEK.days.map((d) => <th key={d} scope="col" className="label pb-2 text-left text-navy">{d}</th>)}
              </tr>
            </thead>
            <tbody>
              {WEEK.rows.map((r) => (
                <tr key={r.time}>
                  <th scope="row" className="pr-3 text-left text-[0.85rem] font-semibold text-ink-soft">{r.time}</th>
                  {r.cells.map((c, i) => {
                    const k = WEEK.kinds[kindOf(c)]
                    const dark = kindOf(c) === 'live' || kindOf(c) === 'out'
                    return (
                      <td key={i} className={`h-16 rounded-lg px-3 font-semibold ${dark ? 'text-white' : 'text-navy'}`} style={{ background: k.color }}>{c}</td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[0.9rem] text-ink-soft">
          {Object.values(WEEK.kinds).map((k) => (
            <li key={k.label} className="flex items-center gap-2"><span className="size-3 rounded-sm" style={{ background: k.color }} />{k.label}</li>
          ))}
        </ul>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-[1.4rem] font-bold text-navy" style={{ fontStretch: '110%' }}>Your role as a parent</h3>
            <p className="mt-3 text-ink">You don’t have to teach. Stay close, and join a mentor check-in when you like.</p>
          </div>
          <div>
            <h3 className="text-[1.4rem] font-bold text-navy" style={{ fontStretch: '110%' }}>Progress you can see</h3>
            <p className="mt-3 text-ink">A short update every week, a report each term, and the work itself.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- people ---------- */
function People() {
  return (
    <section className="mx-auto max-w-[77.5rem] px-4 py-24 md:px-10 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <figure className="mx-auto w-[min(64vw,17rem)]">
          <svg viewBox="0 0 200 200" className="w-full" role="img" aria-label="Portrait of Navneet Goyal, photo coming soon">
            <polygon points="100,4 196,100 100,196 4,100" fill="#1B2A41" />
            <polygon points="100,4 196,100 100,100" className="tissue" fill="#C2255C" fillOpacity="0.55" />
            <text x="100" y="114" textAnchor="middle" fill="#fff" style={{ fontSize: 40, fontWeight: 800, fontStretch: '125%' }}>NG</text>
          </svg>
          <figcaption className="mt-3 text-center text-[0.85rem] text-ink-soft">Photo coming soon</figcaption>
        </figure>
        <div>
          <h2 className="display text-[clamp(2.2rem,5vw,3.8rem)]">Meet the people behind Hoshi.</h2>
          <blockquote className="mt-8 max-w-[40rem] text-[1.2rem] leading-relaxed text-ink md:text-[1.3rem]">
            “Every child arrives with their own pace and their own questions. We built Hoshi so children in Gandhinagar get a serious academic base and still spend their days thinking, building and making. Call us. We’ll answer honestly, including whether Hoshi is the right fit.”
          </blockquote>
          <p className="mt-5 font-bold text-navy">Navneet Goyal <span className="font-semibold text-ink-soft">· Managing Director</span></p>
        </div>
      </div>

      <div className="mt-24">
        <h3 data-reveal className="text-[1.4rem] font-bold text-navy" style={{ fontStretch: '110%' }}>Every child has three mentors</h3>
        <ul className="mt-8 grid gap-10 md:grid-cols-3">
          {MENTORS.map(([role, text], i) => (
            <li key={role} className="flex gap-4">
              <svg viewBox="0 0 10 10" width="18" height="18" className="mt-1.5 shrink-0" aria-hidden="true"><path d="M5 0 10 5 5 10 0 5Z" fill={['#1B2A41', '#1F8A84', '#C2255C'][i]} /></svg>
              <div>
                <p className="text-[1.15rem] font-bold text-navy">{role}</p>
                <p className="mt-2 text-ink">{text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-[0.95rem] text-ink-soft">Meet the team on your counselling call.</p>
      </div>
    </section>
  )
}

/* ---------- first cohort: tukkal night ---------- */
const LANTERNS = Array.from({ length: 16 }, (_, i) => ({
  left: (i * 37 + 7) % 96,
  size: 14 + ((i * 7) % 18),
  dur: 22 + ((i * 11) % 18),
  delay: -((i * 5.3) % 30),
  rest: 30 + ((i * 41) % 60),
}))

function FirstCohort() {
  return (
    <section className="relative overflow-hidden bg-night text-white">
      <div aria-hidden="true" className="absolute inset-0">
        {LANTERNS.map((l, i) => (
          <span
            key={i}
            className="lantern absolute bottom-0 block rounded-t-[45%] rounded-b-[30%]"
            style={{
              left: `${l.left}%`,
              '--rest': `${l.rest}%`,
              width: l.size,
              height: l.size * 1.3,
              animationDuration: `${l.dur}s, 2.4s`,
              animationDelay: `${l.delay}s, ${i * 0.3}s`,
              background: 'radial-gradient(circle at 50% 70%, #FFE3A3 0%, #F7A531 45%, #C85A1B 100%)',
              filter: `drop-shadow(0 6px ${l.size}px rgb(247 165 49 / 0.55))`,
            }}
          />
        ))}
      </div>
      <Skyline night className="absolute inset-x-0 bottom-0 h-[240px] w-full" />
      <div className="relative mx-auto max-w-[77.5rem] px-4 pt-28 pb-[280px] md:px-10 md:pt-40">
        <h2 className="display max-w-[50rem] text-[clamp(2.4rem,6vw,4.8rem)] !text-white">Our first lanterns go up this year.</h2>
        <p className="mt-8 max-w-[38rem] text-[1.15rem] leading-relaxed text-white/85">
          On Uttarayan night, families send paper lanterns up one by one until the sky is lit. Hoshi is new, so instead of borrowed praise, our first students’ work will appear here.
        </p>
        <a href="#enquire" onClick={() => track('cta_click', { where: 'cohort' })} className="btn btn-gold mt-10 text-[1.05rem]">
          Join as a founding family <Icon.arrow />
        </a>
      </div>
    </section>
  )
}

/* ---------- FAQ ---------- */
function Faq() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  }
  return (
    <section id="faq" className="mx-auto max-w-[77.5rem] px-4 py-24 md:px-10 md:py-32">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <h2 className="display text-[clamp(2.2rem,5vw,3.8rem)]">Everything else you’re wondering.</h2>
          <p className="mt-5 max-w-[24rem] text-ink-soft">Can’t find your question? Ask us on <a href={waLink(WA_TEXT, 'faq')} target="_blank" rel="noopener" className="font-semibold text-navy underline">WhatsApp</a>.</p>
        </div>
        <div>
          {FAQ.map(([q, a]) => (
            <details key={q} className="group border-t border-navy/20 last:border-b">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-[1.15rem] font-bold text-navy marker:content-none [&::-webkit-details-marker]:hidden">
                {q}
                <Icon.plus className="shrink-0 transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="max-w-[40rem] pb-6 text-ink">{a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  )
}

/* ---------- enquiry ---------- */
const normalisePhone = (v) => v.replace(/[\s-]/g, '').replace(/^(\+91|91|0)(?=\d{10}$)/, '')

function Enquiry({ plan }) {
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const interest = INTERESTS.find((x) => x.id === plan.interest)

  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    if (f.get('website')) return // honeypot
    const name = String(f.get('name') || '').trim()
    const phone = normalisePhone(String(f.get('phone') || ''))
    const errs = {}
    if (!name) errs.name = 'Please tell us your name.'
    if (!/^[6-9]\d{9}$/.test(phone)) errs.phone = 'Enter a 10-digit Indian mobile number, like 98765 43210.'
    setErrors(errs)
    if (Object.keys(errs).length) {
      e.currentTarget.querySelector(`[name="${Object.keys(errs)[0]}"]`)?.focus()
      return
    }
    const msg = [
      WA_TEXT,
      `Parent: ${name}`,
      `Mobile: ${phone}`,
      `Child: ${f.get('child') || '-'}`,
      `Language: ${f.get('language')}`,
      `Interest: ${interest.name}`,
      f.get('message') ? `Note: ${f.get('message')}` : '',
    ].filter(Boolean).join('\n')
    // ponytail: no backend yet, so the lead goes to Hoshi's WhatsApp. Swap for a serverless endpoint (Sheets + email) when hosting is chosen.
    track('form_submit', { language: f.get('language'), interest: plan.interest })
    window.open(waLink(msg, 'form'), '_blank', 'noopener')
    setSent(true)
  }

  return (
    <section id="enquire" className="bg-paper">
      <div className="mx-auto grid max-w-[77.5rem] gap-14 px-4 py-24 md:px-10 md:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <h2 className="display text-[clamp(2.4rem,5.6vw,4.2rem)]">Book a free counselling call.</h2>
          <p className="mt-6 max-w-[30rem] text-[1.1rem] text-ink-soft">
            Twenty minutes with the Hoshi team. Ask anything: legality, certificates, fees, a normal day. No obligation to join.
          </p>
          <div className="mt-10 flex items-end gap-6">
            <Firki className="sway w-24 md:w-28" />
            <div className="space-y-3">
              <a href={`tel:+91${PHONE}`} onClick={() => track('call_click', { where: 'enquiry' })} className="flex items-center gap-3 text-[1.25rem] font-bold text-navy hover:underline">
                <Icon.phone /> 77790 91145
              </a>
              <a href={waLink(WA_TEXT, 'enquiry')} onClick={() => track('whatsapp_click', { where: 'enquiry' })} target="_blank" rel="noopener" className="flex items-center gap-3 text-[1.25rem] font-bold text-navy hover:underline">
                <Icon.chat /> WhatsApp us
              </a>
            </div>
          </div>
        </div>

        {sent ? (
          <div role="status" className="self-center rounded-[1.75rem] bg-navy p-8 text-white md:p-12">
            <h3 className="display text-[2.2rem] !text-white">Thank you.</h3>
            <p className="mt-4 text-[1.1rem] text-white/85">
              Your details are ready to send in WhatsApp. Once they arrive, the Hoshi team will call you to set up your counselling session. If WhatsApp didn’t open, call us on <a className="font-bold text-marigold underline" href={`tel:+91${PHONE}`}>77790 91145</a>.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2" aria-label="Enquiry form">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="mb-2 block font-semibold text-navy">Your name</label>
              <input id="name" name="name" autoComplete="name" className="field" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} />
              {errors.name && <p id="name-err" className="mt-2 text-[0.95rem] font-semibold text-rani">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block font-semibold text-navy">Mobile number</label>
              <input id="phone" name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" placeholder="98765 43210" className="field tabular-nums" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-err' : undefined} />
              {errors.phone && <p id="phone-err" className="mt-2 text-[0.95rem] font-semibold text-rani">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="child" className="mb-2 block font-semibold text-navy">Child’s age or class</label>
              <input id="child" name="child" defaultValue={`${plan.age} years`} key={plan.age} className="field" />
            </div>
            <fieldset className="sm:col-span-2">
              <legend className="mb-2 font-semibold text-navy">Preferred language for the call</legend>
              <div className="flex flex-wrap gap-2">
                {['English', 'Hindi', 'Gujarati'].map((l, i) => (
                  <label key={l} className="relative inline-flex min-h-11 cursor-pointer items-center rounded-full bg-white px-5 font-semibold text-navy shadow-[inset_0_0_0_1.5px_rgb(27_42_65/0.25)] has-[:checked]:bg-navy has-[:checked]:text-white has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-rani">
                    <input type="radio" name="language" value={l} defaultChecked={i === 0} className="absolute inset-0 cursor-pointer opacity-0" />
                    {l}
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block font-semibold text-navy">Anything you’d like us to know? <span className="font-normal text-ink-soft">(optional)</span></label>
              <textarea id="message" name="message" rows={3} className="field resize-y" />
            </div>
            <div aria-hidden="true" className="absolute -left-[9999px]">
              <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="btn btn-primary w-full text-[1.1rem] sm:w-auto">
                Request my call <Icon.arrow />
              </button>
              <p className="mt-4 text-[0.85rem] text-ink-soft">
                We only use these details to call you about Hoshi. We never ask for your child’s full name or photo. <a href="/privacy.html" className="font-semibold text-navy underline">Privacy policy</a>
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-navy pb-28 text-white/80 md:pb-0">
      <div className="mx-auto grid max-w-[77.5rem] gap-10 px-4 py-14 md:grid-cols-3 md:px-10">
        <div>
          <Wordmark light />
          <p className="mt-5 font-semibold text-white">Learn. Explore. Create. Apply.</p>
        </div>
        <address className="not-italic leading-relaxed">
          C/9, Patnagar Yojna Bhavan<br />Sector 16, Gandhinagar, Gujarat<br />
          <a href="https://www.google.com/maps/search/?api=1&query=Patnagar+Yojna+Bhavan+Sector+16+Gandhinagar" target="_blank" rel="noopener" className="font-semibold text-marigold underline">Open in Maps</a>
        </address>
        <div className="space-y-2">
          <a href={`tel:+91${PHONE}`} className="block font-semibold text-white hover:underline">+91 77790 91145</a>
          <a href="/privacy.html" className="block hover:underline">Privacy policy</a>
          <p className="pt-4 text-[0.85rem] text-white/60">© {new Date().getFullYear()} Hoshi Academy</p>
        </div>
      </div>
    </footer>
  )
}

/* ---------- sticky mobile bar: Call + WhatsApp ---------- */
function MobileBar() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const hero = document.getElementById('top')
    const form = document.getElementById('enquire')
    let pastHero = false, atForm = false
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.target === hero) pastHero = !e.isIntersecting
        if (e.target === form) atForm = e.isIntersecting
      })
      setShow(pastHero && !atForm)
    })
    io.observe(hero); io.observe(form)
    return () => io.disconnect()
  }, [])
  return (
    <div className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 bg-sky p-3 shadow-[0_-8px_24px_-16px_rgb(17_28_45/0.5)] transition-transform duration-500 md:hidden ${show ? 'translate-y-0' : 'translate-y-full'}`} aria-hidden={!show}>
      <a href={`tel:+91${PHONE}`} tabIndex={show ? 0 : -1} onClick={() => track('call_click', { where: 'bar' })} className="btn btn-primary"><Icon.phone /> Call</a>
      <a href={waLink(WA_TEXT, 'bar')} tabIndex={show ? 0 : -1} onClick={() => track('whatsapp_click', { where: 'bar' })} target="_blank" rel="noopener" className="btn btn-gold"><Icon.chat /> WhatsApp</a>
    </div>
  )
}

export default function App() {
  const [plan, setPlan] = useState({ age: '9–11', interest: 'science' })
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { rootMargin: '0px 0px -10% 0px' })
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return (
    <>
      <a href="#enquire" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-navy focus:px-5 focus:py-3 focus:text-white">Skip to enquiry form</a>
      <Header />
      <main>
        <Hero plan={plan} setPlan={setPlan} />
        <Truths />
        <Model />
        <Legal />
        <AISkills />
        <Week />
        <People />
        <FirstCohort />
        <Faq />
        <Enquiry plan={plan} />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
