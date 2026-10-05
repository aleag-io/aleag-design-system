# Button

Buttons start an action; their label says exactly what happens, verb first, in sentence case ("Book a call", "Send invoice").

- **Consumer provides:** `children` (the label), `onClick` or `type="submit"`, optional `icon`/`iconRight`, `variant`, `size`.
- `primary` (cobalt) at most once per view, for the thing the page is for. `secondary` is the default. `tonal` for supporting actions in toolbars and cards. `ghost` for low-emphasis actions next to a primary.
- `accent` (sunbeam yellow with ink text) is for marketing calls to action only, such as the hero of aleag.io. Never next to a `primary`.
- `danger` only for destructive actions, and the label names the thing: "Delete project".
- Sizes: `sm` 32 px for dense tables, `md` 40 px default, `lg` 48 px for mobile and touch screens (meets the 44 px touch target).
- Focus shows a 2 px `focus` ring with a 2 px gap. Don't remove it.
