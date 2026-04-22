import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog/types";
import { getCategory } from "@/content/blog/taxonomy";

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;
  return (
    <section className="mt-16">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
            Keep reading
          </div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
            Related posts
          </h2>
        </div>
        <Link
          href="/blog"
          className="hidden rounded-full border border-white/10 px-4 py-2 text-sm text-white/60 transition hover:border-white/30 hover:text-white sm:inline-flex"
        >
          All posts
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p) => {
          const category = getCategory(p.category);
          return (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={p.cover.src}
                  alt={p.cover.alt}
                  width={600}
                  height={375}
                  className="aspect-[16/10] h-auto w-full object-cover transition group-hover:scale-[1.04]"
                />
              </div>
              <div className="px-1 pb-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                  {category.name}
                </span>
                <h3 className="mt-1.5 line-clamp-2 text-[17px] font-semibold leading-snug text-white transition group-hover:text-[#C8102E]">
                  {p.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-[13px] leading-[1.55] text-white/45">
                  {p.excerpt}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
