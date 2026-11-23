import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProductCatalogue from "@/components/ProductCatalogue";
import PageHeader from "@/components/ui/PageHeader";
import ButtonLink from "@/components/ui/ButtonLink";
import Headline from "@/components/ui/Headline";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "PAN8 Range — 13 millet-first products",
  description:
    "The full PAN8 range: three pancake mixes, five dosa mixes, two upma mixes and three plant protein bars. Millet-first, 15–24g plant protein, no preservatives.",
  alternates: { canonical: `${SITE.url}/products` },
  openGraph: {
    title: "PAN8 Range · 13 millet-first products",
    description: "Pancake, dosa and upma mixes and protein bars, built on heritage millets.",
    url: `${SITE.url}/products`,
    type: "website",
  },
  keywords: [
    "millet pancake mix",
    "ragi dosa mix",
    "moringa dosa",
    "millet upma",
    "plant protein bar India",
    "gluten free breakfast",
  ],
};

export default function ProductsPage() {
  return (
    <>
      <Nav />
      <main id="main" className="overflow-x-clip">
        <PageHeader
          crumbs={[{ label: "PAN8", href: "/brands/pan8" }, { label: "Range" }]}
          kicker="The PAN8 range"
          title="Thirteen products."
          accent="One pan."
          lede="Every pack is millet-first, carries 15 to 24 grams of plant protein per 100 grams and has no preservatives. Prices are MRP."
        />

        <section className="wrap pb-24 md:pb-36">
          <ProductCatalogue />
        </section>

        <section className="border-t border-line">
          <div className="wrap grid gap-10 py-20 md:grid-cols-12 md:py-28">
            <div className="md:col-span-7">
              <Headline size="md" accent="Cartons, COA and pricing on request.">
                Stocking PAN8?
              </Headline>
            </div>
            <div className="flex flex-wrap items-end gap-3 md:col-span-5 md:justify-end">
              <ButtonLink href={`mailto:${SITE.brandEmail}`}>Write to sales</ButtonLink>
              <ButtonLink href="https://www.pan8.in" external variant="secondary">
                Buy on pan8.in
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
