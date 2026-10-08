---
name: Hoshi Academy
description: Private-school luxury for homeschooling families. Navy study room, porcelain reading pages, gold line drawings.
colors:
  navy: "#0f1b33"
  navy-2: "#18284a"
  navy-3: "#24365c"
  gold: "#c9a24a"
  gold-soft: "#e4cf98"
  gold-deep: "#8a6a1f"
  porcelain: "#f3f5f8"
  white: "#ffffff"
  line: "#dde2ea"
  ink: "#1a2333"
  ink-soft: "#4a5568"
  ivory: "#f4f1ea"
  mist: "#aab6cc"
  error: "#b3261e"
typography:
  display:
    fontFamily: "'Bodoni Moda Variable', 'Bodoni 72', Didot, serif"
    fontSize: "clamp(2.6rem, 6.6vw, 5.4rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Bodoni Moda Variable', 'Bodoni 72', Didot, serif"
    fontSize: "clamp(2.2rem, 4.6vw, 3.6rem)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Bodoni Moda Variable', 'Bodoni 72', Didot, serif"
    fontSize: "1.45rem"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Anek Latin Variable', 'Noto Sans Gujarati', 'Noto Sans Devanagari', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  body-strong:
    fontFamily: "'Anek Latin Variable', 'Noto Sans Gujarati', 'Noto Sans Devanagari', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.65
  label:
    fontFamily: "'Anek Latin Variable', 'Noto Sans Gujarati', 'Noto Sans Devanagari', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    letterSpacing: "0.14em"
rounded:
  sheet: "2px"
  card: "16px"
  pill: "999px"
spacing:
  gutter-sm: "20px"
  gutter-md: "40px"
  section-sm: "96px"
  section-md: "128px"
  container: "76rem"
components:
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "52px"
  button-gold-hover:
    backgroundColor: "{colors.gold-soft}"
    textColor: "{colors.navy}"
  button-navy:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "52px"
  button-navy-hover:
    backgroundColor: "{colors.navy-3}"
  button-line:
    textColor: "{colors.ivory}"
    rounded: "{rounded.pill}"
    padding: "0 28px"
    height: "52px"
  field:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "0"
    padding: "12px 0"
    height: "52px"
  chip-choice:
    textColor: "{colors.navy}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  chip-choice-selected:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.ivory}"
  card-floating:
    backgroundColor: "{colors.navy-2}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.card}"
    padding: "16px"
  paper-sheet:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "40px"
---

# Design System: Hoshi Academy

## Overview

**Creative North Star: "The Private Study"**

This is a calm, well-run study room for one child, set out as a private school would present itself to a family it wants to keep. Deep navy fields hold the hero, the AI section, the founding-families close, the header and the footer. White and cool porcelain pages carry the reading: legal answers, approach, comparison, the week, the letter, the FAQ, the form. Gold is the house metal. It appears as hairline rules, fine line drawings, the primary action, the single emphasised phrase in a navy headline, and the grade on a report. It never covers a whole surface.

The world says "homeschooling for my child" within one second, and that rule outranks everything else here. The hero drawing is literally a child at a home desk with a mentor on a laptop, under a haveli-arch window, next to a lamp, a globe and books. An abstract metaphor world (kites) was built, then rejected by test viewers because it read as a festival site. The concrete scene is what this system is for. Supporting artefacts are set as printed stationery (timetable, term report, a letter from the MD) on white sheets that carry the ArchMark letterhead and a gold rule.

Density is generous and editorial. Sections breathe at 96 to 128px vertical padding. Lists are separated by hairline rules, not boxed into cards. Motion is soft and slow: gold strokes draw themselves in, sections rise into place, the floating cards bob gently. With reduced motion everything is static and fully drawn.

**Key Characteristics:**
- Navy and porcelain alternate section by section. Navy is drenched, never a tinted band.
- Gold line-art drawn with a single round-capped stroke, every path carrying `pathLength=1` so it can draw in.
- Bodoni Moda display in sentence case, ending in a full stop. Anek Latin for everything a parent reads.
- Printed-stationery artefacts with a letterhead, gold rule and serif signature.
- Hairline-ruled lists and tables instead of card grids.
- Pill buttons, a 16px radius for navy cards, a 2px radius for paper.

## Colors

A night-navy and porcelain palette lit by one restrained metal, gold.

### Primary
- **Study Navy** (navy): The drenched ground for the hero, AI section, closing invitation, header, footer and mobile action bar. On light pages it is the colour of headings, row labels and the secondary (submit) button.
- **Lamplight Navy** (navy-2): Raised surfaces on navy only: the hero's floating cards and the AI chat panel.
- **Dusk Navy** (navy-3): Hover state of the navy button and the scrollbar thumb. Not a surface colour.

### Secondary
- **House Gold** (gold): The primary action fill, line-art strokes on navy, hairline rules (`border-gold`, `gold/40`), proof ticks, the emphasised closing phrase of a navy headline ("one child.", "judgement."), focus rings and small gold meta lines on navy (month numbers, project tags).
- **Pale Gilt** (gold-soft): Hover fill of the gold button and text selection. Never a resting surface.
- **Antique Gold** (gold-deep): Gold on light grounds. Pillar icons, ArchMark, timetable day labels, report grades, step numerals, the FAQ plus, the comparison column heading. It exists because House Gold does not hold text contrast on white (5.05:1 on white, 4.62:1 on porcelain).

### Neutral
- **Porcelain** (porcelain): Alternate reading sections and the canvas that printed sheets sit on.
- **White** (white): Default page ground and the printed-sheet surface. Text on the navy button.
- **Hairline** (line): Row dividers on light pages and the ring around a paper sheet.
- **Ink** (ink): Body text on light pages, letter body.
- **Soft Ink** (ink-soft): Secondary text, answers, notes, form labels on light pages.
- **Ivory** (ivory): Headings and primary text on navy. Warmer than white on purpose.
- **Mist** (mist): Secondary text and nav links on navy.
- **Error Red** (error): Invalid field underline and error message only.

### Named Rules
**The Drench Rule.** A section is navy or it is light (white or porcelain). Navy sections are full-bleed. Don't put a navy band inside a light section, and don't tint the navy.

**The Metal Rule.** Gold is a line, a mark, or the one primary action. It is never a section background, a card fill or a gradient wash. Use House Gold on navy and Antique Gold on light grounds.

**The One Phrase Rule.** A navy headline may set its final phrase in House Gold. Only one phrase, only on navy, and never on light pages.

## Typography

**Display Font:** Bodoni Moda (with Bodoni 72, Didot, serif)
**Body Font:** Anek Latin (with Noto Sans Gujarati, Noto Sans Devanagari, system-ui)

**Character:** A high-contrast Didone, medium weight with slightly tight tracking, gives the schoolmaster's-letterhead authority. A humanist sans with Indic fallbacks keeps the reading warm and plain, and is ready for Gujarati and Hindi.

### Hierarchy
- **Display** (500, clamp 2.6 to 5.4rem, 1.04): The hero H1 only.
- **Headline** (500, clamp 2.2 to 3.6rem, 1.04): Section H2s, sentence case, ending with a full stop. Closing invitations step up to clamp(2.4rem, 5vw, 4rem). Sub-section heads step down to around 1.8 to 2.5rem.
- **Title** (500, 1.45 to 1.5rem): Legal questions, project names, side headings. The same serif marks live lessons in the timetable, sets grades large (2 to 3rem), and sets signatures in italic.
- **Body** (400, 1.0625rem, rising to 1.125rem from 768px, 1.65): All reading text. Keep measure to 24 to 42rem (`max-w-[32rem]` is typical).
- **Body strong** (600): Row headers, mentor roles, FAQ questions, step titles. Anek, not serif.
- **Label** (600, 0.75rem, 0.14em, uppercase): Functional labels only. Form field labels, table column heads, timetable days, chat speaker names.

### Named Rules
**The Sentence-Case Rule.** Bodoni is never set in capitals. Headlines read as sentences and end with a full stop.

**The Functional Label Rule.** Uppercase tracked labels name a field, a column or a speaker. They never sit above a headline as a kicker or eyebrow.

**The Wordmark Exception.** "HOSHI" (bold, 0.12 to 0.14em tracking) with "ACADEMY" (semibold, 0.32em, gold) over a gold hairline is the brand mark from the business card. It is the only place where Anek is set in spaced capitals at display size.

## Layout

The page uses a single centred container (76rem maximum) with 20px gutters on phones and 40px from 768px up. Sections run vertically at 96px padding, or 128px from 768px. Each section is one content column or a two-column split: the heading column sits beside the content column at 0.8fr/1.2fr, or 1.2fr/0.8fr when the content leads, with 48 to 80px gaps from 1024px up. The hero is a 1.05fr/0.95fr split. On phones the drawing comes first, held to 19rem wide, and the copy follows.

Lists are ruled, not boxed. A gold or navy/15 top border opens a list. Line-coloured or navy/10 dividers separate rows. Tables keep their semantic form on wider screens and collapse to stacked rows on phones, so the key answer stays visible. On phones a fixed navy action bar (Call, WhatsApp) appears after the hero and hides once the form is in view.

Breakpoints are Tailwind defaults: 640, 768, 1024px.

## Elevation & Depth

Depth is mostly tonal: navy-2 cards on navy, white sheets on porcelain. Shadows are soft, long, negative-spread drops tinted with the brand colour, so an object looks set down on a desk rather than floating in UI space. There are no hard or offset shadows.

### Shadow Vocabulary
- **Paper drop** (`box-shadow: 0 30px 60px -34px rgb(15 27 51 / 0.45)`): Printed-stationery sheets, together with a 1px Hairline ring.
- **Card lift** (`box-shadow: 0 24px 50px -24px rgb(0 0 0 / 0.7)`): Floating navy cards over the hero drawing, with a 1px gold/25 ring.
- **Gold glow** (`box-shadow: 0 14px 30px -18px rgb(201 162 74 / 0.9)`): Under the gold button.
- **Navy glow** (`box-shadow: 0 14px 30px -18px rgb(15 27 51 / 0.8)`): Under the navy button.

### Named Rules
**The Desk Rule.** Shadows are tinted, diffuse and pushed down by negative spread. When something needs an edge, use a 1px ring in gold or Hairline instead of a heavier shadow.

## Shapes

Three radii, each tied to a material. Pills (999px) for anything pressable: buttons and language choices. 16px for navy surfaces: floating cards, the chat panel and the thank-you panel. 2px for paper, so sheets read as cut stationery. Form fields have no radius and are drawn as a single underline. The recurring silhouette is the haveli arch, a round-topped window. It frames the hero drawing and is reduced to the ArchMark monogram on every letterhead. Line drawings and icons share one stroke grammar: round caps and joins, no fills except navy knock-outs that hide lines behind objects.

## Components

### Buttons
Quiet, weighty and pill-shaped.
- **Shape:** Full pill (999px), 52px minimum height (44px in the header), 28px side padding, 600 weight, icon gap 0.7rem with a trailing arrow.
- **Primary (gold):** House Gold fill with navy text and the gold glow. This is the one primary action per screen: booking a consultation.
- **Secondary (navy):** Navy fill with white text and the navy glow. Used to submit the form on light pages.
- **Line:** No fill. Ivory text inside a 1px pale-gilt ring at 50%, which turns full gold on hover. Used on navy alongside a gold button (mobile Call).
- **Hover / Focus:** Rises 2px over 0.5s on the silk ease (`cubic-bezier(0.16, 1, 0.3, 1)`). Gold lightens to Pale Gilt, navy shifts to Dusk Navy. Focus is a 2px House Gold outline at 3px offset.
- **Text link action:** A secondary channel (WhatsApp) sits beside the gold button as underlined ivory text with a gold/60 underline, never as a second filled button.

### Chips
- **Style:** Language choice. Pill, 44px tall, navy text in a 1px navy/25 ring.
- **State:** When selected, the fill turns navy with ivory text. Focus applies a gold outline to the pill.

### Cards / Containers
- **Floating card (navy):** Lamplight Navy, 16px radius, 16px padding, gold/25 ring, card lift shadow. Mist meta line plus a serif value in ivory or gold. Bobs gently over 6s.
- **Chat panel:** Lamplight Navy, 16px radius, 28 to 36px padding, gold/20 ring, captioned under a white/10 rule.
- **No generic card grids.** Feature content goes in ruled lists.

### Inputs / Fields
- **Style:** Underline only. Transparent background, no radius, 52px minimum height, ink text, uppercase Label above in Soft Ink.
- **Focus:** Underline turns navy and thickens to 2px (1px border plus a 1px shadow). The global gold focus ring is suppressed here.
- **Error:** Underline and message in Error Red, with `aria-invalid` and a linked message.
- **Rest underline:** Must meet 3:1 against its surface. See Do's and Don'ts.

### Navigation
A sticky navy header, 72px tall, with a white/10 bottom hairline. Wordmark on the left. Mist text links at 0.92rem that turn ivory on hover, shown from 1024px up. A compact gold button on the right labelled "Consultation" on phones. No hamburger: phones rely on the scroll plus the mobile action bar.

### Printed Sheet (signature)
A white sheet with a 2px radius, 28 to 40px padding, a Hairline ring and the paper drop. It opens with a letterhead: ArchMark in Antique Gold, a small HOSHI/ACADEMY lockup, right-aligned meta in Soft Ink, all over a 1px House Gold rule. Contents are a ruled table or a letter. It closes with a serif italic signature over a hairline. Use it for any artefact a family would receive on paper: timetable, report, letter.

### Gold Line-Art (signature)
Inline SVG in House Gold, about a 1.8 stroke at a 560-unit scale (1.3 for ArchMark, 1.5 for 48px line icons), round caps and joins. Fills are limited to navy knock-outs and one soft lamp-light gradient (#F2D58A, 55% fading to 0) that breathes. Strokes draw in over 2.8s on the silk ease once in view. With reduced motion they are drawn and static.

## Do's and Don'ts

### Do:
- **Do** show the category literally: a child, a desk, a mentor, books. A parent must read "homeschooling for my child" in under a second.
- **Do** alternate navy and light sections full-bleed, and keep gold to lines, marks, the primary action and one headline phrase on navy.
- **Do** use Antique Gold (gold-deep) for any gold text or icon on white or porcelain.
- **Do** set headlines in Bodoni Moda, sentence case, ending in a full stop. Set every reading line in Anek Latin.
- **Do** separate content with hairline rules, and present take-home artefacts as printed sheets with the ArchMark letterhead.
- **Do** draw new illustrations and icons in the same single gold stroke with `pathLength=1`, and label sample content as a sample.
- **Do** honour reduced motion: drawings fully drawn, reveals visible, no bob or glow.

### Don't:
- **Don't** return to abstract metaphor imagery (kites, festival motifs) in place of the study scene. Test viewers rejected it.
- **Don't** use bright subject colours, cartoons, robot art, stock-photo children or neon edtech gradients.
- **Don't** fill a section or card with gold, or set House Gold text on white or porcelain.
- **Don't** set Bodoni in capitals, or put an uppercase label above a headline as a kicker.
- **Don't** use hard, offset or untinted heavy shadows. Use the desk shadows or a 1px ring.
- **Don't** box features into card grids, or add badge rows and fee cards.
- **Don't** give a form field a rest underline below 3:1 against its surface.
