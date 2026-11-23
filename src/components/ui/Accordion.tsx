"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/cn";

export interface AccordionItem {
  title: string;
  body: React.ReactNode;
  meta?: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number;
  tone?: "light" | "dark";
  className?: string;
}

/** Numbered, hairline accordion. One panel open at a time. */
export default function Accordion({
  items,
  defaultOpen = 0,
  tone = "light",
  className,
}: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();
  const dark = tone === "dark";

  return (
    <ul className={cn("border-t", dark ? "border-paper/20" : "border-line", className)}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <li key={item.title} className={cn("border-b", dark ? "border-paper/20" : "border-line")}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center gap-6 py-6 text-left md:py-7"
              >
                <span className={cn("num w-8 shrink-0 text-[13px]", dark ? "text-sand-soft" : "text-sand")}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "flex-1 text-[clamp(1.15rem,1rem+0.5vw,1.5rem)] font-normal tracking-[-0.025em] transition-colors",
                    dark ? "text-paper" : "text-ink",
                  )}
                >
                  {item.title}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "relative grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors",
                    dark
                      ? "border-paper/25 group-hover:border-paper/60"
                      : "border-ink/15 group-hover:border-ink/50",
                  )}
                >
                  <span className="absolute h-px w-3 bg-current" />
                  <span
                    className={cn(
                      "absolute h-3 w-px bg-current transition-transform duration-300",
                      isOpen && "rotate-90 opacity-0",
                    )}
                  />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 30 }}
                  className="overflow-hidden"
                >
                  <div
                    className={cn(
                      "max-w-[60ch] pb-8 pl-14 text-[15.5px] leading-[1.7]",
                      dark ? "text-paper/70" : "text-ink-soft",
                    )}
                  >
                    {item.meta && (
                      <p className={cn("mb-3 text-[13px]", dark ? "text-sand-soft" : "text-forest")}>
                        {item.meta}
                      </p>
                    )}
                    {item.body}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
