"use client";

import { motion } from "motion/react";
import { SectionShell } from "./Section";
import { INTEL_MODULES, type IntelModule } from "@/data/site";
import { cn } from "@/lib/cn";

export default function AILayer() {
  return (
    <div id="platforms" className="relative bg-ink text-bone">
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
            className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-bone"
          >
            Innaya Intelligence — Software for Physical Food Logistics
          </motion.h2>

          <p className="mt-6 max-w-2xl text-[16px] leading-[1.65] text-bone/70">
            Food procurement in India is historically plagued by unrecorded price deductions,
            chaotic phone calls, and late-stage quality rejections. Innaya replaces this with
            automated vernacular voice coordination, digital lot records, and cold-chain monitoring.
          </p>
        </div>

        {/* Enterprise Directory Matrix - 6 balanced modules + 1 full-width flagship bridge */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-bone/15 bg-bone/15 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {INTEL_MODULES.slice(0, 6).map((m, i) => (
            <ModuleCard key={m.id} module={m} index={i} />
          ))}
          {INTEL_MODULES[6] && (
            <div className="md:col-span-2 lg:col-span-3 bg-ink p-6 sm:p-8 transition-colors hover:bg-ink-soft/90">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-bone/50">
                      07
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-bone/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
                      Flagship Formulation Engine · Deployed in PAN8
                    </span>
                  </div>
                  <h3 className="mt-3 font-sans text-2xl font-bold tracking-tight text-bone">
                    {INTEL_MODULES[6].name}
                    <span className="ml-3 font-serif italic text-base font-normal text-amber">
                      — {INTEL_MODULES[6].tagline}
                    </span>
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-bone/70">
                    {INTEL_MODULES[6].body}
                  </p>
                </div>
                <div className="shrink-0">
                  <ul className="flex flex-wrap md:flex-col gap-2">
                    {INTEL_MODULES[6].capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="rounded-full border border-bone/15 bg-bone/[0.04] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-bone/80 text-center"
                      >
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
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
    <div
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
    </div>
  );
}
