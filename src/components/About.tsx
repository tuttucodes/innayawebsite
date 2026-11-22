"use client";

import { motion } from "motion/react";
import { SectionShell } from "./Section";

const PILLARS = [
  {
    index: "01",
    label: "Direct Farmgate Aggregation",
    title: "Direct grower and FPO partnerships",
    desc: "We procure directly from Farmer Producer Organisations (FPOs) and smallholder collectives across Tamil Nadu and Kerala. Eliminating middleman price gouging, unrecorded deductions, and transit delays right at harvest.",
  },
  {
    index: "02",
    label: "Heritage Grain Formulation",
    title: "Nutrient-dense grains in modern formats",
    desc: "Re-engineering everyday breakfast staples and on-the-go snacks using 5,000-year-old climate-resilient millets and pulses. Every PAN8 product delivers 15–24g bioavailable plant protein with zero preservatives or synthetic additives.",
  },
  {
    index: "03",
    label: "Farmgate Technology",
    title: "Practical tools where friction costs farmers",
    desc: "Multilingual voice assistants communicate with truck drivers in Tamil and Malayalam to track arrivals. Computer vision screens moisture and crop quality on-site, enabling instant digital payouts within 48 hours.",
  },
];

export default function About() {
  return (
    <SectionShell id="about">
      <div className="border-t border-line/60 pt-10 md:pt-14">
        <span className="font-mono text-xs uppercase tracking-[0.16em] text-mute">
          The Operating Model
        </span>

        {/* Editorial 2-column statement */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-normal leading-[1.18] tracking-tight text-ink">
              Food supply chains shouldn&apos;t run on chaotic phone calls and guesswork.
            </h2>

            <p className="mt-6 text-base leading-[1.7] text-ink-soft">
              India produces some of the world&apos;s most climate-resilient, nutrient-dense
              crops. Yet moving them from farmgate to processor involves unverified delays,
              inconsistent manual grading, and costly transit losses.
            </p>

            <p className="mt-4 text-base leading-[1.7] text-ink-soft">
              Innaya unifies farmgate technology and consumer food manufacturing into
              a single, transparent operating model.
            </p>
          </div>

          <div className="space-y-6 lg:col-span-7">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative border-b border-line/60 pb-8 last:border-b-0"
              >
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.16em] text-mute">
                  <span className="font-semibold text-leaf-deep">/{p.index}</span>
                  <span>{p.label}</span>
                </div>
                <h3 className="mt-3 font-serif text-xl sm:text-2xl font-normal tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base leading-[1.65] text-ink-soft">
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
