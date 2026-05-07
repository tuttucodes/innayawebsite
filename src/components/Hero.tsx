"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const sx = useSpring(mouseX, { stiffness: 60, damping: 18, mass: 0.8 });
  const sy = useSpring(mouseY, { stiffness: 60, damping: 18, mass: 0.8 });

  const orbX1 = useTransform(sx, [0, 1], [-30, 30]);
  const orbY1 = useTransform(sy, [0, 1], [-30, 30]);
  const orbX2 = useTransform(sx, [0, 1], [25, -25]);
  const orbY2 = useTransform(sy, [0, 1], [20, -20]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      className="grain relative isolate flex min-h-[100svh] items-end overflow-hidden bg-bone pb-12 pt-28 sm:pb-16 sm:pt-40"
    >
      {/* Background orbs */}
      <motion.div
        style={{ x: orbX1, y: orbY1 }}
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-[520px] w-[520px] rounded-full bg-leaf/30 blur-3xl"
        aria-hidden="true"
      />
      <motion.div
        style={{ x: orbX2, y: orbY2 }}
        className="pointer-events-none absolute -right-32 top-40 -z-10 h-[580px] w-[580px] rounded-full bg-amber/30 blur-3xl"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(ellipse_at_50%_-20%,oklch(95%_0.06_140)_0%,transparent_60%)]" />

      {/* Top meta strip */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-x-0 top-24 z-10 mx-auto hidden max-w-[1400px] grid-cols-3 gap-8 px-5 font-mono text-[10px] uppercase tracking-[0.22em] text-mute md:grid md:px-10"
      >
        <span>Est. 22 / 07 / 2024</span>
        <span className="text-center">Kerala · India</span>
        <span className="text-right">DPIIT recognised · FSSAI central</span>
      </motion.div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto w-full max-w-[1400px] px-5 md:px-10"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-line/80 bg-bone/60 px-4 py-2 backdrop-blur"
        >
          <span className="relative grid h-1.5 w-1.5 place-items-center rounded-full bg-leaf">
            <span className="absolute inset-0 animate-ping rounded-full bg-leaf opacity-75" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
            Parent company · India
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-serif text-[clamp(2.8rem,1rem+8vw,11rem)] leading-[0.92] tracking-[-0.03em]">
          <Reveal delay={0.05}>
            <span className="block">FMCG, end-to-end —</span>
          </Reveal>
          <Reveal delay={0.18}>
            <span className="block italic text-leaf-deep">sourcing to shelf,</span>
          </Reveal>
          <Reveal delay={0.32}>
            <span className="flex items-baseline gap-4 sm:gap-6">
              <span>powered by</span>
              <span className="relative">
                <span className="gradient-text">A.I.</span>
                <span className="absolute -right-3 -top-2 h-2 w-2 rounded-full bg-amber sm:-right-5 sm:-top-3" />
              </span>
            </span>
          </Reveal>
        </h1>

        {/* Sub + ctas */}
        <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-md text-[17px] leading-[1.55] text-ink-soft"
            >
              Innaya Nutri Foods is a parent food-tech company. We run the full
              FMCG stack —{" "}
              <span className="text-ink">
                sourcing, formulation, manufacturing, brand, and distribution
              </span>{" "}
              — with AI threaded through every layer. Brands launch on top of our
              operating system. First brand:{" "}
              <span className="font-serif italic text-ink">PAN8 — A Nutri Co.</span>
            </motion.p>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#capabilities"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bone transition-colors"
              >
                <span className="relative z-10">What we do</span>
                <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-leaf-deep to-leaf transition-transform duration-500 group-hover:translate-x-0" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-6 py-3.5 text-sm font-medium text-ink transition-all hover:border-ink hover:bg-ink hover:text-bone"
              >
                Talk to us
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom marker row */}
        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line/70 pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-mute md:mt-24 md:grid-cols-4">
          <Stat k="Founded" v="2024" />
          <Stat k="Stack" v="Sourcing → Distribution" />
          <Stat k="Brands Live" v="01 · PAN8" />
          <Stat k="HQ" v="Kerala, IN" />
        </div>
      </motion.div>

      {/* Scroll affordance — desktop only */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-mute md:flex"
      >
        <span>Scroll</span>
        <span className="block h-8 w-px bg-line">
          <motion.span
            className="block h-3 w-px bg-ink"
            animate={{ y: [0, 32, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "105%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-mute">{k}</span>
      <span className="font-sans text-[15px] normal-case tracking-tight text-ink">
        {v}
      </span>
    </div>
  );
}
