"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";

interface SectionHeadProps {
  index: string;
  eyebrow: string;
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
        "relative flex flex-col gap-8 border-t border-line pt-8",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <div className="flex w-full items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif text-[clamp(2.4rem,1rem+5vw,5.6rem)] leading-[0.96] tracking-[-0.025em]"
      >
        {title}
      </motion.h2>
      {blurb && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-[16px] leading-[1.6] text-ink-soft"
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
        "mx-auto w-full max-w-[1400px] px-5 py-24 md:px-10 md:py-32 lg:py-40",
        className,
      )}
    >
      {children}
    </section>
  );
}
