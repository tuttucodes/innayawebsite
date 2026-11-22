"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHead, SectionShell } from "./Section";
import { PRODUCTS, type Product } from "@/data/site";
import { cn } from "@/lib/cn";

const CATEGORIES = ["All", "Pancake", "Dosa", "Upma", "Bar"] as const;
type Cat = (typeof CATEGORIES)[number];

const PALETTE: Record<Product["category"], string> = {
  Pancake: "from-amber/70 via-amber/40 to-cream",
  Dosa: "from-leaf/60 via-leaf-deep/30 to-cream",
  Upma: "from-clay/50 via-amber/30 to-cream",
  Bar: "from-ink/80 via-ink-soft/60 to-bone-deep",
};

export default function Products() {
  const [active, setActive] = useState<Cat>("All");
  const visible = useMemo(
    () => (active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active)),
    [active],
  );

  return (
    <SectionShell id="products">
      <SectionHead
        index="04"
        eyebrow="The shelf"
        title={
          <>
            13 SKUs.{" "}
            <span className="font-serif italic font-normal text-leaf-deep">One philosophy.</span>
          </>
        }
        blurb="Every PAN8 pack is millet-first and plant-protein dense. Pancake mixes, dosa mixes, upma mixes, and on-the-go bars — engineered for the breakfast and snack moments Indians already live."
      />

      <div className="mt-14 flex flex-wrap items-center gap-2">
        {CATEGORIES.map((c) => {
          const isActive = active === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={cn(
                "group relative cursor-pointer rounded-full border px-5 py-2.5 text-[13px] tracking-tight transition-all active:scale-[0.98] active:translate-y-[1px]",
                isActive
                  ? "border-ink bg-ink text-bone shadow-xs"
                  : "border-line bg-bone-deep/40 text-ink-soft hover:border-ink/40 hover:text-ink",
              )}
            >
              <span>{c}</span>
              <span
                className={cn(
                  "ml-2 font-mono text-[10px]",
                  isActive ? "text-bone/70" : "text-mute",
                )}
              >
                {c === "All"
                  ? PRODUCTS.length
                  : PRODUCTS.filter((p) => p.category === c).length}
              </span>
            </button>
          );
        })}
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.li
              key={p.name}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.55,
                delay: (i % 8) * 0.04,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ProductCard product={p} />
            </motion.li>
          ))}
          {active === "All" && (
            <motion.li
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col justify-between rounded-3xl border border-leaf-deep/30 bg-gradient-to-br from-[oklch(22%_0.05_180)] to-[oklch(18%_0.04_195)] p-8 text-bone sm:col-span-2 lg:col-span-2 xl:col-span-3"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-bone/60">
                  <span>Modern Trade · Quick-Commerce · Export</span>
                  <span className="rounded-full bg-leaf px-2.5 py-0.5 text-bone font-mono text-[9px]">Commercial Offtake</span>
                </div>
                <h4 className="mt-4 font-sans text-2xl font-bold tracking-tight text-bone">
                  Distribute PAN8 High-Protein Nutrition Across India &amp; Export Lanes
                </h4>
                <p className="mt-2.5 text-sm leading-[1.6] text-bone/75 max-w-2xl">
                  PAN8 supplies retail-ready master cartons with verified barcoding, 9–12 month shelf stability, and volume wholesale pricing for retail supermarkets, institutional food services, and export partners.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-amber"
                >
                  Request B2B Wholesale Pricing →
                </a>
                <span className="font-mono text-[10px] text-bone/60">
                  FSSAI Central Type 1 Certified · Dispatch from Kerala
                </span>
              </div>
            </motion.li>
          )}
        </AnimatePresence>
      </ul>

      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-bone-deep/40 px-6 py-5">
        <p className="text-sm text-ink-soft">
          Looking for distribution, modern trade, or export pricing?
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-bone hover:bg-leaf-deep"
        >
          Partner with us →
        </a>
      </div>
    </SectionShell>
  );
}

function ProductCard({ product }: { product: Product }) {
  const isBar = product.category === "Bar";
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-bone transition-all hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]",
      )}
    >
      <div
        className={cn(
          "grain relative aspect-[4/5] overflow-hidden bg-gradient-to-br",
          PALETTE[product.category],
        )}
      >
        <div className={cn("absolute inset-0 mix-blend-overlay", isBar && "opacity-60")} />
        <div className="relative flex h-full flex-col justify-between p-5 text-ink">
          <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.2em]">
            <span className={cn(isBar && "text-bone/80")}>{product.category}</span>
            <span className={cn(isBar && "text-bone/80")}>{product.size}</span>
          </div>
          <div>
            <span
              className={cn(
                "font-mono text-[10px] uppercase tracking-[0.2em]",
                isBar ? "text-bone/70" : "text-ink/70",
              )}
            >
              PAN8
            </span>
            <h3
              className={cn(
                "mt-1 font-serif text-[26px] leading-[1.05] tracking-tight",
                isBar && "text-bone",
              )}
            >
              {product.name}
            </h3>
          </div>
        </div>
        <span className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full bg-ink/90 text-bone opacity-0 transition-opacity group-hover:opacity-100">
          ↗
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="text-sm text-ink-soft">{product.highlight}</span>
        <span className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
          <span className="h-1.5 w-1.5 rounded-full bg-leaf" /> Plant protein
        </span>
      </div>
    </article>
  );
}
