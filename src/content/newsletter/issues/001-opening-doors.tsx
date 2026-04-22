import type { NewsletterIssue } from "@/lib/blog/types";

const issue: NewsletterIssue = {
  slug: "001-opening-doors",
  issue: 1,
  title: "Opening doors — what we shipped this month",
  summary:
    "Our first issue. A quick tour of the new site, the three posts we just published, and a small experiment we&rsquo;re running on intake.",
  date: "2026-04-20",
  readMinutes: 4,
  cover: { src: "/homepage/home.png", alt: "codewithali.com homepage" },
  tags: ["launch", "studio"],
  content: [
    {
      type: "lead",
      children:
        "Hello from the brand-new CodeWithAli studio newsletter. Here is what we shipped, read, and argued about in April 2026.",
    },
    { type: "h2", id: "we-shipped", children: "We shipped" },
    {
      type: "ul",
      items: [
        "A dark-first redesign of the whole site — same URL, new bones.",
        "Three posts to kick off the blog, including our full intake playbook.",
        "A ten-layer spam defense that took our inbox from 40 junk messages a day to zero.",
      ],
    },
    { type: "h2", id: "we-read", children: "We read" },
    {
      type: "ul",
      items: [
        <>
          <em>Subtract: The Untapped Science of Less</em> by Leidy Klotz — it
          quietly reshaped how we scope features.
        </>,
        "A new piece on CSS nesting and design tokens that made us simplify our component primitives.",
        "Every dependabot PR. Every single one.",
      ],
    },
    { type: "h2", id: "we-argued", children: "We argued about" },
    {
      type: "p",
      children:
        "Whether framer motion or pure CSS belongs on our landing pages. Motion won, but with a much tighter scope — no more spring physics on static copy.",
    },
    { type: "divider" },
    {
      type: "cta",
      title: "Want the next one?",
      body: "One email, once a month. Zero affiliates, zero filler, one-click unsubscribe.",
      href: "/newsletter#subscribe",
      label: "Subscribe",
    },
  ],
};

export default issue;
