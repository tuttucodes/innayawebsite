import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Founders from "@/components/Founders";
import PageHeader from "@/components/ui/PageHeader";
import Headline from "@/components/ui/Headline";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import WorkWithUs from "@/components/ui/WorkWithUs";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "About Innaya",
  description:
    "Innaya Nutri Foods Private Limited is a Kerala food company that buys directly from farmer collectives, makes millet-first food under PAN8, and builds supply chain software.",
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: {
    title: "About Innaya Nutri Foods",
    description: "A Kerala food company building India's assured buyer for millets and pulses.",
    url: `${SITE.url}/about`,
    type: "website",
  },
};

interface Belief {
  title: string;
  body: string;
}

const BELIEFS: Belief[] = [
  {
    title: "Farmers need a buyer before they need a warehouse.",
    body: "Storage delays a bad price. A committed buyer with processing and a brand removes it. That is the company we are building.",
  },
  {
    title: "Healthy food has to taste like home.",
    body: "Indians will not swap dosa for a shake. So we put better grain into the food people already make, and let habit do the rest.",
  },
  {
    title: "Software should disappear into the work.",
    body: "A driver gets a phone call in Malayalam. A grader takes a photo. The record is created without anyone learning a new app.",
  },
];

interface Discipline {
  name: string;
  scope: string;
}

const DISCIPLINES: Discipline[] = [
  { name: "Sales & distribution", scope: "Modern trade, quick-commerce, retail seeding" },
  { name: "Food technology", scope: "Formulation R&D, shelf stability, clean label" },
  { name: "Brand & packaging", scope: "Identity, sustainable packaging, D2C" },
  { name: "Supply & logistics", scope: "FPO aggregation, contract units, cold chain" },
];

const REGISTRY = [
  { label: "Legal name", value: SITE.legal },
  { label: "Incorporated", value: SITE.incorporated },
  { label: "CIN", value: SITE.cin },
  { label: "Registered office", value: "Kakkanad, Ernakulam, Kerala 682037" },
  { label: "Recognition", value: "DPIIT-recognised startup" },
  { label: "Food licence", value: "FSSAI central licence, valid to 2034" },
];

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main id="main" className="overflow-x-clip">
        <PageHeader
          crumbs={[{ label: "Company" }]}
          kicker="About Innaya"
          title="A food company from Kerala."
          accent="Working from the farm up."
          lede="Innaya Nutri Foods was founded in Kakkanad in 2024 to fix two things at once: harvests that spoil at the farmgate, and kitchens that lack clean, high-protein everyday food."
        />

        {/* Story */}
        <section className="wrap pb-24 md:pb-36">
          <div className="grid gap-12 border-t border-line pt-14 md:grid-cols-12 md:pt-20">
            <Reveal className="md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[6px]">
                <Image
                  src="/images/pan8-dosa.jpg"
                  alt="A millet dosa served on a banana leaf with chutneys"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div className="prose-ledger md:col-span-6 md:col-start-7 md:self-center">
              <p className="!mt-0 text-[clamp(1.35rem,1.1rem+0.7vw,1.75rem)] leading-[1.4] tracking-[-0.02em] text-ink">
                We started with a simple observation: the same millet a farmer in Dharmapuri
                struggles to sell is the grain a family in Kochi is told it should eat more of.
              </p>
              <p>
                Between them sit middlemen, missing pack-houses and a market with no brand willing
                to commit to the crop. Innaya closes that gap from both ends. Upstream, we buy from
                farmer producer organisations with grades and prices agreed in advance. Downstream,
                we sell that grain as PAN8 pancake, dosa and upma mixes.
              </p>
              <p>
                The software we build, Innaya Intelligence, is what lets a small team run that chain
                honestly across two states: calls in local languages, grading by camera, and a
                record of every lot.
              </p>
            </div>
          </div>
        </section>

        {/* Beliefs */}
        <section className="bg-forest-deep text-paper">
          <div className="wrap py-24 md:py-36">
            <SectionIntro tone="dark" kicker="What we believe" title="Three convictions." accent="Everything else follows." />
            <ol className="mt-16 md:mt-24">
              {BELIEFS.map((b, i) => (
                <Reveal as="li" key={b.title} delay={i * 0.06} className="grid gap-5 border-t border-paper/20 py-10 md:grid-cols-12 md:gap-8">
                  <p className="num text-[13px] text-sand-soft md:col-span-1">/{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="text-[clamp(1.4rem,1.1rem+0.9vw,2rem)] font-normal leading-[1.2] tracking-[-0.03em] md:col-span-6">
                    {b.title}
                  </h3>
                  <p className="max-w-[48ch] text-[15.5px] leading-[1.7] text-paper/65 md:col-span-4 md:col-start-9">{b.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <Founders />

        {/* Team + registry */}
        <section className="bg-paper-deep">
          <div className="wrap grid gap-16 py-24 md:grid-cols-12 md:py-32">
            <div className="md:col-span-5">
              <Headline size="md" accent="Across food, brand and supply.">
                A small, cross-functional team.
              </Headline>
              <ul className="mt-10 border-t border-line-strong">
                {DISCIPLINES.map((d) => (
                  <li key={d.name} className="border-b border-line py-5">
                    <p className="text-[17px] tracking-[-0.015em] text-ink">{d.name}</p>
                    <p className="mt-1 text-[14px] text-mute">{d.scope}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <Headline size="md" accent="For the record.">
                Company details.
              </Headline>
              <dl className="mt-10 border-t border-line-strong">
                {REGISTRY.map((r) => (
                  <div key={r.label} className="grid grid-cols-[9rem_1fr] gap-4 border-b border-line py-5 sm:grid-cols-[11rem_1fr]">
                    <dt className="text-[14px] text-mute">{r.label}</dt>
                    <dd className="text-[15px] text-ink">{r.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <WorkWithUs />
      </main>
      <Footer />
    </>
  );
}
