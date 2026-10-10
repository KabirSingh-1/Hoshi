---
name: Hoshi Home Schooling
description: "OUTDATED below the front matter: the site is now a BBC Learning English + Cambridge International mix (teal brand, stage colours, illustrated tiles). See src/index.css for live tokens."
colors:
  paper: "#fffdf7"
  wash: "#e7eefb"
  rule: "#d8e1f1"
  margin: "#e9a49b"
  ink: "#1c2340"
  ink-soft: "#4b5270"
  blue: "#2747a8"
  blue-deep: "#1e3884"
  red: "#c8392a"
  pencil: "#f5c242"
  pencil-soft: "#f9d675"
  marker: "#fff09a"
  sticky: "#fff6c9"
  logo-navy: "#1b2a41"
  logo-gold: "#b8841f"
  sub-blue: "#3657c0"
  sub-red: "#d14f44"
  sub-green: "#2f8a5f"
  sub-yellow: "#e9ad25"
  sub-purple: "#7454c0"
  sub-orange: "#e0742f"
typography:
  display:
    fontFamily: "'Lexend Variable', system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 5.4vw, 4.4rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "'Lexend Variable', system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  body:
    fontFamily: "'Lexend Variable', 'Noto Sans Gujarati', 'Noto Sans Devanagari', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "'Lexend Variable', system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  lead:
    fontFamily: "'Lexend Variable', system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  title:
    fontFamily: "'Lexend Variable', system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  copybook:
    fontFamily: "'Lexend Variable', system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 4.9vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.42
  hand:
    fontFamily: "'Caveat Variable', cursive"
    fontSize: "1.3rem"
    fontWeight: 500
rounded:
  button: "14px"
  field: "12px"
  card: "16px"
  cover: "8px"
  pill: "999px"
spacing:
  gutter-sm: "20px"
  gutter-md: "40px"
  section-sm: "80px"
  section-md: "112px"
  container: "76rem"
components:
  button-pencil:
    backgroundColor: "{colors.pencil}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    height: "52px"
  button-outline:
    backgroundColor: "#ffffff"
    textColor: "{colors.blue}"
    rounded: "{rounded.button}"
    height: "52px"
  field:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    height: "52px"
  chip-selected:
    backgroundColor: "{colors.blue}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
---

# Design System: Hoshi Home Schooling

## North star: "The Exercise Notebook"

The page is the child's own notebook, open on the table at home. A parent should read "home tutor for my child" in one second and never think "bank" or "hotel".

Replaced on 2026-10-09: the navy-drenched, gold-metal "private study" world. The user said it felt like a hotel or bank landing page. Do not bring back dark full-bleed sections, gold rules, letterheads or monograms.

## Colour

- **Grounds:** Paper (#fffdf7) and Wash (#e7eefb, a light notebook-cover blue) alternate by section. The only dark surface is the Blue-deep footer.
- **Blue ink** is for links, day labels, the selected chip and the FAQ plus.
- **Tutor red** is only for ticks, circled step numbers and short handwritten notes. Never use it for errors other than form errors.
- **Pencil yellow** is the primary action, every time.
- **Marker** (highlighter) emphasises one phrase per heading and the live lessons in the timetable.
- **Logo navy and logo gold** (from the business card) appear in the wordmark only.
- **Subject covers:** six saturated notebook colours, one per subject, each carrying a white name label in ink.

## Type

Lexend for everything people read: semibold headings, regular body. The user rejected Bodoni Moda as hard to read. Caveat handwriting is only for tutor marks: the sample notebook page, the "sample" note and the step numbers. Never use it for headings or body text.

## Shape and depth

Buttons and fields have soft 12–14px corners, not pills (pills read as banking). Chips are pills. Subject covers are 8px with a darker spine. Shadows are soft and tinted ink, pushed down with negative spread. No hard offset shadows.

## Signature pieces

- **Hero, the open exercise book:** a two-page spread on the cover-blue desk with a spine shadow down the fold. The left page is a four-line English copybook: the H1 in blue-deep ink sits on red ascender/descender lines and blue x-height lines (`.copybook`, stops in em from Lexend's metrics), and the tutor's red ring circles "your child". Next to the yellow button is a red handwritten "free, no obligation" with an arrow. The right page holds the child's fractions written in, red ticks, and a note for parents. A sticky note for today's lesson crosses the fold, and a pencil lies on the page. On phones the pages stack and the sticky note crosses the page join.
- **Trust strip:** the three parent worries, each ticked in red.
- **Subjects:** a stack of exercise books with name labels.
- **Week:** a white timetable card. Live lessons are highlighted, not bolded.
- **AI:** no section of its own. "AI lab, taught safely" is a sticky note stuck on the timetable, where AI lab appears (anchor `#ai`).

## Type scale

Use Tailwind steps only: `text-xs` for the wordmark, `text-sm` for meta, `text-base`, `text-lg` for leads and questions, `text-xl` for card titles, then the display and copybook clamps. No one-off `text-[…rem]` sizes.

## Motion

Only the notebook (writing, ticks) and the timetable card animate in. Everything else is static on arrival. Reduced motion shows everything fully drawn.
