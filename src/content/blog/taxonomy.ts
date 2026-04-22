import type { Category, Tag } from "@/lib/blog/types";

export const CATEGORIES: Category[] = [
  {
    slug: "studio-notes",
    name: "Studio Notes",
    description:
      "Dispatches from our design and engineering practice — how we work, what we ship, and what we learned the hard way.",
    accent: "red",
  },
  {
    slug: "playbooks",
    name: "Playbooks",
    description:
      "Concrete, repeatable processes we run for clients. Pull the lever, get the result.",
    accent: "gold",
  },
  {
    slug: "engineering",
    name: "Engineering",
    description:
      "Craft, architecture, tooling. Where we nerd out about the things that quietly make sites faster and calmer.",
    accent: "neutral",
  },
  {
    slug: "design",
    name: "Design",
    description:
      "Visual systems, typography, motion, and the decisions that make an interface feel like a place instead of a layout.",
    accent: "gold",
  },
  {
    slug: "business",
    name: "Business of Building",
    description:
      "Running an agency, pricing, scope, clients, payroll, sanity. Lessons from the spreadsheet side of the work.",
    accent: "red",
  },
];

export const CATEGORY_MAP: Record<string, Category> = Object.fromEntries(
  CATEGORIES.map((c) => [c.slug, c]),
);

export const TAGS: Tag[] = [
  { slug: "nextjs", name: "Next.js" },
  { slug: "react", name: "React" },
  { slug: "typescript", name: "TypeScript" },
  { slug: "design-systems", name: "Design Systems" },
  { slug: "performance", name: "Performance" },
  { slug: "accessibility", name: "Accessibility" },
  { slug: "seo", name: "SEO" },
  { slug: "ai", name: "AI" },
  { slug: "process", name: "Process" },
  { slug: "clients", name: "Client Work" },
  { slug: "launch", name: "Launches" },
  { slug: "pricing", name: "Pricing" },
  { slug: "motion", name: "Motion" },
  { slug: "stripe", name: "Stripe" },
  { slug: "i18n", name: "i18n" },
];

export const TAG_MAP: Record<string, Tag> = Object.fromEntries(
  TAGS.map((t) => [t.slug, t]),
);

export function getTag(slug: string): Tag {
  return TAG_MAP[slug] ?? { slug, name: slug };
}

export function getCategory(slug: string): Category {
  return CATEGORY_MAP[slug] ?? CATEGORIES[0];
}
