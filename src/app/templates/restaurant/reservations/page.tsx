"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Users, Calendar, Clock, Check } from "lucide-react";
import { FadeIn } from "../../_shared/PageTransition";

const TIMES = ["5:30", "6:00", "6:30", "7:00", "7:30", "8:00", "8:30", "9:00"];

export default function RestaurantReservationsPage() {
  const [party, setParty] = useState(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <FadeIn>
          <p className="mb-4 text-[11.5px] uppercase tracking-[0.35em] text-[#B7410E]">Reserve</p>
          <h1 className="text-[54px] font-light leading-[1.0] lg:text-[84px]">
            Hold us a <em className="italic">table.</em>
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#2B1810]/70">
            Parties of 1 to 8. For groups over 8, email us directly at{" "}
            <a href="#" className="italic underline underline-offset-4">private@maisonlaurent.com</a>.
          </p>
        </FadeIn>

        {submitted ? (
          <FadeIn>
            <div className="mt-16 rounded-sm border border-[#B7410E]/20 bg-white p-12 text-center">
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#B7410E] text-[#FAF5EB]"
              >
                <Check className="h-6 w-6" />
              </motion.div>
              <h2 className="text-[36px] font-light italic">Table reserved.</h2>
              <p className="mt-3 text-[14px] text-[#2B1810]/70">
                A confirmation has been sent to your email. We'll text the day-of
                with parking directions.
              </p>
              <Link
                href="/templates/restaurant"
                className="mt-8 inline-block border-b border-[#B7410E] pb-1 text-[12px] uppercase tracking-[0.22em] text-[#B7410E]"
              >
                Back to Maison Laurent
              </Link>
            </div>
          </FadeIn>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); if (time && date) setSubmitted(true); }}
            className="mt-14 space-y-12"
          >
            <FadeIn delay={0.05}>
              <Block Icon={Users} label="Party size">
                <div className="flex flex-wrap gap-2">
                  {[1,2,3,4,5,6,7,8].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setParty(n)}
                      className="rounded-sm border px-5 py-2.5 text-[14px] transition-all"
                      style={{
                        borderColor: party === n ? "#B7410E" : "rgba(43,24,16,0.15)",
                        background: party === n ? "#B7410E" : "transparent",
                        color: party === n ? "#FAF5EB" : "#2B1810",
                      }}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </Block>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Block Icon={Calendar} label="Date">
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="rounded-sm border border-[#2B1810]/15 bg-white px-4 py-3 text-[14px] outline-none focus:border-[#B7410E]"
                  required
                />
              </Block>
            </FadeIn>

            <FadeIn delay={0.15}>
              <Block Icon={Clock} label="Time">
                <div className="flex flex-wrap gap-2">
                  {TIMES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTime(t)}
                      className="rounded-sm border px-5 py-2.5 text-[14px] tabular-nums transition-all"
                      style={{
                        borderColor: time === t ? "#B7410E" : "rgba(43,24,16,0.15)",
                        background: time === t ? "#B7410E" : "transparent",
                        color: time === t ? "#FAF5EB" : "#2B1810",
                      }}
                    >
                      {t} PM
                    </button>
                  ))}
                </div>
              </Block>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Block label="Contact">
                <div className="grid gap-3 md:grid-cols-2">
                  <input required type="text" placeholder="Full name" className="rounded-sm border border-[#2B1810]/15 bg-white px-4 py-3 text-[14px] outline-none focus:border-[#B7410E]" />
                  <input required type="email" placeholder="Email" className="rounded-sm border border-[#2B1810]/15 bg-white px-4 py-3 text-[14px] outline-none focus:border-[#B7410E]" />
                  <input type="tel" placeholder="Phone (for day-of texts)" className="rounded-sm border border-[#2B1810]/15 bg-white px-4 py-3 text-[14px] outline-none focus:border-[#B7410E] md:col-span-2" />
                  <textarea placeholder="Special occasion? Dietary notes? Tell us." rows={3} className="rounded-sm border border-[#2B1810]/15 bg-white px-4 py-3 text-[14px] outline-none focus:border-[#B7410E] md:col-span-2" />
                </div>
              </Block>
            </FadeIn>

            <FadeIn delay={0.25}>
              <button
                type="submit"
                disabled={!date || !time}
                className="inline-flex items-center gap-2 rounded-sm bg-[#B7410E] px-8 py-4 text-[12.5px] uppercase tracking-[0.22em] text-[#FAF5EB] disabled:opacity-50"
              >
                Reserve · {party} {party === 1 ? "person" : "people"}{time && date ? ` · ${date} at ${time} PM` : ""}
              </button>
            </FadeIn>
          </form>
        )}
      </div>
    </section>
  );
}

function Block({
  Icon, label, children,
}: { Icon?: React.ComponentType<{ className?: string }>; label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2 text-[11.5px] uppercase tracking-[0.3em] text-[#B7410E]">
        {Icon && <Icon className="h-3.5 w-3.5" />}
        {label}
      </div>
      {children}
    </div>
  );
}
