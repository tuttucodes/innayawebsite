"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { cn } from "@/lib/cn";

interface ScrubTextProps {
  text: string;
  className?: string;
  /** Words rendered in the accent colour once revealed */
  emphasis?: string[];
  /** Class applied to emphasised words */
  accentClassName?: string;
}

/**
 * Statement text whose words fill from faint to solid as it scrolls through
 * the viewport. Scroll progress lives in motion values, so React never re-renders.
 */
export default function ScrubText({
  text,
  className,
  emphasis = [],
  accentClassName = "text-forest",
}: ScrubTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 45%"],
  });
  const words = text.split(" ");
  const emphasised = new Set(emphasis.map((w) => w.toLowerCase()));

  return (
    <p ref={ref} className={cn("relative flex flex-wrap", className)} aria-label={text}>
      {words.map((word, i) => {
        const isAccent = emphasised.has(word.toLowerCase().replace(/[^a-z]/g, ""));
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={`${word}-${i}`}
            progress={scrollYProgress}
            range={[start, end]}
            accentClassName={isAccent ? accentClassName : undefined}
            still={Boolean(reduce)}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  accentClassName?: string;
  still: boolean;
}

function Word({ children, progress, range, accentClassName, still }: WordProps) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <span aria-hidden="true" className="mr-[0.26em] inline-block">
      <motion.span
        style={still ? undefined : { opacity }}
        className={accentClassName}
      >
        {children}
      </motion.span>
    </span>
  );
}
