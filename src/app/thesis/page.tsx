import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeader from "@/components/ui/PageHeader";
import Headline from "@/components/ui/Headline";
import Reveal from "@/components/ui/Reveal";
import ScrubText from "@/components/ui/ScrubText";
import SectionIntro from "@/components/ui/SectionIntro";
import WorkWithUs from "@/components/ui/WorkWithUs";
import { FARMER_SHARE, SITE } from "@/data/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "The Assured Buyer Thesis",
  description:
    "Why India's ₹57,000 Cr farmgate loss is not a cold storage problem but an assured buyer problem, and how Innaya Nutri Foods is built to solve it.",
  alternates: { canonical: `${SITE.url}/thesis` },
  openGraph: {
    title: "The Assured Buyer Thesis · Innaya Nutri Foods",
    description: "Storage was never the problem. A buyer was.",
    url: `${SITE.url}/thesis`,
    type: "article",
  },
};

interface Precedent {
  name: string;
  origin: string;
  scale: string;
  how: string;
  lesson: string;
  ours?: boolean;
}

const PRECEDENTS: Precedent[] = [
  {
    name: "Amul",
    origin: "Anand, Gujarat · 1946",
    scale: "₹1,00,000 Cr+ a year",
    how: "Absorbed the seasonal flush of liquid milk into butter, cheese and milk powder.",
    lesson: "Processing plus a brand turns a perishable glut into shelf-stable value.",
  },
  {
    name: "Zespri",
    origin: "Mount Maunganui, NZ · 1999",
    scale: "NZ$5.9 bn a year",
    how: "United 2,800 kiwifruit growers under one brand with strict grading and pooled export.",
    lesson: "A shelf premium needs standard grades and one disciplined seller.",
  },
  {
    name: "Suguna Foods",
    origin: "Coimbatore, Tamil Nadu · 1990",
    scale: "~₹9,100 Cr a year",
    how: "Gave 40,000+ poultry farmers inputs, chicks and guaranteed buyback.",
    lesson: "Take the risk off the farm and supply becomes resilient.",
  },
  {
    name: "Innaya",
    origin: "Ernakulam, Kerala · 2024",
    scale: "Phase one: 13 PAN8 products",
    how: "Software at the farmgate, certified processing, and a captive consumer brand for millets and pulses.",
    lesson: "Millets first, then fruit and moringa bases, then the buyer model for many brands.",
    ours: true,
  },
];

interface Layer {
  title: string;
  subtitle: string;
  body: string;
}

const LAYERS: Layer[] = [
  {
    title: "Captive brand demand",
    subtitle: "A shelf that absorbs the harvest",
    body: "Amul did not just store milk; it built butter and powder lines that soaked up surplus. PAN8 turns climate-resilient millets and pulses into pancakes, dosas, upma and bars that sell every week, which creates steady volume farmers can plan around.",
  },
  {
    title: "Innaya Intelligence",
    subtitle: "Prices, grades and calls without guesswork",
    body: "Vernacular voice agents, mandi price discovery and camera-based intake grading remove the subjective deductions that cost farmers most. When a surge depresses spot prices, our formulation engine adjusts blends to take more Grade-B grain without changing the label.",
  },
  {
    title: "Micro pack-houses near the farm",
    subtitle: "Closing the 68,700 pack-house gap",
    body: "India has 1,300 of the 70,000 farmgate pack-houses it needs. With FPOs in Kerala and Tamil Nadu we place asset-light sorting, pre-cooling and drying units within 30 km of harvest points.",
  },
  {
    title: "Closed-loop farmer economics",
    subtitle: "From ₹33 towards ₹70 of every ₹100",
    body: "Cutting speculative intermediaries, recording every weighment in Innaya Trace and paying digitally within 48 hours raises what farmers take home, while fixing raw-material costs for our own shelf.",
  },
];

const MAX_SWING = 220;

export default function ThesisPage() {
  return (
    <>
      <Nav />
      <main id="main" className="overflow-x-clip">
        <PageHeader
          crumbs={[{ label: "Thesis" }]}
          kicker="The assured buyer thesis"
          title="Storage was never the problem."
          accent="A buyer was."
          lede="India loses ₹57,000 crore of harvest every year. Not for lack of cold rooms, but for lack of a buyer with the processing and the brand to take the crop, season after season."
          facts={[
            { value: "₹57,000 Cr", label: "Harvest lost every year" },
            { value: "403 L t", label: "Cold storage already built" },
            { value: "1,300", label: "of 70,000 pack-houses needed" },
            { value: "₹33", label: "Tomato farmer's share of ₹100" },
          ]}
        />

        {/* The paradox */}
        <section className="wrap py-24 md:py-36">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="md:sticky md:top-28">
                <p className="kicker mb-7 text-ink-soft">The paradox</p>
                <Headline size="md" accent="Still losing the harvest.">
                  More cold storage than ever.
                </Headline>
              </div>
            </div>
            <div className="prose-ledger md:col-span-7 md:col-start-6">
              <p>
                India has built 403 lakh tonnes of bulk cold storage, yet loses ₹57,000 crore of
                harvest every year. The bottleneck is not warehouse volume. Ninety-eight per cent of
                cold stores are single-commodity potato vaults. Reefer transport stands at 19,000 of
                the 62,000 vehicles needed. Farmgate pack-houses number 1,300 against a national
                need of 70,000.
              </p>
              <p>
                When a perishable crop peaks without a guaranteed buyer that can process it, farmers
                sell at ₹2 a kilo while city shoppers pay ₹60 a kilo a few weeks later. Storage only
                delays that moment. A buyer ends it.
              </p>
              <p>
                <strong>Where an assured buyer exists, the numbers change.</strong> Dairy farmers
                selling to co-operatives keep ₹70 of every ₹100 a consumer spends, and milk prices
                barely move year to year. Tomato and potato farmers, selling into open mandis, keep a
                third of that and live with price swings of over 100 per cent.
              </p>
            </div>
          </div>
        </section>

        {/* Figure */}
        <section className="bg-paper-deep">
          <div className="wrap py-24 md:py-32">
            <SectionIntro
              kicker="The evidence"
              title="A buyer steadies the price."
              accent="And pays the farmer more."
              body="Farmer share of the consumer rupee against the largest one-year price swing, 2015 to 2025."
            />
            <div className="mt-14 overflow-x-auto md:mt-20">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-line-strong text-[13px] text-mute">
                    <th scope="col" className="w-[24%] pb-4 font-normal">Crop and buyer</th>
                    <th scope="col" className="pb-4 font-normal">Farmer share of ₹100</th>
                    <th scope="col" className="pb-4 font-normal">Largest 1-year price swing</th>
                  </tr>
                </thead>
                <tbody>
                  {FARMER_SHARE.map((row) => {
                    const good = row.share >= 60;
                    return (
                      <tr key={row.crop} className="border-b border-line align-middle">
                        <th scope="row" className="py-7 pr-6 font-normal">
                          <span className="block text-[20px] tracking-[-0.02em] text-ink">{row.crop}</span>
                          <span className="block text-[13px] text-mute">{row.model}</span>
                        </th>
                        <td className="py-7 pr-10">
                          <div className="flex items-center gap-5">
                            <span className="num w-12 text-[22px] text-ink">₹{row.share}</span>
                            <span className="h-2 flex-1 overflow-hidden rounded-full bg-line">
                              <span
                                className={cn("block h-full rounded-full", good ? "bg-forest" : "bg-rust/80")}
                                style={{ width: `${row.share}%` }}
                              />
                            </span>
                          </div>
                        </td>
                        <td className="py-7">
                          <div className="flex items-center gap-5">
                            <span className="num w-14 text-[22px] text-ink">{row.volatility}%</span>
                            <span className="h-2 flex-1 overflow-hidden rounded-full bg-line">
                              <span
                                className={cn("block h-full rounded-full", good ? "bg-forest" : "bg-rust/80")}
                                style={{ width: `${Math.min((row.volatility / MAX_SWING) * 100, 100)}%` }}
                              />
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-8 max-w-[90ch] text-[13px] leading-relaxed text-mute">
              Sources: MoSPI CPI series 2015–2025; RBI Working Paper Series, October 2024; National
              Dairy Development Board; NCCD cold-chain assessments 2015 and 2025; NABCONS pack-house
              study cited in Lok Sabha Unstarred Question 1294, December 2024.
            </p>
          </div>
        </section>

        {/* Precedents */}
        <section className="wrap py-24 md:py-36">
          <SectionIntro
            kicker="It has been done before"
            title="The playbook is proven."
            accent="Technology makes it scale."
            body="Every time agriculture has moved from vulnerability to resilience, the mechanism has been an assured buyer running branded processing."
          />
          <ul className="mt-14 border-t border-line md:mt-20">
            {PRECEDENTS.map((p, i) => (
              <Reveal
                as="li"
                key={p.name}
                delay={i * 0.05}
                className={cn(
                  "grid gap-4 border-b border-line py-9 md:grid-cols-12 md:gap-8",
                  p.ours && "bg-forest-tint/50 md:-mx-6 md:px-6",
                )}
              >
                <div className="md:col-span-3">
                  <p className="text-[24px] tracking-[-0.03em] text-ink">{p.name}</p>
                  <p className="mt-1 text-[13px] text-mute">{p.origin}</p>
                  <p className="num mt-3 text-[14px] text-forest">{p.scale}</p>
                </div>
                <p className="text-[15.5px] leading-[1.65] text-ink-soft md:col-span-4 md:col-start-5">
                  {p.how}
                </p>
                <p className="text-[15.5px] leading-[1.65] text-ink md:col-span-4">
                  <span className="serif-i mr-1 text-[1.15em] text-sand">{p.ours ? "Our plan:" : "Lesson:"}</span>{" "}
                  {p.lesson}
                </p>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* Four layers */}
        <section className="bg-forest-deep text-paper">
          <div className="wrap py-24 md:py-36">
            <SectionIntro
              tone="dark"
              kicker="How Innaya is built"
              title="Four layers."
              accent="One closed loop."
              body="From harvest glut to branded pantry staple, without the warehouse rot in between."
            />
            <ol className="mt-16 grid gap-x-10 md:mt-24 md:grid-cols-2">
              {LAYERS.map((l, i) => (
                <Reveal as="li" key={l.title} delay={(i % 2) * 0.08} className="border-t border-paper/20 pb-14 pt-7">
                  <p className="num text-[13px] text-sand-soft">/{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-6 text-[26px] font-normal tracking-[-0.03em]">{l.title}</h3>
                  <p className="serif-i mt-1 text-[20px] text-sand-soft">{l.subtitle}</p>
                  <p className="mt-5 max-w-[52ch] text-[15.5px] leading-[1.7] text-paper/70">{l.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="wrap py-24 md:py-36">
          <ScrubText
            text="Milk found its buyer in 1946. Millets and pulses are still waiting. We intend to be that buyer for South India."
            emphasis={["buyer"]}
            accentClassName="serif-i text-sand"
            className="max-w-[24ch] text-[clamp(1.9rem,1.2rem+2.8vw,3.75rem)] font-normal leading-[1.1] tracking-[-0.04em] text-ink"
          />
        </section>

        <WorkWithUs title="Want the full data room?" accent="Ask the founders." />
      </main>
      <Footer />
    </>
  );
}
