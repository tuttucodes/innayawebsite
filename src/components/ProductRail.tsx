import Image from "next/image";
import Link from "next/link";
import { PAN8_PRODUCTS, type Pan8Product } from "@/data/site";
import { cn } from "@/lib/cn";

/** Catalogue photography is cropped from print layouts with copy at the top; anchor low. */
export const PRODUCT_IMAGE_POSITION = "80% 85%";

/** Aligns the first card with the page container while letting the rail bleed to the edge. */
const RAIL_INSET = "max(var(--gutter), calc((100vw - 1320px) / 2 + var(--gutter)))";

interface ProductRailProps {
  products?: Pan8Product[];
  className?: string;
}

/** Horizontal, user-scrolled shelf of PAN8 products (snap, no autoplay). */
export default function ProductRail({ products = PAN8_PRODUCTS, className }: ProductRailProps) {
  return (
    <div className={cn("relative", className)}>
      <ul
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 [scrollbar-width:thin] md:gap-6"
        style={{ paddingInline: RAIL_INSET, scrollPaddingInline: RAIL_INSET }}
        aria-label="PAN8 products"
      >
        {products.map((p) => (
          <li key={p.name} className="w-[72vw] shrink-0 snap-start sm:w-[300px]">
            <Link href="/products" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-paper-deep">
                <Image
                  src={p.image}
                  alt={`PAN8 ${p.name} ${p.category.toLowerCase()}`}
                  fill
                  sizes="300px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  style={{ objectPosition: PRODUCT_IMAGE_POSITION }}
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <p className="text-[16px] tracking-[-0.015em] text-ink">{p.name}</p>
                <p className="num shrink-0 text-[13px] text-mute">{p.mrp}</p>
              </div>
              <p className="mt-1 text-[13px] text-mute">
                {p.category} · {p.protein}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
