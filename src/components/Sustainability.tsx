"use client";

import { motion } from "motion/react";
import { useRef } from "react";

export default function Sustainability() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-line bg-leaf-deep text-bone"
    >
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28 lg:py-32">
        <div className="md:col-span-5">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
            <span>05</span>
            <span>Resource Efficiency</span>
          </div>
          <h2 className="mt-6 font-sans text-[clamp(2.2rem,1rem+4vw,4.2rem)] font-bold leading-[1.05] tracking-tight text-bone">
            Less water.{" "}
            <span className="font-serif italic font-normal text-amber">More nutrition.</span>
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-[1.65] text-bone/80">
            Millets consume approximately 70% less water than paddy and 40% less than wheat.
            Every PAN8 pack reduces household water dependency while delivering higher bioavailable
            plant protein and lower glycemic impact.
          </p>
        </div>

        <div className="md:col-span-7">
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
            <Tile big="-70%" small="Water vs rice" />
            <Tile big="-40%" small="Water vs wheat" />
            <Tile big="0g" small="Preservatives" />
            <Tile big="100%" small="Plant-based" />
            <Tile big="13 SKUs" small="Commercial formulations" />
            <Tile big="Low GI" small="Glycaemic load" />
          </ul>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <Pill k="Sourced from" v="Smallholder farmers across South India" />
            <Pill k="Manufacturing" v="FSSAI Central licensed facilities" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Tile({ big, small }: { big: string; small: string }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-bone/15 bg-bone/[0.04] p-5 transition-colors hover:bg-bone/[0.08]"
    >
      <span className="block font-sans text-[clamp(1.8rem,1rem+1.8vw,2.8rem)] font-bold leading-none tracking-tight text-bone">
        {big}
      </span>
      <span className="mt-3 block font-mono text-[10px] uppercase tracking-[0.18em] text-bone/60">
        {small}
      </span>
    </motion.li>
  );
}

function Pill({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-bone/15 bg-bone/[0.05] p-5">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/70">
        {k}
      </span>
      <p className="mt-1.5 text-[15px] font-medium text-bone">{v}</p>
    </div>
  );
}
