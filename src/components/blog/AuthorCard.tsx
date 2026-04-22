import Image from "next/image";
import { Github, Linkedin, Twitter, Globe } from "lucide-react";
import type { Author } from "@/lib/blog/types";

export function AuthorCard({ author }: { author: Author }) {
  return (
    <div className="flex gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <Image
        src={author.avatar}
        alt={author.name}
        width={72}
        height={72}
        className="size-16 shrink-0 rounded-2xl object-cover ring-1 ring-white/10"
      />
      <div className="flex-1">
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
          Written by
        </div>
        <div className="mt-1 text-lg font-semibold text-white">{author.name}</div>
        <div className="text-sm text-white/50">{author.role}</div>
        <p className="mt-2 text-[14px] leading-[1.65] text-white/65">{author.bio}</p>
        {author.socials ? (
          <div className="mt-3 flex items-center gap-2">
            {author.socials.twitter ? (
              <a
                href={author.socials.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="rounded-full p-2 text-white/50 transition hover:bg-white/5 hover:text-white"
              >
                <Twitter className="size-4" />
              </a>
            ) : null}
            {author.socials.linkedin ? (
              <a
                href={author.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full p-2 text-white/50 transition hover:bg-white/5 hover:text-white"
              >
                <Linkedin className="size-4" />
              </a>
            ) : null}
            {author.socials.github ? (
              <a
                href={author.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full p-2 text-white/50 transition hover:bg-white/5 hover:text-white"
              >
                <Github className="size-4" />
              </a>
            ) : null}
            {author.socials.website ? (
              <a
                href={author.socials.website}
                target="_blank"
                rel="noreferrer"
                aria-label="Website"
                className="rounded-full p-2 text-white/50 transition hover:bg-white/5 hover:text-white"
              >
                <Globe className="size-4" />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
