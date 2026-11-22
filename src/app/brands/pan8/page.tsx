import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Products from "@/components/Products";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "PAN8 — A Nutri Co. by Innaya Nutri Foods",
  description:
    "PAN8 is the clean consumer nutrition brand of Innaya Nutri Foods. 13 millet-first SKUs across pancake mixes, dosa mixes, upma, and cold-pressed protein bars with 15–24g plant protein.",
  alternates: { canonical: `${SITE.url}/brands/pan8` },
  openGraph: {
    title: "PAN8 — Clean Nutrition Brand by Innaya",
    description:
      "Heritage millets and pulses in everyday Indian formats. 15–24g plant protein, zero preservatives, 100% clean.",
    url: `${SITE.url}/brands/pan8`,
    type: "website",
  },
};

export default function Pan8BrandPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip bg-bone">
        <PageHero
          eyebrow="Consumer Brands · Division 02"
          title="PAN8 — Clean Nutrition for Modern Indian Homes"
          blurb={
            <>
              Traditional Indian breakfast staples and on-the-go snacks re-engineered with heritage millets, pulses, and modern food science. All 13 formulations are created, tested, and sold under the PAN8 brand.
            </>
          }
        />

        {/* Hero Visual Banner */}
        <div className="mx-auto w-full max-w-[1360px] px-5 pt-8 sm:px-8 md:px-12">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-line bg-bone-deep shadow-sm">
            <Image
              src="/pan8-hero.jpg"
              alt="PAN8 Clean Nutrition Breakfast"
              fill
              priority
              sizes="(max-width: 1360px) 100vw, 1360px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-bone">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-amber">
                  PAN8 — A Nutri Co.
                </span>
                <p className="mt-1 font-serif text-2xl sm:text-3xl font-normal text-bone">
                  &ldquo;Just pan it!&rdquo;
                </p>
              </div>
              <a
                href="https://www.pan8.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-bone px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-amber"
              >
                Visit Storefront (Beta) ↗
              </a>
            </div>
          </div>
        </div>

        {/* Nutritional Guarantees Ledger */}
        <section className="mx-auto w-full max-w-[1360px] px-5 py-12 sm:px-8 md:px-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-line py-8">
            <div className="border-l-2 border-leaf-deep/40 pl-4">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-mute">Range</span>
              <div className="font-serif text-2xl sm:text-3xl font-normal text-ink mt-1">13 Formulations</div>
              <p className="text-xs text-ink-soft mt-0.5">Pancakes, Dosas, Upma &amp; Bars</p>
            </div>
            <div className="border-l-2 border-leaf-deep/40 pl-4">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-mute">Plant Protein</span>
              <div className="font-serif text-2xl sm:text-3xl font-normal text-ink mt-1">15–24g / 100g</div>
              <p className="text-xs text-ink-soft mt-0.5">Bioavailable heritage pulses &amp; grains</p>
            </div>
            <div className="border-l-2 border-leaf-deep/40 pl-4">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-mute">Ingredients</span>
              <div className="font-serif text-2xl sm:text-3xl font-normal text-ink mt-1">0 Preservatives</div>
              <p className="text-xs text-ink-soft mt-0.5">Zero maida, zero artificial fillers</p>
            </div>
            <div className="border-l-2 border-leaf-deep/40 pl-4">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-mute">Offtake</span>
              <div className="font-serif text-2xl sm:text-3xl font-normal text-ink mt-1">D2C &amp; Retail</div>
              <p className="text-xs text-ink-soft mt-0.5">Modern trade &amp; quick-commerce ready</p>
            </div>
          </div>
        </section>

        {/* 3 Flagship Commercial SKUs Showcase (With Real Delicious Food Imagery!) */}
        <section className="mx-auto w-full max-w-[1360px] px-5 pb-16 sm:px-8 md:px-12">
          <div className="border-t border-line/60 pt-10">
            <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.16em] text-mute">
              <span>Flagship Formulations</span>
              <span>Commercial Anchors</span>
            </div>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-normal tracking-tight text-ink">
              Three Hero Formulations
            </h2>
            <p className="mt-2 text-base text-ink-soft max-w-2xl">
              Engineered for the breakfast and snack routines Indian households already follow every morning.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <FlagshipCard
                image="/images/pan8-dosa.jpg"
                title="Multi-Millet Protein Dosa Mix"
                category="Dosa Mix · 250g"
                protein="18g Protein / 100g"
                highlights={["5 Heritage Millets", "Zero Rice Filler", "Low GI", "Crispy Texture"]}
                desc="A crisp, golden South Indian staple re-engineered from ragi, foxtail, kodo, and yellow pea isolate. Naturally fermented flavor with zero artificial binders."
              />
              <FlagshipCard
                image="/images/pan8-pancake.jpg"
                title="Choco-Chip Vanilla Pancake Mix"
                category="Pancake Mix · 250g"
                protein="15g Protein / 100g"
                highlights={["Sorghum & Foxtail Base", "Zero Maida", "Refined-Sugar-Free", "Light & Fluffy"]}
                desc="Fluffy golden breakfast pancakes packed with dietary fiber, naturally sweetened with dried dates, real vanilla extract, and dark cocoa nibs."
              />
              <FlagshipCard
                image="/images/pan8-bar.jpg"
                title="Coffee Almond Plant Protein Bar"
                category="Plant Protein Bar · 50g"
                protein="20g Protein / 100g"
                highlights={["South Indian Filter Coffee", "Roasted Almonds", "Cold-Pressed", "Zero Preservatives"]}
                desc="Sustained morning fuel built with California almonds, pea protein crisps, and whole South Indian filter coffee extract. No added refined sugars."
              />
            </div>
          </div>
        </section>

        {/* The Complete 13 SKU Shelf */}
        <Products />

        {/* The Brand Philosophy */}
        <section className="border-t border-line bg-bone-deep/40 py-20 sm:py-28">
          <div className="mx-auto grid w-full max-w-[1360px] gap-10 px-5 sm:px-8 md:grid-cols-2 md:gap-16 md:px-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-mute">
                The Brand Promise
              </span>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-normal leading-[1.15] text-ink">
                Familiar Indian formats. Clean nutritional science.
              </h2>
            </div>
            <div className="space-y-4 text-base leading-[1.7] text-ink-soft">
              <p>
                Every PAN8 product starts with an honest question: <em>what does an Indian family already enjoy eating?</em> Rather than asking people to adopt unfamiliar Western protein powders or artificial bars, we reformulate the foods already rooted in our morning culture.
              </p>
              <p>
                By replacing polished white rice and maida fillers with heritage millets (ragi, foxtail, kodo, little millet) and blending them with clean plant proteins, we turn everyday breakfasts into nutrient-dense powerhouses with zero lifestyle friction.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function FlagshipCard({
  image,
  title,
  category,
  protein,
  highlights,
  desc,
}: {
  image: string;
  title: string;
  category: string;
  protein: string;
  highlights: string[];
  desc: string;
}) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-bone shadow-sm transition-all duration-300 hover:border-ink/40 hover:shadow-md">
      <div>
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-bone-deep">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 rounded-full bg-ink/80 backdrop-blur px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-bone">
            {category}
          </div>
          <div className="absolute bottom-3 right-3 rounded-full bg-leaf text-bone font-semibold px-3 py-1 text-xs shadow-xs">
            {protein}
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-serif text-2xl font-normal text-ink group-hover:text-leaf-deep transition-colors">
            {title}
          </h3>
          <p className="mt-2.5 text-sm leading-[1.65] text-ink-soft">
            {desc}
          </p>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-line/60 pt-4">
            {highlights.map((h) => (
              <span
                key={h}
                className="rounded-full bg-bone-deep border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink-soft"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Link
          href="/contact"
          className="flex w-full items-center justify-between rounded-full border border-line bg-bone-deep/60 px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:border-ink hover:bg-ink hover:text-bone"
        >
          <span>Request Sample / Wholesale</span>
          <span>→</span>
        </Link>
      </div>
    </article>
  );
}
