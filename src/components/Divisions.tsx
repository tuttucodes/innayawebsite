"use client";

import { motion } from "motion/react";
import { SectionShell } from "./Section";
import { DIVISIONS } from "@/data/site";

export default function Divisions() {
  return (
    <SectionShell id="divisions">
      <div className="border-t border-line/60 pt-10 md:pt-14">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.24em] text-mute">
          <span>Structure &amp; Portfolio</span>
          <span>Innaya Group</span>
        </div>

        {/* Editorial statement */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-16 lg:items-end">
          <div className="lg:col-span-6">
            <h2 className="font-sans text-[clamp(2.1rem,1.2rem+3.5vw,3.8rem)] font-bold leading-[1.04] tracking-[-0.03em] text-ink">
              One holding company.{" "}
              <span className="font-serif italic font-normal text-leaf-deep">
                Three focused divisions.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[16px] leading-[1.65] text-ink-soft">
              Innaya Nutrifoods Private Limited operates at the intersection of enterprise
              software and physical food manufacturing. We develop proprietary AI platforms
              for agricultural supply chains while managing our own consumer brand portfolio.
            </p>
          </div>
        </div>

        {/* 3 Structured Columns */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {DIVISIONS.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between rounded-2xl border border-line bg-bone-deep/40 p-7 transition-colors hover:border-ink/30 hover:bg-bone-deep/70"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
                  <span className="font-semibold text-leaf-deep">{d.num}</span>
                  <span>{d.tagline}</span>
                </div>

                <h3 className="mt-5 font-sans text-2xl font-bold tracking-tight text-ink">
                  {d.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-ink-soft">
                  {d.description}
                </p>
              </div>

              <div className="mt-8 border-t border-line/60 pt-5">
                <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
                  Key Assets &amp; Lines
                </span>
                <ul className="mt-2.5 space-y-1.5 text-[13px] font-medium text-ink">
                  {d.offerings.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-leaf" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
