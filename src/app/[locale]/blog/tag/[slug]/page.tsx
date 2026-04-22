import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { getPostsByTag, getAllPosts } from "@/content/blog";
import { getTag } from "@/content/blog/taxonomy";
import { BlogCard } from "@/components/blog/BlogCard";
import { NewsletterCTA } from "@/components/blog/NewsletterCTA";

type RouteParams = { locale: string; slug: string };

export async function generateStaticParams() {
  const all = new Set<string>();
  for (const p of getAllPosts()) p.tags.forEach((t) => all.add(t));
  return Array.from(all).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tag = getTag(slug);
  return {
    title: `#${tag.name} — CodeWithAli Blog`,
    description: `Posts tagged ${tag.name} from the CodeWithAli studio.`,
  };
}

export default async function BlogTagPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const tag = getTag(slug);
  const posts = getPostsByTag(slug);

  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white antialiased">
      <section className="mx-auto max-w-[1200px] px-6 pt-28 sm:px-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
        >
          <ArrowLeft className="size-4" /> All posts
        </Link>

        <div className="mt-6 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#C8102E]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ff5d6f] ring-1 ring-[#C8102E]/25">
            Tag
          </span>
          <h1 className="mt-5 text-[clamp(40px,5vw,64px)] font-semibold leading-[1.05] tracking-tight text-white">
            #{tag.name}
          </h1>
          <p className="mt-4 text-[17px] leading-[1.7] text-white/60">
            {posts.length} post{posts.length === 1 ? "" : "s"} under this tag.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10">
        {posts.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-20 text-center">
            <p className="text-white/60">
              Nothing tagged this yet. Check back — we add to this as we ship.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p, i) => (
              <BlogCard key={p.slug} post={p} index={i} />
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-24 sm:px-10">
        <NewsletterCTA tone="banner" />
      </section>
    </main>
  );
}
