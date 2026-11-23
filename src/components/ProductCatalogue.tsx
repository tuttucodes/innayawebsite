"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { PAN8_PRODUCTS, type Pan8Product } from "@/data/site";
import { cn } from "@/lib/cn";
import { PRODUCT_IMAGE_POSITION } from "./ProductRail";

type Category = Pan8Product["category"];
type Filter = "All" | Category;

const FILTERS: Filter[] = ["All", "Pancake Mix", "Dosa Mix", "Upma Mix", "Plant Protein Bar"];

const FILTER_LABEL: Record<Filter, string> = {
  All: "All",
  "Pancake Mix": "Pancakes",
  "Dosa Mix": "Dosas",
  "Upma Mix": "Upma",
  "Plant Protein Bar": "Bars",
};

function countFor(filter: Filter): number {
  return filter === "All"
    ? PAN8_PRODUCTS.length
    : PAN8_PRODUCTS.filter((p) => p.category === filter).length;
}

/** Filterable PAN8 range. Each tile is the interaction, so tiles are allowed here. */
export default function ProductCatalogue() {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = useMemo(
    () => (filter === "All" ? PAN8_PRODUCTS : PAN8_PRODUCTS.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <div>
      <div role="tablist" aria-label="Filter products" className="flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const active = f === filter;
          return (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(f)}
              className={cn(
                "inline-flex h-10 items-center gap-2 rounded-full border px-4 text-[14px] transition-colors",
                active
                  ? "border-forest-deep bg-forest-deep text-paper"
                  : "border-ink/15 text-ink-soft hover:border-ink/40 hover:text-ink",
              )}
            >
              {FILTER_LABEL[f]}
              <span className={cn("num text-[12px]", active ? "text-paper/60" : "text-mute")}>
                {countFor(f)}
              </span>
            </button>
          );
        })}
      </div>

      <motion.ul layout className="mt-12 grid grid-cols-1 gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((p) => (
            <motion.li
              key={p.name}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 160, damping: 24 }}
            >
              <ProductTile product={p} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}

function ProductTile({ product: p }: { product: Pan8Product }) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-paper-deep">
        <Image
          src={p.image}
          alt={`PAN8 ${p.name} ${p.category.toLowerCase()}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={{ objectPosition: PRODUCT_IMAGE_POSITION }}
        />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="text-[19px] font-normal tracking-[-0.02em] text-ink">{p.name}</h3>
        {p.mrp && <p className="num shrink-0 text-[15px] text-ink">{p.mrp}</p>}
      </div>
      <p className="mt-1.5 text-[14px] leading-[1.55] text-ink-soft">{p.keyBenefit}</p>
      <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-1 border-t border-line pt-3 text-[13px] text-mute">
        <div className="flex gap-1.5">
          <dt className="sr-only">Pack</dt>
          <dd>
            {p.category} · {p.weight}
          </dd>
        </div>
        {p.protein && (
          <div className="flex gap-1.5">
            <dt className="sr-only">Protein</dt>
            <dd className="text-forest">{p.protein}</dd>
          </div>
        )}
        {p.servings && (
          <div className="flex gap-1.5">
            <dt className="sr-only">Makes</dt>
            <dd>{p.servings}</dd>
          </div>
        )}
      </dl>
    </article>
  );
}
