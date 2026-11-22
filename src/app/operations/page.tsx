import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Capabilities from "@/components/Capabilities";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Supply Operations — Farmgate Corridors & Processing Infrastructure",
  description:
    "Division 03 of Innaya Nutrifoods. Agricultural sourcing corridors across Tamil Nadu and Kerala, verified intake grading, and certified commercial processing.",
  alternates: { canonical: `${SITE.url}/operations` },
  openGraph: {
    title: "Innaya Supply Operations — Farmgate to Processing",
    description:
      "Physical execution layer for agricultural supply chains and food manufacturing across South India.",
    url: `${SITE.url}/operations`,
    type: "website",
  },
};

const CORRIDORS = [
  {
    region: "Tamil Nadu Millet Basin",
    centers: "Dharmapuri · Salem · Krishnagiri",
    crops: "Finger Millet (Ragi), Little Millet, Foxtail Millet, Kodo Millet",
    role: "Direct mandi and FPO aggregation points with digital moisture and quality screening.",
  },
  {
    region: "Kerala Agro Corridor",
    centers: "Palakkad · Wayanad · Thrissur",
    crops: "Heritage Pulses, Moringa, Coconut, Natural Spices",
    role: "Smallholder grower partnerships ensuring traceable provenance and fair net realization.",
  },
  {
    region: "Processing & Value Addition",
    centers: "Kakkanad · Ernakulam · Coimbatore",
    crops: "Dehulling, Micronization, Blending, Formulations",
    role: "Certified contract processing facilities meeting nationwide and export compliance standards.",
  },
];

export default function OperationsPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip">
        <PageHero
          eyebrow="Division 03 · Physical Operations"
          title="Origin to Processing: The Physical Execution Layer"
          blurb={
            <>
              Software alone does not move agricultural harvest. Innaya pairs farmgate
              telemetry with physical sourcing corridors, FPO direct lines, and audited
              commercial processing facilities across South India.
            </>
          }
        />

        {/* Visual Header Image */}
        <div className="mx-auto w-full max-w-[1360px] px-5 pt-8 md:px-12">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl border border-line bg-bone-deep">
            <Image
              src="/innaya-sourcing.jpg"
              alt="Innaya Agricultural Grains & Farmgate Sourcing"
              fill
              priority
              sizes="(max-width: 1360px) 100vw, 1360px"
              className="object-cover"
            />
          </div>
        </div>

        {/* 4 Architectural Operations Pillars */}
        <Capabilities />

        {/* Regional Agricultural Sourcing Corridors */}
        <section className="border-t border-line bg-bone-deep/30 py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 md:px-12">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.24em] text-mute">
              <span>Sourcing Footprint</span>
              <span>South Indian Agricultural Belt</span>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-16 lg:items-end">
              <div className="lg:col-span-6">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-normal leading-[1.15] text-ink">
                  Direct Farmgate Sourcing Across South India
                </h2>
              </div>
              <div className="lg:col-span-6">
                <p className="text-[16px] leading-[1.65] text-ink-soft">
                  By establishing direct links with Farmer Producer Organisations (FPOs) and regional
                  mandis, Innaya eliminates unrecorded weight deductions, delays, and pricing
                  disputes at the point of harvest.
                </p>
              </div>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {CORRIDORS.map((c, i) => (
                <div
                  key={c.region}
                  className="rounded-2xl border border-line bg-bone p-7 sm:p-8"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-leaf-deep font-semibold">
                    0{i + 1} · {c.region}
                  </span>
                  <h3 className="mt-4 font-sans text-xl font-bold text-ink">
                    {c.centers}
                  </h3>
                  <div className="mt-4 border-t border-line/60 pt-4">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-mute">
                      Primary Crops
                    </span>
                    <p className="mt-1 text-sm font-medium text-ink">{c.crops}</p>
                  </div>
                  <p className="mt-4 text-sm leading-[1.6] text-ink-soft">{c.role}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-line bg-ink p-8 text-bone md:p-10">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber">
                  Institutional Sourcing &amp; Processing
                </span>
                <h3 className="mt-2 font-sans text-2xl font-bold tracking-tight text-bone">
                  Looking to source verified grains or contract batch capacity?
                </h3>
              </div>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3.5 text-sm font-semibold text-ink hover:bg-amber transition-colors"
              >
                Inquire with Operations →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
