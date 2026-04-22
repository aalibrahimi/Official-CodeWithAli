import type { BlogPost } from "@/lib/blog/types";
import { getAuthor } from "../authors";

const post: BlogPost = {
  slug: "shipping-dark-first",
  title: "Why we shipped this site dark-first",
  excerpt:
    "Most agency sites default to light mode and awkwardly bolt on a dark variant. We did it the other way around — and it changed how we pick colors, typography, and motion.",
  date: "2026-04-10",
  readMinutes: 6,
  author: getAuthor("ali"),
  category: "design",
  tags: ["design-systems", "motion", "nextjs"],
  cover: {
    src: "/homepage/home.png",
    alt: "CodeWithAli homepage shown in dark mode",
    credit: "codewithali.com — homepage",
  },
  featured: true,
  seo: {
    title: "Why we shipped codewithali.com dark-first",
    description:
      "A short piece on picking a primary palette, kerning for low-contrast screens, and why gold is third on our palette — not first.",
  },
  content: [
    {
      type: "lead",
      children:
        "When we rebuilt codewithali.com we made a small decision that ended up shaping everything: dark mode is the default, and light mode is the toggle. Here is what changed downstream.",
    },
    {
      type: "h2",
      id: "a-palette-that-listens",
      children: "A palette that listens instead of shouts",
    },
    {
      type: "p",
      children: (
        <>
          Going dark-first pushed us to pick{" "}
          <strong>one</strong> hero color, not three. We landed on a high-clarity red
          (<code className="rounded bg-[#C8102E]/15 px-1 py-0.5 text-[#ff5d6f]">#C8102E</code>)
          with a single gold accent (
          <code className="rounded bg-[#D4AF37]/15 px-1 py-0.5 text-[#e7c158]">#D4AF37</code>
          ) used only where we want the eye to stop. Black carries most of the weight.
        </>
      ),
    },
    {
      type: "callout",
      tone: "insight",
      title: "The rule we wrote down",
      children:
        "Red is for action. Gold is for punctuation. Black is for everything else. If a component wants a fourth color, it does not get one.",
    },
    {
      type: "h2",
      id: "type-had-to-breathe",
      children: "Type had to breathe more than we expected",
    },
    {
      type: "p",
      children:
        "On dark backgrounds, every typographic sin gets louder. Thin weights shimmer. Tracking that reads fine at 16px in light mode falls apart in dark. We moved one weight heavier across the board, nudged letter-spacing on display sizes, and started treating italics like a feature instead of a decoration.",
    },
    {
      type: "ul",
      items: [
        "Display sizes run a little heavier, with tracking pulled in ~1%.",
        "Body copy stays at a mid-weight, but we raised contrast past WCAG AA comfortably.",
        "Red italic is our one emphatic move — we use it sparingly.",
      ],
    },
    {
      type: "h2",
      id: "motion-that-fades-not-bounces",
      children: "Motion that fades, not bounces",
    },
    {
      type: "p",
      children:
        "Dark interfaces amplify motion. A bouncy spring that feels playful on white reads as twitchy on near-black. We stripped most spring animations out and leaned into 220-320ms ease-out fades and slides. Calmer, and lets the content do the talking.",
    },
    {
      type: "code",
      lang: "tsx",
      code: `<motion.div
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
/>`,
    },
    {
      type: "h2",
      id: "what-we-did-not-do",
      children: "What we did not do",
    },
    {
      type: "p",
      children:
        "We did not add a neon gradient. We did not add a glassy backdrop blur to the nav. We did not add a particle system on the hero. Dark-first made all of those feel like costumes — and once you notice the costume, you notice every other part that is pretending.",
    },
    { type: "divider" },
    {
      type: "cta",
      title: "Thinking about a rebuild?",
      body: "Tell us where your site is today and where you want it to go. We will sketch a path back.",
      href: "/contact",
      label: "Start a project",
    },
  ],
};

export default post;
