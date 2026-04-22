/**
 * /blog — listing page.
 *
 * Split into two components:
 *   · BlogPage (server component) pulls the full post list from
 *     src/content/blog and renders the static skeleton — featured hero,
 *     newsletter banner, full recent grid.
 *   · BlogIndex (client) handles search + category filtering against
 *     the same list. Server-rendered first paint, no empty flicker.
 */
import type { Metadata } from "next";
import { getAllPosts, getFeaturedPost } from "@/content/blog";
import { FeaturedHero } from "@/components/blog/FeaturedHero";
import { NewsletterCTA } from "@/components/blog/NewsletterCTA";
import { BlogIndex } from "./_components/BlogIndex";

export const metadata: Metadata = {
  title: "The Studio — CodeWithAli Blog",
  description:
    "Studio notes, playbooks, and engineering writing from the CodeWithAli team. One honest post at a time, zero filler.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = getFeaturedPost();
  const rest = featured ? posts.filter((p) => p.slug !== featured.slug) : posts;

  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white antialiased">
      {/* Header */}
      <section className="mx-auto max-w-[1200px] px-6 pt-28 sm:px-10">
        <div className="flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e7c158] ring-1 ring-[#D4AF37]/30">
            The Studio
          </span>
          <h1 className="text-[clamp(40px,6vw,72px)] font-semibold leading-[1.02] tracking-tight text-white">
            Writing from the <em className="not-italic text-[#C8102E]">workshop.</em>
          </h1>
          <p className="max-w-2xl text-[17px] leading-[1.7] text-white/60">
            Short, honest posts about how we build. Studio notes, playbooks,
            engineering craft. Written by humans, no top-ten lists.
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured ? (
        <section className="mx-auto max-w-[1200px] px-6 pt-12 sm:px-10">
          <FeaturedHero post={featured} />
        </section>
      ) : null}

      {/* Index (search + filter + grid) */}
      <section className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10">
        <BlogIndex posts={rest} />
      </section>

      {/* Newsletter banner */}
      <section className="mx-auto max-w-[1200px] px-6 pb-24 sm:px-10">
        <NewsletterCTA tone="banner" />
      </section>
    </main>
  );
}
