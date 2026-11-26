# PageHeader

The title block at the top of a section page such as Work, Blog or About. It holds the page's only `h1`.

- **Consumer provides:** `title`, optional `eyebrow` (the section name), `intro` (one or two sentences), and buttons as `children`.
- `size="md"` (default) uses `display-l`; `size="lg"` steps up to `display-xl` from `bp-md`. On phones both step down to `headline`.
- Don't use it on the home page: home keeps its plain layout.
- Keep titles short (the column stops at 18 characters a line) and specific: "Selected projects", not "Welcome to my portfolio".
