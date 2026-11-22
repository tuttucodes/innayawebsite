"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";

interface SectionHeadProps {
  index?: string;
  eyebrow?: string;
  title: React.ReactNode;
  blurb?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHead({
  index,
  eyebrow,
  title,
  blurb,
  align = "left",
  className,
}: SectionHeadProps) {
  return (
    <header
      className={cn(
        "relative flex flex-col gap-5 border-t border-line/60 pt-10 md:pt-14",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.24em] text-mute">
        {eyebrow && <span>{eyebrow}</span>}
        {index && <span>/{index}</span>}
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="font-sans text-[clamp(2.1rem,1rem+3.6vw,4rem)] font-bold leading-[1.04] tracking-[-0.03em] text-ink"
      >
        {title}
      </motion.h2>
      {blurb && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-[16px] leading-[1.65] text-ink-soft"
        >
          {blurb}
        </motion.p>
      )}
    </header>
  );
}

export function SectionShell({
  id,
  children,
  className,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto w-full max-w-[1360px] px-6 py-20 md:px-12 md:py-28 lg:py-36",
        className,
      )}
    >
      {children}
    </section>
  );
}
