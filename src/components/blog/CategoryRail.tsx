"use client";

import Link from "next/link";
import { CATEGORIES } from "@/content/blog/taxonomy";

export function CategoryRail({ active = "all" }: { active?: string }) {
  return (
    <nav className="-mx-4 overflow-x-auto px-4">
      <ul className="flex min-w-max items-center gap-1.5">
        <li>
          <Link
            href="/blog"
            aria-current={active === "all" ? "page" : undefined}
            className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition ${
              active === "all"
                ? "bg-white text-[#0A0A0B]"
                : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
            }`}
          >
            All posts
          </Link>
        </li>
        {CATEGORIES.map((c) => {
          const isActive = c.slug === active;
          const accent =
            c.accent === "red"
              ? "ring-[#C8102E]/40 text-[#ff5d6f]"
              : c.accent === "gold"
                ? "ring-[#D4AF37]/40 text-[#e7c158]"
                : "ring-white/15 text-white/70";
          return (
            <li key={c.slug}>
              <Link
                href={`/blog/category/${c.slug}`}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium ring-1 transition ${accent} ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "bg-transparent hover:bg-white/5"
                }`}
              >
                {c.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
