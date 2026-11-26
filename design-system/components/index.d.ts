import * as React from 'react';

/** The aleag logo: L, A, E and G woven inside a square frame, with "aleag.io" beneath. One color at a time. */
export interface LogoProps {
  /** 'full' (default): frame plus the aleag.io line, 96 px tall and up. 'mark': the frame alone, for the site header, favicons, avatars and anything smaller. */
  variant?: 'full' | 'mark';
  /** 'color' uses mark-ink (ink on light, white on dark). 'reversed' white and the metals 'gold', 'rose-gold', 'silver' go on dark grounds (navy, inverse-surface); 'black' and 'bronze' on light grounds; 'mono' inherits currentColor. */
  tone?: 'color' | 'reversed' | 'mono' | 'black' | 'gold' | 'bronze' | 'rose-gold' | 'silver';
  /** Height in px; width follows. Default 120 for 'full', 40 for 'mark'. Minimum: 'full' 96, 'mark' 24. */
  size?: number;
  /** Accessible name. Default "aleag". */
  label?: string;
  className?: string;
}
export declare function Logo(props: LogoProps): React.ReactElement;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 'primary' once per view; 'secondary' default; 'tonal', 'ghost', 'accent', 'danger'. */
  variant?: 'primary' | 'secondary' | 'tonal' | 'ghost' | 'accent' | 'danger';
  /** 32 / 40 / 48 px tall. Use 'lg' for touch-first mobile screens. */
  size?: 'sm' | 'md' | 'lg';
  /** Icon node before the label. */
  icon?: React.ReactNode;
  /** Icon node after the label (forward arrows, chevrons). */
  iconRight?: React.ReactNode;
  /** Full width. */
  block?: boolean;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): React.ReactElement;

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Visible label. Required. */
  label: string;
  /** Helper text under the field. */
  hint?: string;
  /** Error message. Replaces the hint and marks the field invalid. */
  error?: string;
  /** Render a textarea. */
  multiline?: boolean;
  /** Short fixed text inside the field, e.g. "$" or "https://". */
  prefix?: string;
}
export declare function TextField(props: TextFieldProps): React.ReactElement;

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Uppercase eyebrow above the title: the service line or category. */
  eyebrow?: string;
  title?: React.ReactNode;
  /** Image or illustration shown 16:9 at the top. */
  media?: React.ReactNode;
  /** Row under a divider: price, meta, actions. */
  footer?: React.ReactNode;
  /** 0–3. Default 1. */
  elevation?: 0 | 1 | 2 | 3;
  /** Makes the whole card a link with a hover lift. */
  href?: string;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): React.ReactElement;

export interface BadgeProps {
  tone?: 'neutral' | 'primary' | 'accent' | 'success' | 'warning' | 'danger' | 'info';
  /** Leading status dot. */
  dot?: boolean;
  children: React.ReactNode;
  className?: string;
}
export declare function Badge(props: BadgeProps): React.ReactElement;

export interface AlertProps {
  tone?: 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  children?: React.ReactNode;
  /** A Button, placed at the end. */
  action?: React.ReactNode;
  className?: string;
}
export declare function Alert(props: AlertProps): React.ReactElement;

/* ───────────── Site: aleag.io ───────────── */

export interface NavLink { label: string; href: string; rel?: string; }

/** Sticky translucent site bar for inner pages: horizontal logo, main nav, optional CTA, mobile menu. Condenses on scroll. */
export interface SiteHeaderProps {
  /** Main nav. Default Work, Blog, About. Keep to five or fewer. */
  links?: NavLink[];
  /** Current path, e.g. "/blog/some-post". Marks the matching link with aria-current and the sunbeam underline. */
  current?: string;
  /** One primary action, e.g. { label: "Get in touch", href: "/contact" }. */
  cta?: NavLink;
  homeHref?: string;
  /** Shrink to 56px with a shadow once the page scrolls. Default true. */
  condense?: boolean;
  /** Force the condensed look (previews, screenshots). */
  scrolled?: boolean;
  className?: string;
}
export declare function SiteHeader(props: SiteHeaderProps): React.ReactElement;

/** Navy footer band: reversed lockup, short blurb, link columns (include RSS), copyright line. */
export interface SiteFooterProps {
  blurb?: string;
  columns?: { title: string; links: NavLink[] }[];
  /** Right-hand line in the base row, e.g. "Made in Sugar Land, Texas". */
  note?: string;
  year?: number;
  className?: string;
}
export declare function SiteFooter(props: SiteFooterProps): React.ReactElement;

/** Title block for a section page (Work, Blog, About). Not for the home page. */
export interface PageHeaderProps {
  eyebrow?: string;
  /** The page's h1. */
  title: React.ReactNode;
  intro?: React.ReactNode;
  /** 'md' (default, display-l) | 'lg' (display-xl from bp-md). */
  size?: 'md' | 'lg';
  /** Buttons under the intro. */
  children?: React.ReactNode;
  className?: string;
}
export declare function PageHeader(props: PageHeaderProps): React.ReactElement;

/** A topic or stack label. Static span, a link to a tag page, or a filter toggle (aria-pressed). */
export interface TagProps {
  children: React.ReactNode;
  /** Renders a link. */
  href?: string;
  /** Renders a toggle button. */
  onClick?: () => void;
  /** Pressed toggle or current tag page: primary fill. */
  selected?: boolean;
  /** Post or project count, in mono. */
  count?: number;
  size?: 'sm' | 'md';
  /** 'workshop' sets the text in workshop-text for the woodworking line. */
  tone?: 'default' | 'workshop';
  className?: string;
}
export declare function Tag(props: TagProps): React.ReactElement;

export type TagInput = string | { label: string; href?: string; tone?: 'default' | 'workshop' };

/** One post in the blog list. 'row' (default) sits in a divided list; 'feature' is the raised latest-post panel. */
export interface PostCardProps {
  title: string;
  href: string;
  /** ISO date "YYYY-MM-DD"; shown as "25 Nov 2026". */
  date?: string;
  /** Minutes. */
  readingTime?: number;
  excerpt?: string;
  tags?: TagInput[];
  variant?: 'row' | 'feature';
  /** Accent badge on a feature post, e.g. "Latest". */
  flag?: string;
  className?: string;
}
export declare function PostCard(props: PostCardProps): React.ReactElement;

/** Portfolio tile: 4:3 media, service line, title, one-line summary, stack tags and year. Built on Card. */
export interface ProjectCardProps {
  title: string;
  href?: string;
  /** Sets the eyebrow; 'workshop' switches eyebrow and tags to workshop-text. */
  line?: 'technology' | 'workshop' | 'software' | 'home' | 'consulting';
  /** Overrides the line's default eyebrow text. */
  eyebrow?: string;
  summary?: React.ReactNode;
  /** An img or picture, cropped 4:3. */
  media?: React.ReactNode;
  tags?: TagInput[];
  year?: string | number;
  className?: string;
}
export declare function ProjectCard(props: ProjectCardProps): React.ReactElement;

/** Top of a post or case study: back link, tags, title (h1), dek, byline with date and reading time. */
export interface ArticleHeaderProps {
  title: string;
  dek?: string;
  back?: NavLink;
  tags?: TagInput[];
  author?: { name: string; avatar?: string };
  date?: string;
  updated?: string;
  readingTime?: number;
  /** Use measure-wide instead of measure (case studies with wide media). */
  wide?: boolean;
  className?: string;
}
export declare function ArticleHeader(props: ArticleHeaderProps): React.ReactElement;

/** Typography for rendered Markdown: headings, links, lists, quotes, code, figures, tables. */
export interface ProseProps extends React.HTMLAttributes<HTMLElement> {
  /** Element to render. Default 'div'; use 'article' for a post body. */
  as?: string;
  /** Trusted, already-sanitized HTML from your Markdown pipeline. */
  html?: string;
  children?: React.ReactNode;
}
export declare function Prose(props: ProseProps): React.ReactElement;

/** The facts row of a case study: client, role, timeline, stack, outcome. */
export interface ProjectFactsProps {
  /** Mark the single measurable outcome with emphasis. */
  items: { label: string; value: React.ReactNode; emphasis?: boolean }[];
  className?: string;
}
export declare function ProjectFacts(props: ProjectFactsProps): React.ReactElement;

/** Previous / next links at the end of a post or case study. */
export interface PostNavProps {
  prev?: { title: string; href: string };
  next?: { title: string; href: string };
  /** aria-label. Default "More posts". */
  label?: string;
  className?: string;
}
export declare function PostNav(props: PostNavProps): React.ReactElement;

/** Placeholder for an empty list: no posts yet, no projects match a filter. */
export interface EmptyStateProps {
  title: string;
  children?: React.ReactNode;
  /** Buttons or links. */
  action?: React.ReactNode;
  /** false hides the small mark illustration. */
  art?: boolean;
  className?: string;
}
export declare function EmptyState(props: EmptyStateProps): React.ReactElement;

/* ───────────── Motion ───────────── */

/** Fades content up 12px once, as it scrolls into view. No effect with prefers-reduced-motion or without JavaScript. */
export interface RevealProps {
  as?: string;
  /** Stagger in ms; keep under 240 and step by 60. */
  delay?: number;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}
export declare function Reveal(props: RevealProps): React.ReactElement;

/** 3px sunbeam bar fixed to the top of the viewport that fills as a post is read. Hidden with prefers-reduced-motion. */
export interface ReadingProgressProps {
  /** CSS selector of the article to measure. Default: the whole page. */
  target?: string;
  /** Fixed 0–1 value (previews). */
  value?: number;
  style?: React.CSSProperties;
  className?: string;
}
export declare function ReadingProgress(props: ReadingProgressProps): React.ReactElement;

/** "2026-11-25" → "25 Nov 2026", time-zone safe. */
export declare function formatDate(iso: string): string;
