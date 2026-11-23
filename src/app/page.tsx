import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";
import HomeHero from "@/components/home/HomeHero";
import ProductRail from "@/components/ProductRail";
import Founders from "@/components/Founders";
import Accordion, { type AccordionItem } from "@/components/ui/Accordion";
import Arrow from "@/components/ui/Arrow";
import ButtonLink from "@/components/ui/ButtonLink";
import Headline from "@/components/ui/Headline";
import Reveal from "@/components/ui/Reveal";
import ScrubText from "@/components/ui/ScrubText";
import SectionIntro from "@/components/ui/SectionIntro";
import WorkWithUs from "@/components/ui/WorkWithUs";
import { FARMER_SHARE, TRACTION } from "@/data/site";

interface Division {
  num: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  image: string;
  alt: string;
}

const DIVISIONS: Division[] = [
  {
    num: "01",
    title: "Sourcing & processing",
    body: "Direct lines to farmer producer organisations across the Tamil Nadu millet basin and Kerala, with graded intake and certified contract processing.",
    href: "/operations",
    cta: "Our corridors",
    image: "/innaya-sourcing.jpg",
    alt: "Bowls of graded millet",
  },
  {
    num: "02",
    title: "PAN8, our food brand",
    body: "Pancake, dosa and upma mixes and protein bars built on heritage millets. 15 to 24 grams of plant protein, nothing artificial.",
    href: "/brands/pan8",
    cta: "Meet PAN8",
    image: "/images/pan8-dosa.jpg",
    alt: "Millet dosa with chutneys on a banana leaf",
  },
  {
    num: "03",
    title: "Innaya Intelligence",
    body: "Voice agents that call drivers in Tamil and Malayalam, intake grading by camera, cold-chain telemetry and batch records.",
    href: "/platforms",
    cta: "The software",
    image: "/innaya-infrastructure.jpg",
    alt: "Refrigerated trucks at a modern pack-house at dusk",
  },
];

const CHAIN: AccordionItem[] = [
  {
    title: "Commit to the crop before it is sown",
    meta: "Farmer producer organisations, Tamil Nadu and Kerala",
    body: "We agree volumes and grade bands with FPOs ahead of the season, so a farmer plants knowing there is a buyer at harvest, not hoping for one.",
  },
  {
    title: "Grade and weigh it honestly at the farmgate",
    meta: "Innaya Vision and Innaya Trace",
    body: "Moisture and defect checks happen at collection, with photos and weighments recorded against the lot. No silent deductions at the factory gate weeks later.",
  },
  {
    title: "Process it in certified units",
    meta: "Dehulling, milling, blending, packing",
    body: "Contract facilities in Kerala and Tamil Nadu turn raw grain into shelf-stable mixes. Formulations flex to absorb surplus grades without changing what is on the label.",
  },
  {
    title: "Sell it to Indian kitchens under PAN8",
    meta: "D2C, modern trade, quick-commerce",
    body: "A brand people buy every week is what makes the promise to farmers bankable. Every pack of PAN8 is demand we can plan the next season around.",
  },
];

const PRINCIPLES = ["Assured offtake", "Recorded weighments", "Food people already eat"];

export default function Home() {
  return (
    <>
      <Schema />
      <Nav />
      <main id="main" className="overflow-x-clip">
        <HomeHero />

        {/* The problem, in one figure */}
        <section className="wrap py-24 md:py-36">
          <div className="grid gap-14 md:grid-cols-12">
            <Reveal className="md:col-span-6">
              <Headline accent="They fail at the farmgate.">Harvests rarely fail in the field.</Headline>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5 md:col-start-8">
              <p className="num text-[clamp(2.5rem,1.6rem+3vw,4rem)] font-normal leading-none tracking-[-0.04em] text-ink">
                ₹57,000 Cr
              </p>
              <p className="mt-3 text-[14px] text-mute">of harvest lost in India every year</p>
              <p className="mt-8 text-[16px] leading-[1.7] text-ink-soft">
                India has built 403 lakh tonnes of cold storage and still dumps produce at
                ₹2 a kilo in a good season. The missing piece is not a warehouse. It is a buyer
                with the processing and the brand to take the crop, every season, at a fair price.
                That is the company we are building.
              </p>
              <ButtonLink href="/about" variant="text" className="mt-8">
                Meet Innaya
              </ButtonLink>
            </Reveal>
          </div>
          <ul className="mt-20 grid gap-4 border-t border-line pt-6 text-[14px] text-ink-soft sm:grid-cols-3 md:mt-28">
            {PRINCIPLES.map((p) => (
              <li key={p} className="flex items-center gap-2.5">
                <span aria-hidden="true" className="text-sand">
                  +
                </span>
                {p}
              </li>
            ))}
          </ul>
        </section>

        {/* What we do */}
        <section className="bg-forest-deep text-paper">
          <div className="wrap py-24 md:py-36">
            <SectionIntro
              tone="dark"
              kicker="What we do"
              title="One company."
              accent="Three ways in."
              body="Each part makes the others work. The brand creates demand, operations secures supply, and the software keeps both accountable."
            />
            <ul className="mt-16 grid gap-14 md:mt-24 md:grid-cols-3 md:gap-8">
              {DIVISIONS.map((d, i) => (
                <Reveal as="li" key={d.num} delay={i * 0.08}>
                  <Link href={d.href} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-forest-night">
                      <Image
                        src={d.image}
                        alt={d.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover opacity-90 transition-[transform,opacity] duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-100"
                      />
                    </div>
                    <p className="mt-7 text-[13px] text-sand-soft">/{d.num}</p>
                    <h3 className="mt-3 text-[24px] font-normal tracking-[-0.03em]">{d.title}</h3>
                    <p className="mt-3 max-w-[38ch] text-[15px] leading-[1.65] text-paper/65">{d.body}</p>
                    <span className="mt-7 inline-flex items-center gap-2 border-b border-paper/25 pb-1.5 text-[14px] font-medium transition-colors group-hover:border-paper">
                      {d.cta}
                      <Arrow
                        direction="up-right"
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* PAN8 */}
        <section className="py-24 md:py-36">
          <div className="wrap grid gap-12 md:grid-cols-12 md:gap-8">
            <Reveal className="md:col-span-7">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] md:aspect-[5/6]">
                <Image
                  src="/images/pan8-pancake.jpg"
                  alt="A stack of PAN8 millet pancakes with blueberries, banana and honey"
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div className="flex flex-col justify-between gap-12 md:col-span-4 md:col-start-9">
              <Reveal>
                <p className="kicker mb-7 text-ink-soft">Our brand</p>
                <Headline accent="Just pan it.">PAN8.</Headline>
                <p className="mt-8 text-[16px] leading-[1.7] text-ink-soft">
                  Indian breakfasts, rebuilt on ragi, foxtail, kodo and little millet. Thirteen
                  mixes and bars, 15 to 24 grams of plant protein per 100 grams, no maida, no
                  preservatives. Ready in the time it takes to heat a pan.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <ButtonLink href="/brands/pan8">Explore PAN8</ButtonLink>
                  <ButtonLink href="https://www.pan8.in" external variant="secondary">
                    Shop pan8.in
                  </ButtonLink>
                </div>
              </Reveal>
              <dl className="grid grid-cols-2 gap-x-6 border-t border-line">
                {TRACTION.slice(0, 2).map((t) => (
                  <div key={t.label} className="pt-6">
                    <dd className="num text-[2rem] font-normal leading-none tracking-[-0.04em] text-ink">
                      {t.value}
                    </dd>
                    <dt className="mt-3 text-[13px] leading-snug text-mute">{t.label}</dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="mt-20 md:mt-28">
            <div className="wrap mb-8 flex items-end justify-between gap-6">
              <p className="text-[15px] text-ink-soft">The range, so far</p>
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 text-[14px] font-medium text-ink"
              >
                All 13 products
                <Arrow className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
            <ProductRail />
          </div>
        </section>

        {/* Thesis statement */}
        <section className="bg-paper-deep">
          <div className="wrap py-24 md:py-36">
            <p className="kicker text-ink-soft">The assured buyer thesis</p>
            <ScrubText
              text="Cold storage without an assured buyer is just a waiting room for spoilage."
              emphasis={["assured", "buyer"]}
              accentClassName="serif-i text-sand"
              className="mt-10 max-w-[22ch] text-[clamp(2rem,1.2rem+3.4vw,4.25rem)] font-normal leading-[1.08] tracking-[-0.04em] text-ink"
            />
            <div className="mt-20 grid gap-12 md:mt-28 md:grid-cols-12">
              <div className="md:col-span-4">
                <p className="text-[16px] leading-[1.7] text-ink-soft">
                  Where a buyer with processing and a brand exists, farmers keep far more of what
                  consumers pay, and prices stop swinging wildly. Milk has Amul. Millets and pulses
                  have no one yet.
                </p>
                <ButtonLink href="/thesis" variant="text" className="mt-8">
                  Read the full thesis
                </ButtonLink>
              </div>
              <figure className="md:col-span-7 md:col-start-6">
                <figcaption className="flex items-baseline justify-between gap-4 border-b border-line pb-4 text-[13px] text-mute">
                  <span>Farmer&apos;s share of every ₹100 a consumer pays</span>
                  <span className="hidden sm:inline">MoSPI, RBI, 2015–2025</span>
                </figcaption>
                <ul>
                  {FARMER_SHARE.map((row) => (
                    <li key={row.crop} className="grid grid-cols-[6.5rem_1fr_3rem] items-center gap-4 border-b border-line py-5 sm:grid-cols-[9rem_1fr_3.5rem]">
                      <span>
                        <span className="block text-[16px] text-ink">{row.crop}</span>
                        <span className="block text-[12px] text-mute">{row.model}</span>
                      </span>
                      <span className="block h-2 overflow-hidden rounded-full bg-line">
                        <span
                          className={row.share >= 60 ? "block h-full rounded-full bg-forest" : "block h-full rounded-full bg-rust/80"}
                          style={{ width: `${row.share}%` }}
                        />
                      </span>
                      <span className="num text-right text-[18px] text-ink">₹{row.share}</span>
                    </li>
                  ))}
                </ul>
              </figure>
            </div>
          </div>
        </section>

        {/* How the chain works */}
        <section className="wrap py-24 md:py-36">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="kicker mb-7 text-ink-soft">How it works</p>
              <Headline accent="Four promises kept.">From field to shelf.</Headline>
              <p className="mt-8 max-w-[40ch] text-[16px] leading-[1.7] text-ink-soft">
                The model only works if every step holds. This is the chain we run, end to end.
              </p>
            </div>
            <div className="md:col-span-7">
              <Accordion items={CHAIN} />
            </div>
          </div>
        </section>

        <Founders />
        <WorkWithUs />
      </main>
      <Footer />
    </>
  );
}
