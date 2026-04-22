"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Zap, Shield, GitBranch, BarChart3, Terminal, Cloud } from "lucide-react";
import { FadeIn } from "../_shared/PageTransition";

export default function SaasHome() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-28 pt-20 lg:px-10 lg:pt-28">
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#7C5CFF]/20 blur-[120px]" />
          <div className="absolute top-40 right-1/4 h-[300px] w-[500px] rounded-full bg-[#4AD8E1]/15 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-6xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11.5px] font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#4AD8E1]" />
            Now in public beta
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mx-auto max-w-4xl text-[44px] font-semibold leading-[1.0] tracking-tight lg:text-[84px]"
          >
            The OS for{" "}
            <span className="bg-gradient-to-r from-[#7C5CFF] via-[#A78BFA] to-[#4AD8E1] bg-clip-text text-transparent">
              infrastructure teams.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mx-auto mt-8 max-w-2xl text-[16px] leading-relaxed text-white/65 lg:text-[18px]"
          >
            Deploy, observe, and roll back across every environment from a single
            interface. Built by ex-SRE leads from Stripe, Cloudflare, and Databricks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/templates/saas/checkout"
              className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA] px-7 py-4 text-[13.5px] font-semibold text-white shadow-[0_20px_60px_-15px_rgba(124,92,255,0.6)] transition-all hover:shadow-[0_30px_80px_-15px_rgba(124,92,255,0.8)]"
            >
              Start free trial <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/templates/saas/features" className="rounded-lg border border-white/15 px-7 py-4 text-[13.5px] font-semibold text-white hover:bg-white/5">
              See features →
            </Link>
          </motion.div>

          {/* Logo strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20 border-y border-white/10 py-10"
          >
            <p className="mb-5 text-[10.5px] font-semibold uppercase tracking-[0.3em] text-white/45">
              Trusted by
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-[18px] font-bold tracking-tight text-white/40 lg:text-[22px]">
              <span>Vercel</span> <span>·</span> <span>Retool</span> <span>·</span>
              <span>Supabase</span> <span>·</span> <span>Linear</span> <span>·</span>
              <span>Notion</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature grid with gradient borders */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A78BFA]">Platform</p>
            <h2 className="mx-auto max-w-3xl text-center text-[36px] font-semibold leading-[1.1] tracking-tight lg:text-[56px]">
              Everything an SRE team asks for,
              <span className="text-[#A78BFA]"> in one control plane.</span>
            </h2>
          </FadeIn>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.05}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#13131A] p-7 transition-all hover:border-white/20">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#7C5CFF]/0 via-[#A78BFA]/0 to-[#4AD8E1]/0 opacity-0 transition-opacity duration-500 group-hover:from-[#7C5CFF]/20 group-hover:via-[#A78BFA]/10 group-hover:to-[#4AD8E1]/20 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C5CFF]/20 to-[#A78BFA]/20 text-[#A78BFA]">
                      <f.Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-[17px] font-semibold tracking-tight">{f.title}</h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-white/65">{f.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Metric band */}
      <section className="border-y border-white/10 bg-[#13131A] px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
          {[
            { value: "14ms", label: "Median API latency" },
            { value: "99.99%", label: "Historical uptime" },
            { value: "12×", label: "Faster rollbacks" },
            { value: "SOC 2 II", label: "Type II certified" },
          ].map((m, i) => (
            <FadeIn key={m.label} delay={i * 0.05}>
              <div className="text-center">
                <p className="bg-gradient-to-r from-[#7C5CFF] to-[#4AD8E1] bg-clip-text text-[38px] font-semibold text-transparent tabular-nums lg:text-[52px]">
                  {m.value}
                </p>
                <p className="mt-2 text-[11.5px] font-semibold uppercase tracking-[0.22em] text-white/55">{m.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Code preview */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A78BFA]">Developer-first</p>
            <h2 className="text-[36px] font-semibold leading-[1.1] tracking-tight lg:text-[52px]">
              One API. Every runtime.
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/65 lg:text-[17px]">
              Declarative config that reads like code, compiles to every major orchestrator,
              and keeps drift out of production for good.
            </p>
            <Link href="/templates/saas/features" className="mt-8 inline-flex items-center gap-2 text-[13px] font-semibold text-[#A78BFA]">
              Read the docs <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0F0F16]">
              <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                <span className="ml-3 text-[11px] font-mono text-white/40">prism.yaml</span>
              </div>
              <pre className="overflow-x-auto p-6 text-[12.5px] leading-[1.7] font-mono">
<Tok c="#A78BFA">deploy</Tok>: <Tok c="#4AD8E1">production</Tok>{`\n`}
<Tok c="#A78BFA">  runtime</Tok>: <Tok c="#F3A56B">kubernetes</Tok>{`\n`}
<Tok c="#A78BFA">  region</Tok>: <Tok c="#F3A56B">us-east-1</Tok>{`\n`}
<Tok c="#A78BFA">  replicas</Tok>: <Tok c="#F3A56B">12</Tok>{`\n`}
<Tok c="#A78BFA">  autoscale</Tok>:{`\n`}
<Tok c="#A78BFA">    cpu</Tok>: <Tok c="#F3A56B">70%</Tok>{`\n`}
<Tok c="#A78BFA">    min</Tok>: <Tok c="#F3A56B">6</Tok>{`\n`}
<Tok c="#A78BFA">    max</Tok>: <Tok c="#F3A56B">48</Tok>{`\n`}
<Tok c="#6B7280"># zero-downtime canary, 20% → 60% → 100%</Tok>{`\n`}
<Tok c="#A78BFA">  strategy</Tok>: <Tok c="#F3A56B">progressive</Tok>{`\n`}
              </pre>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <FadeIn>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#13131A] via-[#1A1230] to-[#13131A] p-12 text-center lg:p-20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7C5CFF]/10 via-transparent to-[#4AD8E1]/10" />
            <div className="relative">
              <h2 className="text-[36px] font-semibold leading-[1.1] tracking-tight lg:text-[56px]">
                Start shipping in 3 minutes.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[15px] text-white/70 lg:text-[17px]">
                14-day free trial. No credit card. Cancel with a single API call.
              </p>
              <Link href="/templates/saas/checkout" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#7C5CFF] to-[#A78BFA] px-7 py-4 text-[13.5px] font-semibold text-white">
                Start free trial <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

const FEATURES = [
  { Icon: Zap, title: "Sub-second deploys", body: "Progressive rollouts across every region in under 800ms median." },
  { Icon: GitBranch, title: "Git-native workflows", body: "Every deploy is a PR. Every rollback is a revert. Branches tracked in real time." },
  { Icon: BarChart3, title: "Embedded observability", body: "Tracing, metrics, logs, and profiles, wired into every deploy without config." },
  { Icon: Shield, title: "Policy engine", body: "Opinionated guardrails. Break-glass approvals. Audit log every operator can read." },
  { Icon: Terminal, title: "CLI-first", body: "Everything the dashboard does is a shell command. Scriptable all the way down." },
  { Icon: Cloud, title: "Multi-cloud", body: "AWS, GCP, Azure, bare metal, and on-prem — one control plane, consistent semantics." },
];

function Tok({ c, children }: { c: string; children: React.ReactNode }) {
  return <span style={{ color: c }}>{children}</span>;
}
