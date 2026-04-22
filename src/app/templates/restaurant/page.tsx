"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, MapPin, Clock, Phone } from "lucide-react";
import { FadeIn } from "../_shared/PageTransition";

export default function RestaurantHome() {
  return (
    <>
      {/* Hero — magazine cover */}
      <section className="relative px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-6 text-[11.5px] uppercase tracking-[0.35em] text-[#B7410E]">
                Austin · Est. 2019
              </p>
              <h1 className="text-[64px] font-light leading-[0.95] tracking-tight lg:text-[132px]">
                Maison<br />
                <em className="font-normal italic">Laurent</em>
              </h1>
              <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-[#2B1810]/70 lg:text-[17px]">
                A neighborhood kitchen serving the food Chef Laurent grew up on in the
                Luberon — summer tomatoes, slow-braised lamb, anything pulled from the
                Mediterranean that morning.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Link
                  href="/templates/restaurant/reservations"
                  className="inline-flex items-center gap-2 border-b border-[#B7410E] pb-1 text-[13px] uppercase tracking-[0.22em] text-[#B7410E]"
                >
                  Reserve a table <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/templates/restaurant/menu"
                  className="inline-flex items-center gap-2 border-b border-[#2B1810]/40 pb-1 text-[13px] uppercase tracking-[0.22em] text-[#2B1810]/75"
                >
                  Today's menu <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[3/4] overflow-hidden rounded-sm"
              style={{
                background:
                  "linear-gradient(150deg, #C7A27A 0%, #B7410E 55%, #4A1C0A 100%)",
              }}
            >
              {/* decorative strokes */}
              <svg className="absolute inset-0 h-full w-full opacity-35" viewBox="0 0 400 540" preserveAspectRatio="none">
                <path d="M0 200 Q 100 150 200 200 T 400 200" stroke="#FAF5EB" strokeWidth="1" fill="none" />
                <path d="M0 300 Q 100 250 200 300 T 400 300" stroke="#FAF5EB" strokeWidth="1" fill="none" />
                <circle cx="340" cy="100" r="60" fill="#FAF5EB" fillOpacity="0.12" />
              </svg>
              <div className="absolute inset-x-8 bottom-10 text-[#FAF5EB]">
                <p className="text-[11px] uppercase tracking-[0.25em] opacity-80">No. 12</p>
                <p className="mt-3 text-[32px] font-light italic leading-tight">
                  &ldquo;Slow food,<br />at city speed.&rdquo;
                </p>
                <p className="mt-4 text-[11px] uppercase tracking-[0.25em] opacity-80">
                  — Austin Monthly
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro band */}
      <section className="border-y border-[#B7410E]/15 bg-[#FAF5EB] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <p className="mb-5 text-[11.5px] uppercase tracking-[0.35em] text-[#B7410E]">
              The philosophy
            </p>
            <p className="text-[24px] font-light leading-relaxed text-[#2B1810]/90 lg:text-[32px]">
              The menu changes every three weeks because the market does.
              The tables are small because conversations shouldn't be.
              The wine list is short because you only need to know six bottles to eat well.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Tonight's tasting card */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-12 flex items-end justify-between">
              <div>
                <p className="mb-3 text-[11.5px] uppercase tracking-[0.35em] text-[#B7410E]">Tonight</p>
                <h2 className="text-[42px] font-light leading-[1.05] lg:text-[58px]">The tasting menu.</h2>
              </div>
              <Link
                href="/templates/restaurant/menu"
                className="hidden border-b border-[#B7410E] pb-1 text-[12px] uppercase tracking-[0.22em] text-[#B7410E] md:block"
              >
                Full menu →
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-sm border border-[#B7410E]/20 bg-white p-10 lg:p-14">
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#B7410E]">Five courses · $78</p>
                <ol className="mt-8 space-y-5 text-[15px] leading-relaxed lg:text-[16.5px]">
                  <Course num={1} title="Heirloom tomato, aged chèvre, basil oil" />
                  <Course num={2} title="Sea bream crudo, citron confit, fennel frond" />
                  <Course num={3} title="Saffron tagliatelle, chanterelle, brown butter" />
                  <Course num={4} title="Lamb shoulder, seven-hour, stone-fruit mostarda" />
                  <Course num={5} title="Lavender honey crémeux, shortbread" />
                </ol>
                <p className="mt-10 border-t border-[#B7410E]/15 pt-5 text-[12px] italic text-[#2B1810]/65">
                  Optional wine pairing · add $52
                </p>
              </div>

              <div className="flex flex-col justify-between rounded-sm bg-[#B7410E] p-10 text-[#FAF5EB] lg:p-14">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] opacity-75">À la carte</p>
                  <p className="mt-6 text-[28px] font-light leading-tight italic lg:text-[36px]">
                    Or build your own evening from the short list.
                  </p>
                  <p className="mt-5 text-[14px] leading-relaxed text-[#FAF5EB]/75">
                    Six starters, eight mains, four desserts. All changing with the market,
                    all sourced within 80 miles when they can be.
                  </p>
                </div>
                <Link
                  href="/templates/restaurant/menu"
                  className="mt-10 inline-flex items-center gap-2 border-b border-[#FAF5EB]/50 pb-1 text-[12px] uppercase tracking-[0.22em]"
                >
                  See the full menu <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gift cards / CTA */}
      <section className="relative overflow-hidden bg-[#2B1810] px-6 py-24 text-[#FAF5EB] lg:px-10 lg:py-32">
        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-end">
          <FadeIn>
            <p className="mb-5 text-[11.5px] uppercase tracking-[0.35em] text-[#C7A27A]">Gift cards</p>
            <h2 className="text-[44px] font-light leading-[1.05] lg:text-[68px]">
              An evening, <em className="italic">given.</em>
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-[15px] leading-relaxed text-[#FAF5EB]/75 lg:text-[17px]">
              Digital delivery, any amount, usable against tasting menus or à la carte.
              Arrives in their inbox within an hour with a handwritten-style note from you.
            </p>
            <Link
              href="/templates/restaurant/checkout"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-[#B7410E] px-6 py-3 text-[12px] uppercase tracking-[0.22em]"
            >
              Buy a gift card <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Visit */}
      <section className="px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-5xl gap-12 text-center md:grid-cols-3">
          <FadeIn><VisitCell Icon={MapPin} label="Find us" value="1142 E 11th St · Austin, TX" /></FadeIn>
          <FadeIn delay={0.08}><VisitCell Icon={Clock} label="Dinner" value="Tue–Sun · 5:30–10 PM" /></FadeIn>
          <FadeIn delay={0.16}><VisitCell Icon={Phone} label="Reservations" value="+1 512 555 0177" /></FadeIn>
        </div>
      </section>
    </>
  );
}

function Course({ num, title }: { num: number; title: string }) {
  return (
    <li className="flex items-start gap-5 border-b border-[#B7410E]/12 pb-5 last:border-0">
      <span className="font-light text-[#B7410E] tabular-nums">{String(num).padStart(2, "0")}</span>
      <span className="italic">{title}</span>
    </li>
  );
}

function VisitCell({ Icon, label, value }: { Icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div>
      <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#B7410E]/10 text-[#B7410E]">
        <Icon className="h-4 w-4" />
      </div>
      <p className="text-[11px] uppercase tracking-[0.3em] text-[#B7410E]">{label}</p>
      <p className="mt-2 text-[15px] italic">{value}</p>
    </div>
  );
}
