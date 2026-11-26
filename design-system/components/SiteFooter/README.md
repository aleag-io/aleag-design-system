# SiteFooter

The navy band that closes every page: reversed lockup, a one-sentence blurb, link columns and a copyright line.

- **Consumer provides:** `blurb`, `columns` (two or three, each `{ title, links }`), optional `note` for the base row.
- Always include the RSS feed in a column, with `rel: "alternate"`, so the blog stays subscribable.
- Sits on `inverse-surface`; links are `on-inverse` and underline in `accent` on hover; secondary text is `on-inverse-muted` (8.4:1 or better).
- The minimal home page can use it or skip it; inner pages always use it.
