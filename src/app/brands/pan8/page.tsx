import type { Metadata } from "next";
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
          eyebrow="Brand · 01"
          title={
            <>
              PAN<span className="relative">8<span className="absolute -right-3 top-2 h-3 w-3 rounded-full bg-amber md:-right-5 md:top-4 md:h-5 md:w-5" /></span>
              <span className="ml-3 align-top font-sans text-base font-normal tracking-tight text-mute">
                — A Nutri Co.
              </span>
            </>
          }
          blurb={
            <>
              <span className="text-ink">
                &ldquo;Nutrition that works with you.&rdquo;
              </span>{" "}
              13 SKUs across pancake, dosa, upma and bar formats — every one
              millet-first, plant-protein dense, and zero-preservative. Sold direct
              on{" "}
              <a
                href={SITE.social.pan8}
                className="underline decoration-line underline-offset-4 hover:decoration-ink"
                target="_blank"
                rel="noopener noreferrer"
              >
                pan8.in
              </a>
              .
            </>
          }
        />

        <section className="mx-auto w-full max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
            <Stat k="SKUs" v="13" />
            <Stat k="Plant Protein" v="15–24g / 100g" />
            <Stat k="Format" v="Everyday Indian" />
            <Stat k="Channels" v="D2C · Modern Trade · QC" />
          </div>
        </section>

        <Products />

        <section className="border-y border-line bg-bone-deep/40">
          <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-5 py-20 md:grid-cols-2 md:gap-16 md:px-10 md:py-28">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                The brand promise
              </span>
              <h2 className="mt-4 font-serif text-[clamp(2rem,1rem+3vw,3.6rem)] leading-[0.98] tracking-[-0.02em]">
                Indian formats.<br />
                <em className="text-leaf-deep">Engineered nutrition.</em>
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
