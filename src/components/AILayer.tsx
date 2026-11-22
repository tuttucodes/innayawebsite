"use client";

import { motion } from "motion/react";
import { SectionShell } from "./Section";
import { INTEL_MODULES, type IntelModule } from "@/data/site";
import { cn } from "@/lib/cn";

export default function AILayer() {
  return (
    <div id="platforms" className="relative bg-ink text-bone">
      {/* Architectural grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:80px_80px]"
        aria-hidden="true"
      />

      <SectionShell className="relative">
        <div className="border-t border-bone/15 pt-10 md:pt-14">
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.24em] text-bone/50">
            <span>Division 01 · Software &amp; Platforms</span>
            <span>AWS-First Architecture</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-sans text-[clamp(2.1rem,1.2rem+3.6vw,4rem)] font-bold leading-[1.04] tracking-[-0.03em] text-bone"
          >
            Innaya Intelligence.{" "}
            <span className="font-serif italic font-normal text-amber">
              An operating system for food supply chains.
            </span>
          </motion.h2>

          <p className="mt-6 max-w-2xl text-[16px] leading-[1.65] text-bone/70">
            Food procurement in India is historically plagued by unrecorded price deductions,
            chaotic phone calls, and late-stage quality rejections. Innaya replaces this with
            automated vernacular voice coordination, digital lot records, and cold-chain monitoring.
          </p>
        </div>

        {/* Enterprise Directory Matrix */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-bone/15 bg-bone/15 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {INTEL_MODULES.map((m, i) => (
            <ModuleCard key={m.id} module={m} index={i} />
          ))}
        </div>

        {/* Technical Architecture Guarantees */}
        <div className="mt-16 grid gap-8 border-t border-bone/15 pt-8 md:grid-cols-3">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber">
              /01 Vernacular Phone Agents
            </span>
            <p className="mt-2 text-[14px] leading-[1.6] text-bone/80">
              Autonomous, consent-aware voice agents speak in Tamil, Malayalam, Hindi, and English.
              Frontline truck drivers and suppliers need no complex smartphone app.
            </p>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber">
              /02 Human-Governed Workflow
            </span>
            <p className="mt-2 text-[14px] leading-[1.6] text-bone/80">
              AI models transcribe, extract structured quotes, and flag transit delays — but all
              purchase orders and grade settlements require explicit human approval.
            </p>
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-amber">
              /03 Permissioned Provenance
            </span>
            <p className="mt-2 text-[14px] leading-[1.6] text-bone/80">
              Every completed transaction captures timestamped weighments, photo evidence, and batch
              IDs, building a defensible proprietary operational dataset.
            </p>
          </div>
        </div>
      </SectionShell>
    </div>
  );
}

function ModuleCard({ module: m, index: i }: { module: IntelModule; index: number }) {
  const badgeMap: Record<IntelModule["status"], { label: string; dot: string }> = {
    "Deployed in PAN8": { label: "Deployed in PAN8", dot: "bg-leaf" },
    "Active Pilot": { label: "Active Pilot", dot: "bg-amber" },
    "Core Platform": { label: "Core Platform", dot: "bg-bone/40" },
  };

  const badge = badgeMap[m.status];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (i % 3) * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col justify-between bg-ink p-6 sm:p-7 md:p-8 transition-colors hover:bg-ink-soft/90"
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-bone/50">
            0{i + 1}
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-bone/70">
            <span className={cn("h-1.5 w-1.5 rounded-full", badge.dot)} />
            {badge.label}
          </span>
        </div>

        <h3 className="mt-4 font-sans text-xl font-bold tracking-tight text-bone">
          {m.name}
        </h3>
        <p className="font-serif italic text-sm text-amber/90">{m.tagline}</p>

        <p className="mt-3 text-[14px] leading-[1.6] text-bone/65">{m.body}</p>
      </div>

      <div className="mt-6 border-t border-bone/10 pt-4">
        <ul className="flex flex-wrap gap-1.5">
          {m.capabilities.map((cap) => (
            <li
              key={cap}
              className="rounded-full border border-bone/15 bg-bone/[0.04] px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-bone/70"
            >
              {cap}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
