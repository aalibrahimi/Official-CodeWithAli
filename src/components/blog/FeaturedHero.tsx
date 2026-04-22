"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog/types";
import { getCategory } from "@/content/blog/taxonomy";

export function FeaturedHero({ post }: { post: BlogPost }) {
  const category = getCategory(post.category);
  const published = new Date(post.date).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0A0A0B]"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#C8102E]/10 via-transparent to-[#D4AF37]/8" />
      <div className="grid gap-0 lg:grid-cols-[1.1fr_1fr]">
        <div className="relative order-2 lg:order-1 p-8 sm:p-12 lg:p-14">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#C8102E]/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ff5d6f] ring-1 ring-[#C8102E]/25">
            Featured · {category.name}
          </span>
          <h1 className="mt-6 text-[clamp(32px,4.4vw,48px)] font-semibold leading-[1.05] tracking-tight text-white">
            {post.title}
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-[1.7] text-white/65">
            {post.excerpt}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-white/50">
            <div className="flex items-center gap-2">
              <Image
                src={post.author.avatar}
                alt=""
                width={36}
                height={36}
                className="size-9 rounded-full object-cover ring-1 ring-white/20"
              />
              <div className="flex flex-col">
                <span className="font-medium text-white/85">{post.author.name}</span>
                <span className="text-xs text-white/40">{post.author.role}</span>
              </div>
            </div>
            <span className="h-6 w-px bg-white/10" />
            <span>{published}</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3.5" />
              {post.readMinutes} min read
            </span>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0A0A0B] transition hover:bg-[#D4AF37] hover:text-[#0A0A0B]"
          >
            Read the piece
            <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="relative order-1 lg:order-2 min-h-[280px] lg:min-h-[460px]">
          <Image
            src={post.cover.src}
            alt={post.cover.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-[#0A0A0B]" />
        </div>
      </div>
    </motion.section>
  );
}
