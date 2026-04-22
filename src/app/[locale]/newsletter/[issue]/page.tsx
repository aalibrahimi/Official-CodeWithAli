import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

import { getAllIssues, getIssueBySlug } from "@/content/newsletter";
import { PostContent } from "@/components/blog/PostContent";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { NewsletterForm } from "@/components/blog/NewsletterForm";

type RouteParams = { locale: string; issue: string };

export async function generateStaticParams() {
  return getAllIssues().map((i) => ({ issue: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { issue } = await params;
  const data = getIssueBySlug(issue);
  if (!data) return { title: "Not found — CodeWithAli" };
  return {
    title: `${data.title} — CodeWithAli Newsletter`,
    description: data.summary,
    openGraph: {
      title: data.title,
      description: data.summary,
      images: [{ url: data.cover.src, alt: data.cover.alt }],
      type: "article",
      publishedTime: data.date,
    },
  };
}

export default async function NewsletterIssuePage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { issue } = await params;
  const data = getIssueBySlug(issue);
  if (!data) notFound();

  const published = new Date(data.date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="relative min-h-screen bg-[#0A0A0B] text-white antialiased">
      <ReadingProgress />

      <section className="mx-auto max-w-[1200px] px-6 pt-24 sm:px-10">
        <Link
          href="/newsletter"
          className="inline-flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
        >
          <ArrowLeft className="size-4" /> Newsletter archive
        </Link>

        <div className="mt-6 max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#D4AF37]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e7c158] ring-1 ring-[#D4AF37]/30">
            Issue #{String(data.issue).padStart(3, "0")}
          </span>
          <h1 className="mt-6 text-[clamp(32px,5vw,56px)] font-semibold leading-[1.05] tracking-tight text-white">
            {data.title}
          </h1>
          <p className="mt-5 text-[18px] leading-[1.7] text-white/65">
            {data.summary}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/50">
            <span className="inline-flex items-center gap-1">
              <Calendar className="size-3.5" /> {published}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3.5" /> {data.readMinutes} min read
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-[1200px] px-6 sm:px-10">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10">
          <Image
            src={data.cover.src}
            alt={data.cover.alt}
            width={2400}
            height={1350}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10">
        <PostContent blocks={data.content} />
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-24 sm:px-10">
        <div className="mx-auto max-w-[720px] rounded-3xl border border-white/10 bg-white/[0.02] p-8">
          <h3 className="text-xl font-semibold tracking-tight text-white">
            Get the next one.
          </h3>
          <p className="mt-2 text-sm text-white/60">
            One email a month. Zero affiliates. One-click unsubscribe.
          </p>
          <div className="mt-5">
            <NewsletterForm source={`issue-${data.slug}`} />
          </div>
        </div>
      </section>
    </main>
  );
}
