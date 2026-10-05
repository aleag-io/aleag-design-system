# Card

A surface that groups one thing: a service, a project, a product, an invoice.

- **Consumer provides:** `title`, `children` (one or two sentences), optional `eyebrow` (the service line: "Consulting", "Workshop"), `media` (an image element, shown 16:9), `footer` (price, meta or actions), `href` to make the whole card a link.
- Resting cards use `elevation` 1. Linked cards lift to `elev-2` on hover. Don't stack cards inside cards.
- Lay cards out in a grid with `space-6` gaps; one column under 600 px, two from `bp-sm`, three from `bp-md`.
- Product photos for the woodworking line go in `media`; shoot on a plain ground so the card stays calm.
