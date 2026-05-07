"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Sustainability() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-line bg-leaf-deep text-bone"
    >
      <motion.div
        style={{ y }}
        aria-hidden="true"
        className="absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full bg-amber/30 blur-3xl"
      />
      <motion.div
        style={{ y }}
        aria-hidden="true"
        className="absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full bg-leaf/40 blur-3xl"
      />

      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-32 lg:py-40">
        <div className="md:col-span-5">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
            <span>05</span>
            <span>Climate · Water · Soil</span>
          </div>
          <h2 className="mt-8 font-serif text-[clamp(2.4rem,1rem+5vw,5rem)] leading-[0.96] tracking-[-0.025em]">
            Less water.<br />
            More <em className="text-amber">nutrition.</em>
          </h2>
          <p className="mt-8 max-w-md text-[16px] leading-[1.6] text-bone/80">
            Millets need ~70% less water than rice and ~40% less than wheat. Every PAN8
            pack reduces a household&apos;s water footprint while improving its nutrition
            footprint — directly aligned with India&apos;s millet-mission and climate goals.
          </p>
        </div>

        <div className="md:col-span-7">
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
            <Tile big="-70%" small="Water vs rice" />
            <Tile big="-40%" small="Water vs wheat" />
            <Tile big="0g" small="Preservatives" />
            <Tile big="100%" small="Plant-based" />
            <Tile big="ECO" small="Retail-ready pack" />
            <Tile big="LOW" small="Glycaemic load" />
          </ul>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <Pill k="Sourced from" v="Indian smallholder millet farmers" />
            <Pill k="Made in" v="FSSAI-licensed facility, Pune" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Tile({ big, small }: { big: string; small: string }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-bone/15 bg-bone/[0.04] p-5 transition-colors hover:bg-bone/[0.08]"
    >
      <span className="block font-serif text-[clamp(2rem,1rem+2.4vw,3.6rem)] leading-none tracking-tight text-bone">
        {big}
      </span>
      <span className="mt-3 block font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
        {small}
      </span>
      <span className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-amber" />
    </motion.li>
  );
}

function Pill({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-bone/15 bg-bone/[0.05] p-5">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/80">
        {k}
      </span>
      <p className="mt-2 text-[15px] text-bone/95">{v}</p>
    </div>
  );
}
