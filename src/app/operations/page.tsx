import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Accordion, { type AccordionItem } from "@/components/ui/Accordion";
import ButtonLink from "@/components/ui/ButtonLink";
import Headline from "@/components/ui/Headline";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import WorkWithUs from "@/components/ui/WorkWithUs";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Sourcing & Processing",
  description:
    "Innaya's farmgate sourcing corridors across Tamil Nadu and Kerala, graded intake, certified contract processing and cold-chain oversight.",
  alternates: { canonical: `${SITE.url}/operations` },
  openGraph: {
    title: "Sourcing & Processing · Innaya Nutri Foods",
    description: "The physical layer: from farmer collectives to certified processing across South India.",
    url: `${SITE.url}/operations`,
    type: "website",
  },
};

interface Corridor {
  region: string;
  towns: string;
  crops: string;
  role: string;
}

const CORRIDORS: Corridor[] = [
  {
    region: "Tamil Nadu millet basin",
    towns: "Dharmapuri · Salem · Krishnagiri",
    crops: "Finger millet, little millet, foxtail, kodo",
    role: "Mandi and FPO aggregation points with moisture and quality screening at collection.",
  },
  {
    region: "Kerala agro corridor",
    towns: "Palakkad · Wayanad · Thrissur",
    crops: "Heritage pulses, moringa, coconut, spices",
    role: "Smallholder partnerships with traceable provenance and fair net realisation.",
  },
  {
    region: "Processing & value addition",
    towns: "Kakkanad · Ernakulam · Coimbatore",
    crops: "Dehulling, micronising, blending, packing",
    role: "Certified contract facilities meeting national and export compliance standards.",
  },
];

const STEPS: AccordionItem[] = [
  {
    title: "Farmgate and mandi aggregation",
    meta: "Sourcing corridors",
    body: "Direct procurement with FPOs and growers across Tamil Nadu and Kerala. Volumes and grade bands are agreed before harvest, connecting smallholders with a buyer they can count on.",
  },
  {
    title: "Standardised intake checks",
    meta: "Quality verification",
    body: "Physical sampling and photo-backed inspection at the point of collection. Grades are settled with evidence at the farmgate, not argued over weeks later at a factory gate.",
  },
  {
    title: "Audited contract processing",
    meta: "Certified facilities",
    body: "Manufacturing in FSSAI-licensed plants with batch lotting, nutritional consistency checks and documentation for national distribution and export.",
  },
  {
    title: "Cold-chain oversight",
    meta: "Temperature telemetry",
    body: "Sensor monitoring on temperature-sensitive lanes catches refrigeration failures early, so produce is rerouted before it spoils rather than written off after.",
  },
];

export default function OperationsPage() {
  return (
    <>
      <Nav />
      <main id="main" className="overflow-x-clip">
        <PageHeader
          crumbs={[{ label: "Operations" }]}
          kicker="Sourcing & processing"
          title="Software doesn't move grain."
          accent="People and trucks do."
          lede="Innaya pairs farmgate technology with real sourcing corridors, direct lines to farmer collectives and audited processing across South India."
          image={{ src: "/innaya-sourcing.jpg", alt: "Freshly graded finger millet and foxtail millet in stoneware bowls", position: "50% 60%" }}
        />

        {/* Corridors */}
        <section className="wrap py-24 md:py-36">
          <SectionIntro
            kicker="Where we work"
            title="Three corridors."
            accent="Field to factory in a day."
            body="Direct links with FPOs and regional mandis remove unrecorded deductions, delays and pricing disputes at the point of harvest."
          />
          <ol className="mt-16 border-t border-line md:mt-24">
            {CORRIDORS.map((c, i) => (
              <Reveal
                as="li"
                key={c.region}
                delay={i * 0.06}
                className="grid gap-5 border-b border-line py-10 md:grid-cols-12 md:gap-8"
              >
                <p className="num text-[13px] text-sand md:col-span-1">/{String(i + 1).padStart(2, "0")}</p>
                <div className="md:col-span-4">
                  <h3 className="text-[26px] font-normal tracking-[-0.03em] text-ink">{c.region}</h3>
                  <p className="mt-2 text-[14px] text-mute">{c.towns}</p>
                </div>
                <div className="md:col-span-3">
                  <p className="label">Crops and work</p>
                  <p className="mt-2 text-[15.5px] leading-[1.6] text-ink">{c.crops}</p>
                </div>
                <p className="text-[15.5px] leading-[1.65] text-ink-soft md:col-span-4">{c.role}</p>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* Process */}
        <section className="bg-paper-deep">
          <div className="wrap grid gap-14 py-24 md:grid-cols-12 md:py-36">
            <div className="md:col-span-5">
              <p className="kicker mb-7 text-ink-soft">How a lot moves</p>
              <Headline accent="Accounted for at every step.">Origin to shelf.</Headline>
              <div className="relative mt-12 hidden aspect-[4/5] overflow-hidden rounded-[6px] md:block">
                <Image
                  src="/innaya-infrastructure.jpg"
                  alt="Refrigerated trucks loading at a pack-house at dusk"
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <Accordion items={STEPS} />
            </div>
          </div>
        </section>

        {/* Partner prompt */}
        <section className="wrap py-24 md:py-32">
          <div className="grid gap-10 border-t border-line pt-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <Headline size="md" accent="Or contract batch capacity?">
                Looking for verified grain?
              </Headline>
            </div>
            <div className="flex flex-wrap items-end gap-3 md:col-span-5 md:justify-end">
              <ButtonLink href="/contact?topic=Partnership">Talk to operations</ButtonLink>
              <ButtonLink href="/platforms" variant="secondary">
                See the software
              </ButtonLink>
            </div>
          </div>
        </section>

        <WorkWithUs />
      </main>
      <Footer />
    </>
  );
}
