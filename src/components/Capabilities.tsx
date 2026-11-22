"use client";

import { motion } from "motion/react";
import { SectionShell } from "./Section";

const OPERATIONS = [
  {
    num: "01",
    label: "Sourcing Corridors",
    title: "Farmgate & Mandi Aggregation",
    desc: "Direct procurement partnerships with FPOs and growers across Tamil Nadu and Kerala. Eliminates blind spot deductions and connects smallholder harvests with guaranteed buyers.",
  },
  {
    num: "02",
    label: "Quality Verification",
    title: "Standardized Intake Checklists",
    desc: "Physical sampling and visual inspection checklists at point of collection. Eliminating arbitrary grade rejections at factory gates through verified evidence.",
  },
  {
    num: "03",
    label: "Certified Facilities",
    title: "Audited Commercial Processing",
    desc: "Contract manufacturing in certified plants. Standardized batch lotting, nutritional consistency, and compliance for nationwide distribution and export.",
  },
  {
    num: "04",
    label: "Cold-Chain Oversight",
    title: "Active Temperature Telemetry",
    desc: "Telemetry monitoring for temperature-sensitive transit lanes. Early detection of cooling equipment failures allows rapid intervention before irreversible spoilage occurs.",
  },
];

export default function Capabilities() {
  return (
    <SectionShell id="operations">
      <div className="border-t border-line/60 pt-10 md:pt-14">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.24em] text-mute">
          <span>Division 03 · Physical Operations</span>
          <span>Field to Factory</span>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-16 lg:items-end">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-normal leading-[1.15] text-ink">
              From Origin to Processing: Sourcing Discipline
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[16px] leading-[1.65] text-ink-soft">
              Software alone does not move agricultural harvest. Innaya pairs AI-driven
              coordination with physical sourcing corridors, FSSAI-compliant manufacturing,
              and disciplined cold-chain transit.
            </p>
          </div>
        </div>

        {/* 4 Architectural Columns */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {OPERATIONS.map((op, i) => (
            <motion.div
              key={op.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between rounded-3xl border border-line/70 bg-bone/90 backdrop-blur-md p-6 shadow-[0_16px_32px_-12px_rgba(26,22,20,0.05),inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(26,22,20,0.1)] hover:border-ink/30"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                  <span className="font-semibold text-leaf-deep">/{op.num}</span>
                  <span>{op.label}</span>
                </div>
                <h3 className="mt-4 font-serif text-xl font-normal tracking-tight text-ink">
                  {op.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-ink-soft">
                  {op.desc}
                </p>
              </div>

              <div className="mt-6 border-t border-line/50 pt-3 text-xs font-mono uppercase tracking-[0.15em] text-mute">
                Tamil Nadu &amp; Kerala
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
