"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHead, SectionShell } from "./Section";
import { PRODUCTS, type Product } from "@/data/site";
import { cn } from "@/lib/cn";

const CATEGORIES = ["All", "Pancake", "Dosa", "Upma", "Bar"] as const;
type Cat = (typeof CATEGORIES)[number];

const CATEGORY_IMAGES: Record<Product["category"], string> = {
  Pancake: "/images/pan8-pancake.jpg",
  Dosa: "/images/pan8-dosa.jpg",
  Upma: "/images/pan8-upma.jpg",
  Bar: "/images/pan8-bar.jpg",
};

const CATEGORY_TAGS: Record<Product["category"], string> = {
  Pancake: "15g Protein / 100g · Zero Maida",
  Dosa: "18g Protein / 100g · Low GI",
  Upma: "16g Protein / 100g · Heritage Grains",
  Bar: "20g Protein / 100g · Cold-Pressed",
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
        eyebrow="PAN8 Product Range"
        title="13 Millet-First Formulations"
        blurb="Every PAN8 product is built with climate-resilient heritage grains, delivering 15–24g bioavailable plant protein with zero maida, refined sugar, or artificial preservatives."
      />

      {/* Filter Tabs */}
      <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-2">
        {CATEGORIES.map((c) => {
          const isActive = active === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={cn(
                "group relative cursor-pointer rounded-full border px-5 py-2 text-xs font-mono uppercase tracking-[0.14em] transition-all duration-200 active:scale-[0.98]",
                isActive
                  ? "border-ink bg-ink text-bone shadow-xs"
                  : "border-line bg-bone text-ink-soft hover:border-ink/40 hover:text-ink",
              )}
            >
              <span>{c}</span>
              <span
                className={cn(
                  "ml-2 text-[10px]",
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

      {/* Product Grid */}
      <ul className="mt-8 sm:mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.li
              key={p.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.45,
                delay: (i % 8) * 0.03,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <ProductCard product={p} />
            </motion.li>
          ))}

          {/* B2B Offtake Card when All is selected */}
          {active === "All" && (
            <motion.li
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col justify-between rounded-2xl border border-line bg-ink p-8 text-bone sm:col-span-2 lg:col-span-2 xl:col-span-3 shadow-md"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.16em] text-bone/60">
                  <span>Modern Trade · Quick-Commerce · Export</span>
                  <span className="rounded-full bg-amber px-2.5 py-0.5 text-ink font-semibold text-[10px]">
                    Commercial Offtake
                  </span>
                </div>
                <h4 className="mt-4 font-serif text-2xl sm:text-3xl font-normal text-bone">
                  Distribute PAN8 High-Protein Nutrition Across India &amp; Export Corridors
                </h4>
                <p className="mt-3 text-sm leading-[1.65] text-bone/75 max-w-2xl">
                  PAN8 supplies retail-ready master cartons with verified barcoding, 9–12 month shelf stability, and volume wholesale pricing for modern trade supermarkets, dark stores, and institutional catering.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-amber active:scale-[0.98]"
                >
                  Request Wholesale Catalogue &amp; Pricing →
                </Link>
                <span className="font-mono text-xs text-bone/60">
                  Central FSSAI Type 1 Certified · Dispatch from Kerala
                </span>
              </div>
            </motion.li>
          )}
        </AnimatePresence>
      </ul>

      {/* Modern Trade Strip */}
      <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-bone-deep/50 p-6">
        <div>
          <p className="font-serif text-lg font-normal text-ink">
            Retail Placement, Quick-Commerce &amp; Institutional Supply
          </p>
          <p className="mt-0.5 text-xs text-ink-soft">
            Direct pricing, COA documentation, and master carton specs available upon inquiry.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-bone hover:bg-leaf-deep transition-colors"
        >
          Contact Sales Team →
        </Link>
      </div>
    </SectionShell>
  );
}

function ProductCard({ product }: { product: Product }) {
  const imageSrc = product.image || CATEGORY_IMAGES[product.category] || "/images/pan8-bar.jpg";
  const tag = product.protein || CATEGORY_TAGS[product.category] || "Plant-Protein Dense · Zero Preservatives";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line/70 bg-bone/90 backdrop-blur-md shadow-[0_16px_36px_-12px_rgba(26,22,20,0.06),inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-300 hover:border-ink/30 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-12px_rgba(26,22,20,0.12),inset_0_1px_0_rgba(255,255,255,0.9)]">
      {/* Real Food Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-bone-deep">
        <Image
          src={imageSrc}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 rounded-full bg-ink/75 backdrop-blur-md px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-bone border border-white/10">
          {product.category}
        </div>
        {product.mrp && (
          <div className="absolute top-3 right-3 rounded-full bg-amber/95 backdrop-blur-md px-2.5 py-0.5 font-mono text-[10px] text-ink font-semibold border border-amber/30 shadow-xs">
            MRP {product.mrp}
          </div>
        )}
        <div className="absolute bottom-3 right-3 rounded-full bg-bone/90 backdrop-blur-md px-2.5 py-0.5 font-mono text-[10px] text-ink font-semibold border border-line shadow-xs">
          {product.size}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-leaf-deep font-semibold">
            {tag}
          </span>
          <h3 className="mt-1.5 font-serif text-xl font-normal tracking-tight text-ink group-hover:text-leaf-deep transition-colors">
            {product.name}
          </h3>
          <p className="mt-1.5 text-xs leading-[1.6] text-ink-soft">
            {product.highlight}
          </p>

          {(product.servings || product.shelfLife) && (
            <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-[10px] text-mute">
              {product.servings && <span>{product.servings}</span>}
              {product.servings && product.shelfLife && <span>·</span>}
              {product.shelfLife && <span>{product.shelfLife} Shelf Life</span>}
            </div>
          )}
        </div>

        <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between">
          <span className="font-mono text-[10px] text-mute uppercase tracking-[0.12em]">
            Clean Label · 0 Preservatives
          </span>
          <Link
            href="/contact"
            className="text-xs font-semibold text-ink group-hover:text-leaf-deep transition-colors"
          >
            Inquire →
          </Link>
        </div>
      </div>
    </article>
  );
}
