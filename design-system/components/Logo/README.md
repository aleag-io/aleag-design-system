# Logo

Renders the aleag mark, or the mark locked up with the wordmark, inline as SVG so it follows the theme through `mark-ink` and `mark-bar`.

- **Consumer provides:** `variant`, `tone`, `size` (mark height in px).
- Use `horizontal` in web headers, invoices and email signatures; `stacked` on labels, packaging and square social avatars; the bare `mark` for app icons, favicons and tight spaces.
- `tone="reversed"` only on `inverse-surface` or `cobalt-500`. Never place any version on a photo.
- Keep clear space equal to the bowl radius (about a sixth of the mark's height) on all sides.
- Minimum size: 20 px tall on screen. Below 32 px, prefer `tone="mono"` so the bar does not fill in.
- Don't recolor the bar, rotate, outline, add effects, or set the wordmark in any font other than the supplied lettering.
- For print and files that leave the system, use the SVGs in the **Logos** asset group, not this component.
