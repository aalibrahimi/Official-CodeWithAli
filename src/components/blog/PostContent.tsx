/**
 * Renders the typed content blocks defined in src/lib/blog/types.ts.
 *
 * All prose lives here so that the visual design of the reading view is
 * determined by this component alone. Editing this file shifts the
 * typography / color / spacing of every post at once.
 */
import type { Block } from "@/lib/blog/types";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Info, Lightbulb, AlertTriangle } from "lucide-react";

function CodeBlock({ code, lang }: { code: string; lang?: string }) {
  return (
    <figure className="my-8 overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0B]/90 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.5)]">
      <figcaption className="flex items-center gap-2 border-b border-white/5 bg-[#0F0F10] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
        <span className="inline-block size-2 rounded-full bg-[#C8102E]/80" />
        <span className="inline-block size-2 rounded-full bg-[#D4AF37]/80" />
        <span className="inline-block size-2 rounded-full bg-white/30" />
        <span className="ml-auto">{lang ?? "txt"}</span>
      </figcaption>
      <pre className="overflow-x-auto px-5 py-4 font-mono text-[13px] leading-[1.75] text-white/90">
        <code>{code}</code>
      </pre>
    </figure>
  );
}

function Callout({
  tone = "info",
  title,
  children,
}: {
  tone?: "info" | "warn" | "insight";
  title?: string;
  children: React.ReactNode;
}) {
  const palette =
    tone === "warn"
      ? { ring: "ring-[#C8102E]/30", bg: "bg-[#C8102E]/8", text: "text-[#ff7d88]", Icon: AlertTriangle }
      : tone === "insight"
        ? { ring: "ring-[#D4AF37]/30", bg: "bg-[#D4AF37]/8", text: "text-[#e7c158]", Icon: Lightbulb }
        : { ring: "ring-white/15", bg: "bg-white/[0.03]", text: "text-white/80", Icon: Info };
  const { Icon, ring, bg, text } = palette;
  return (
    <aside
      className={`my-7 flex gap-4 rounded-2xl ${bg} p-5 ring-1 ${ring} dark:text-white/90`}
    >
      <Icon className={`mt-0.5 size-5 shrink-0 ${text}`} />
      <div className="flex-1 space-y-1">
        {title ? (
          <div className="text-sm font-semibold tracking-tight">{title}</div>
        ) : null}
        <div className="text-[15px] leading-[1.75] text-[#1a1a1d] dark:text-white/80">
          {children}
        </div>
      </div>
    </aside>
  );
}

function CtaBlock({
  title,
  body,
  href,
  label,
}: {
  title: string;
  body?: string;
  href: string;
  label: string;
}) {
  return (
    <div className="relative my-10 overflow-hidden rounded-3xl border border-[#C8102E]/30 bg-gradient-to-br from-[#1a0508] via-[#0A0A0B] to-[#0A0A0B] p-8 shadow-[0_30px_80px_-40px_rgba(200,16,46,0.4)]">
      <div className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-[#C8102E]/20 blur-3xl" />
      <div className="relative">
        <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>
        {body ? (
          <p className="mt-3 max-w-xl text-[15px] leading-[1.8] text-white/70">{body}</p>
        ) : null}
        <Link
          href={href}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#C8102E]/20 transition hover:bg-[#9F0F24]"
        >
          {label}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}

export function PostContent({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mx-auto max-w-[720px] text-[17px] leading-[1.85] text-[#1a1a1d] dark:text-white/80">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return (
              <p key={i} className="mb-6">
                {b.children}
              </p>
            );
          case "lead":
            return (
              <p
                key={i}
                className="mb-8 border-l-2 border-[#C8102E] pl-5 text-[20px] leading-[1.6] text-[#0F0F10] dark:text-white/95"
              >
                {b.children}
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                id={b.id}
                className="mt-14 mb-5 scroll-mt-24 text-[28px] font-semibold leading-tight tracking-tight text-[#0F0F10] dark:text-white"
              >
                <a
                  href={`#${b.id}`}
                  className="no-underline transition hover:text-[#C8102E]"
                >
                  {b.children}
                </a>
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                id={b.id}
                className="mt-10 mb-4 scroll-mt-24 text-[22px] font-semibold tracking-tight text-[#0F0F10] dark:text-white/95"
              >
                {b.children}
              </h3>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-8 rounded-xl border-l-2 border-[#D4AF37] bg-[#D4AF37]/5 py-4 pl-6 pr-5 text-[18px] italic text-[#0F0F10] dark:text-white/90"
              >
                <div>&ldquo;{b.children}&rdquo;</div>
                {b.by ? (
                  <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37] not-italic">
                    — {b.by}
                  </div>
                ) : null}
              </blockquote>
            );
          case "ul":
            return (
              <ul key={i} className="mb-6 space-y-2 pl-5 marker:text-[#C8102E]">
                {b.items.map((it, j) => (
                  <li key={j} className="list-disc">
                    {it}
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="mb-6 space-y-2 pl-5 marker:text-[#C8102E] marker:font-semibold">
                {b.items.map((it, j) => (
                  <li key={j} className="list-decimal">
                    {it}
                  </li>
                ))}
              </ol>
            );
          case "code":
            return <CodeBlock key={i} code={b.code} lang={b.lang} />;
          case "image":
            return (
              <figure key={i} className="my-8">
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={b.src}
                    alt={b.alt}
                    width={1200}
                    height={750}
                    className="h-auto w-full"
                  />
                </div>
                {b.caption ? (
                  <figcaption className="mt-3 text-center text-sm italic text-white/50">
                    {b.caption}
                  </figcaption>
                ) : null}
              </figure>
            );
          case "callout":
            return (
              <Callout key={i} tone={b.tone} title={b.title}>
                {b.children}
              </Callout>
            );
          case "divider":
            return (
              <hr
                key={i}
                className="my-12 border-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                style={{ height: 1 }}
              />
            );
          case "cta":
            return (
              <CtaBlock
                key={i}
                title={b.title}
                body={b.body}
                href={b.href}
                label={b.label}
              />
            );
          case "custom":
            return <div key={i}>{b.render()}</div>;
          default:
            return null;
        }
      })}
    </div>
  );
}
