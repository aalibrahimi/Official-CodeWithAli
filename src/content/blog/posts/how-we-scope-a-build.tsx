import type { BlogPost } from "@/lib/blog/types";
import { getAuthor } from "../authors";

const post: BlogPost = {
  slug: "how-we-scope-a-build",
  title: "How we scope a build in one call",
  excerpt:
    "An inside look at the intake call we run with every new client — what we ask, what we deliberately do not ask, and the one-pager we send 24 hours later.",
  date: "2026-04-01",
  readMinutes: 8,
  author: getAuthor("ali"),
  category: "playbooks",
  tags: ["process", "pricing", "clients"],
  cover: {
    src: "/homepage/meetingScene.png",
    alt: "Meeting scene — a team scoping a project",
  },
  featured: true,
  content: [
    {
      type: "lead",
      children:
        "The quickest way to tank a project is to say yes before you understand it. Here is the 45-minute intake call we run, almost verbatim, and the one-pager we send 24 hours later.",
    },
    {
      type: "h2",
      id: "before-the-call",
      children: "Before the call",
    },
    {
      type: "p",
      children:
        "We never walk in cold. 24 hours before the call we send a two-question form: What problem are we solving? What will be true if we succeed? Both answers are required, both cap at 500 characters, and both show up on our screen during the call.",
    },
    {
      type: "callout",
      tone: "info",
      title: "Why this works",
      children:
        "Writing the problem down forces the client to commit to a version of it. We can now disagree with that version on the call — which is much easier than prying the real problem out of them live.",
    },
    {
      type: "h2",
      id: "the-call",
      children: "The call — four segments, 45 minutes",
    },
    {
      type: "ol",
      items: [
        <>
          <strong>Context (10 min).</strong> We ask them to walk us through the
          last 6 months of their business. Not the brief — the business.
        </>,
        <>
          <strong>The brief, inverted (10 min).</strong> Instead of asking what
          they want, we ask what happens if we do nothing. This surfaces the
          real stakes.
        </>,
        <>
          <strong>Scope negotiation (15 min).</strong> We map everything they
          mentioned onto three buckets: in, out, later. We say the word
          &quot;no&quot; at least twice.
        </>,
        <>
          <strong>Money and time (10 min).</strong> Range, not number. Window,
          not date. We will narrow both in the one-pager, not on the call.
        </>,
      ],
    },
    {
      type: "h2",
      id: "what-we-do-not-ask",
      children: "What we deliberately do not ask",
    },
    {
      type: "ul",
      items: [
        "We do not ask for a detailed feature list. That is our job to write down.",
        "We do not ask which framework they want. If they tell us, we nod and ignore it.",
        "We do not ask for a budget up front. We quote the work, then meet them in the middle.",
        "We do not ask about competitors. Competitor-driven work ages like milk.",
      ],
    },
    {
      type: "h2",
      id: "the-one-pager",
      children: "The one-pager",
    },
    {
      type: "p",
      children:
        "Within 24 hours the client gets a single PDF. It is one page. It is not a proposal. It is what we heard you say, in your voice, back at you.",
    },
    {
      type: "code",
      lang: "md",
      code: `# {Client} — Scope Summary
## What you said the problem is
> {direct quote from the form, verbatim}

## What will be true if we win
> {direct quote from the form, verbatim}

## What is in
- {bullet} — {one-line why}

## What is out (for now)
- {bullet} — {one-line why}

## Our number
${"$"}{low}–${"$"}{high}, delivered in {N} weeks.`,
    },
    {
      type: "h2",
      id: "the-reply-rate",
      children: "The reply rate",
    },
    {
      type: "p",
      children:
        "Since we started running the call this way, the yes-rate on the one-pager is north of 80%. More importantly, the scope creep rate is down because we said no in the room before money changed hands.",
    },
    {
      type: "divider" as const,
    },
    {
      type: "cta",
      title: "Want us to run this call with you?",
      body: "45 minutes, no cost, no slideware. Bring the problem. We will bring the questions.",
      href: "/contact",
      label: "Book the call",
    },
  ],
};

export default post;
