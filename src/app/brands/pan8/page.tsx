import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProductRail from "@/components/ProductRail";
import PageHeader from "@/components/ui/PageHeader";
import ButtonLink from "@/components/ui/ButtonLink";
import Headline from "@/components/ui/Headline";
import Reveal from "@/components/ui/Reveal";
import SectionIntro from "@/components/ui/SectionIntro";
import { SITE, TRACTION } from "@/data/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "PAN8 — A Nutri Co.",
  description:
    "PAN8 is the consumer nutrition brand of Innaya Nutri Foods: 13 millet-first pancake, dosa and upma mixes and protein bars with 15–24g plant protein per 100g.",
  alternates: { canonical: `${SITE.url}/brands/pan8` },
  openGraph: {
    title: "PAN8 · Innaya Nutri Foods",
    description: "Indian breakfasts rebuilt on heritage millets. Just pan it.",
    url: `${SITE.url}/brands/pan8`,
    type: "website",
  },
};

interface Hero {
  name: string;
  pack: string;
  protein: string;
  body: string;
  notes: string[];
  image: string;
  alt: string;
}

const HEROES: Hero[] = [
  {
    name: "Multi-Millet Dosa",
    pack: "Dosa mix · 250 g",
    protein: "21 g protein / 100 g",
    body: "Ragi, foxtail and kodo with yellow pea. Crisp, golden and naturally fermented in flavour, with no rice filler and no binders.",
    notes: ["Five heritage millets", "Low GI", "Makes about 8 dosas"],
    image: "/images/pan8-dosa.jpg",
    alt: "Millet dosa on a banana leaf with coconut and tomato chutney",
  },
  {
    name: "Choco-Chip Vanilla Pancake",
    pack: "Pancake mix · 250 g",
    protein: "15 g protein / 100 g",
    body: "Sorghum and foxtail millet, sweetened with dates, real vanilla and cocoa. The weekend stack, without the maida.",
    notes: ["Zero maida", "No refined sugar", "Makes 8 to 10"],
    image: "/images/pan8-pancake.jpg",
    alt: "Stack of millet pancakes with blueberries and honey",
  },
  {
    name: "Millet Upma",
    pack: "Upma mix · 250 g",
    protein: "24 g protein / 100 g",
    body: "The comfort breakfast, made on roasted heritage millet with vegetables and cashew. Ready in ten minutes, filling till lunch.",
    notes: ["Low GI", "Serves 2 to 3", "8-month shelf life"],
    image: "/images/pan8-upma.jpg",
    alt: "Bowl of millet upma with cashews and curry leaves",
  },
];

export default function Pan8BrandPage() {
  return (
    <>
      <Nav />
      <main id="main" className="overflow-x-clip">
        <PageHeader
          crumbs={[{ label: "PAN8" }]}
          kicker="PAN8 — A Nutri Co."
          title="Breakfasts India already loves."
          accent="Rebuilt on millets."
          lede="Thirteen pancake, dosa and upma mixes and bars, made from heritage millets and pulses. More protein, no maida, nothing artificial, and still ready in minutes."
          actions={
            <>
              <ButtonLink href="https://www.pan8.in" external>
                Shop pan8.in
              </ButtonLink>
              <ButtonLink href="/products" variant="secondary">
                See the range
              </ButtonLink>
            </>
          }
          facts={[
            { value: "13", label: "Products across four formats" },
            { value: "15–24 g", label: "Plant protein per 100 g" },
            { value: "0", label: "Preservatives or maida" },
            { value: TRACTION[1].value, label: "Repeat-purchase intent in trials" },
          ]}
          image={{ src: "/pan8-hero.jpg", alt: "Breakfast table with PAN8 pancakes, berries, honey and tea", position: "50% 65%" }}
        />

        {/* Promise */}
        <section className="wrap py-24 md:py-36">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="kicker mb-7 text-ink-soft">The idea</p>
              <Headline accent="Not a new habit.">A better version of the old one.</Headline>
            </div>
            <div className="prose-ledger md:col-span-6 md:col-start-7">
              <p>
                Every PAN8 product starts with one question: <strong>what does an Indian family
                already eat in the morning?</strong> Instead of asking people to switch to protein
                powders and imported bars, we rework the dosas, pancakes and upma that are already
                on the table.
              </p>
              <p>
                Polished rice and maida come out. Ragi, foxtail, kodo and little millet go in,
                blended with clean plant protein. The taste and the routine stay the same. The
                nutrition does not.
              </p>
              <p>
                That steady, everyday demand is also what lets Innaya promise farmers a buyer.
                Every pouch sold is grain we can plan to buy next season.
              </p>
            </div>
          </div>
        </section>

        {/* Hero products, zig-zag */}
        <section className="bg-paper-deep">
          <div className="wrap py-24 md:py-36">
            <SectionIntro
              kicker="Where to start"
              title="Three favourites."
              accent="Made for the morning rush."
            />
            <div className="mt-16 space-y-20 md:mt-24 md:space-y-32">
              {HEROES.map((h, i) => {
                const flip = i % 2 === 1;
                return (
                  <article key={h.name} className="grid gap-10 md:grid-cols-12 md:items-center md:gap-8">
                    <Reveal className={cn("md:col-span-7", flip && "md:order-2 md:col-start-6")}>
                      <div className="relative aspect-[4/3] overflow-hidden rounded-[6px]">
                        <Image src={h.image} alt={h.alt} fill sizes="(max-width: 768px) 100vw, 58vw" className="object-cover" />
                      </div>
                    </Reveal>
                    <Reveal
                      delay={0.1}
                      className={cn("md:col-span-4", flip ? "md:order-1 md:col-start-1" : "md:col-start-9")}
                    >
                      <p className="text-[13px] text-mute">{h.pack}</p>
                      <h3 className="mt-3 text-[clamp(1.75rem,1.3rem+1.4vw,2.5rem)] font-normal leading-[1.05] tracking-[-0.035em] text-ink">
                        {h.name}
                      </h3>
                      <p className="serif-i mt-2 text-[22px] text-sand">{h.protein}</p>
                      <p className="mt-6 text-[16px] leading-[1.7] text-ink-soft">{h.body}</p>
                      <ul className="mt-6 space-y-2 border-t border-line pt-5 text-[14px] text-ink-soft">
                        {h.notes.map((n) => (
                          <li key={n} className="flex gap-2.5">
                            <span aria-hidden="true" className="text-sand">
                              +
                            </span>
                            {n}
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Range rail */}
        <section className="py-24 md:py-32">
          <div className="wrap">
            <SectionIntro
              kicker="The range"
              title="Thirteen and counting."
              aside={<ButtonLink href="/products" variant="text">Full range with prices</ButtonLink>}
            />
          </div>
          <ProductRail className="mt-14" />
        </section>

        {/* Retail */}
        <section className="bg-forest-deep text-paper">
          <div className="wrap grid gap-14 py-24 md:grid-cols-12 md:py-36">
            <Reveal className="md:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[6px]">
                <Image
                  src="/images/products/retail-supermarket-shelf.jpg"
                  alt="Shopper picking up a PAN8 pouch in a supermarket aisle"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
              <p className="kicker mb-7 text-paper/70">For retailers</p>
              <Headline tone="dark" accent="Built to move off it.">Designed for the shelf.</Headline>
              <p className="mt-8 max-w-[50ch] text-[16px] leading-[1.7] text-paper/70">
                Matte stand-up pouches with clear front-of-pack protein callouts, recyclable
                zippers and 6 to 10 months of shelf life. We back partners with tasting kits, shelf
                talkers, local recipe campaigns and dependable replenishment.
              </p>
              <dl className="mt-10 grid gap-6 border-t border-paper/20 pt-6 sm:grid-cols-2">
                <div>
                  <dt className="text-[13px] text-paper/50">Wholesale and distribution</dt>
                  <dd className="mt-1.5">
                    <a href={`mailto:${SITE.brandEmail}`} className="text-[17px] underline decoration-paper/25 underline-offset-4 hover:decoration-paper">
                      {SITE.brandEmail}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[13px] text-paper/50">Sales desk</dt>
                  <dd className="mt-1.5">
                    <a href="tel:+919074417293" className="num text-[17px] underline decoration-paper/25 underline-offset-4 hover:decoration-paper">
                      +91 90744 17293
                    </a>
                  </dd>
                </div>
              </dl>
              <div className="mt-10">
                <ButtonLink href="/contact?topic=Distribution / Retail" variant="inverse">
                  Request a retail kit
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
