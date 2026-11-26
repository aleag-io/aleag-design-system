# Prose

Typography for the rendered Markdown of a post or case study. Wrap the body in `Prose` and every element inside gets its style: headings, links, lists, quotes, inline and block code, figures, tables and rules.

- **Consumer provides:** the body, either as React `children` or as trusted, already-sanitized HTML via `html` (the usual output of a Markdown pipeline such as remark, MDX or Astro content collections).
- Body text is `body-l` (17/28) in a `measure` column (680 px, about 65 characters). `h2` is the top heading inside a post (the `h1` is in `ArticleHeader`); use `h3` below it, and go no deeper.
- Code blocks sit on `inverse-surface` and can break wider, up to `measure-wide`. Give a `pre` `tabIndex={0}` so keyboard users can scroll it. With syntax highlighting, pick a theme whose colors reach 4.5:1 on `inverse-surface`.
- Quotes sit under a short sunbeam bar. Use them for one striking line, not for long passages.
- Every image needs `alt` text. Captions are `caption` style in `ink-subtle`.
- Numbers in tables: add `className="num"` to the cell for mono, tabular figures.
