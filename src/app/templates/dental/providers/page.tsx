"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Award, MapPin, GraduationCap, Languages, ArrowRight } from "lucide-react";
import { FadeIn } from "../../_shared/PageTransition";

const PROVIDERS = [
  {
    name: "Dr. Maya Patel, DDS",
    role: "Cosmetic & implants",
    years: 14,
    bio: "Founded Aster Dental after eight years at a high-volume clinic and realizing what patients actually wanted wasn't more appointments — it was fewer, better ones. Maya personally handles every implant case.",
    creds: ["DDS · Columbia University", "AAID Fellow", "Invisalign Diamond Provider"],
    languages: ["English", "Hindi", "Gujarati"],
    focus: "Implants, veneers, Invisalign",
  },
  {
    name: "Dr. Jordan Okafor, DMD",
    role: "General & preventive",
    years: 9,
    bio: "Jordan spent three years with Dentists Without Borders before joining Aster. His clinical approach: the most conservative treatment that actually works. He routinely talks patients out of procedures they don't need.",
    creds: ["DMD · University of Michigan", "FAGD (Academy of General Dentistry)"],
    languages: ["English", "French"],
    focus: "Preventive, restorative, endodontics",
  },
  {
    name: "Dr. Lina Park, DDS",
    role: "Pediatric & family",
    years: 11,
    bio: "Two kids of her own and the patience to prove it. Lina handles our youngest patients — first visits, sealants, growth-and-development monitoring — with a playroom adjacent to her operatory.",
    creds: ["DDS · UCLA", "Pediatric Dentistry Certificate · NYU"],
    languages: ["English", "Korean", "Spanish"],
    focus: "Pediatric, family plans, orthodontics",
  },
  {
    name: "Dr. Ben Harrow, DMD",
    role: "Endodontics & oral surgery",
    years: 17,
    bio: "Brought in-house because outsourcing root canals and extractions meant bounced appointments and frustrated patients. Now it's one chair, one team, one bill.",
    creds: ["DMD · Harvard School of Dental Medicine", "Endodontics Residency · Columbia"],
    languages: ["English"],
    focus: "Root canals, complex extractions, bone grafts",
  },
];

export default function DentalProvidersPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-b from-[#F0FAFB] to-white px-6 pb-16 pt-20 lg:px-10 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <FadeIn>
            <p className="mb-4 text-[11.5px] font-semibold uppercase tracking-[0.28em] text-[#0EA5B7]">
              Providers
            </p>
            <h1 className="max-w-3xl text-[44px] font-semibold leading-[1.05] tracking-tight lg:text-[68px]">
              The people who will actually treat you.
            </h1>
            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-[#0B3D4C]/70">
              Every dentist at Aster is a partner, not a rotating associate. You'll
              see the same face for as long as you're with us — which is the whole
              point of having a dentist.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Providers list */}
      <section className="px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-7xl space-y-10">
          {PROVIDERS.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.05}>
              <div className="grid gap-8 rounded-3xl border border-[#0EA5B7]/15 bg-white p-8 md:grid-cols-[0.85fr_1.15fr] md:gap-12 lg:p-12">
                {/* Portrait card */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="relative flex aspect-[4/5] items-end overflow-hidden rounded-2xl p-8 text-white"
                  style={{
                    background: `linear-gradient(180deg, #CFF3F7 0%, #0EA5B7 80%, #0B3D4C 100%)`,
                  }}
                >
                  <svg className="absolute inset-0 h-full w-full opacity-40" viewBox="0 0 400 500" preserveAspectRatio="none">
                    <circle cx="320" cy="80" r="80" fill="white" fillOpacity="0.15" />
                    <circle cx="340" cy="70" r="50" fill="white" fillOpacity="0.2" />
                  </svg>
                  <div className="relative z-10">
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-white/75">
                      {p.years} years in practice
                    </p>
                    <h2 className="mt-2 text-[26px] font-semibold leading-tight lg:text-[30px]">
                      {p.name}
                    </h2>
                    <p className="mt-1 text-[14px] text-white/85">{p.role}</p>
                  </div>
                </motion.div>

                {/* Bio */}
                <div>
                  <p className="text-[15px] leading-relaxed text-[#0B3D4C]/85 lg:text-[16px]">{p.bio}</p>

                  <div className="mt-8 space-y-5 border-t border-[#0EA5B7]/12 pt-8">
                    <DetailRow Icon={GraduationCap} label="Credentials" items={p.creds} />
                    <DetailRow Icon={Languages} label="Languages" items={p.languages} />
                    <DetailRow Icon={Award} label="Clinical focus" items={[p.focus]} />
                    <DetailRow Icon={MapPin} label="Location" items={["Aster Studio · Austin, TX"]} />
                  </div>

                  <Link
                    href="/templates/dental/checkout"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0EA5B7] px-6 py-3 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#0B3D4C]"
                  >
                    Book with {p.name.split(" ")[1].replace(",", "")} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}

function DetailRow({
  Icon, label, items,
}: { Icon: React.ComponentType<{ className?: string }>; label: string; items: string[] }) {
  return (
    <div className="flex items-start gap-4">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0EA5B7]/10 text-[#0EA5B7]">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0B3D4C]/55">{label}</p>
        <ul className="mt-1 flex flex-wrap gap-x-6 gap-y-1">
          {items.map((it) => (
            <li key={it} className="text-[13.5px] text-[#0B3D4C]/85">{it}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
