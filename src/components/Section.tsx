"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";

interface SectionHeadProps {
  index?: string;
  showSectionNumber?: boolean;
  eyebrow?: string;
  title: React.ReactNode;
  blurb?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHead({
  index,
  showSectionNumber = true,
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
      <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.16em] text-mute">
        {eyebrow && <span>{eyebrow}</span>}
        {index && showSectionNumber && <span>/{index}</span>}
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif text-3xl sm:text-4xl md:text-[2.6rem] font-normal leading-[1.15] tracking-tight text-ink"
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
