# TextField

A labelled single-line or multi-line text input with optional hint, error and prefix.

- **Consumer provides:** `label` (always visible, never placeholder-only), `value`/`onChange` or `defaultValue`, optional `hint`, `error`, `prefix`, `multiline`, and any native input attribute.
- Errors say what went wrong and how to fix it: "Enter an email like name@company.com", not "Invalid input".
- Use `prefix` for fixed units and schemes ("$", "https://", "mm").
- Stack fields with `space-5` between them; full width on mobile, at most 480 px wide on desktop.
- The field border is `border-strong` (3:1). Focus swaps it for `primary` with a soft halo.
