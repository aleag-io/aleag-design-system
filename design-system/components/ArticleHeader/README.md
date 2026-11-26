# ArticleHeader

The top of a blog post or case study: back link, tags, the `h1` title, a one-sentence dek, and the byline with date and reading time.

- **Consumer provides:** `title`, `dek`, `back` (`{ label: "All posts", href: "/blog" }` or "All work"), `tags`, `author` (`{ name, avatar? }`; without an avatar it shows initials on `primary`), `date`, optional `updated`, `readingTime`.
- It is as wide as the reading column (`measure`). Case studies with wide hero media pass `wide` to use `measure-wide`.
- Show `updated` only when the change matters to the reader (a fix, a new section), not for typos.
