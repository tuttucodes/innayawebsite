"use client";

import { motion } from "motion/react";
import { SectionHead, SectionShell } from "./Section";
import { COMPLIANCE } from "@/data/site";

export default function Compliance() {
  return (
    <SectionShell>
      <SectionHead
        index="06"
        eyebrow="Trust stack"
        title={
          <>
            Top-decile compliance for an{" "}
            <span className="italic text-leaf-deep">early-stage food startup.</span>
          </>
        }
        blurb="FSSAI Central, GST, Udyam (MSME), DPIIT — all in place. We're export-ready, modern-trade-ready, and government-tender eligible from day one."
      />

      <ul className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:mt-24 md:grid-cols-3">
        {COMPLIANCE.map((c, i) => (
          <motion.li
            key={c.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group flex flex-col gap-3 bg-bone p-7 transition-colors hover:bg-bone-deep"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                0{i + 1}
              </span>
              <Check />
            </div>
            <h3 className="font-serif text-2xl tracking-tight">{c.label}</h3>
            <p className="text-sm text-ink-soft">{c.value}</p>
          </motion.li>
        ))}
      </ul>
    </SectionShell>
  );
}

function Check() {
  return (
    <span className="grid h-7 w-7 place-items-center rounded-full bg-leaf-deep text-bone">
      <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
        <path
          d="M2 6.5 4.8 9.3 10 4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
