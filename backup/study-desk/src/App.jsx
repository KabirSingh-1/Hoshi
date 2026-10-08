import { useEffect, useRef, useState } from 'react'
import { PHONE, WA_TEXT, PILLARS, LEGAL, AI_MONTHS, PROJECTS, WEEK, MENTORS, FAQ, SUBJECTS, COMPARE, STEPS, REPORT } from './content'
import { StudyScene, LineIcon, ArchMark } from './Art'
import { normalisePhone, isIndianMobile } from './phone'

// ponytail: pushes to GTM/GA4 dataLayer when present; no-op until analytics is installed.
const track = (event, data = {}) => window.dataLayer?.push({ event, ...data })
const waLink = (text = WA_TEXT, source = 'site') =>
  `https://wa.me/91${PHONE}?text=${encodeURIComponent(`${text} [${source}]`)}`
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const wrap = 'mx-auto max-w-[76rem] px-5 md:px-10'

/* ---------- icons ---------- */
const Arrow = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
const Chat = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.2Z" /></svg>
)
const Phone = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 3h3l2 5-2.5 1.5a11 11 0 0 0 7 7L16 14l5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z" /></svg>
)
const Tick = ({ className = 'text-gold' }) => (
  <svg viewBox="0 0 20 20" width="18" height="18" className={`mt-1 shrink-0 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="10" cy="10" r="8.5" /><path d="M6.5 10.2l2.4 2.4 4.6-4.8" /></svg>
)
const Plus = ({ className }) => (
  <svg viewBox="0 0 24 24" width="22" height="22" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
)

/* ---------- header ---------- */
function Wordmark() {
  return (
    <span className="inline-flex flex-col leading-none">
      <span className="flex items-baseline gap-2">
        <span className="text-[1.3rem] font-bold tracking-[0.12em] text-ivory">HOSHI</span>
        <span className="text-[0.72rem] font-semibold tracking-[0.32em] text-gold">ACADEMY</span>
      </span>
      <span className="mt-1.5 h-px w-full bg-gold/70" />
    </span>
  )
}

const NAV = [['#pathways', 'Pathways'], ['#approach', 'Approach'], ['#ai', 'AI & technology'], ['#week', 'A week'], ['#faq', 'FAQ']]

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy">
      <div className={`${wrap} flex h-[4.5rem] items-center justify-between gap-4`}>
        <a href="#top" aria-label="Hoshi Academy, back to top"><Wordmark /></a>
        <nav aria-label="Sections" className="hidden lg:block">
          <ul className="flex gap-8 text-[0.92rem] text-mist">
            {NAV.map(([href, label]) => <li key={href}><a href={href} className="transition-colors hover:text-ivory">{label}</a></li>)}
          </ul>
        </nav>
        <a href="#enquire" onClick={() => track('cta_click', { where: 'header' })} className="btn btn-gold !min-h-11 !px-5 text-[0.92rem]">
          <span className="sm:hidden">Consultation</span><span className="hidden sm:inline">Book a private consultation</span>
        </a>
      </div>
    </header>
  )
}

/* ---------- hero ---------- */
const LIVE = ['Mathematics', 'Physics', 'English literature', 'AI & coding']
const card = 'bob absolute hidden w-[14rem] rounded-2xl bg-navy-2 p-4 shadow-[0_24px_50px_-24px_rgb(0_0_0/0.7)] ring-1 ring-gold/25 sm:block'

function LiveCard() {
  const [i, setI] = useState(0)
  useEffect(() => {
    if (reduced()) return
    const id = setInterval(() => setI((n) => (n + 1) % LIVE.length), 2800)
    return () => clearInterval(id)
  }, [])
  return (
    <div className={`${card} right-0 top-0 sm:-right-4`}>
      <p className="text-[0.82rem] text-mist">10:00 · with a mentor</p>
      <p key={i} className="serif mt-1 text-[1.35rem] text-ivory">{LIVE[i]}</p>
      <p className="mt-1 text-[0.78rem] text-mist/80">Sample timetable</p>
    </div>
  )
}

function ProgressCard() {
  return (
    <div className={`${card} bottom-0 left-0 sm:-left-6`} style={{ animationDelay: '-3s' }}>
      <p className="text-[0.82rem] text-mist">Term report · sample</p>
      <ul className="mt-2 divide-y divide-white/10">
        {REPORT.slice(0, 3).map(([s, , grade]) => (
          <li key={s} className="flex items-baseline justify-between py-1.5 text-[0.88rem] text-mist">
            <span>{s}</span><span className="serif text-[1.35rem] text-gold">{grade}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy text-ivory">
      <div className={`${wrap} grid items-center gap-8 pt-6 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-20 lg:pb-28`}>
        <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-[34rem] sm:pt-16 sm:pb-20 lg:order-2">
          <StudyScene className="w-full" />
          <LiveCard />
          <ProgressCard />
        </div>
        <div className="lg:order-1">
          <h1 className="serif text-[clamp(2.6rem,6.6vw,5.4rem)] text-ivory">
            A private school, built around <span className="text-gold">one child.</span>
          </h1>
          <p className="mt-6 max-w-[32rem] text-[1.1rem] leading-relaxed text-mist md:text-[1.25rem]">
            Bespoke homeschooling in Gandhinagar: a dedicated mentor team, a rigorous academic core, and fluency in the technology your child’s future will run on.
          </p>
          <ul className="mt-7 hidden space-y-2.5 text-[1.02rem] text-ivory/90 sm:block">
            {['A dedicated team of mentors for your child', 'A rigorous core, with a clear board-exam pathway', 'AI and technology, taught with judgement'].map((x) => (
              <li key={x} className="flex gap-3"><Tick />{x}</li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a href="#enquire" onClick={() => track('cta_click', { where: 'hero' })} className="btn btn-gold w-full text-[1.02rem] sm:w-auto">Book a private consultation <Arrow /></a>
            <a href={waLink(WA_TEXT, 'hero')} onClick={() => track('whatsapp_click', { where: 'hero' })} target="_blank" rel="noopener" className="inline-flex min-h-11 items-center gap-2 text-ivory/85 underline decoration-gold/60 underline-offset-4 hover:text-ivory"><Chat /> or message us on WhatsApp</a>
          </div>
          <p className="mt-8 text-[0.9rem] text-mist">Sector 16, Gandhinagar · Consultations by appointment</p>
        </div>
      </div>
    </section>
  )
}

/* ---------- pathways: the legal questions, answered first ---------- */
function Pathways() {
  return (
    <section id="pathways" className={`${wrap} py-24 md:py-32`}>
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div data-reveal>
          <h2 className="serif text-[clamp(2.2rem,4.6vw,3.6rem)] text-navy">The questions every parent asks first.</h2>
          <p className="mt-5 max-w-[24rem] text-[0.9rem] text-ink-soft">General information, not legal advice. Your child’s route is confirmed during your consultation.</p>
        </div>
        <dl className="border-t border-gold">
          {LEGAL.map((x) => (
            <div key={x.q} data-reveal className="grid gap-2 border-b border-line py-7 sm:grid-cols-[0.9fr_1.1fr] sm:gap-8">
              <dt className="serif text-[1.45rem] leading-tight text-navy">{x.q}</dt>
              <dd className="text-ink-soft">
                {x.a}
                {x.src && <span className="mt-2 block text-[0.8rem]">Source: {x.src}</span>}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

/* ---------- approach ---------- */
const PILLAR_ICONS = ['book', 'compass', 'nib', 'key']

function Approach() {
  return (
    <section id="approach" className="bg-porcelain">
      <div className={`${wrap} py-24 md:py-32`}>
        <h2 data-reveal className="serif max-w-[40rem] text-[clamp(2.2rem,4.6vw,3.6rem)] text-navy">Rigour, curiosity, and the skills of the future.</h2>
        <ol className="mt-14">
          {PILLARS.map((p, i) => (
            <li key={p.word} data-reveal className="group grid grid-cols-[1fr_auto] items-center gap-6 border-t border-navy/15 py-7 last:border-b md:grid-cols-[16rem_1fr_auto]">
              <h3 className="serif text-[clamp(2.2rem,4vw,3.4rem)] text-navy transition-colors duration-500 group-hover:text-gold-deep">{p.word}.</h3>
              <p className="col-span-2 row-start-2 max-w-[32rem] text-ink-soft md:col-span-1 md:row-start-auto">{p.line}</p>
              <LineIcon name={PILLAR_ICONS[i]} className="text-gold-deep transition-transform duration-700 ease-[var(--ease-silk)] group-hover:-translate-y-1" />
            </li>
          ))}
        </ol>
        <ul data-reveal className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-[1.02rem] text-navy" aria-label="Subjects">
          {SUBJECTS.map((s, i) => (
            <li key={s.name} className="flex items-center gap-6">{s.name}{i < SUBJECTS.length - 1 && <span className="size-1 rounded-full bg-gold" aria-hidden="true" />}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------- compare ---------- */
function Compare() {
  return (
    <section className={`${wrap} py-24 md:py-32`}>
      <h2 data-reveal className="serif max-w-[44rem] text-[clamp(2.2rem,4.6vw,3.6rem)] text-navy">What changes when school is built around your child.</h2>
      {/* phones: stacked rows, so the Hoshi answer is always on screen */}
      <dl className="mt-12 sm:hidden">
        {COMPARE.map(([k, a, b]) => (
          <div key={k} data-reveal className="border-t border-navy/15 py-5">
            <dt className="font-semibold text-navy">{k}</dt>
            <dd className="mt-2 flex gap-3 text-navy"><Tick className="text-gold-deep" />{b}</dd>
            <dd className="mt-1 pl-[30px] text-[0.92rem] text-ink-soft">Conventional school: {a}</dd>
          </div>
        ))}
      </dl>
      <table data-reveal className="mt-14 hidden w-full text-left sm:table">
        <thead>
          <tr className="border-b border-navy/15">
            <th className="w-[26%] pb-4"><span className="sr-only">Aspect</span></th>
            <th scope="col" className="label pb-4 text-ink-soft">A conventional school</th>
            <th scope="col" className="label pb-4 text-gold-deep">Hoshi Academy</th>
          </tr>
        </thead>
        <tbody>
          {COMPARE.map(([k, a, b]) => (
            <tr key={k} className="border-b border-navy/10">
              <th scope="row" className="py-6 pr-6 font-semibold text-navy">{k}</th>
              <td className="py-6 pr-6 text-ink-soft">{a}</td>
              <td className="py-6 text-navy"><span className="flex gap-3"><Tick className="text-gold-deep" />{b}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

/* ---------- AI ---------- */
const CHAT = [
  ['Student', 'How far is the Sun from Earth?'],
  ['AI', 'The Sun is about 15 million km from Earth.'],
  ['Student', 'My textbook says 150 million km. Can you check?'],
  ['AI', 'You’re right, I made a mistake. It is about 150 million km.'],
]

function useInView(threshold = 0.4) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), { threshold })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return [ref, seen]
}

function ChatDemo() {
  const [ref, seen] = useInView()
  const [shown, setShown] = useState(() => (reduced() ? CHAT.length : 0))
  useEffect(() => {
    if (!seen || shown >= CHAT.length) return
    const id = setTimeout(() => setShown((n) => n + 1), shown === 0 ? 200 : 1100)
    return () => clearTimeout(id)
  }, [seen, shown])
  return (
    <figure ref={ref} className="rounded-2xl bg-navy-2 p-7 ring-1 ring-gold/20 md:p-9">
      <ol className="space-y-5" aria-label="Example AI lab exchange">
        {CHAT.map(([who, text], i) => (
          <li key={i} className={`max-w-[26rem] transition-all duration-700 ${who === 'Student' ? 'ml-auto text-right' : ''} ${i < shown ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}>
            <span className={`label block ${who === 'Student' ? 'text-gold' : 'text-mist'}`}>{who}</span>
            <span className={`mt-1.5 block text-[1.08rem] leading-snug text-ivory ${i === shown - 1 && i < CHAT.length - 1 ? 'caret' : ''}`}>
              {i === 1 ? <>The Sun is about <mark className="rounded bg-gold px-1 text-navy">15 million km</mark> from Earth.</> : text}
            </span>
          </li>
        ))}
      </ol>
      <figcaption className="mt-8 border-t border-white/10 pt-5 text-[0.92rem] text-mist">The skill isn’t asking AI. It’s knowing when it’s wrong.</figcaption>
    </figure>
  )
}

function AI() {
  return (
    <section id="ai" className="bg-navy text-ivory">
      <div className={`${wrap} py-24 md:py-32`}>
        <div data-reveal className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 className="serif text-[clamp(2.2rem,4.6vw,3.6rem)] text-ivory">AI fluency, taught with <span className="text-gold">judgement.</span></h2>
          <p className="max-w-[30rem] text-mist lg:justify-self-end">Every week, under a mentor’s eye, on supervised accounts. Children learn to question AI, check it, and build with it.</p>
        </div>

        <div className="mt-16 grid items-start gap-14 lg:grid-cols-2">
          <ChatDemo />
          <ol className="grid gap-x-8 gap-y-7 sm:grid-cols-2" aria-label="Example six-month AI skills path">
            {AI_MONTHS.map(([title, d], i) => (
              <li key={title} data-reveal style={{ transitionDelay: `${i * 70}ms` }} className="border-t border-white/15 pt-4">
                <span className="text-[0.8rem] tabular-nums text-gold">Month {i + 1}</span>
                <p className="mt-1 font-semibold text-ivory">{title}</p>
                <p className="mt-1 text-[0.95rem] text-mist">{d}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-24">
          <div data-reveal className="flex flex-wrap items-end justify-between gap-3">
            <h3 className="serif text-[clamp(1.8rem,3.2vw,2.5rem)] text-ivory">What children make</h3>
            <p className="text-[0.85rem] text-mist">Example projects</p>
          </div>
          <ul className="mt-10 grid gap-x-14 sm:grid-cols-2">
            {PROJECTS.map((p) => (
              <li key={p.title} data-reveal className="border-t border-gold/40 py-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="serif text-[1.45rem] text-ivory">{p.title}</h4>
                  <span className="shrink-0 text-[0.85rem] text-mist">Age {p.age}</span>
                </div>
                <p className="mt-2 text-mist">{p.text}</p>
                <p className="mt-3 text-[0.8rem] tracking-[0.12em] text-gold uppercase">{p.tags.join(' · ')}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------- a week + report, set as printed stationery ---------- */
const isLive = (c) => /live/i.test(c)

function Letterhead({ right }) {
  return (
    <header className="flex items-end justify-between gap-4 border-b border-gold pb-4">
      <span className="flex items-center gap-3">
        <ArchMark className="h-9 w-8 text-gold-deep" />
        <span className="leading-none">
          <span className="block text-[0.95rem] font-bold tracking-[0.14em] text-navy">HOSHI</span>
          <span className="block text-[0.6rem] font-semibold tracking-[0.32em] text-gold-deep">ACADEMY</span>
        </span>
      </span>
      <span className="text-right text-[0.8rem] text-ink-soft">{right}</span>
    </header>
  )
}

const paper = 'rounded-sm bg-white p-7 shadow-[0_30px_60px_-34px_rgb(15_27_51/0.45)] ring-1 ring-line md:p-10'

function Week() {
  return (
    <section id="week" className="bg-porcelain">
      <div className={`${wrap} py-24 md:py-32`}>
        <h2 data-reveal className="serif max-w-[40rem] text-[clamp(2.2rem,4.6vw,3.6rem)] text-navy">A week, and the report that follows.</h2>

        <article data-reveal className={`${paper} mt-12`}>
          <Letterhead right={<>Weekly timetable<br />Sample, age 9 to 11</>} />
          {/* phones: one row per day */}
          <ul className="mt-2 sm:hidden">
            {WEEK.days.map((d, di) => (
              <li key={d} className="grid grid-cols-[3rem_1fr] gap-3 border-b border-line py-3 text-[0.92rem]">
                <span className="label pt-0.5 text-gold-deep">{d}</span>
                <span className="text-ink-soft">{WEEK.rows.map((r) => r.cells[di]).map((c, i) => <span key={i} className={isLive(c) ? 'font-semibold text-navy' : ''}>{i > 0 && ' · '}{c}</span>)}</span>
              </li>
            ))}
          </ul>
          <table className="mt-4 hidden w-full border-collapse text-left text-[0.95rem] sm:table">
            <caption className="sr-only">Sample weekly timetable</caption>
            <thead>
              <tr><th className="w-32 py-3"><span className="sr-only">Time</span></th>{WEEK.days.map((d) => <th key={d} scope="col" className="label py-3 text-gold-deep">{d}</th>)}</tr>
            </thead>
            <tbody>
              {WEEK.rows.map((r) => (
                <tr key={r.time} className="border-t border-line">
                  <th scope="row" className="py-4 pr-4 text-[0.85rem] font-normal text-ink-soft">{r.time}</th>
                  {r.cells.map((c, i) => <td key={i} className={`py-4 pr-3 ${isLive(c) ? 'serif text-[1.08rem] text-navy' : 'text-ink-soft'}`}>{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-5 text-[0.82rem] text-ink-soft"><span className="serif text-navy">Serif</span> marks a live lesson with a mentor.</p>
        </article>

        <div className="mt-14 grid items-start gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <article data-reveal className={paper}>
            <Letterhead right={<>Term report<br />Sample</>} />
            <table className="mt-2 w-full text-left">
              <thead className="sr-only"><tr><th>Subject</th><th>Grade</th><th>Mentor’s note</th></tr></thead>
              <tbody>
                {REPORT.map(([s, note, grade]) => (
                  <tr key={s} className="border-b border-line align-baseline">
                    <th scope="row" className="py-4 pr-4 font-semibold text-navy">{s}</th>
                    <td className="serif py-4 pr-5 text-[2rem] text-gold-deep">{grade}</td>
                    <td className="py-4 text-[0.95rem] text-ink-soft">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-8 flex justify-end">
              <div className="w-44 text-center">
                <p className="serif text-[1.3rem] italic text-navy">Your child’s mentor</p>
                <div className="mt-1 h-px bg-navy/40" />
                <p className="mt-1 text-[0.75rem] text-ink-soft">Signature</p>
              </div>
            </div>
          </article>
          <div data-reveal className="space-y-10 lg:pt-6">
            <div>
              <h3 className="serif text-[1.5rem] text-navy">Your role as a parent</h3>
              <p className="mt-3 text-ink-soft">You don’t teach. You stay close, and join a mentor review whenever you like.</p>
            </div>
            <div>
              <h3 className="serif text-[1.5rem] text-navy">Progress you can see</h3>
              <p className="mt-3 text-ink-soft">A short note every week, a full report each term, and the work itself.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- how it begins ---------- */
function Steps() {
  return (
    <section className={`${wrap} py-24 md:py-32`}>
      <h2 data-reveal className="serif text-[clamp(2.2rem,4.6vw,3.6rem)] text-navy">How it begins.</h2>
      <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map(([t, d], i) => (
          <li key={t} data-reveal style={{ transitionDelay: `${i * 90}ms` }} className="border-t border-gold pt-6">
            <span className="serif text-[3rem] text-gold-deep">{i + 1}</span>
            <h3 className="mt-2 text-[1.15rem] font-semibold text-navy">{t}</h3>
            <p className="mt-2 text-ink-soft">{d}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

/* ---------- letter + mentors ---------- */
function Letter() {
  return (
    <section className="bg-porcelain">
      <div className={`${wrap} grid gap-16 py-24 md:py-32 lg:grid-cols-[1.2fr_0.8fr]`}>
        <article data-reveal className={`${paper} max-w-[42rem]`}>
          <Letterhead right={<>C/9, Patnagar Yojna Bhavan<br />Sector 16, Gandhinagar</>} />
          <h2 className="serif mt-8 text-[clamp(1.8rem,3.4vw,2.4rem)] text-navy">Dear parent,</h2>
          <div className="mt-6 space-y-5 text-[1.08rem] leading-relaxed text-ink">
            <p>Every child arrives with their own pace and their own questions. A classroom of thirty rarely has time for either.</p>
            <p>We founded Hoshi Academy so that children in Gandhinagar could have a serious academic foundation and still spend their days thinking, building and making things that matter to them.</p>
            <p>If you are considering homeschooling, speak with us. We will answer honestly, including whether Hoshi is the right fit for your family.</p>
          </div>
          <div className="mt-10">
            <p className="serif text-[2rem] italic text-navy">Navneet Goyal</p>
            <div className="mt-1 h-px w-40 bg-gold" />
            <p className="mt-2 text-[0.85rem] text-ink-soft">Managing Director, Hoshi Academy</p>
          </div>
        </article>
        <aside data-reveal className="lg:pt-10">
          <h3 className="serif text-[1.8rem] text-navy">Every child’s mentor team</h3>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {MENTORS.map(([role, text]) => (
              <li key={role} className="py-5">
                <p className="font-semibold text-navy">{role}</p>
                <p className="mt-1 text-ink-soft">{text}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[0.9rem] text-ink-soft">You meet the team during your consultation.</p>
        </aside>
      </div>
    </section>
  )
}

/* ---------- founding families ---------- */
function Founding() {
  return (
    <section className="bg-navy text-ivory">
      <div className={`${wrap} grid gap-10 py-24 md:py-32 lg:grid-cols-[1.2fr_0.8fr] lg:items-end`}>
        <div data-reveal>
          <h2 className="serif text-[clamp(2.4rem,5vw,4rem)] text-ivory">Our founding families.</h2>
          <p className="mt-6 max-w-[34rem] text-[1.12rem] text-mist">Hoshi Academy is new. Rather than borrowed praise, the work of our first students will appear here as it happens. We are welcoming a small group of founding families now.</p>
        </div>
        <div data-reveal className="lg:justify-self-end">
          <a href="#enquire" onClick={() => track('cta_click', { where: 'founding' })} className="btn btn-gold text-[1.02rem]">Begin a conversation <Arrow /></a>
        </div>
      </div>
    </section>
  )
}

/* ---------- FAQ ---------- */
function Faq() {
  const schema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }
  return (
    <section id="faq" className={`${wrap} py-24 md:py-32`}>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <h2 className="serif text-[clamp(2.2rem,4.6vw,3.6rem)] text-navy">Questions, answered.</h2>
          <p className="mt-5 text-ink-soft">Something else? <a href={waLink(WA_TEXT, 'faq')} target="_blank" rel="noopener" className="text-navy underline">Message us on WhatsApp</a>.</p>
        </div>
        <div>
          {FAQ.map(([q, a]) => (
            <details key={q} className="group border-t border-line last:border-b">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-[1.12rem] font-semibold text-navy [&::-webkit-details-marker]:hidden">
                {q}<Plus className="shrink-0 text-gold-deep transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="max-w-[40rem] pb-6 text-ink-soft">{a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  )
}

/* ---------- enquiry ---------- */
function Enquiry() {
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    if (f.get('website')) return // honeypot
    const name = String(f.get('name') || '').trim()
    const errs = {}
    if (!name) errs.name = 'Please tell us your name.'
    if (!isIndianMobile(f.get('phone') || '')) errs.phone = 'Enter a 10-digit Indian mobile number, like 98765 43210.'
    setErrors(errs)
    if (Object.keys(errs).length) return e.currentTarget.querySelector(`[name="${Object.keys(errs)[0]}"]`)?.focus()
    const msg = [WA_TEXT, `Parent: ${name}`, `Mobile: ${normalisePhone(f.get('phone'))}`, `Child: ${f.get('child') || '-'}`, `Language: ${f.get('language')}`, f.get('message') ? `Note: ${f.get('message')}` : '']
      .filter(Boolean).join('\n')
    // ponytail: no backend yet, so the lead goes to Hoshi's WhatsApp. Swap for a serverless endpoint (Sheets + email) once hosting is chosen.
    track('form_submit', { language: f.get('language') })
    window.open(waLink(msg, 'form'), '_blank', 'noopener')
    setSent(true)
  }

  const err = (k) => errors[k] && <p id={`${k}-err`} className="mt-2 text-[0.92rem] text-[#b3261e]">{errors[k]}</p>

  return (
    <section id="enquire" className="bg-porcelain">
      <div className={`${wrap} grid gap-16 py-24 md:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20`}>
        <div>
          <h2 className="serif text-[clamp(2.4rem,5vw,4rem)] text-navy">Request a private consultation.</h2>
          <p className="mt-6 max-w-[28rem] text-[1.1rem] text-ink-soft">A conversation with our team, at a time that suits you. Ask about pathways, mentors, fees and a typical day. No obligation.</p>
          <div className="mt-10 space-y-4">
            <a href={`tel:+91${PHONE}`} onClick={() => track('call_click', { where: 'enquiry' })} className="flex items-center gap-3 text-[1.15rem] font-semibold text-navy hover:underline"><Phone /> +91 77790 91145</a>
            <a href={waLink(WA_TEXT, 'enquiry')} onClick={() => track('whatsapp_click', { where: 'enquiry' })} target="_blank" rel="noopener" className="flex items-center gap-3 text-[1.15rem] font-semibold text-navy hover:underline"><Chat /> WhatsApp</a>
          </div>
        </div>

        {sent ? (
          <div role="status" className="self-center rounded-2xl bg-navy p-10 text-ivory md:p-12">
            <h3 className="serif text-[2.2rem] text-ivory">Thank you.</h3>
            <p className="mt-4 text-[1.08rem] text-mist">Your details are ready to send in WhatsApp. Once they arrive, our team will call you to arrange your consultation. If WhatsApp did not open, call <a className="text-gold underline" href={`tel:+91${PHONE}`}>+91 77790 91145</a>.</p>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="grid gap-x-8 gap-y-7 sm:grid-cols-2" aria-label="Consultation request">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="label block text-ink-soft">Your name</label>
              <input id="name" name="name" autoComplete="name" className="field" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined} />
              {err('name')}
            </div>
            <div>
              <label htmlFor="phone" className="label block text-ink-soft">Mobile number</label>
              <input id="phone" name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" placeholder="98765 43210" className="field tabular-nums" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-err' : undefined} />
              {err('phone')}
            </div>
            <div>
              <label htmlFor="child" className="label block text-ink-soft">Child’s age or class</label>
              <input id="child" name="child" className="field" />
            </div>
            <fieldset className="sm:col-span-2">
              <legend className="label mb-3 text-ink-soft">Preferred language</legend>
              <div className="flex flex-wrap gap-2">
                {['English', 'Hindi', 'Gujarati'].map((l, i) => (
                  <label key={l} className="relative inline-flex min-h-11 cursor-pointer items-center rounded-full px-5 text-navy ring-1 ring-navy/25 transition-colors has-[:checked]:bg-navy has-[:checked]:text-ivory has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold">
                    <input type="radio" name="language" value={l} defaultChecked={i === 0} className="absolute inset-0 cursor-pointer opacity-0" />{l}
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="label block text-ink-soft">Anything we should know <span className="normal-case tracking-normal">(optional)</span></label>
              <textarea id="message" name="message" rows={2} className="field resize-y" />
            </div>
            <div aria-hidden="true" className="absolute -left-[9999px]"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
            <div className="sm:col-span-2">
              <button type="submit" className="btn btn-navy w-full text-[1.05rem] sm:w-auto">Request my consultation <Arrow /></button>
              <p className="mt-4 text-[0.85rem] text-ink-soft">Used only to arrange your consultation. We never ask for your child’s full name or photo. <a href="/privacy.html" className="text-navy underline">Privacy policy</a></p>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-navy pb-28 text-mist md:pb-0">
      <div className={`${wrap} grid gap-10 py-14 md:grid-cols-3`}>
        <div>
          <Wordmark />
          <p className="mt-5 text-ivory">Learn. Explore. Create. Apply.</p>
        </div>
        <address className="not-italic leading-relaxed">
          C/9, Patnagar Yojna Bhavan<br />Sector 16, Gandhinagar, Gujarat<br />
          <a href="https://www.google.com/maps/search/?api=1&query=Patnagar+Yojna+Bhavan+Sector+16+Gandhinagar" target="_blank" rel="noopener" className="text-gold underline">Open in Maps</a>
        </address>
        <div className="space-y-2">
          <a href={`tel:+91${PHONE}`} className="block text-ivory hover:underline">+91 77790 91145</a>
          <a href="/privacy.html" className="block hover:text-ivory">Privacy policy</a>
          <p className="pt-4 text-[0.85rem]">© {new Date().getFullYear()} Hoshi Academy</p>
        </div>
      </div>
    </footer>
  )
}

/* ---------- sticky mobile bar: Call + WhatsApp, after the hero, never over the form ---------- */
function MobileBar() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const hero = document.getElementById('top'), form = document.getElementById('enquire')
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
    <div className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-navy p-3 transition-transform duration-500 md:hidden ${show ? 'translate-y-0' : 'translate-y-full'}`} aria-hidden={!show}>
      <a href={`tel:+91${PHONE}`} tabIndex={show ? 0 : -1} onClick={() => track('call_click', { where: 'bar' })} className="btn btn-line"><Phone /> Call</a>
      <a href={waLink(WA_TEXT, 'bar')} tabIndex={show ? 0 : -1} onClick={() => track('whatsapp_click', { where: 'bar' })} target="_blank" rel="noopener" className="btn btn-gold"><Chat /> WhatsApp</a>
    </div>
  )
}

export default function App() {
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { rootMargin: '0px 0px -10% 0px' })
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
  return (
    <>
      <a href="#enquire" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:text-navy">Skip to consultation form</a>
      <Header />
      <main>
        <Hero />
        <Pathways />
        <Approach />
        <Compare />
        <AI />
        <Week />
        <Steps />
        <Letter />
        <Founding />
        <Faq />
        <Enquiry />
      </main>
      <Footer />
      <MobileBar />
    </>
  )
}
