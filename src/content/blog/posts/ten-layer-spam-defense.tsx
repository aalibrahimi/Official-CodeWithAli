import type { BlogPost } from "@/lib/blog/types";
import { getAuthor } from "../authors";

const post: BlogPost = {
  slug: "ten-layer-spam-defense",
  title: "A ten-layer spam defense for a contact form",
  excerpt:
    "A walkthrough of how we hardened our own contact form against bots, keyboard-mashers, and the increasingly creative LLM-generated junk hitting agency inboxes.",
  date: "2026-03-22",
  readMinutes: 10,
  author: getAuthor("team"),
  category: "engineering",
  tags: ["nextjs", "performance", "typescript"],
  cover: {
    src: "/services/codewithaliservices.png",
    alt: "A contact form diagram",
  },
  content: [
    {
      type: "lead",
      children:
        "Our old contact form was getting 40+ spam messages a day. Half were classic bot-fill, a third were LLM hallucinations, and the rest were someone&rsquo;s cat. Here is how we brought it to zero without adding a captcha.",
    },
    {
      type: "h2",
      id: "the-stack",
      children: "The ten layers",
    },
    {
      type: "ol",
      items: [
        "Hidden honeypot field (bots love to fill every input).",
        "Time-gate — reject submissions under 3 seconds.",
        "Per-IP rate limit — 3 per hour, in-memory token bucket.",
        "Email format sanity check, server-side, with MX lookup.",
        "Disposable-domain blocklist (refreshed nightly).",
        "Character dominance check — flag messages where one char is >35% of the body.",
        "Run-length check — flag any run of 5+ identical chars.",
        "Vowel ratio check — real prose sits in a narrow band.",
        "Word diversity — ratio of unique words to total.",
        "Cross-field mash — detect when name, email, and body are all the same keyboard smash.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      title: "What we deliberately skipped",
      children:
        "We did not add a captcha. We did not require sign-in. We did not call a third-party scoring API. Every one of those trades accessibility or privacy for a marginal gain.",
    },
    {
      type: "h2",
      id: "the-killer",
      children: "The killer — statistical prose checks",
    },
    {
      type: "p",
      children:
        "Most spam filtering talks about tokens and phrases. Once an LLM is generating your spam, tokens stop working. But the shape of real writing — the ratio of vowels to consonants, the unique-word ratio, the distribution of character frequencies — is hard to fake by accident.",
    },
    {
      type: "code",
      lang: "ts",
      code: `// src/lib/spam-heuristics.ts
export function looksLikeGibberish(text: string): boolean {
  const s = text.toLowerCase().replace(/[^a-z ]/g, "");
  if (s.length < 12) return false;

  const chars: Record<string, number> = {};
  for (const c of s) chars[c] = (chars[c] ?? 0) + 1;

  const max = Math.max(...Object.values(chars));
  if (max / s.length > 0.35) return true;            // char dominance

  if (/(.)\\1{4,}/.test(s)) return true;              // long run

  const vowels = (s.match(/[aeiou]/g) ?? []).length;
  const ratio = vowels / s.replace(/ /g, "").length;
  if (ratio < 0.2 || ratio > 0.6) return true;       // vowel band

  const words = s.split(/\\s+/).filter(Boolean);
  const unique = new Set(words).size;
  if (words.length > 8 && unique / words.length < 0.4) return true;

  return false;
}`,
    },
    {
      type: "h2",
      id: "the-result",
      children: "The result",
    },
    {
      type: "p",
      children:
        "40 a day down to 0 in the first week. Two false positives in the first month — both from people who wrote one-word messages like &ldquo;hi&rdquo;, which we now let through on length alone.",
    },
    {
      type: "callout",
      tone: "info",
      children: (
        <>
          The full rule-set lives in{" "}
          <code className="rounded bg-[#D4AF37]/15 px-1 py-0.5 text-[#e7c158]">src/lib/spam-heuristics.ts</code>{" "}
          and is documented in{" "}
          <code className="rounded bg-[#D4AF37]/15 px-1 py-0.5 text-[#e7c158]">docs/spam-protection.md</code>.
          Pull it apart. Use what helps.
        </>
      ),
    },
    { type: "divider" },
    {
      type: "cta",
      title: "Want this level of polish on your own app?",
      body: "We turn forms, flows, and follow-ups into things that feel handmade.",
      href: "/services",
      label: "See what we build",
    },
  ],
};

export default post;
