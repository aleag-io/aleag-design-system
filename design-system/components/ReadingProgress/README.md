# ReadingProgress

A 3 px sunbeam bar fixed to the very top of the viewport that fills as the reader moves through a post.

- **Consumer provides:** `target`, a CSS selector for the post body (for example `"article"`), so the bar measures the article and not the footer.
- Use it on blog posts of 5 minutes' read or more. Not on index pages, case studies with short text, or the home page.
- It is `accent`, the one sunbeam spark on a post page. Don't add another accent element above the fold.
- Decorative only (`aria-hidden`). Hidden with `prefers-reduced-motion`.
