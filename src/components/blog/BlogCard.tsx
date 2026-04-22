"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Clock, ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog/types";
import { getCategory } from "@/content/blog/taxonomy";

export function BlogCard({
  post,
  index = 0,
  variant = "grid",
}: {
  post: BlogPost;
  index?: number;
  variant?: "grid" | "dense";
}) {
  const category = getCategory(post.category);
  const accentClass =
    category.accent === "red"
      ? "text-[#C8102E] bg-[#C8102E]/10 ring-[#C8102E]/20"
      : category.accent === "gold"
        ? "text-[#D4AF37] bg-[#D4AF37]/10 ring-[#D4AF37]/25"
        : "text-white/70 bg-white/5 ring-white/15";

  const dense = variant === "dense";

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: [0.2, 0.8, 0.2, 1] }}
      className="group relative flex flex-col"
    >
      <Link
        href={`/blog/${post.slug}`}
        className="flex flex-col gap-5 rounded-3xl border border-white/5 bg-white/[0.02] p-3 transition hover:border-white/15 hover:bg-white/[0.04] dark:border-white/10"
      >
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            src={post.cover.src}
            alt={post.cover.alt}
            width={800}
            height={500}
            className={`h-auto w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03] ${
              dense ? "aspect-[16/10]" : "aspect-[16/10]"
            }`}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
        </div>

        <div className="flex flex-col gap-3 px-2 pb-3">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.18em]">
            <span className={`rounded-full px-3 py-1 ring-1 ${accentClass}`}>
              {category.name}
            </span>
            <span className="inline-flex items-center gap-1 text-white/40">
              <Clock className="size-3.5" />
              {post.readMinutes} min
            </span>
          </div>

          <h3
            className={`font-semibold leading-[1.15] tracking-tight text-[#0F0F10] group-hover:text-[#C8102E] dark:text-white dark:group-hover:text-white ${
              dense ? "text-lg" : "text-2xl"
            }`}
          >
            {post.title}
          </h3>

          {!dense ? (
            <p className="line-clamp-2 text-[15px] leading-[1.65] text-white/55 dark:text-white/55">
              {post.excerpt}
            </p>
          ) : null}

          <div className="mt-1 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={post.author.avatar}
                alt=""
                width={28}
                height={28}
                className="size-7 rounded-full object-cover ring-1 ring-white/20"
              />
              <span className="text-[13px] font-medium text-white/70">
                {post.author.name}
              </span>
            </div>
            <span className="flex items-center gap-1 text-xs text-white/40 transition group-hover:text-[#C8102E]">
              Read
              <ArrowUpRight className="size-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
