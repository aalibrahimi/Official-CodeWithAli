import type { BlogPost } from "@/lib/blog/types";
import { getAuthor } from "../authors";

const post: BlogPost = {
  slug: "welcome-to-the-studio",
  title: "Welcome to the Studio — what this blog is, and what it is not",
  excerpt:
    "A short note on why we started writing again, the cadence we are committing to, and the four things you can expect to find here.",
  date: "2026-04-20",
  readMinutes: 3,
  author: getAuthor("ali"),
  category: "studio-notes",
  tags: ["process", "launch"],
  cover: {
    src: "/codewithali.png",
    alt: "CodeWithAli logo mark",
  },
  featured: false,
  content: [
    {
      type: "lead",
      children:
        "Hello. This is the new CodeWithAli blog. Before we dive into anything else, a quick promise — and a few things we will not be doing.",
    },
    {
      type: "h2",
      id: "what-you-will-find",
      children: "What you will find here",
    },
    {
      type: "ul",
      items: [
        <>
          <strong>Studio Notes.</strong> Short, honest dispatches about what we
          shipped this month and what we would do differently.
        </>,
        <>
          <strong>Playbooks.</strong> Specific, repeatable processes we run for
          clients — the kind you can steal and run yourself.
        </>,
        <>
          <strong>Engineering.</strong> Craft posts. Pattern libraries,
          performance, little architectural decisions that add up.
        </>,
        <>
          <strong>Design.</strong> How we think about type, color, motion, and
          the small things that make an interface feel cared for.
        </>,
      ],
    },
    {
      type: "h2",
      id: "what-you-will-not",
      children: "What you will not find",
    },
    {
      type: "ul",
      items: [
        "Top-10 lists. The SEO race to the bottom is already crowded.",
        "AI-written filler. Everything here is written by a human on our team.",
        "Vague takes. If we do not have a concrete example, we do not publish.",
        "Anything sponsored. This is not a money channel.",
      ],
    },
    {
      type: "h2",
      id: "the-newsletter",
      children: "The newsletter",
    },
    {
      type: "p",
      children:
        "Once a month we pick the three best things we read, built, or argued about and package them into a short newsletter. One email, no tricks, one-click unsubscribe. Sign up from the footer or from the blog sidebar.",
    },
    { type: "divider" },
    {
      type: "cta",
      title: "Want this in your inbox?",
      body: "One email, once a month, zero filler. Subscribe and we will send the next issue.",
      href: "/newsletter",
      label: "Read the newsletter",
    },
  ],
};

export default post;
