"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SectionHead, SectionShell } from "./Section";

export default function Brands() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <SectionShell id="brands">
      <SectionHead
        index="04"
        eyebrow="Portfolio"
        title={
          <>
            One platform.<br />
            <span className="italic">Brands on top.</span>
          </>
        }
        blurb="Innaya operates as the parent company. Every brand we build inherits our sourcing, manufacturing, distribution and AI infrastructure. Today, one brand is live — more are in the lab."
      />

      <article
        ref={ref}
        className="relative mt-20 overflow-hidden rounded-[28px] border border-leaf-deep/30 md:mt-28 md:rounded-[40px]"
        style={{
          background:
            "linear-gradient(135deg, oklch(28% 0.06 180) 0%, oklch(22% 0.05 195) 60%, oklch(18% 0.04 200) 100%)",
        }}
      >
        <motion.div
          style={{ y: yBg }}
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-amber/10 blur-3xl"
        />
        <motion.div
          style={{ y: yBg }}
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 -bottom-24 h-[420px] w-[420px] rounded-full bg-leaf/15 blur-3xl"
        />

        <div className="relative grid gap-10 p-8 md:grid-cols-12 md:gap-14 md:p-14 lg:p-20">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/60">
              <span>Portfolio brand · 01</span>
              <span className="h-px w-10 bg-bone/30" />
              <span>Live</span>
            </div>

            <h3 className="mt-6 font-serif text-[clamp(2.6rem,1rem+8vw,7rem)] leading-[0.9] tracking-[-0.03em] text-bone">
              PAN8
              <span className="ml-3 inline-block align-baseline font-sans text-base font-normal tracking-tight text-bone/60">
                — A Nutri Co.
              </span>
            </h3>

            <p className="mt-8 max-w-xl text-[17px] leading-[1.55] text-bone/80">
              <span className="text-bone">
                &ldquo;Just pan it!&rdquo;
              </span>{" "}
              Millet-first, plant-protein nutrition for modern Indian households.
              Pancake mixes, dosa mixes, upma mixes and on-the-go bars.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-bone/15 pt-6">
              <Stat k="Format" v="Everyday Indian" />
              <Stat k="Plant Protein" v="15–24g / 100g" />
              <Stat k="Channels" v="D2C live · Retail seeding" />
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/brands/pan8"
                className="group inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-amber"
              >
                Read the case
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <a
                href="https://www.pan8.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-bone/30 px-6 py-3.5 text-sm font-medium text-bone transition-colors hover:bg-bone/10"
              >
                Visit pan8.in ↗
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center md:col-span-5">
            <motion.div
              animate={{ rotate: [-1.5, 1.5, -1.5] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[3/2] w-full overflow-hidden rounded-[24px] border border-bone/15 bg-[oklch(22%_0.05_195)] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5)]"
            >
              <Image
                src="/pan8-logo.png"
                alt="PAN8 — A Nutri Co."
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-contain"
                priority={false}
              />
            </motion.div>
          </div>
        </div>
      </article>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <FutureBrand
          tag="Brand · 02"
          title="In incubation"
          body="Protein-forward sub-brand for athletes and fitness-led households. Quietly being formulated."
        />
        <FutureBrand
          tag="Brand · 03"
          title="On the roadmap"
          body="Export-first millet line built for international shelves and the diaspora."
        />
      </div>
    </SectionShell>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55">
        {k}
      </span>
      <span className="mt-1 block font-serif text-2xl tracking-tight text-bone">
        {v}
      </span>
    </div>
  );
}

function FutureBrand({ tag, title, body }: { tag: string; title: string; body: string }) {
  return (
    <article className="group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-dashed border-ink/15 bg-bone-deep/20 p-8 transition-colors hover:border-ink/40 hover:bg-bone-deep/40">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
          {tag}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
          Soon
        </span>
      </div>
      <h3 className="font-serif text-3xl tracking-tight">{title}</h3>
      <p className="text-sm leading-[1.55] text-ink-soft">{body}</p>
      <span className="mt-2 h-px w-full bg-line transition-colors group-hover:bg-ink/40" />
    </article>
  );
}
