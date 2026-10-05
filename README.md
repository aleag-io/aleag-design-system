# aleag design system

Brand, tokens and components for aleag: IT consulting and woodworking, at aleag.io. It covers the web, mobile and print.

The browsable version, with live component previews in light and dark themes, is the [aleag Design System](https://claude.ai/artifact/NHCttVUwPmqqWvM9msN4rx) artifact on claude.ai. This repo holds the same files under version control.

## What's here

| Path | What |
| --- | --- |
| `design-system/README.md` | The brand book: principles, voice, color, type, spacing, logo, print. Start here. |
| `design-system/tokens.json` | Design tokens: colors (light and dark), type scale, spacing, radius, elevation, motion, breakpoints. |
| `design-system/components/` | React components (`Logo`, `Button`, `TextField`, `Card`, `Badge`, `Alert`) as `bundle.js` + `bundle.css`, with types in `index.d.ts` and a guideline and preview per component. |
| `design-system/assets/Logos/` | Logo SVGs: horizontal, stacked, mark, reversed, mono, app icon. |
| `design-system/fonts/` | Bricolage Grotesque, Figtree, JetBrains Mono and Sacramento (wordmark only), with their SIL Open Font License files. |
| `design-system/design-system.json` | Index used by the claude.ai artifact (asset ids, namespace). |
| `scripts/build_logos.py` | Regenerates the logo SVGs (needs `fontTools`). |
| `scripts/contrast.py` | WCAG contrast ratio between two colors. |

## Palette at a glance

- Primary blue `cobalt-500` #0a5fe8
- Sunbeam accent `sun-500` #ffc933, the bar in the mark
- Navy ink `ink` #0b1524 on cool-grey `canvas` #f6f8fa

## Using it

- **Web:** load the fonts, a CSS build of `tokens.json` (custom properties named after each token, e.g. `--primary`), then `components/bundle.css` and `components/bundle.js` after React 18. Components are on `window.Aleag`.
- **Native mobile:** map the semantic token names in `tokens.json` (`primary`, `on-primary`, `surface`, ...) into your platform's theme.
- **Print:** see the Print section of the brand book for CMYK starting values, margins and one-color rules.

## Keeping it in sync

Edit the artifact or this repo, then copy the changed files across so both stay the same. Logos in the artifact are uploads, so a logo change there also needs a new upload.
