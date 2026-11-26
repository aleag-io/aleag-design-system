# aleag design system

Brand, tokens and components for aleag: technology and woodworking, at aleag.io. One source for the website, the family's other apps, and print.

The browsable version, with live component previews in light and dark themes, is the [aleag Design System](https://claude.ai/artifact/NHCttVUwPmqqWvM9msN4rx) on claude.ai. This repo holds the same files under version control, plus a compiled `tokens.css`, so code can depend on a tagged version.

## What's here

| Path | What |
| --- | --- |
| `design-system/README.md` | The brand book: principles, voice, color, type, spacing, logo, print. Start here. |
| `design-system/website.md` | aleag.io: site map, page recipes, writing rules, front matter, motion. |
| `design-system/tokens.json` | Design tokens: colors (light and dark), metals, type scale, spacing, radius, elevation, motion, breakpoints, layout. |
| `design-system/tokens.css` | `tokens.json` compiled to CSS custom properties, `@font-face` rules and type classes. Generated, don't edit by hand. |
| `design-system/components/` | 19 React components on `window.Aleag` (`bundle.js` + `bundle.css`), types in `index.d.ts`, and a guideline (`README.md`) and preview per component. |
| `design-system/assets/Logos/` | The logo: L, A, E and G woven in a square frame, with aleag.io beneath. Black, white, gold, bronze, rose gold and silver, plus the frame mark, app icon and favicon. |
| `design-system/assets/Retired logos/` | Earlier logos, kept for reference. Don't use in new work. |
| `design-system/fonts/` | Bricolage Grotesque, Figtree, JetBrains Mono (and Sacramento, retired), with their SIL Open Font License files. |
| `design-system/design-system.json` | Index used by the claude.ai design system (asset ids, namespace). |
| `scripts/build_tokens_css.py` | Rebuilds `tokens.css` from `tokens.json`. |
| `scripts/contrast.py` | WCAG contrast ratio between two colors. |

Components: `Logo`, `Button`, `TextField`, `Card`, `Badge`, `Alert`; site: `SiteHeader`, `SiteFooter`, `PageHeader`; content: `Tag`, `PostCard`, `ProjectCard`, `EmptyState`; article: `ArticleHeader`, `Prose`, `ProjectFacts`, `PostNav`; motion: `Reveal`, `ReadingProgress`.

## Install

The repo is private, so install it from GitHub with a pinned tag. The machine or CI runner needs read access to `aleag-io/aleag-design-system`.

```sh
npm i github:aleag-io/aleag-design-system#v1.0.0
```

To upgrade, change the tag and reinstall. Tags follow semver: a patch is a fix, a minor adds tokens or components, a major renames or removes something.

## Use it on a web page

Load the stylesheets, then React 18, then the components:

```html
<link rel="stylesheet" href="node_modules/@aleag/design-system/design-system/tokens.css">
<link rel="stylesheet" href="node_modules/@aleag/design-system/design-system/components/bundle.css">
<script src="https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js"></script>
<script src="node_modules/@aleag/design-system/design-system/components/bundle.js"></script>
<script>
  const { SiteHeader, Logo } = window.Aleag;
</script>
```

Set `<html data-theme="light">` or `data-theme="dark"` to pick the theme. `tokens.css` loads the fonts from `fonts/` beside it, so copy or serve the `design-system/` folder as a whole.

In a bundler (Vite, Next.js, Astro), import the CSS directly:

```js
import "@aleag/design-system/tokens.css";
import "@aleag/design-system/components.css";
```

Without React, use the tokens on their own. Every token is a custom property named after it (`var(--primary)`, `var(--space-4)`, `var(--radius-md)`), every type style is a class (`.headline`, `.body`, `.code`), and most component styles work as plain HTML with the same class names (`al-prose`, `al-tag`, `al-post`).

## Logos

Use the files in `design-system/assets/Logos/` as supplied. Gold, rose gold and silver go on dark grounds, black and bronze on light ones, and white on blue. The brand book's Logo section has sizes and clear space. For a favicon:

```html
<link rel="icon" type="image/svg+xml" href="/aleag-favicon.svg">
```

## Native mobile

Map the semantic token names in `tokens.json` (`primary`, `on-primary`, `surface`, `ink`, ...) into your platform's theme. Light and dark values sit side by side on each color token.

## Changing the system

The claude.ai design system is still the master copy. To change something:

1. Edit it in the design system on claude.ai, or ask Claude to.
2. Copy the changed files into `design-system/` here, run `python3 scripts/build_tokens_css.py` if tokens changed, and bump the version in `package.json`.
3. Commit, tag (`git tag v1.1.0 && git push --tags`), and update the tag in each project that uses it.

When the design settles, the repo can become the master copy instead: edit here and run `/design-sync` in Claude Code to push changes to the claude.ai design system, which then becomes read-only.
