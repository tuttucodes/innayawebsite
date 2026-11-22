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
    "PAN8 — A Nutri Co. is the consumer brand of Innaya Nutri Foods. 13 millet-first SKUs across pancake, dosa, upma and bar formats. Plant-protein dense, gluten-free, vegan.",
  alternates: { canonical: `${SITE.url}/brands/pan8` },
  openGraph: {
    title: "PAN8 — A Nutri Co.",
    description:
      "Nutrition that works with you. Millet-first plant-protein nutrition for modern Indian households.",
    url: `${SITE.url}/brands/pan8`,
    type: "website",
  },
};

export default function Pan8BrandPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        <PageHero
          eyebrow="Consumer Brands · Division 02"
          title={
            <>
              PAN8
              <span className="ml-3 align-top font-serif italic text-2xl md:text-3xl font-normal text-amber">
                — A Nutri Co.
              </span>
            </>
          }
          blurb={
            <>
              <span className="font-semibold text-ink">
                &ldquo;Just pan it!&rdquo;
              </span>{" "}
              — PAN8 is Innaya&apos;s consumer brand re-engineering traditional Indian morning
              and snack formats with heritage millets, pulses, and modern nutrition science.
              All 13 products below are developed, formulated, and sold under the PAN8 brand.
            </>
          }
        />

        {/* Hero Visual */}
        <div className="mx-auto w-full max-w-[1400px] px-5 pt-8 md:px-10">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl border border-line bg-bone-deep">
            <Image
              src="/pan8-hero.jpg"
              alt="PAN8 Clean Nutrition Breakfast"
              fill
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover"
            />
          </div>
        </div>

        <section className="mx-auto w-full max-w-[1400px] px-5 py-12 md:px-10 md:py-16">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
            <Stat k="Product Range" v="13 Active SKUs" />
            <Stat k="Plant Protein" v="15–24g / 100g" />
            <Stat k="Ingredients" v="0 Preservatives" />
            <Stat k="Channels" v="D2C · Retail · MT" />
          </div>
        </section>

        {/* 3 Flagship Commercial SKUs Showcase */}
        <section className="mx-auto w-full max-w-[1400px] px-5 pb-16 md:px-10">
          <div className="border-t border-line/60 pt-10">
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
              <span>Flagship Formulations</span>
              <span>Commercial Shelf Anchors</span>
            </div>
            <h3 className="mt-3 font-sans text-2xl sm:text-3xl font-bold tracking-tight text-ink">
              Three Hero Formulations.{" "}
              <span className="font-serif italic font-normal text-leaf-deep">
                Engineered for daily Indian routines.
              </span>
            </h3>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <FlagshipCard
                title="Multi-Millet Protein Dosa Mix"
                category="Dosa Mix · 250g"
                protein="18g Protein / 100g"
                highlights={["5 Heritage Millets", "Zero Rice Filler", "Low Glycemic Index", "Zero Gluten"]}
                desc="A crisp, golden South Indian staple re-engineered from ragi, foxtail, kodo, and yellow pea isolate. Zero artificial binders."
              />
              <FlagshipCard
                title="Choco-Chip Vanilla Pancake Mix"
                category="Pancake Mix · 250g"
                protein="15g Protein / 100g"
                highlights={["Sorghum & Foxtail Base", "Zero Maida", "Refined-Sugar-Free", "Naturally Sweetened"]}
                desc="Light, fluffy breakfast pancakes packed with dietary fiber and naturally sweetened with dried dates and cocoa nibs."
              />
              <FlagshipCard
                title="Coffee Almond Plant Protein Bar"
                category="Protein Bar · 50g"
                protein="20g Protein / 100g"
                highlights={["Clean Arabica Caffeine", "Roasted Almonds", "Zero Preservatives", "Cold-Pressed"]}
                desc="Clean sustained morning fuel built with roasted California almonds, plant protein crisps, and whole South Indian filter coffee extract."
              />
            </div>
          </div>
        </section>

        <Products />

        <section className="border-y border-line bg-bone-deep/40">
          <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-5 py-20 md:grid-cols-2 md:gap-16 md:px-10 md:py-28">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                The brand promise
              </span>
              <h2 className="mt-4 font-sans text-[clamp(2rem,1rem+3vw,3.6rem)] font-bold leading-[0.98] tracking-[-0.02em] text-ink">
                Indian formats.<br />
                <em className="font-serif italic font-normal text-leaf-deep">Engineered nutrition.</em>
              </h2>
            </div>
            <div className="space-y-4 text-[15px] leading-[1.65] text-ink-soft">
              <p>
                Every PAN8 pack starts from a question: <em>what does this household
                already eat for breakfast?</em> Then we re-formulate that exact format
                with millets, pulses, and clean ingredients to hit specific protein,
                fibre, and glycaemic targets.
              </p>
              <p>
                No behaviour change. No unfamiliar formats. Just better versions of
                the foods Indians already love — built to fit into the morning, not
                disrupt it.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-bone hover:bg-leaf-deep"
              >
                Distribution / retail enquiries →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-bone p-7">
      <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
        {k}
      </span>
      <span className="mt-3 block font-serif text-3xl tracking-tight">{v}</span>
    </div>
  );
}

function FlagshipCard({
  title,
  category,
  protein,
  highlights,
  desc,
}: {
  title: string;
  category: string;
  protein: string;
  highlights: string[];
  desc: string;
}) {
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-line bg-bone-deep/50 p-7 transition-all hover:border-ink/30 hover:bg-bone">
      <div>
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-mute">
          <span>{category}</span>
          <span className="rounded-full bg-leaf px-2.5 py-0.5 text-bone font-semibold">
            {protein}
          </span>
        </div>
        <h4 className="mt-4 font-sans text-xl font-bold tracking-tight text-ink">
          {title}
        </h4>
        <p className="mt-2 text-sm leading-[1.6] text-ink-soft">{desc}</p>
      </div>

      <div className="mt-6 border-t border-line/60 pt-4">
        <ul className="flex flex-wrap gap-1.5">
          {highlights.map((h) => (
            <li
              key={h}
              className="rounded-full border border-line bg-bone px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-ink-soft"
            >
              {h}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
