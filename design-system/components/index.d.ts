import * as React from 'react';

/** The aleag mark, alone or locked up with the wordmark. */
export interface LogoProps {
  /** 'mark' (default) | 'horizontal' | 'stacked' */
  variant?: 'mark' | 'horizontal' | 'stacked';
  /** 'color' uses mark-ink + mark-bar; 'reversed' is white for inverse-surface or photos-free dark grounds; 'mono' inherits currentColor. */
  tone?: 'color' | 'reversed' | 'mono';
  /** Height of the mark in px. Minimum 20. Default 40. */
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
