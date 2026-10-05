# Alert

An inline message about the page or a task: what happened and what to do next.

- **Consumer provides:** `tone`, `title` (the outcome, short), `children` (one sentence of detail), optional `action` (a `Button`, usually `size="sm"`).
- Every tone has its own icon shape (circle-i, check, triangle, cross) plus a title, so the state never depends on color.
- `danger` alerts announce themselves to screen readers (`role="alert"`); the rest are polite status messages.
- Write plainly: "Invoice sent to Lisa" rather than "Success!".
