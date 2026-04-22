"use client";

import { useEffect, useState } from "react";
import type { Block } from "@/lib/blog/types";

function extractHeadings(blocks: Block[]) {
  return blocks
    .filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2")
    .map((b) => ({
      id: b.id,
      label:
        typeof b.children === "string"
          ? b.children
          : (b.children as { toString?: () => string })?.toString?.() ?? b.id,
    }));
}

export function TocNav({ blocks }: { blocks: Block[] }) {
  const headings = extractHeadings(blocks);
  const [active, setActive] = useState<string | null>(
    headings[0]?.id ?? null,
  );

  useEffect(() => {
    if (headings.length === 0) return;

    const els = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => !!el);

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="On this page"
      className="sticky top-28 hidden lg:block"
    >
      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
        On this page
      </div>
      <ul className="mt-4 space-y-2 border-l border-white/10 pl-4">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={`block py-0.5 text-sm transition ${
                active === h.id
                  ? "text-white"
                  : "text-white/45 hover:text-white/80"
              }`}
              style={
                active === h.id
                  ? {
                      boxShadow: "inset 2px 0 0 #C8102E",
                      marginLeft: -16,
                      paddingLeft: 14,
                    }
                  : undefined
              }
            >
              {h.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
