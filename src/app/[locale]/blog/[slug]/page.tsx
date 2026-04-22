/**
 * /blog/[slug] — individual post view.
 *
 * Server component that reads the typed post module, renders the
 * reading shell (hero, TOC, content, share, author, related), and
 * returns metadata for SEO / OG tags. All rendering is static — no
 * data fetching at runtime.
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

import {
  getAllSlugs,
  getPostBySlug,
  getRelatedPosts,
} from "@/content/blog";
import { getCategory, getTag } from "@/content/blog/taxonomy";
import { PostContent } from "@/components/blog/PostContent";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { TocNav } from "@/components/blog/TocNav";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { NewsletterCTA } from "@/components/blog/NewsletterCTA";
import { ShareRow } from "@/components/blog/ShareRow";

type RouteParams = { locale: string; slug: string };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not found — CodeWithAli" };
  const title = post.seo?.title ?? `${post.title} — CodeWithAli`;
  const description = post.seo?.description ?? post.excerpt;
  const ogImage = post.seo?.ogImage ?? post.cover.src;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: [{ url: ogImage, alt: post.cover.alt }],
      publishedTime: post.date,
      authors: [post.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const category = getCategory(post.category);
  const related = getRelatedPosts(slug, 3);
  const published = new Date(post.date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const publicUrl = `https://codewithali.com/${locale}/blog/${slug}`;

  return (
    <main className="relative min-h-screen bg-[#0A0A0B] text-white antialiased">
      <ReadingProgress />

      {/* Hero */}
      <section className="mx-auto max-w-[1200px] px-6 pt-24 sm:px-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
        >
          <ArrowLeft className="size-4" />
          All posts
        </Link>

        <div className="mt-6 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#C8102E]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ff5d6f] ring-1 ring-[#C8102E]/25">
            {category.name}
          </span>
          <h1 className="mt-6 text-[clamp(32px,5vw,56px)] font-semibold leading-[1.05] tracking-tight text-white">
            {post.title}
          </h1>
          <p className="mt-5 text-[18px] leading-[1.7] text-white/65">
            {post.excerpt}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <Image
                src={post.author.avatar}
                alt=""
                width={32}
                height={32}
                className="size-8 rounded-full object-cover ring-1 ring-white/20"
              />
              <span className="font-medium text-white/85">{post.author.name}</span>
            </div>
            <span className="h-5 w-px bg-white/10" />
            <span className="inline-flex items-center gap-1">
              <Calendar className="size-3.5" /> {published}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3.5" /> {post.readMinutes} min read
            </span>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section className="mx-auto mt-10 max-w-[1200px] px-6 sm:px-10">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10">
          <Image
            src={post.cover.src}
            alt={post.cover.alt}
            width={2400}
            height={1350}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
        {post.cover.credit ? (
          <p className="mt-3 text-center text-xs italic text-white/40">
            {post.cover.credit}
          </p>
        ) : null}
      </section>

      {/* Content + TOC */}
      <section className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_220px] lg:gap-16">
          <div>
            <PostContent blocks={post.content} />

            {/* Tags */}
            {post.tags.length > 0 ? (
              <div className="mx-auto mt-12 max-w-[720px]">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Tagged
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {post.tags.map((t) => {
                    const tag = getTag(t);
                    return (
                      <Link
                        key={tag.slug}
                        href={`/blog/tag/${tag.slug}`}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70 transition hover:border-[#C8102E]/40 hover:bg-[#C8102E]/8 hover:text-white"
                      >
                        #{tag.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ) : null}

            <div className="mx-auto mt-10 max-w-[720px]">
              <ShareRow title={post.title} url={publicUrl} />
            </div>

            <div className="mx-auto mt-10 max-w-[720px]">
              <AuthorCard author={post.author} />
            </div>
          </div>

          <TocNav blocks={post.content} />
        </div>

        <div className="mx-auto max-w-[960px]">
          <RelatedPosts posts={related} />
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-[1200px] px-6 pb-24 sm:px-10">
        <NewsletterCTA tone="banner" />
      </section>
    </main>
  );
}
