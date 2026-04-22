"use client";
import { FadeIn } from "../../_shared/PageTransition";
import { Zap, GitBranch, BarChart3, Shield, Terminal, Cloud, Lock, Users, Workflow } from "lucide-react";

const FEATURES = [
  { Icon: Zap, title: "Progressive deploys", body: "Canary, blue-green, and wave deployments with built-in rollback triggers. Promote on SLO health, not wall-clock timers." },
  { Icon: GitBranch, title: "PR-native workflow", body: "Every change is a pull request. Every deploy links back to a commit. Every rollback is a git revert — full audit chain." },
  { Icon: BarChart3, title: "Unified observability", body: "Traces, metrics, logs, and continuous profiling, correlated by deploy and request. No extra agents, no extra bills." },
  { Icon: Shield, title: "Policy engine", body: "Write policies in code, enforce at admission time. Break-glass flows with two-person approval. Every override logged." },
  { Icon: Terminal, title: "CLI-first", body: "Everything the dashboard does, the CLI does. Ship scripts not screenshots. Supports bash, zsh, fish, pwsh." },
  { Icon: Cloud, title: "Multi-cloud orchestration", body: "AWS, GCP, Azure, bare metal, on-prem — consistent semantics across them all. Schedule workloads by cost, latency, or compliance." },
  { Icon: Lock, title: "Enterprise security", body: "SSO + SCIM, SOC 2 Type II, ISO 27001, HIPAA BAA on request. Customer-managed encryption keys available." },
  { Icon: Users, title: "Org-scale RBAC", body: "Fine-grained roles scoped by cluster, namespace, or service. IdP group mappings. Just-in-time elevation for on-call." },
  { Icon: Workflow, title: "Workflow engine", body: "Long-running workflows with retries, timeouts, and human approvals — all observable, all replayable, all auditable." },
];

export default function SaasFeaturesPage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-20 lg:px-10 lg:pt-28">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[#7C5CFF]/15 blur-[100px]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <FadeIn>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A78BFA]">Features</p>
            <h1 className="text-[44px] font-semibold leading-[1.05] tracking-tight lg:text-[72px]">
              Everything you need.<br />
              <span className="bg-gradient-to-r from-[#7C5CFF] to-[#4AD8E1] bg-clip-text text-transparent">Nothing you don't.</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 pb-24 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.04}>
              <div className="group h-full rounded-2xl border border-white/10 bg-[#13131A] p-7 transition-all hover:-translate-y-1 hover:border-[#7C5CFF]/40">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C5CFF]/25 to-[#A78BFA]/15 text-[#A78BFA]">
                  <f.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-[17px] font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-white/65">{f.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
