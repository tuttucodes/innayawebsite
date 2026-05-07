"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SectionHead, SectionShell } from "./Section";

export default function Brands() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-3, 3]);

  return (
    <SectionShell id="brands">
      <SectionHead
        index="03"
        eyebrow="Brand house"
        title={
          <>
            One company. <span className="italic">Many shelves.</span>
          </>
        }
        blurb="Innaya is the parent. Each brand is a focused promise to a specific consumer. We launched with PAN8. More are in the lab."
      />

      {/* PAN8 hero card */}
      <motion.article
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-20 overflow-hidden rounded-[28px] border border-line bg-gradient-to-br from-cream via-bone to-bone-deep md:mt-28 md:rounded-[40px]"
      >
        <div className="grain absolute inset-0" />

        <motion.div
          style={{ y, rotate }}
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-10 -z-0 hidden font-serif text-[26rem] leading-none text-ink/[0.04] md:block"
        >
          P8
        </motion.div>

        <div className="relative grid gap-10 p-8 md:grid-cols-12 md:gap-14 md:p-14 lg:p-20">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
              <span>Consumer brand · 01</span>
              <span className="h-px w-10 bg-line" />
              <span>Live</span>
            </div>

            <h3 className="mt-6 font-serif text-[clamp(3.5rem,1rem+11vw,9rem)] leading-[0.88] tracking-[-0.04em]">
              <span className="block">PAN</span>
              <span className="-mt-2 block">
                <span className="relative">
                  8
                  <span className="absolute -right-3 top-2 h-3 w-3 rounded-full bg-amber md:-right-5 md:top-4 md:h-5 md:w-5" />
                </span>
                <span className="ml-3 font-sans text-base font-normal align-top tracking-tight text-mute">
                  — A Nutri Co.
                </span>
              </span>
            </h3>

            <p className="mt-8 max-w-xl text-[17px] leading-[1.55] text-ink-soft">
              <span className="text-ink">
                &ldquo;Nutrition that works with you.&rdquo;
              </span>{" "}
              13 SKUs across pancake, dosa, upma and bar formats — every one millet-first,
              plant-protein dense, and zero-preservative.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-6">
              <Stat k="SKUs" v="13" />
              <Stat k="Plant Protein" v="15–24g / 100g" />
              <Stat k="Format" v="Everyday Indian" />
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="https://www.pan8.in"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bone transition-colors hover:bg-leaf-deep"
              >
                Visit pan8.in
                <span className="transition-transform group-hover:translate-x-1">↗</span>
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bone"
              >
                See product range
              </a>
            </div>
          </div>

          <div className="relative md:col-span-5">
            <motion.div
              animate={{ rotate: [-2, 2, -2] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="aspect-[4/5] w-full overflow-hidden rounded-[24px] border border-ink/10 bg-ink"
            >
              <div className="grain relative flex h-full w-full flex-col justify-between bg-gradient-to-br from-leaf-deep via-leaf to-amber p-7 text-bone">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
                    Pack · 250g
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em]">
                    Plant protein 22g
                  </span>
                </div>

                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-80">
                    PAN8 · Multi-Millet
                  </span>
                  <h4 className="mt-2 font-serif text-5xl leading-[0.9] tracking-[-0.02em]">
                    Multi
                    <br />
                    Millet
                    <br />
                    <em>Dosa Mix.</em>
                  </h4>
                  <div className="mt-6 grid grid-cols-2 gap-3 text-[10px] uppercase tracking-[0.2em]">
                    <span>Sorghum</span>
                    <span>Ragi</span>
                    <span>Foxtail</span>
                    <span>Pearl Millet</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <span className="absolute -bottom-3 -right-3 hidden rounded-full border border-line bg-bone px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-mute md:inline-flex">
              D2C · live
            </span>
          </div>
        </div>
      </motion.article>

      {/* Future brands */}
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <FutureBrand
          tag="Brand · 02"
          title="In incubation"
          body="A protein-forward sub-brand for athletes and fitness-led households. Quietly being formulated."
        />
        <FutureBrand
          tag="Brand · 03"
          title="On the roadmap"
          body="An export-first millet line built for international shelves and the diaspora."
        />
      </div>
    </SectionShell>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
        {k}
      </span>
      <span className="mt-1 block font-serif text-2xl tracking-tight">{v}</span>
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
