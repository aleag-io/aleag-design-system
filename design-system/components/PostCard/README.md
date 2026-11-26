# PostCard

One post in the blog list. The whole card is the link (the title's link stretches over it), so tags stay separately clickable.

- **Consumer provides:** `title`, `href`, `date` (ISO `YYYY-MM-DD`, shown as "20 Nov 2026"), `readingTime` in minutes, a one- or two-sentence `excerpt`, up to three `tags`.
- `variant="feature"` is the raised panel for the newest post at the top of the Blog index, with an optional `flag` ("Latest") in the accent badge. Use it once per page.
- `variant="row"` (default) stacks in a single column divided by `border` hairlines. Don't put rows in a grid: titles need the width.
- Excerpts are plain sentences that say what the reader will get, not teasers.
- Wrap rows in `Reveal` for a soft entrance as the list scrolls (see Motion).
