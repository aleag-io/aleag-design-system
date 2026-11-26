# Tag

A small label for a topic or a tech stack. It renders as a plain label, as a link to a tag page (`href`), or as a filter toggle (`onClick`, with `aria-pressed`).

- **Consumer provides:** the label as `children`; `href` or `onClick` + `selected` when it is interactive; optional `count`.
- Filter rows on the Blog and Work indexes use toggles inside a `role="group"` with an `aria-label`. One "All" toggle comes first.
- A pressed toggle or the current tag page fills with `primary`. Interactive tags have a `border-strong` edge (3:1); static ones a `border` hairline.
- `tone="workshop"` sets the text in `workshop-text` for the woodworking line.
- Tags are sentence case and short: "Home lab", "Microsoft 365", "Walnut". Three per card at most.
