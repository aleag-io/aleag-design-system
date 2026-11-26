# Reveal

Fades content up 12 px, once, when it scrolls into view. Use it for lists and sections on inner pages, so the page feels settled rather than busy.

- **Consumer provides:** `children`; optional `delay` in ms for a stagger (0, 60, 120; stop at 240) and `as` for the element.
- Use it on PostCard rows, ProjectCard tiles and case-study sections below the fold. Don't wrap the page title, the header or anything above the fold: those must be there immediately.
- Never on the home page. Home stays still.
- It runs once per element and uses `duration-slow` with `ease-enter`. With `prefers-reduced-motion`, or before JavaScript loads, content simply shows.
