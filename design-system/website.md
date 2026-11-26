# Website: aleag.io

How the system applies to aleag.io as it grows from a one-screen landing page into a site with a blog and a portfolio.

## Principles for the site

- **Home stays simple.** The landing page keeps what it has today: the aleag name and a short row of text links. New sections are added to that link row, nothing more: no hero image, no carousel, no stats, no motion. Every other page carries the full site chrome.
- **Inner pages do the work.** Section pages use `SiteHeader`, `PageHeader` and `SiteFooter`; detail pages use `ArticleHeader`, `Prose` and `PostNav`.
- **Code and timber, side by side.** One Work index holds technology, software, home-lab and workshop projects. The `line` on each `ProjectCard` tells them apart; workshop pieces pick up `workshop-text`.
- **Calm motion.** Movement explains arrival and position and stays out of the way (see Motion below).

## Site map and URLs

| Page | URL | Built from |
| --- | --- | --- |
| Home | `/` | The current minimal page. Add a "Work" link next to "Blog". |
| Work index | `/work` | SiteHeader · PageHeader · Tag filters · ProjectCard grid · SiteFooter |
| Case study | `/work/<slug>` | SiteHeader · ArticleHeader (`wide`) · hero figure · ProjectFacts · Prose · PostNav · SiteFooter |
| Blog index | `/blog` | SiteHeader · PageHeader · Tag filters · PostCard feature + rows · SiteFooter |
| Post | `/blog/<slug>` | ReadingProgress · SiteHeader · ArticleHeader · Prose · PostNav · SiteFooter |
| Tag page | `/blog/tags/<tag>` | Blog index with that Tag `selected` and the tag as the PageHeader title |
| About | `/about` | SiteHeader · PageHeader · Prose · SiteFooter |
| Feed | `/rss.xml` | Linked from SiteFooter and from `<link rel="alternate" type="application/rss+xml">` in every page head |

Slugs are lowercase words joined by hyphens, taken from the title: `/blog/quiet-home-nas`, `/work/shaker-kitchen-cabinets`. Never change a published slug; if you must, redirect the old one.

## Page recipes

**Blog index.** `PageHeader` (eyebrow "Blog"), then a row of `Tag` toggles (All first, with counts), then the newest post as `PostCard variant="feature" flag="Latest"`, then the rest as `PostCard` rows in a single `measure-wide` column. With no posts, show `EmptyState` with an RSS action instead of the list. The current "No posts yet. Check back soon." line becomes that EmptyState.

**Work index.** `PageHeader` (eyebrow "Work"), `Tag` toggles for the lines (All, Technology, Software, Home lab, Workshop), then a `ProjectCard` grid: one column under `bp-sm`, two from 600 px, three from 1024 px, `space-6` gaps. Order by year, newest first; pin at most two favourites to the top.

**Post.** `ReadingProgress target="article"`, `SiteHeader current="/blog"`, `ArticleHeader` with `back` to "All posts", the body in `Prose as="article"`, then `PostNav`. Sections start with `h2`; a post over about 1,500 words gets a short "In this post" list of `h2` anchors after the dek.

**Case study.** `ArticleHeader wide` with `back` to "All work", one hero figure at `measure-wide`, `ProjectFacts`, then the body in `Prose` with these `h2` sections in order: The problem · What we did · The result · What we'd do differently. Close with `PostNav label="More projects"`.

**Layout.** Content sits in `.al-container` (max `container-max`, 1200 px, with the standard gutters). Reading columns use `measure` (680 px); wide figures and code break out to `measure-wide` (960 px). Section spacing is `space-12` on phones and `space-16` from `bp-md`.

## Writing for the site

- Posts and case studies are first person plural for the family ("we built"), or first person singular when it is Anoop's own view. Pick one per post and keep it.
- Titles say what the piece is about in plain words: "Building a quiet home NAS on a one-litre PC", not "My NAS journey". Sentence case.
- Every post has a dek: one sentence of 15–25 words that tells the reader what they'll get. It doubles as the meta description and the PostCard excerpt.
- Up to three tags per post, from a short shared list (Home lab, Microsoft 365, AIOps, Woodworking, Software, …). Add a new tag only when a third post needs it.
- Case studies lead with the outcome and give one number where there is one. Name clients only with written permission; otherwise use the sector.
- Workshop write-ups give wood, joinery, finish and size in millimetres ("450 × 450 × 560 mm").
- Dates show as "20 Nov 2026" (`formatDate`). Reading time is words ÷ 230, rounded up.

## Front matter

Posts and case studies are Markdown files whose front matter feeds the components directly:

```yaml
# blog/quiet-home-nas.md
title: Building a quiet home NAS on a one-litre PC
dek: A Dell OptiPlex Micro, a five-bay USB-C enclosure and Plex — what worked, what ran hot, and the parts list.
date: 2026-11-20
updated:            # optional, only for meaningful changes
tags: [Home lab, Storage]
cover: ./nas-shelf.jpg   # optional; also the social card image
draft: false
```

```yaml
# work/shaker-kitchen-cabinets.md
title: Shaker kitchen cabinets
summary: Face-frame cabinets in maple with inset doors, built in the garage shop.
line: workshop          # technology | software | home | workshop
year: 2026
tags: [Maple, Inset doors]
cover: ./cabinets.jpg
facts:
  - { label: Wood, value: Hard maple }
  - { label: Joinery, value: Pocket screws and dados }
  - { label: Finish, value: Water-based poly }
  - { label: Outcome, value: 14 cabinets in 9 weekends, emphasis: true }
```

## Motion

Motion is reserved for inner pages and stays subtle. Every effect below is built in and turns off with `prefers-reduced-motion`.

- **Page transitions.** `bundle.css` turns on cross-document view transitions (`@view-transition { navigation: auto; }`): pages cross-fade, the incoming one rising 8 px, while the header stays put. Browsers without support simply navigate. Nothing to add per page.
- **Header on scroll.** `SiteHeader` condenses from 64 px to 56 px and gains `elev-2` after the first few pixels of scroll.
- **Scroll reveal.** Wrap PostCard rows, ProjectCard tiles and case-study sections below the fold in `Reveal`. Stagger siblings by 60 ms, at most four steps. Never reveal titles, the header or anything visible on load.
- **Reading progress.** Posts of 5 minutes or more get `ReadingProgress`, the one sunbeam accent on the page.
- **Hover.** Linked cards lift 2 px to `elev-2`; links and tags change color over `duration-fast`.
- **Not used:** parallax, scroll-jacking, auto-playing carousels, animated counters, cursor effects, and any motion on the home page.

## Technical notes

- Load `tokens.css`, the fonts and `components/bundle.css` on every page; React components come from the `Aleag` namespace. For a static-site generator that renders HTML without React, the class names (`al-prose`, `al-post`, `al-tag`, …) can be used directly in templates; only `SiteHeader`'s menu button, `Reveal` and `ReadingProgress` need a small script.
- Every page has a unique `<title>` ("Building a quiet home NAS · aleag"), a meta description from the dek, and Open Graph tags with the cover image (1200 × 630). Without a cover, use the gold full logo on navy.
- Use `aleag-favicon.svg` for the favicon and `aleag-app-icon.svg` for the PWA and touch icons. The site header uses the frame mark; the landing page and footer use the full logo (gold on the navy footer).
