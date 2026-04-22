"use client";

import { useMemo, useState } from "react";
import type { BlogPost } from "@/lib/blog/types";
import { CategoryRail } from "@/components/blog/CategoryRail";
import { SearchBar } from "@/components/blog/SearchBar";
import { BlogCard } from "@/components/blog/BlogCard";

export function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      if (activeCategory !== "all" && p.category !== activeCategory) return false;
      if (!q) return true;
      const hay = [p.title, p.excerpt, p.category, ...p.tags].join(" ").toLowerCase();
      return hay.includes(q);
    });
  }, [posts, query, activeCategory]);

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <ClientCategoryRail active={activeCategory} onChange={setActiveCategory} />
        <div className="md:w-80">
          <SearchBar value={query} onChange={setQuery} />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] px-6 py-20 text-center">
          <p className="text-white/60">
            No posts match that. Try clearing the search or switching category.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <BlogCard key={p.slug} post={p} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Client-side wrapper around CategoryRail that flips filter state
 * without triggering a navigation — for fast in-page filtering.
 */
function ClientCategoryRail({
  active,
  onChange,
}: {
  active: string;
  onChange: (slug: string) => void;
}) {
  // Use the static component for visual consistency, then overlay
  // click handlers by rewriting each link to a button.
  // (We keep CategoryRail pure for the /category/[slug] page reuse.)
  return (
    <div className="-mx-4 overflow-x-auto px-4">
      <div className="flex min-w-max items-center gap-1.5">
        <ChipBtn label="All posts" active={active === "all"} onClick={() => onChange("all")} />
        {CATS.map((c) => (
          <ChipBtn
            key={c.slug}
            label={c.name}
            accent={c.accent}
            active={active === c.slug}
            onClick={() => onChange(c.slug)}
          />
        ))}
      </div>
    </div>
  );
}

import { CATEGORIES as CATS } from "@/content/blog/taxonomy";

function ChipBtn({
  label,
  active,
  onClick,
  accent,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
  accent?: "red" | "gold" | "neutral";
}) {
  const ring =
    accent === "red"
      ? "ring-[#C8102E]/40 text-[#ff5d6f]"
      : accent === "gold"
        ? "ring-[#D4AF37]/40 text-[#e7c158]"
        : "ring-white/15 text-white/70";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ring-1 transition ${ring} ${
        active ? "bg-white text-[#0A0A0B] ring-white" : "bg-transparent hover:bg-white/5"
      }`}
    >
      {label}
    </button>
  );
}
