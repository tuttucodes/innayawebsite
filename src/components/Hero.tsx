"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90svh] flex-col justify-between overflow-hidden bg-bone px-5 pt-32 pb-10 sm:px-8 sm:pt-36 sm:pb-12 md:px-12 md:pt-40 md:pb-16"
    >
      {/* Subtle architectural hairline grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:64px_64px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1360px]">
        {/* Asymmetrical 2-column hero split */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 lg:items-end">
          {/* Left Column: Core statement & actions */}
          <div className="lg:col-span-7">
            <h1 className="font-sans text-[clamp(2.4rem,1.3rem+5vw,5.5rem)] font-bold leading-[1.02] tracking-[-0.035em] text-ink">
              Operating the infrastructure of food.
              <span className="block mt-2 font-serif italic font-normal text-leaf-deep">
                From agricultural origin to consumer shelf.
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 max-w-xl text-[16px] sm:text-[17px] leading-[1.65] text-ink-soft">
              Innaya is an integrated food technology group. We develop enterprise AI
              systems that automate agricultural procurement, quality inspection, and logistics —
              while operating a consumer goods portfolio anchored by our clean-nutrition brand{" "}
              <span className="font-semibold text-ink">PAN8</span>.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/platforms"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bone transition-all hover:bg-leaf-deep"
              >
                Innaya Intelligence Suite
                <span>→</span>
              </Link>
              <Link
                href="/brands/pan8"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-bone-deep/50 px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/40 hover:bg-bone-deep"
              >
                Consumer Brand (PAN8) ↗
              </Link>
            </div>
          </div>

          {/* Right Column: High-end architectural overview card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-line bg-bone-deep/40 p-5 sm:p-6 md:p-8"
            >
              <div className="flex items-center justify-between border-b border-line/60 pb-3.5 sm:pb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                  The Innaya Portfolio
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-leaf-deep">
                  <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
                  Active Operations
                </span>
              </div>

              <div className="mt-4 sm:mt-5 space-y-4">
                <Link
                  href="/platforms"
                  className="group block border-b border-line/40 pb-3 transition-colors hover:border-ink/40"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-mute group-hover:text-ink">
                    <span>Division 01 · Software &amp; Platforms</span>
                    <span>→</span>
                  </div>
                  <p className="mt-0.5 font-sans text-sm font-bold text-ink group-hover:text-leaf-deep">
                    Innaya Intelligence &amp; FirstMile Network
                  </p>
                  <p className="text-xs text-ink-soft">Voice, Source, Vision, Cold, Trace &amp; Nutri</p>
                </Link>

                <Link
                  href="/brands/pan8"
                  className="group block border-b border-line/40 pb-3 transition-colors hover:border-ink/40"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-mute group-hover:text-ink">
                    <span>Division 02 · Consumer Brands</span>
                    <span>→</span>
                  </div>
                  <p className="mt-0.5 font-sans text-sm font-bold text-ink group-hover:text-leaf-deep">
                    PAN8 — A Nutri Co.
                  </p>
                  <p className="text-xs text-ink-soft">13 Millet-First SKUs (Pancakes, Dosas, Upma, Bars)</p>
                </Link>

                <Link
                  href="/operations"
                  className="group block transition-colors hover:border-ink/40"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-mute group-hover:text-ink">
                    <span>Division 03 · Supply Operations</span>
                    <span>→</span>
                  </div>
                  <p className="mt-0.5 font-sans text-sm font-bold text-ink group-hover:text-leaf-deep">
                    Farmgate Sourcing &amp; Certified Processing
                  </p>
                  <p className="text-xs text-ink-soft">Tamil Nadu &amp; Kerala Agricultural Corridors</p>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom anchor ticker */}
      <div className="mx-auto mt-12 sm:mt-16 flex w-full max-w-[1360px] flex-col gap-2 border-t border-line/60 pt-5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-mute sm:flex-row sm:items-center sm:justify-between">
        <span>Innaya Nutrifoods Private Limited · Food Systems &amp; Technology</span>
        <span>Kerala &amp; Tamil Nadu, India</span>
      </div>
    </section>
  );
}
