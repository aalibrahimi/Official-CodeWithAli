/**
 * Blog content model — TypeScript-native.
 *
 * Posts are authored as typed modules (src/content/blog/posts/*.tsx), not
 * MDX. Content is a list of typed blocks so we get full IntelliSense,
 * zero MDX runtime cost, fully SSG-friendly, and the freedom to drop in
 * custom React blocks (CallOut, Comparison, Showcase, etc.) when a post
 * needs something a Markdown file cannot do cleanly.
 *
 * Every new block type is added here and rendered in
 * `src/components/blog/PostContent.tsx`.
 */

import type { ReactNode } from "react";

export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  accent: "red" | "gold" | "neutral";
}

export interface Tag {
  slug: string;
  name: string;
}

/* ---------- Content blocks ---------------------------------------------- */

type Inline = ReactNode;

export type Block =
  | { type: "p"; children: Inline }
  | { type: "h2"; id: string; children: Inline }
  | { type: "h3"; id: string; children: Inline }
  | { type: "lead"; children: Inline }
  | { type: "quote"; by?: string; children: Inline }
  | { type: "ul"; items: Inline[] }
  | { type: "ol"; items: Inline[] }
  | { type: "code"; lang?: string; code: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "callout"; tone?: "info" | "warn" | "insight"; title?: string; children: Inline }
  | { type: "divider" }
  | { type: "cta"; title: string; body?: string; href: string; label: string }
  | { type: "custom"; render: () => ReactNode };

/* ---------- Posts -------------------------------------------------------- */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date: YYYY-MM-DD */
  date: string;
  updated?: string;
  readMinutes: number;
  author: Author;
  category: Category["slug"];
  tags: Tag["slug"][];
  cover: {
    src: string;
    alt: string;
    /** Optional caption / credit shown under hero image. */
    credit?: string;
  };
  featured?: boolean;
  draft?: boolean;
  seo?: {
    title?: string;
    description?: string;
    ogImage?: string;
  };
  /** Rendered body. */
  content: Block[];
}

/* ---------- Newsletter --------------------------------------------------- */

export interface NewsletterIssue {
  slug: string;
  issue: number;
  title: string;
  summary: string;
  date: string;
  readMinutes: number;
  cover: { src: string; alt: string };
  tags?: string[];
  content: Block[];
}
