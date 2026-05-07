"use client";

import { motion } from "motion/react";
import { SectionHead, SectionShell } from "./Section";
import { AI_PILLARS } from "@/data/site";

export default function AILayer() {
  return (
    <div id="ai" className="relative bg-ink text-bone">
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="absolute -top-24 left-1/2 h-72 w-[60%] -translate-x-1/2 rounded-full bg-leaf/30 blur-3xl" />

      <SectionShell className="relative">
        <div className="border-t border-bone/15 pt-8">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50">
            <span>02</span>
            <span>The AI layer</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 font-serif text-[clamp(2.4rem,1rem+5vw,5.6rem)] leading-[0.96] tracking-[-0.025em]"
          >
            From mandi to morning plate —{" "}
            <span className="italic text-amber">intelligently routed.</span>
          </motion.h2>
          <p className="mt-8 max-w-2xl text-[16px] leading-[1.6] text-bone/70">
            Most FMCG brands treat AI as a marketing tagline. We treat it as the
            operating layer underneath sourcing, formulation, demand, and distribution.
            Every kilogram of millet that becomes a PAN8 pack passes through it.
          </p>
        </div>

        <ul className="mt-20 grid gap-px overflow-hidden rounded-3xl bg-bone/10 md:mt-28 md:grid-cols-2 lg:grid-cols-4">
          {AI_PILLARS.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative flex flex-col gap-6 bg-ink p-8 transition-colors hover:bg-ink-soft"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/40">
                  0{i + 1}
                </span>
                <span className="grid h-8 w-8 place-items-center rounded-full border border-bone/15 transition-all group-hover:border-leaf group-hover:bg-leaf group-hover:text-ink">
                  →
                </span>
              </div>
              <h3 className="font-serif text-2xl tracking-tight">{p.title}</h3>
              <p className="text-sm leading-[1.6] text-bone/65">{p.body}</p>
              <span className="mt-auto inline-flex items-center gap-2 rounded-full border border-bone/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/80">
                <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
                {p.metric}
              </span>
            </motion.li>
          ))}
        </ul>

        <div className="mt-16 grid gap-10 border-t border-bone/15 pt-8 md:grid-cols-3">
          <Pillar
            k="Why this matters"
            v="FMCG margin is won 1% at a time across sourcing, manufacturing, demand, and distribution. Software gives us all four levers."
          />
          <Pillar
            k="Where we are"
            v="First commercial batches produced under FSSAI Central. D2C live on pan8.in. Retail seeded in Kerala and Haryana."
          />
          <Pillar
            k="What's next"
            v="Modern trade, marketplaces (Amazon, Flipkart, BigBasket), and quick-commerce — sequenced by demand-graph signals."
          />
        </div>
      </SectionShell>
    </div>
  );
}

function Pillar({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50">
        {k}
      </span>
      <p className="mt-3 text-[15px] leading-[1.6] text-bone/85">{v}</p>
    </div>
  );
}
