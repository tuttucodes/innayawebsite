"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionShell } from "./Section";
import { PAN8_PRODUCTS, type Pan8Product } from "@/data/site";
import { cn } from "@/lib/cn";

const CATEGORIES = ["All Products", "Pancake Mix", "Dosa Mix", "Upma Mix", "Plant Protein Bar"] as const;
type CategoryFilter = (typeof CATEGORIES)[number];

export default function Brands() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All Products");

  const filteredProducts =
    activeCategory === "All Products"
      ? PAN8_PRODUCTS
      : PAN8_PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <SectionShell id="brands">
      <div className="border-t border-line/60 pt-10 md:pt-14">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.24em] text-mute">
          <span>Division 02 · Consumer Brands</span>
          <span>Owned &amp; Operated by Innaya</span>
        </div>

        {/* Brand Master Hero Box */}
        <div className="mt-8 overflow-hidden rounded-[24px] border border-leaf-deep/20 bg-gradient-to-br from-[oklch(22%_0.05_180)] via-[oklch(18%_0.04_195)] to-[oklch(15%_0.03_200)] p-7 sm:p-10 md:p-14 text-bone">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-bone/20 bg-bone/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-bone">
                <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
                Flagship Nutrition Brand
              </span>

              <h2 className="mt-4 font-sans text-[clamp(2.4rem,1.3rem+4vw,4.5rem)] font-bold leading-[1.02] tracking-tight text-bone">
                PAN8
                <span className="ml-3 font-serif italic text-xl font-normal text-amber">
                  — A Nutri Co.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-[16px] leading-[1.65] text-bone/80">
                <span className="font-semibold text-bone">&ldquo;Just pan it!&rdquo;</span> —
                PAN8 is Innaya&apos;s consumer brand re-engineering traditional Indian morning
                and snack formats with heritage millets, pulses, and modern nutrition science.
                All 13 products below are developed, formulated, and sold exclusively under the PAN8 brand.
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-bone/15 pt-5">
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-bone/60">
                    Product Portfolio
                  </span>
                  <span className="mt-1 block font-sans text-lg font-bold text-bone">
                    13 Active SKUs
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-bone/60">
                    Plant Protein
                  </span>
                  <span className="mt-1 block font-sans text-lg font-bold text-bone">
                    15–24g / 100g
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-bone/60">
                    Ingredient Promise
                  </span>
                  <span className="mt-1 block font-sans text-lg font-bold text-bone">
                    0 Preservatives
                  </span>
                </div>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-bone/60">
                    Channels
                  </span>
                  <span className="mt-1 block font-sans text-lg font-bold text-bone">
                    D2C · Retail · Modern Trade
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#pan8-catalog"
                  className="inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-amber"
                >
                  Browse PAN8 SKUs ↓
                </a>
                <a
                  href="https://www.pan8.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-bone/30 bg-bone/10 px-5 py-3 text-xs font-semibold text-bone transition-colors hover:bg-bone/20"
                >
                  <span>D2C Storefront (Beta)</span>
                  <span className="font-mono text-[10px] text-amber">pan8.in ↗</span>
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center lg:col-span-4">
              <div className="relative aspect-[3/2] w-full max-w-[320px]">
                <Image
                  src="/pan8-logo.png"
                  alt="PAN8 — Just Pan It!"
                  fill
                  sizes="320px"
                  className="object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]"
                  priority={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* PRODUCTS UNDER PAN8 (Categorized Shelf) */}
        <div id="pan8-catalog" className="mt-16 sm:mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-line/60 pb-5">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                The PAN8 Catalog
              </span>
              <h3 className="mt-1 font-sans text-2xl font-bold tracking-tight text-ink">
                Products under PAN8
              </h3>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap gap-1.5">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
                      isActive
                        ? "bg-ink text-bone"
                        : "border border-line bg-bone-deep/40 text-ink-soft hover:border-ink/40 hover:text-ink",
                    )}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Product Cards Grid with Balanced Slots */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((p) => (
              <ProductItem key={p.name} product={p} />
            ))}

            {/* Fills the remaining 3 columns on row 4 when All Products is selected to eliminate orphan cards */}
            {activeCategory === "All Products" && (
              <div className="flex flex-col justify-between rounded-2xl border border-leaf-deep/30 bg-gradient-to-br from-[oklch(22%_0.05_180)] to-[oklch(18%_0.04_195)] p-6 text-bone sm:col-span-2 lg:col-span-3">
                <div>
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-bone/60">
                    <span>Modern Trade · Quick-Commerce · Export</span>
                    <span className="rounded-full bg-leaf px-2.5 py-0.5 text-bone font-mono text-[9px]">Commercial Placement</span>
                  </div>
                  <h4 className="mt-3 font-sans text-xl font-bold tracking-tight text-bone">
                    Partner with PAN8 for Retail &amp; Institutional Offtake
                  </h4>
                  <p className="mt-2 text-sm text-bone/75 max-w-xl">
                    Standardized master cartons, barcode verified shelf-life compliance, and wholesale tier pricing for modern trade supermarkets, quick-commerce dark stores, and overseas distributors.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-bone px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-amber"
                  >
                    Request B2B Wholesale Catalog →
                  </a>
                  <span className="font-mono text-[10px] text-bone/60">
                    Direct dispatch from certified Kerala facility
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function ProductItem({ product: p }: { product: Pan8Product }) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-line bg-bone-deep/30 p-5 transition-colors hover:border-ink/30 hover:bg-bone-deep/60">
      <div>
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-mute">
          <span>{p.category}</span>
          <span>{p.weight}</span>
        </div>
        <h4 className="mt-3 font-sans text-base font-bold tracking-tight text-ink">
          {p.name}
        </h4>
        <p className="mt-1 font-serif italic text-sm text-leaf-deep">
          {p.keyBenefit}
        </p>
      </div>

      <div className="mt-5 border-t border-line/50 pt-3 flex items-center justify-between text-xs text-mute">
        <span className="font-mono text-[10px] uppercase">Brand · PAN8</span>
        <span className="font-medium text-ink">Clean Label</span>
      </div>
    </div>
  );
}
