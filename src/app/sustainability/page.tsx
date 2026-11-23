import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Headline from "@/components/ui/Headline";
import Reveal from "@/components/ui/Reveal";
import ScrubText from "@/components/ui/ScrubText";
import SectionIntro from "@/components/ui/SectionIntro";
import WorkWithUs from "@/components/ui/WorkWithUs";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Millets use around 70% less water than rice and 40% less than wheat. How Innaya and PAN8 shrink a household's water footprint while improving its nutrition.",
  alternates: { canonical: `${SITE.url}/sustainability` },
};

interface Figure {
  value: string;
  label: string;
}

const FIGURES: Figure[] = [
  { value: "−70%", label: "Water used by millet compared with paddy rice" },
  { value: "−40%", label: "Water used by millet compared with wheat" },
  { value: "100%", label: "Plant-based across the PAN8 range" },
  { value: "Low GI", label: "Slower glucose release than refined staples" },
];

interface Commitment {
  title: string;
  body: string;
}

const COMMITMENTS: Commitment[] = [
  {
    title: "Rain-fed crops first",
    body: "Millets and pulses grow on rain and poor soils where paddy cannot. Building demand for them gives farmers a reason to plant crops the climate can carry.",
  },
  {
    title: "Less lost between field and shelf",
    body: "Grading at the farmgate, micro pack-houses near harvest and cold-chain alerts all aim at the same number: the share of food that never reaches anyone.",
  },
  {
    title: "Fair, recorded pay",
    body: "Weighments are logged with photos and paid digitally within 48 hours. A farmer who is paid fairly and on time can keep farming the land well.",
  },
  {
    title: "Packaging that can be recycled",
    body: "PAN8 pouches are recyclable and tamper-evident, and we are working towards mono-material film across the range.",
  },
];

export default function SustainabilityPage() {
  return (
    <>
      <Nav />
      <main id="main" className="overflow-x-clip">
        <PageHeader
          crumbs={[{ label: "Company", href: "/about" }, { label: "Sustainability" }]}
          kicker="Sustainability"
          title="Less water."
          accent="More nutrition."
          lede="Millets need around 70 per cent less water than rice and 40 per cent less than wheat. Every pack of PAN8 shifts a household towards crops India's climate can sustain."
        />

        <section className="wrap pb-24 md:pb-36">
          <dl className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {FIGURES.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.06} className="border-b border-line py-10 pr-6 lg:border-b-0">
                <dd className="num text-[clamp(2.5rem,1.8rem+2.4vw,4rem)] font-normal leading-none tracking-[-0.045em] text-forest">
                  {f.value}
                </dd>
                <dt className="mt-4 max-w-[26ch] text-[14px] leading-snug text-ink-soft">{f.label}</dt>
              </Reveal>
            ))}
          </dl>
        </section>

        <section className="bg-forest-deep text-paper">
          <div className="wrap grid gap-14 py-24 md:grid-cols-12 md:py-36">
            <div className="md:col-span-6">
              <ScrubText
                text="The most sustainable crop is one a farmer can sell. We make millets sellable."
                emphasis={["sellable"]}
                accentClassName="serif-i text-sand-soft"
                className="text-[clamp(1.9rem,1.2rem+2.6vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.04em] text-paper"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] md:col-span-5 md:col-start-8">
              <Image
                src="/innaya-sourcing.jpg"
                alt="Finger millet and foxtail millet in stoneware bowls"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="wrap py-24 md:py-36">
          <SectionIntro
            kicker="What we commit to"
            title="Four things we measure."
            accent="And report on as we grow."
          />
          <ul className="mt-14 grid gap-x-10 md:mt-20 md:grid-cols-2">
            {COMMITMENTS.map((c, i) => (
              <Reveal as="li" key={c.title} delay={(i % 2) * 0.06} className="border-t border-line pb-12 pt-7">
                <p className="text-[13px] text-sand">/{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-5 text-[22px] font-normal tracking-[-0.025em] text-ink">{c.title}</h3>
                <p className="mt-3 max-w-[50ch] text-[15.5px] leading-[1.7] text-ink-soft">{c.body}</p>
              </Reveal>
            ))}
          </ul>
          <div className="mt-10 max-w-[60ch]">
            <Headline as="h3" size="md" accent="Sourced from smallholders across South India.">
              Made in FSSAI-licensed facilities.
            </Headline>
          </div>
        </section>

        <WorkWithUs />
      </main>
      <Footer />
    </>
  );
}
