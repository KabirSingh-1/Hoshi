import { useEffect, useRef, useState } from 'react'

/* ---------- copy: English lives in the markup, these replace the tagged strings ---------- */
const T = {
  en: {},
  hi: { signin: 'साइन इन', home: 'होम', stages: 'आयु वर्ग', subjects: 'विषय', ai: 'AI और भविष्य के कौशल', why: 'होशी क्यों?', parents: 'अभिभावक', diff: 'हम अलग कैसे हैं', about: 'होशी के बारे में', search: 'होशी में खोजें', change: 'भाषा बदलें', available: 'अभी उपलब्ध', other: 'अन्य भाषाएँ', soon: 'जल्द आ रहा है', hs: 'होम स्कूलिंग', music: 'संगीत', h1: 'कक्षा से आगे की पढ़ाई', heroP: '3–15 वर्ष के बच्चों के लिए व्यक्तिगत होम स्कूलिंग और होम ट्यूशन।', cta: 'निःशुल्क परामर्श बुक करें', demo: 'अपने बच्चे के लिए निःशुल्क डेमो क्लास बुक करें', today: 'आज आप क्या करना चाहेंगे?', what: 'होशी क्या है?', pathP: '3 से 16 वर्ष तक घर पर सीखने की स्पष्ट राह', finder: 'आपके बच्चे की उम्र', subjH: 'विषय', diffH: 'आपके बच्चे पर शिक्षक का पूरा ध्यान', ctaH: 'अपने बच्चे के लिए निःशुल्क डेमो क्लास बुक करें' },
  gu: { signin: 'સાઇન ઇન', home: 'હોમ', stages: 'વય જૂથ', subjects: 'વિષયો', ai: 'AI અને ભવિષ્યના કૌશલ્યો', why: 'હોશી શા માટે?', parents: 'વાલીઓ', diff: 'અમે કેવી રીતે અલગ છીએ', about: 'હોશી વિશે', search: 'હોશીમાં શોધો', change: 'ભાષા બદલો', available: 'હમણાં ઉપલબ્ધ', other: 'અન્ય ભાષાઓ', soon: 'ટૂંક સમયમાં', hs: 'હોમ સ્કૂલિંગ', music: 'સંગીત', h1: 'વર્ગખંડથી આગળનું શિક્ષણ', heroP: '3–15 વર્ષનાં બાળકો માટે વ્યક્તિગત હોમ સ્કૂલિંગ અને હોમ ટ્યુશન.', cta: 'મફત પરામર્શ બુક કરો', demo: 'તમારા બાળક માટે મફત ડેમો ક્લાસ બુક કરો', today: 'આજે તમે શું કરવા માંગો છો?', what: 'હોશી શું છે?', pathP: '3 થી 16 વર્ષ સુધી ઘરે શીખવાનો સ્પષ્ટ માર્ગ', finder: 'તમારા બાળકની ઉંમર', subjH: 'વિષયો', diffH: 'તમારા બાળક પર શિક્ષકનું પૂરું ધ્યાન', ctaH: 'તમારા બાળક માટે મફત ડેમો ક્લાસ બુક કરો' },
}
const LANG_NAMES = { en: 'English', hi: 'हिन्दी', gu: 'ગુજરાતી' }
const OTHERS = [['मराठी', 'Marathi'], ['বাংলা', 'Bengali'], ['தமிழ்', 'Tamil'], ['తెలుగు', 'Telugu'], ['ಕನ್ನಡ', 'Kannada'], ['ਪੰਜਾਬੀ', 'Punjabi'], ['اردو', 'Urdu'], ['Español', 'Spanish']]

const SLIDES = [
  { img: '/img/paint-face.jpg', alt: 'Laughing child with paint on her face', shield: <>Music, Art <b>&amp; Abacus</b></>, h: 'More than textbooks', p: 'Creative and practical skills, taught by specialists, every week.', btn: 'Explore subjects', href: '#subjects' },
  { img: '/img/hero-drawing.jpg', alt: 'Parent and daughter drawing together at home', shield: <>Every child is a <b>star</b></>, h: 'Learning beyond classrooms', hKey: 'h1', p: 'Personalised home schooling and home tuition for ages 3–15.', pKey: 'heroP', btn: 'Book free demo classes for your child', btnKey: 'demo', href: '#contact' },
  { img: '/img/teen-studying-home.jpg', alt: 'Teenage student writing notes at his desk at home', shield: <>Classes <b>10 &amp; 12</b></>, h: 'Board exam ready', p: 'Expert subject tutors and a clear plan for Classes 10 and 12.', btn: 'See senior programme', href: '#seniors' },
  { img: '/img/coding.jpg', alt: 'Older student writing code on a computer', shield: <>AI <b>&amp; Coding</b></>, h: 'Ready for the future', p: 'AI, coding and digital skills, taught safely for older students.', btn: 'Explore AI & Future Skills', href: '#skills' },
]

const STAGES = [
  { c: 'var(--s1)', min: 3, max: 5, name: 'Little Stars', ag: 'Age 3+', points: ['Play-based learning', 'Phonics & numbers', 'Songs & colours'], ft: '20-minute sessions with a parent' },
  { c: 'var(--s2)', min: 6, max: 8, name: 'Rising Stars', ag: 'Age 6+', points: ['Reading & maths', 'Abacus level 1–2', 'Block coding'], ft: 'English, Maths, Music, Art' },
  { c: 'var(--s3)', min: 9, max: 11, name: 'Bright Stars', ag: 'Age 9+', points: ['Science & languages', 'Mental math speed', 'How AI learns'], ft: 'Guided projects' },
  { c: 'var(--s4)', min: 12, max: 13, name: 'Shining Stars', ag: 'Age 12–13', points: ['Board-aligned tuition', 'Python & data', 'Music theory'], ft: 'Personal mentor' },
  { c: 'var(--s5)', min: 14, max: 15, name: 'Guiding Stars', ag: 'Age 14–15', points: ['Board exam preparation', 'AI projects & ethics', 'Creative portfolio'], ft: 'Career guidance' },
]

const PROGS = [
  { href: '#contact', c: 'academic', img: '/img/girl-reading.jpg', alt: 'Young girl reading with her teacher', tag: 'Classes 1–5', h: 'Foundational Academics', p: 'Reading, writing, numbers, EVS and science basics.' },
  { href: '#seniors', c: 'academic', img: '/img/teen-textbook.jpg', alt: 'Teenage student studying with a textbook', tag: 'Classes 6–12', h: 'Middle & Senior Subjects', p: 'All core and elective subjects, taught by qualified subject specialists.' },
  { href: '#contact', c: 'lang', img: '/img/globe.jpg', alt: 'Child pointing at a globe', tag: 'Languages', h: 'Languages', p: 'English, Hindi, Gujarati and other supported languages.' },
  { href: '#skills', c: 'skill', img: '/img/coding.jpg', alt: 'Older student writing code on a computer', tag: 'Classes 6–12', h: 'AI & Future Skills', p: 'AI, coding, data and digital skills for older students.' },
  { href: '#contact', c: 'creative', img: '/img/piano.jpg', alt: 'Young girl with headphones playing piano', tag: 'Creative', h: 'Music', p: 'Rhythm, singing, keyboard and music theory.' },
  { href: '#contact', c: 'skill', img: '/img/abacus.jpg', alt: 'Child moving coloured beads on an abacus', tag: 'Skill', h: 'Abacus & Mental Math', p: 'A practical skill for fast, confident maths.' },
  { href: '#contact', c: 'creative', img: '/img/painting.jpg', alt: 'Child painting with a brush and palette', tag: 'Creative', h: 'Art & Creativity', p: 'Drawing, painting, craft and design.' },
  { href: '#teachers', c: 'academic', img: '/img/teacher-boy.jpg', alt: 'Teacher and boy drawing together at home', tag: 'Personalized', h: 'Individual Home Schooling', p: 'A dedicated teacher for your child, at home, at your timings.' },
]
const FILTERS = [['all', 'All'], ['academic', 'Academic'], ['lang', 'Languages'], ['creative', 'Creative'], ['skill', 'Skills']]

const MEGA = {
  'm-about': { h: 'About Hoshi', p: 'Personalised home schooling and home tuition for every child.', links: [['#about', 'What is Hoshi?'], ['#about', 'Why Hoshi?'], ['#different', 'How we are different'], ['#contact', 'Talk to a mentor']] },
  'm-stages': { h: 'Age stages', p: 'A clear path from age 3 to 15.', links: [['#pathway', 'Little Stars · 3–5', { st: 0 }], ['#pathway', 'Rising Stars · 6–8', { st: 1 }], ['#pathway', 'Bright Stars · 9–11', { st: 2 }], ['#pathway', 'Shining Stars · 12–13', { st: 3 }], ['#pathway', 'Guiding Stars · 14–15', { st: 4 }], ['#seniors', 'Classes 10 & 12']] },
  'm-subj': { h: 'Subjects', p: 'Every subject from Class 1 to 12, plus creative and future skills.', links: [['#subjects', 'Foundational Academics', { f: 'academic' }], ['#subjects', 'Middle & Senior Subjects', { f: 'academic' }], ['#subjects', 'Languages', { f: 'lang' }], ['#subjects', 'Music', { f: 'creative' }], ['#subjects', 'Abacus & Mental Math', { f: 'skill' }], ['#subjects', 'Art & Creativity', { f: 'creative' }], ['#subjects', 'AI & Future Skills', { f: 'skill' }], ['#subjects', 'Individual Home Schooling', { f: 'academic' }]] },
}

const ABC = [['A', 'Apple', '#8128e7'], ['B', 'Ball', '#5465f8'], ['C', 'Cat', '#008a08'], ['D', 'Duck', '#d74120']]

const say = (w) => { try { const u = new SpeechSynthesisUtterance(w); u.rate = 0.85; speechSynthesis.cancel(); speechSynthesis.speak(u) } catch { /* no speech support */ } }
const savedLang = () => { try { const l = localStorage.getItem('hoshi-lang'); return T[l] ? l : 'en' } catch { return 'en' } }
const Use = ({ id }) => <svg><use href={`#${id}`} /></svg>

function Sprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true"><defs>
      <symbol id="chev" viewBox="0 0 12 12"><path d="M1.5 4l4.5 4.5L10.5 4" fill="none" stroke="currentColor" strokeWidth="2" /></symbol>
      <symbol id="i-user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" fill="none" stroke="currentColor" strokeWidth="2" /></symbol>
      <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" /></symbol>
      <symbol id="i-note" viewBox="0 0 24 24"><path d="M9 18V6l11-2v12" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="6.5" cy="18" r="2.6" fill="currentColor" /><circle cx="17.5" cy="16" r="2.6" fill="currentColor" /></symbol>
      <symbol id="i-chip" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" stroke="currentColor" strokeWidth="2" /></symbol>
      <symbol id="i-home" viewBox="0 0 24 24"><path d="M3 11l9-7 9 7v9h-6v-6H9v6H3z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></symbol>
      <symbol id="i-family" viewBox="0 0 24 24"><circle cx="8" cy="7" r="3" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17" cy="9" r="2.4" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M2 21c.8-4 3-6 6-6s5.2 2 6 6M13 21c.5-3 2-4.5 4-4.5s3.5 1.5 4 4.5" fill="none" stroke="currentColor" strokeWidth="2" /></symbol>
      <symbol id="i-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" fill="none" stroke="currentColor" strokeWidth="1.6" /></symbol>
      <symbol id="i-path" viewBox="0 0 24 24"><circle cx="5" cy="19" r="2.4" fill="currentColor" /><circle cx="19" cy="5" r="2.4" fill="currentColor" /><path d="M7 18c7 0 3-12 10-12" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" /></symbol>
      <symbol id="i-bulb" viewBox="0 0 24 24"><path d="M12 3a6 6 0 00-3.5 10.9V17h7v-3.1A6 6 0 0012 3zM9.5 20h5" fill="none" stroke="currentColor" strokeWidth="2" /></symbol>
      <symbol id="i-star" viewBox="0 0 24 24"><path d="M12 2.8l2.8 6 6.6.7-4.9 4.5 1.3 6.5L12 17.2 6.2 20.5l1.3-6.5-4.9-4.5 6.6-.7z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></symbol>
    </defs></svg>
  )
}

export default function App() {
  const [lang, setLangState] = useState(savedLang)
  const tr = (k, en) => T[lang][k] ?? en
  // one open panel at a time: 'menu' | 'lang' | a mega id
  const [open, setOpen] = useState(null)
  const [others, setOthers] = useState(false)
  const toggle = (id) => (e) => { e.stopPropagation(); setOpen((o) => (o === id ? null : id)) }
  const closeAll = () => setOpen(null)

  const [cur, setCur] = useState(0)
  const [playing, setPlaying] = useState(() => !matchMedia('(prefers-reduced-motion: reduce)').matches)
  const go = (i) => setCur((i + SLIDES.length) % SLIDES.length)

  const [age, setAge] = useState(7)
  const stageOf = (a) => STAGES.findIndex((s) => a >= s.min && a <= s.max)
  const [filter, setFilter] = useState('all')
  const [letter, setLetter] = useState(null)
  const [sent, setSent] = useState(false)
  const searchRef = useRef(null)

  const setLang = (l) => {
    setLangState(l)
    try { localStorage.setItem('hoshi-lang', l) } catch { /* private mode */ }
    closeAll()
  }

  useEffect(() => { document.documentElement.lang = lang }, [lang])

  // click outside a panel or Escape closes every panel
  useEffect(() => {
    const onClick = (e) => { if (!e.target.closest('.drop,.langmenu,.mega')) setOpen(null) }
    const onKey = (e) => { if (e.key === 'Escape') setOpen(null) }
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('click', onClick); document.removeEventListener('keydown', onKey) }
  }, [])

  // auto-advance every 7s; any slide change restarts the timer
  useEffect(() => {
    if (!playing) return
    const id = setInterval(() => setCur((c) => (c + 1) % SLIDES.length), 7000)
    return () => clearInterval(id)
  }, [playing, cur])

  const onSearch = () => {
    const q = searchRef.current
    if (getComputedStyle(q.parentElement).display === 'none') setOpen('menu')
    else q.focus()
  }
  const cardLang = (e) => {
    e.preventDefault(); e.stopPropagation()
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => setOpen('lang'), 350)
  }
  const megaLink = (extra) => () => {
    closeAll()
    if (extra?.st !== undefined) setAge(STAGES[extra.st].min)
    if (extra?.f) setFilter(extra.f)
  }

  const globalLinks = [['#top', 'home', 'Home'], ['#pathway', 'stages', 'Age stages'], ['#subjects', 'subjects', 'Subjects'], ['#skills', 'ai', 'AI & Future Skills'], ['#about', 'why', 'Why Hoshi'], ['#contact', 'parents', 'Parents']]
  const mobileLinks = [...globalLinks.slice(0, 5), ['#different', 'diff', 'How we are different'], globalLinks[5]]
  const stageIdx = stageOf(age)

  return (
    <>
      <Sprite />

      {/* ===== Global masthead ===== */}
      <header className="gn">
        <div className="wrap">
          <a className="mark" href="#top" aria-label="Hoshi home"><svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" fill="#133844" /><path d="M16 5.5l3 6.8 7.4.7-5.6 4.9 1.7 7.3L16 21.4l-6.5 3.8 1.7-7.3-5.6-4.9 7.4-.7z" fill="#3be0d0" /></svg><b style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 600 }}>Hoshi</b></a>
          <button className="signin" type="button" onClick={() => { location.hash = 'contact' }}><Use id="i-user" /><span>{tr('signin', 'Sign in')}</span></button>
          <nav className="gl" aria-label="Global">
            {globalLinks.map(([h, k, en]) => <a key={k} href={h}>{tr(k, en)}</a>)}
          </nav>
          <div className="gicons">
            <button className="ib" type="button" aria-label="Search" onClick={onSearch}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><circle cx="10.5" cy="10.5" r="7" /><path d="M16 16l6 6" /></svg></button>
            <button className="ib burger" type="button" aria-label="Menu" aria-expanded={String(open === 'menu')} aria-controls="menuPanel" onClick={toggle('menu')}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M3 6h18M3 12h18M3 18h18" /></svg></button>
          </div>
        </div>
        <div className="drop" id="menuPanel" hidden={open !== 'menu'}><div className="wrap"><nav aria-label="Mobile">
          {mobileLinks.map(([h, k, en]) => <a key={k} href={h} onClick={closeAll}>{tr(k, en)}</a>)}
        </nav></div></div>
      </header>

      <div className="langrow"><div className="wrap">
        <button className="langbtn" type="button" aria-expanded={String(open === 'lang')} aria-controls="langMenu" onClick={(e) => { e.preventDefault(); toggle('lang')(e) }}><b>{LANG_NAMES[lang]}</b><span>{tr('change', 'Change language')}</span><svg viewBox="0 0 12 12" fill="currentColor"><path d="M1 3.5h10L6 9z" /></svg></button>
        <div className="langmenu" id="langMenu" hidden={open !== 'lang'} onClick={(e) => e.stopPropagation()}>
          <h3>{tr('available', 'Available now')}</h3>
          {['en', 'hi', 'gu'].map((l) => (
            <button key={l} className="lng" type="button" onClick={() => setLang(l)}>
              <span>{LANG_NAMES[l]}{l !== 'en' && <small>{l === 'hi' ? 'Hindi' : 'Gujarati'}</small>}</span><span className="tick">{l === lang ? '✓' : ''}</span>
            </button>
          ))}
          <button className="otherbtn" type="button" aria-expanded={String(others)} aria-controls="otherList" onClick={() => setOthers((o) => !o)}><span>{tr('other', 'Other languages')}</span><span aria-hidden="true">{others ? '–' : '+'}</span></button>
          <div id="otherList" hidden={!others}>
            {OTHERS.map(([n, e]) => (
              <button key={e} className="lng" type="button" aria-disabled="true" title={`${e}: coming soon`}>
                <span>{n}<small>{e}</small></span>
                <span className="soon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V8a4 4 0 018 0v3" /></svg><span>{tr('soon', 'Coming soon')}</span></span>
              </button>
            ))}
          </div>
        </div>
      </div></div>

      {/* ===== Product band ===== */}
      <div className="pb" id="top">
        <div className="wrap">
          <div className="top">
            <h2><a href="#top">{tr('hs', 'Home Schooling')}</a></h2>
            <label className="pbsearch" htmlFor="q"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true"><circle cx="10.5" cy="10.5" r="7" /><path d="M16 16l6 6" /></svg><span className="sr">Search</span><input id="q" ref={searchRef} type="search" placeholder={tr('search', 'Search Hoshi')} /></label>
          </div>
          <nav className="pnav" aria-label="Home Schooling">
            {[['m-about', 'about', 'About Hoshi'], ['m-stages', 'stages', 'Age stages'], ['m-subj', 'subjects', 'Subjects']].map(([id, k, en]) => (
              <div key={id}><button type="button" aria-expanded={String(open === id)} onClick={toggle(id)}><span>{tr(k, en)}</span><Use id="chev" /></button></div>
            ))}
            <a href="#skills">{tr('ai', 'AI & Future Skills')}</a>
            <a href="#different">{tr('diff', 'How we are different')}</a>
            <a href="#contact">{tr('parents', 'Parents')}</a>
          </nav>
        </div>
        {Object.entries(MEGA).map(([id, m]) => (
          <div key={id} className="mega" id={id} hidden={open !== id}><div className="wrap">
            <div><h3>{m.h}</h3><p>{m.p}</p></div>
            <ul>{m.links.map(([h, l, extra]) => <li key={l}><a href={h} onClick={megaLink(extra)}>{l}</a></li>)}</ul>
          </div></div>
        ))}
      </div>

      <main>
        {/* ===== Hero carousel ===== */}
        <section className="hero" aria-roledescription="carousel" aria-label="Highlights">
          {SLIDES.map((s, i) => {
            const H = s.hKey === 'h1' ? 'h1' : 'p' // the page heading stays on the 'Learning beyond classrooms' slide
            return (
              <div key={i} className="slide" hidden={i !== cur}>
                <div className="pic"><img className="img" src={s.img} alt={s.alt} loading="eager" /><div className="shield" aria-hidden="true"><span>{s.shield}</span></div></div>
                <div className="copy"><H className="h">{s.hKey ? tr(s.hKey, s.h) : s.h}</H><p>{s.pKey ? tr(s.pKey, s.p) : s.p}</p><a className="btn" href={s.href}>{s.btnKey ? tr(s.btnKey, s.btn) : s.btn}</a></div>
              </div>
            )
          })}
          <div className="wrap" style={{ position: 'absolute', left: 0, right: 0, bottom: 18, pointerEvents: 'none' }}>
            <div className="ctrl" style={{ pointerEvents: 'auto', justifyContent: 'flex-end' }}>
              <button className="arr" type="button" aria-label="Previous slide" onClick={() => go(cur - 1)}><svg viewBox="0 0 12 12"><path d="M8 1L3 6l5 5" fill="none" stroke="currentColor" strokeWidth="2" /></svg></button>
              {SLIDES.map((_, i) => <button key={i} className="dot" type="button" aria-label={`Slide ${i + 1}`} aria-current={String(i === cur)} onClick={() => go(i)} />)}
              <button className="arr" type="button" aria-label="Next slide" onClick={() => go(cur + 1)}><svg viewBox="0 0 12 12"><path d="M4 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" /></svg></button>
              <button className="pause" type="button" onClick={() => setPlaying((p) => !p)}>{playing ? 'Pause' : 'Play'}</button>
            </div>
          </div>
        </section>

        {/* ===== Quick links ===== */}
        <section className="quick">
          <div className="wrap">
            <h2>{tr('today', 'What would you like to do today?')}</h2>
            <div className="qlinks">
              <a href="#contact" className="primary">{tr('demo', 'Book free demo classes for your child')}</a>
              <a href="#pathway">Find your child&apos;s stage</a>
              <a href="#subjects">Explore subjects</a>
              <a href="#seniors">Classes 10 &amp; 12</a>
              <a href="#teachers">Meet our specialists</a>
              <a href="#different">How we are different</a>
            </div>
          </div>
        </section>

        {/* ===== Mint row ===== */}
        <section className="mintrow" id="about">
          <div className="wrap cards3">
            <article className="c3">
              <div className="ph"><img className="img" src="/img/three-girls.jpg" alt="Three smiling girls of different backgrounds" loading="lazy" /></div>
              <div className="bd">
                <h3>{tr('what', 'What is Hoshi?')}</h3>
                <p className="lead2">Every child is a star, and every star shines in its own way.</p>
                <p>A modern home schooling platform where every child learns at their own pace, with their own teacher.</p>
                <a className="lbtn" href="#pathway">Read more</a>
              </div>
            </article>
            <article className="c3">
              <div className="bd">
                <h3>{tr('why', 'Why Hoshi?')}</h3>
                <div className="qa">
                  <details><summary>What problem does Hoshi solve?</summary><p>Rote learning, exam stress and no time for creative or digital skills.</p></details>
                  <details><summary>Why does my child need it?</summary><p>One classroom pace can&apos;t fit every child. Hoshi plans around yours.</p></details>
                  <details><summary>What do parents get?</summary><p>A weekly plan, progress updates and a personal mentor.</p></details>
                  <details><summary>What is the vision?</summary><p>Curious, confident children who think for themselves.</p></details>
                  <details><summary>Why not traditional learning?</summary><p>More attention, more skills, flexible timings, your language.</p></details>
                </div>
                <a className="lbtn" href="#different">How we are different</a>
              </div>
            </article>
            <article className="c3">
              <div className="ph"><img className="img" src="/img/abc-tiles.jpg" alt="Wooden alphabet tiles A, B and C" loading="lazy" /></div>
              <div className="bd">
                <h3>Learn in your language</h3>
                <div className="abcd" aria-label="Tap a letter to hear it">
                  {ABC.map(([l, w, k]) => (
                    <button key={l} type="button" style={{ '--k': k }} aria-pressed={letter === null ? undefined : String(letter === l)} onClick={() => { setLetter(l); say(`${l} is for ${w}`) }}>{l}</button>
                  ))}
                </div>
                <p className="abcw" aria-live="polite">
                  {letter === null ? <>Tap a letter: <b>A</b> is for <b>Apple</b></> : <><b>{letter}</b> is for <b>{ABC.find((x) => x[0] === letter)[1]}</b></>}
                </p>
                <p>Lessons and progress reports available in English, Hindi and Gujarati.</p>
                <button className="lbtn" type="button" onClick={cardLang}>Change language</button>
              </div>
            </article>
          </div>
        </section>

        {/* ===== Pathway ===== */}
        <section className="path" id="pathway">
          <div className="wrap">
            <div className="ptitle">
              <span className="lg">Hoshi<br />Pathway<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 4l28 16L6 36z" fill="none" stroke="#00bdb6" strokeWidth="5" strokeLinejoin="round" /></svg></span>
              <p>{tr('pathP', 'A clear path for learning at home from age 3 to 15')}</p>
            </div>
            <div className="stages">
              {STAGES.map((s, i) => (
                <button key={s.name} type="button" className="st" style={{ '--c': s.c }} aria-pressed={String(i === stageIdx)} onClick={() => setAge(s.min)}>
                  <span className="hd"><small>Hoshi</small>{s.name}</span><span className="ag">{s.ag}</span>
                  <ul>{s.points.map((p) => <li key={p}>{p}</li>)}</ul>
                  <span className="ft">{s.ft}</span>
                </button>
              ))}
            </div>
            <div className="finder">
              <label htmlFor="age">{tr('finder', "Your child's age")}</label>
              <input id="age" type="range" min="3" max="15" value={age} onChange={(e) => setAge(+e.target.value)} />
              <output htmlFor="age">{age} years · {STAGES[stageIdx].name}</output>
            </div>
          </div>
        </section>

        {/* ===== Senior students (Classes 10 & 12) ===== */}
        <section className="seniors" id="seniors">
          <div className="wrap sgrid">
            <div className="sphoto"><img className="img" src="/img/teen-desk.jpg" alt="Teenage student at a desk with notes" loading="lazy" /><span className="sbadge">Classes 10 &amp; 12</span></div>
            <div className="scopy">
              <span className="eyebrow">Senior students</span>
              <h2>Board exam ready, with a tutor for every subject</h2>
              <p>One-to-one teaching for the two years that matter most.</p>
              <ul className="checks">
                <li><b>Subject specialists</b> for all core and elective subjects</li>
                <li><b>Board-aligned plans</b> for CBSE, ICSE, state boards and international curricula</li>
                <li><b>Past papers and mock exams</b> with detailed feedback</li>
                <li><b>Stream and career guidance</b> for what comes next</li>
              </ul>
              <div className="ctas2"><a className="btn" href="#contact">{tr('demo', 'Book free demo classes for your child')}</a><a className="btn o2" href="#teachers">Meet our specialists</a></div>
            </div>
          </div>
        </section>

        {/* ===== Subjects rail ===== */}
        <section className="subj" id="subjects">
          <div className="wrap">
            <div className="shead">
              <div><h2>{tr('subjH', 'Subjects')}</h2><p>Every subject from Class 1 to 12, plus creative and future skills</p></div>
              <div className="filters">
                {FILTERS.map(([f, l]) => <button key={f} type="button" aria-pressed={String(filter === f)} onClick={() => setFilter(f)}>{l}</button>)}
              </div>
            </div>
            <div className="rail">
              {PROGS.map((p) => (
                <a key={p.h} className="prog" href={p.href} hidden={!(filter === 'all' || p.c === filter)}>
                  <div className="ph"><img className="img" src={p.img} alt={p.alt} loading="lazy" /><span className="tag">{p.tag}</span></div>
                  <h3>{p.h}</h3><p>{p.p}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Colour tiles ===== */}
        <section className="tiles" id="skills">
          <div className="wrap t4">
            <article className="tile t-navy">
              <div className="tx"><h3>{tr('ai', 'AI & Future Skills')}</h3><p>Older students learn to understand, build with and question technology.</p>
                <div className="chips">{['AI concepts', 'Technology', 'Problem solving', 'Digital skills', 'Creativity', 'Critical thinking'].map((c) => <span key={c}>{c}</span>)}</div>
                <a className="go" href="#contact">Plan your child&apos;s path →</a></div>
              <div className="vis"><div className="frame sh"><img className="img" src="/img/coding.jpg" alt="Older student writing code on a computer" loading="lazy" /></div></div>
            </article>
            <article className="tile t-mint">
              <div className="tx"><h3>{tr('music', 'Music')}</h3><p>Listening, rhythm and memory through singing and instruments.</p><a className="go" href="#contact">Explore music →</a></div>
              <div className="vis"><div className="frame"><img className="img" src="/img/piano.jpg" alt="Young girl with headphones playing piano" loading="lazy" /></div></div>
            </article>
            <article className="tile t-aqua">
              <div className="tx"><h3>Abacus &amp; Mental Math</h3><p>From beads to picturing the abacus in the mind. A skill for life.</p><a className="go" href="#contact">Explore abacus →</a></div>
              <div className="vis"><div className="frame"><img className="img" src="/img/abacus.jpg" alt="Child moving coloured beads on an abacus" loading="lazy" /></div></div>
            </article>
            <article className="tile t-sun">
              <div className="tx"><h3>Art &amp; Creativity</h3><p>Observation, expression and design, with a portfolio parents can see.</p><a className="go" href="#contact">Explore art →</a></div>
              <div className="vis"><div className="frame sh"><img className="img" src="/img/paint-face.jpg" alt="Laughing child with paint on her face" loading="lazy" /></div></div>
            </article>
          </div>
        </section>

        {/* ===== Different ===== */}
        <section className="diffs" id="different">
          <div className="wrap">
            <div className="dfeature"><img className="img" src="/img/one-to-one.jpg" alt="Teacher reading a book one-to-one with a boy" loading="lazy" />
              <div className="dstats">
                <div><b>Personalized</b><span>One teacher, one child</span></div>
                <div><b>100%</b><span>Personal learning plan</span></div>
                <div><b>Weekly</b><span>Progress update for parents</span></div>
              </div>
            </div>
            <div className="dsplit">
              <div><span className="eyebrow">{tr('diff', 'How we are different')}</span><h2>{tr('diffH', "Your child gets a teacher's full attention")}</h2><p className="dlead">In a classroom, one teacher shares their time with 30 children. At Hoshi, every lesson is planned and taught for your child alone.</p><a className="btn" href="#contact">{tr('demo', 'Book free demo classes for your child')}</a></div>
              <ul className="checks">
                <li><b>Personalised learning:</b> a plan built around your child&apos;s level, pace and interests.</li>
                <li><b>Individual attention:</b> no waiting and no hiding at the back. Doubts are cleared the moment they come up.</li>
                <li><b>Academics plus creativity:</b> school subjects alongside music, art, abacus and AI skills.</li>
                <li><b>Flexible timings at home:</b> lessons fit your family&apos;s routine.</li>
                <li><b>Parents stay involved:</b> clear weekly updates and a mentor you can talk to.</li>
                <li><b>Multilingual learning:</b> teaching in English, Hindi or Gujarati, with French, Spanish and Japanese as subjects.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===== Specialists ===== */}
        <section className="teachers" id="teachers">
          <div className="wrap">
            <div className="tcard">
              <div className="tphoto"><img className="img" src="/img/teacher.jpg" alt="Personalized one-to-one Hoshi home tutoring lesson with a child" loading="lazy" /></div>
              <div className="tbody">
                <span className="eyebrow">Specialists &amp; teacher quality</span>
                <h2>Teachers you can trust with your child</h2>
                <div className="tpoints">
                  <div><Use id="i-star" /><b>Subject specialists</b><span>Every subject is taught by a qualified, experienced subject specialist.</span></div>
                  <div><Use id="i-user" /><b>Carefully selected</b><span>Qualified, experienced and background-verified before they meet your child.</span></div>
                  <div><Use id="i-bulb" /><b>Trained in the Hoshi method</b><span>Child-first, concept-based teaching with clear lesson plans.</span></div>
                  <div><Use id="i-path" /><b>Quality checked</b><span>Regular lesson reviews and parent feedback keep standards high.</span></div>
                </div>
                <a className="btn" href="#contact">Try a free demo class</a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="cta" id="contact">
          <div className="wrap">
            <div><img className="ctaimg" src="/img/laptop.jpg" alt="In-person Hoshi tutor conducting a physical home visit demo lesson" loading="lazy" /><h2>{tr('ctaH', 'Book free demo classes for your child')}</h2><p>Meet your child&apos;s teacher, try a lesson and get a personal learning plan.</p></div>
            <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
              <div className="row"><label htmlFor="pn">Parent&apos;s name<input id="pn" required autoComplete="name" /></label><label htmlFor="ph">Phone / WhatsApp<input id="ph" type="tel" required autoComplete="tel" /></label></div>
              <div className="row">
                <label htmlFor="ca">Child&apos;s age<select id="ca" defaultValue="6–8">{['3–5', '6–8', '9–11', '12–13', '14–15', 'Class 10', 'Class 12'].map((o) => <option key={o}>{o}</option>)}</select></label>
                <label htmlFor="pl">Language<select id="pl">{['English', 'हिन्दी', 'ગુજરાતી'].map((o) => <option key={o}>{o}</option>)}</select></label>
              </div>
              <button className="btn" type="submit">{tr('demo', 'Book free demo classes for your child')}</button>
              <p className="ok" hidden={!sent}>Thank you. This is a design preview, so nothing was sent.</p>
            </form>
          </div>
        </section>
      </main>

      <footer><div className="wrap">
        <div className="fg">
          <div><h4>Hoshi Home Schooling</h4><p>Learn. Explore. Create. Apply.</p></div>
          <div><h4>Learn</h4><a href="#subjects">Subjects</a><a href="#skills">AI &amp; Future Skills</a><a href="#pathway">Age stages</a></div>
          <div><h4>About</h4><a href="#about">What is Hoshi?</a><a href="#about">Why Hoshi</a><a href="#different">How we are different</a><a href="#teachers">Teacher quality</a></div>
          <div><h4>Parents</h4><a href="#contact">Book free demo classes</a><a href="#teachers">Our specialists</a><a href="#seniors">Classes 10 &amp; 12</a></div>
        </div>
        <div className="fb"><span>© 2026 Hoshi Home Schooling · Photos: Unsplash</span><div className="fl">{['en', 'hi', 'gu'].map((l) => <button key={l} type="button" onClick={() => setLang(l)}>{LANG_NAMES[l]}</button>)}</div></div>
      </div></footer>
    </>
  )
}
