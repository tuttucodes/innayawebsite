"use client";

import { motion } from "motion/react";
import { SectionShell } from "./Section";

const PILLARS = [
  {
    index: "/01",
    label: "Farmgate & Origin",
    title: "Direct grower networks",
    desc: "Direct procurement lines into mandis, farmer producer organisations (FPOs), and smallholder growers across Tamil Nadu and Kerala. Eliminating price opacity, unrecorded deductions, and transit delays at the point of harvest.",
  },
  {
    index: "/02",
    label: "Clean Formulation",
    title: "Heritage grains in modern formats",
    desc: "Re-engineering everyday breakfast staples and on-the-go snacks using 5,000-year-old millets and pulses. Every formulation delivers 15–24g bioavailable plant protein with zero preservatives or synthetic binders.",
  },
  {
    index: "/03",
    label: "Operational Intelligence",
    title: "AI where friction costs margin",
    desc: "Multilingual voice agents contact drivers and suppliers in local vernaculars (Tamil, Malayalam, Hindi) to log verified ETAs, detect cooling failures, and provide logistics managers with real-time exception visibility.",
  },
];

export default function About() {
  return (
    <SectionShell id="about">
      <div className="border-t border-line/60 pt-8 sm:pt-10 md:pt-14">
        <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.24em] text-mute">
          The Thesis
        </span>

        {/* Editorial 2-column statement */}
        <div className="mt-6 sm:mt-8 grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-sans text-[clamp(1.9rem,1.1rem+3.2vw,3.8rem)] font-bold leading-[1.06] tracking-[-0.03em] text-ink">
              Food supply chains shouldn&apos;t run on{" "}
              <span className="font-serif italic font-normal text-leaf-deep">
                chaotic phone calls and guesswork.
              </span>
            </h2>

            <p className="mt-5 sm:mt-6 text-[15px] sm:text-[16px] leading-[1.65] text-ink-soft">
              India produces some of the world&apos;s most climate-resilient, nutrient-dense
              crops. Yet moving them from farmgate to processor involves unverified delays,
              inconsistent manual grading, and costly transit losses.
            </p>

            <p className="mt-3.5 sm:mt-4 text-[15px] sm:text-[16px] leading-[1.65] text-ink-soft">
              Innaya unifies software intelligence and physical food manufacturing into
              a single disciplined operating model.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6 lg:col-span-7">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative border-b border-line/60 pb-6 sm:pb-8 last:border-b-0"
              >
                <div className="flex items-center justify-between font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-mute">
                  <span className="font-semibold text-leaf-deep">{p.index}</span>
                  <span>{p.label}</span>
                </div>
                <h3 className="mt-2.5 sm:mt-3 font-sans text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14px] sm:text-[15px] leading-[1.6] text-ink-soft">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
