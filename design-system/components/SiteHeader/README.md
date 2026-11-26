# SiteHeader

The sticky, translucent bar at the top of every inner page of aleag.io: the logo mark, main nav, one optional call to action, and a menu button under 768 px.

- **Consumer provides:** `links` (default Work, Blog, About), `current` (the request path, so the matching link gets `aria-current="page"` and the sunbeam underline; `/blog/post-slug` still marks Blog), optional `cta`.
- The home page keeps its own minimal layout and does not use this header. Every other page does.
- It sits on `surface-acrylic` with a `border` hairline and condenses from `header-height` (64 px) to 56 px with `elev-2` once the page scrolls. Set `condense={false}` to turn that off.
- Keep the nav to five links or fewer, sentence case, nouns ("Work", "Blog"). The CTA starts with a verb ("Get in touch") and is the only `primary` button in the bar.
- Give in-page anchors `scroll-margin-top: calc(var(--header-height) + var(--space-4))` so headings don't hide under the bar. `Prose` already does this for `h2` and `h3`.
