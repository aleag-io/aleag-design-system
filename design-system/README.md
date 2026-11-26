aleag is a family studio (Anoop, Lisa, Ethan, Andrew and George) doing technology work and woodworking, online at aleag.io. The system covers both lines, on the web, in the mobile app and in print. It should feel fresh, confident and dependable: a strong true blue that means action and trust, one sunbeam-yellow spark taken from the bar in the mark, crisp neutral greys and clean, layered surfaces. Keep it direct and engineered: no pastels, no lilac or violet, no swirls.

## Principles

- **Woven letters, one frame.** The logo weaves L, A, E and G into a square frame, with aleag.io beneath. It is always one color, and everything around it stays quiet so it can.
- **Fluent, not flat.** Surfaces sit on soft layered shadows, bars can be translucent (`surface-acrylic`), corners are rounded, and motion settles quickly. Depth explains hierarchy; it is never decoration.
- **Code and timber.** Technology screens lean on blue and mono figures. The workshop line adds `walnut-600` and product photography. Both share the same type, spacing and components.
- **Sunbeam is a spark.** Use `accent` for one thing per view: a single call to action, the active-nav underline, a "New" badge, the reading-progress bar. It is never part of the logo.

## Content fundamentals

- Write as "we" (the family) to "you" (the client). Plain words, short sentences, no jargon you would not say on a call.
- Sentence case everywhere, including buttons and headings. Uppercase only in `overline` eyebrows.
- Buttons start with a verb and say what happens: "Book a call", "Send invoice", "Download the plan".
- Be specific: "Your Microsoft 365 licence renews on 9 Oct", "18 mm birch ply", "$1,240.00". Measurements in millimetres with a space ("450 mm").
- Errors say what went wrong and how to fix it. No "Oops", no exclamation marks, no emoji in product UI.
- The brand name is always lowercase: **aleag**, also at the start of a sentence.

## Color

- Page ground is `canvas`; cards, sheets and inputs sit on `surface`. In dark mode, raised layers use `surface-raised` so elevation also lightens.
- Text: `ink` for primary copy, `ink-muted` for secondary, `ink-subtle` only for captions and placeholders on `canvas` or `surface`.
- Actions and links use `primary` with `on-primary` text. Selected and tonal states use `primary-soft` with `on-primary-soft`.
- `accent` (sunbeam yellow) never carries text on light grounds; yellow as text uses `accent-text`. Text on a yellow fill is `on-accent` (navy ink).
- Big blue moments are encouraged: hero bands, the app icon, feature panels. White text on `cobalt-500` is 5.5:1.
- The blue sits at hue 217°, a true blue. Don't drift it toward violet or periwinkle, and keep neutrals grey-blue, never lavender.
- Status: `success`, `warning`, `danger`, `info` (steel cyan, so it never reads as a blue action), each with a `-soft` fill. A status always carries an icon and a word, so color is never the only signal.
- Reversed bands (footers, banners, the reversed logo) use `inverse-surface` with `on-inverse`; secondary text there is `on-inverse-muted`.
- Workshop-line labels (eyebrows, tags) use `workshop-text`, which reads 7:1 or better in both themes; `walnut-600` itself is for print and illustration.
- The raw scales (`cobalt-*`, `sun-*`, `walnut-600`) are for illustration, charts and print. In UI, reach for the semantic tokens first.
- Every text pair above meets WCAG AA (4.5:1) in both themes; control borders (`border-strong`) and the `focus` ring meet 3:1 or more on every surface. `border` is a decorative hairline and does not mark a control's edge.

## Typography

- **Bricolage Grotesque** (`--font-display`) for `display-xl`, `display-l`, `headline` and `title`. Bold, tight tracking, used with restraint: one display style per screen.
- **Figtree** (`--font-sans`) for everything people read and operate: `subtitle`, `body-l`, `body`, `label`, `caption`, `overline`.
- **JetBrains Mono** (`--font-mono`) for `code` and `data`: invoice numbers, measurements and money in tables, always with `font-variant-numeric: tabular-nums`.
- **Sacramento** (`--font-script`) belonged to the v1 script wordmark, which is retired. Don't use it for new work.
- Long-form text uses `body-l` at about 65 characters per line. Headings get `text-wrap: balance`.
- On mobile, step display styles down one level (`display-xl` becomes `display-l`, `display-l` becomes `headline`).

## Spacing, layout and radius

- Everything sits on a 4 px grid: `space-1` (4) to `space-24` (96).
- Page gutters: `space-4` on phones, `space-6` from `bp-sm` (600 px), `space-10` from `bp-md` (1024 px). Content caps at 1200 px.
- Section rhythm: `space-12` between sections on mobile, `space-16` on desktop.
- Corners stay crisp: `radius-sm` (6 px) for buttons and inputs, `radius-md` (10 px) for cards and alerts, `radius-lg` (16 px) for sheets and dialogs, `radius-pill` for pills and avatars.

## Elevation and motion

- Four levels: `elev-1` resting cards, `elev-2` hover and sticky bars, `elev-3` menus and toasts, `elev-4` dialogs and bottom sheets.
- Translucent top bars and mobile tab bars use `surface-acrylic` with `backdrop-filter: blur(20px) saturate(160%)`, over a `border` hairline.
- Motion: `duration-fast` for hover and press, `duration-base` for menus and toggles, `duration-slow` for sheets and dialogs. Move with `ease-standard`, arrive with `ease-enter`, leave with `ease-exit`. Pressed buttons scale to 0.98.
- With `prefers-reduced-motion`, drop movement and keep only short fades.
- On the website, motion follows the Website section: page cross-fades, a header that condenses on scroll, `Reveal` for content below the fold and `ReadingProgress` on long posts. The home page stays still.
- Focus is always visible: a 2 px `focus` ring, offset 2 px from the element.

## Logo

- The logo weaves **L, A, E and G** together inside a square frame, with **aleag.io** set beneath. The master files are in the **Logos** asset group; use them as supplied, never redrawn.
- Two versions: the **full logo** (frame plus aleag.io) from 96 px tall or 25 mm in print, for the landing page, footer, documents and signs; and the **mark** (frame alone) for anything smaller, such as the site header, avatars, favicons and engraving.
- One color at a time, chosen for the ground:
  - **Dark grounds** (navy, `inverse-surface`): `metal-gold` (the premium pairing), `metal-rose-gold`, `metal-silver` or white.
  - **Light and cream grounds:** black (#161616) or `metal-bronze`.
  - **Blue (`cobalt-500`):** white only.
  Gold, rose gold and silver are too faint on white (1.7–2.9:1), and bronze is too dark on navy (3.4:1).
- Clear space: a tenth of the frame's width on every side. Minimum sizes: full logo 96 px / 25 mm; mark 24 px on screen, 8 mm in print, 12 mm when engraved or laser-burned into wood.
- For foil, embossing and engraving, use the gold or black files as the artwork; the finish supplies the metal.
- Never recolor outside these inks, mix two colors, outline, rotate, stretch, add effects or set it on a busy photo.
- In code, use the `Logo` component (`variant="full"` or `"mark"`, with a `tone`).

## Iconography

- Use **Lucide** icons (lucide.dev) at 20 or 24 px, 1.75 px stroke, in `currentColor`. Its geometric strokes match the mark. This is a recommendation for a new system; there was no icon set in the source.
- Icons sit beside a label wherever space allows; an icon-only button needs an `aria-label`.
- No emoji in UI, documents or signage.

## Print

- Set print documents (invoices, proposals, labels, business cards) in the same three families. Body text 9.5–10.5 pt Figtree, headings in Bricolage Grotesque, figures in JetBrains Mono.
- Margins: 15 mm on A4 and Letter documents, 4 mm safe area plus 3 mm bleed on cards and labels.
- Starting CMYK builds for coated stock: `cobalt-500` C90 M58 Y0 K0 · `cobalt-900` C100 M85 Y30 K35 · `sun-500` C0 M20 Y85 K0 · `walnut-600` C35 M60 Y75 K40 · `ink` (navy) C90 M75 Y45 K65. The bright screen blue prints slightly duller in CMYK; for signage and business cards, specify a matched true-blue spot ink from a Pantone guide (not a violet-leaning one). These are starting points: approve them on a printed proof and match the nearest spot colors in a Pantone guide before a large run.
- One-color jobs (stamps, engraving, single-ink labels) use `aleag-logo-black.svg` or `aleag-mark-black.svg`; gold foil uses the gold files as the artwork.
- On kraft and natural wood stock, print the logo in black or `metal-bronze`.

## Using it

- Web and mobile web: load `tokens.css`, the fonts and `components/bundle.css`, then use the React components from the `Aleag` namespace.
- aleag.io: see the **Website** section for the site map, page recipes, writing rules, front matter and motion. Site components are grouped as Site, Content, Article and Motion.
- Native mobile (iOS, Android, React Native, Flutter): use `tokens.json` as the source and map semantic names one to one (`primary`, `on-primary`, `surface`, ...). Keep 44 pt minimum touch targets (`Button size="lg"` on touch screens).
