import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "The Assured Buyer Thesis — Building India's Agricultural Stability",
  description:
    "Why India's ₹57,000 Cr farmgate loss is not a cold storage problem, but an Assured Buyer problem. The economic blueprint behind Innaya Nutrifoods.",
  alternates: { canonical: `${SITE.url}/thesis` },
  openGraph: {
    title: "The Assured Buyer Thesis — Innaya Nutri Foods",
    description:
      "From Farmgate Volatility to Branded Shelf Demand: A Category-Defining Food-Tech Institutional Blueprint.",
    url: `${SITE.url}/thesis`,
    type: "article",
  },
};

const VOLATILITY_DATA = [
  {
    commodity: "Milk",
    model: "Assured Buyer (Dairy Co-ops / Amul)",
    volatility: 10,
    farmerShare: 70,
    color: "#14453D",
    note: "Co-op processing converts seasonal liquid flush into shelf-stable butter & powder.",
  },
  {
    commodity: "Potato",
    model: "Unorganized Mandi Intermediaries",
    volatility: 107,
    farmerShare: 37,
    color: "#B45309",
    note: "High storage capacity (403L tonnes), but zero price protection at harvest gate.",
  },
  {
    commodity: "Tomato",
    model: "Speculative Open Market Spot Trade",
    volatility: 202,
    farmerShare: 33,
    color: "#991B1B",
    note: "No captive brand demand; 200%+ annual price swings; ₹33/₹100 consumer rupee.",
  },
];

const PRECEDENTS = [
  {
    institution: "Amul (GCMMF)",
    origin: "1946 · Anand, Gujarat",
    scale: "₹1,00,000+ Cr / yr",
    mechanism: "Absorbed seasonal liquid milk surplus into branded butter, cheese, and milk powders.",
    lesson: "Processing + captive consumer brand turns perishable glut into non-perishable equity.",
  },
  {
    institution: "Zespri International",
    origin: "1999 · Mount Maunganui, NZ",
    scale: "NZ$ 5.9 Billion / yr",
    mechanism: "Unified 2,800 growers under a single global brand with strict quality grading and export pooling.",
    lesson: "Global shelf premium requires standardized grading and disciplined single-desk marketing.",
  },
  {
    institution: "Suguna Foods",
    origin: "1990 · Coimbatore, TN",
    scale: "~₹9,100 Cr / yr",
    mechanism: "Contract poultry farming providing feed, day-old chicks, and guaranteed offtake to 40,000+ farmers.",
    lesson: "De-risking farm inputs and guaranteeing buyback creates massive supply resilience.",
  },
  {
    institution: "Innaya Nutri Foods",
    origin: "2024 · Ernakulam, Kerala",
    scale: "Phase 1: 13 PAN8 SKUs",
    mechanism: "Integrated AI OS (telephony, vision, cold telemetry) powering captive brand demand across millets, pulses & agro-corridors.",
    lesson: "Phase 1 (Millets/PAN8) → Phase 2 (Fruit/Moringa bases) → Phase 3 (Multi-brand Assured Buyer OS).",
    highlight: true,
  },
];

const LAYERS = [
  {
    layer: "Layer 01",
    title: "Captive Brand Demand",
    subtitle: "Solving the 'Winter Milk' Surplus via Branded Shelf Offtake",
    desc: "Amul succeeded because it didn't just store milk; it built butter, cheese, and powder lines that absorbed excess supply. PAN8 converts climate-resilient millets and pulses into everyday pancake, dosa, upma, and bar formats—creating predictable, year-round volume demand that insulates farmers from seasonal spot crashes.",
  },
  {
    layer: "Layer 02",
    title: "Innaya Intelligence Suite",
    subtitle: "Mandi Arbitrage Elimination & Dynamic Batch Formulation",
    desc: "Autonomous vernacular voice agents, real-time mandi price discovery, and intake vision scoring eliminate subjective grading deductions. When harvest surges depress spot prices, our dynamic formulation engine adjusts recipe blend ratios to absorb Grade-B surplus without compromising finished nutritional specs.",
  },
  {
    layer: "Layer 03",
    title: "Asset-Light Micro Pack-Houses",
    subtitle: "Filling the 68,000 Pack-House Gap Near Farmgates",
    desc: "India has 403 lakh tonnes of cold storage, but only 1,300 of the 70,000 required pack-houses exist at farmgates. Innaya partners with Farmer Producer Organisations (FPOs) across Kerala and Tamil Nadu to deploy asset-light micro-sorting, pre-cooling, and dehydration units within 30km of harvest points.",
  },
  {
    layer: "Layer 04",
    title: "Closed-Loop Farmer Economics",
    subtitle: "Lifting Farmer Share from ₹33 to ₹70 per Consumer Rupee",
    desc: "By cutting speculative mandi intermediaries, logging immutable weighments via Innaya Trace, and providing direct digital payouts within 48 hours, Innaya raises farmer net realization while locking in predictable raw-material COGS for our branded shelf products.",
  },
];

export default function ThesisPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip bg-bone">
        <PageHero
          eyebrow="The Assured Buyer Thesis · Strategic Foundation"
          title={
            <>
              Building India&apos;s<br />
              <em className="font-serif italic font-normal text-leaf-deep">Assured Buyer.</em>
            </>
          }
          blurb={
            <>
              From farmgate volatility to branded shelf demand: why India&apos;s ₹57,000 Cr
              annual food loss is not a cold storage capacity crisis, but the structural
              absence of an Assured Buyer.
            </>
          }
        />

        {/* Section 1: The Macro Structural Gap */}
        <section className="mx-auto w-full max-w-[1360px] px-5 py-20 sm:px-8 md:px-12 md:py-28">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-mute">
                The Economic Paradox
              </span>
              <h2 className="mt-4 font-sans text-[clamp(2.1rem,1.2rem+3.4vw,3.8rem)] font-bold leading-[1.04] tracking-tight text-ink">
                Cold storage without an assured buyer is just a{" "}
                <span className="font-serif italic font-normal text-leaf-deep">
                  waiting room for spoilage.
                </span>
              </h2>
              <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.7] text-ink-soft">
                India has built 403 lakh tonnes of bulk cold storage, yet loses ₹57,000 Crore of
                harvest every year. The root cause is not warehouse volume: it is that 98% of cold
                stores are single-commodity potato vaults, reefer transport is under-equipped
                (19,000 of 62,000 needed), and farmgate pack-houses stand at an alarming 1,300 against
                a national requirement of 70,000 (a 68,700-facility deficit).
              </p>
              <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.7] text-ink-soft">
                When perishable crops hit peak harvest without a guaranteed buyer with processing
                capacity, farmers are forced to dump produce at ₹2/kg while consumers pay ₹60/kg in
                urban centers weeks later.
              </p>
            </div>

            {/* SVG Data Visualization: Volatility vs Farmer Share */}
            <div className="lg:col-span-7 rounded-3xl border border-line bg-bone-deep/50 p-6 sm:p-8 md:p-10">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink font-semibold">
                  Price Volatility vs. Farmer Realization (2015–2025)
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-mute">
                  RBI &amp; MoSPI Benchmark
                </span>
              </div>

              {/* Data Rows Visualized */}
              <div className="mt-8 space-y-8">
                {VOLATILITY_DATA.map((item) => (
                  <div key={item.commodity} className="space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="font-sans text-lg font-bold text-ink">{item.commodity}</span>
                        <span className="ml-2 font-mono text-[11px] text-mute">({item.model})</span>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-sm font-bold text-ink">
                          ₹{item.farmerShare} of ₹100
                        </span>
                        <span className="block font-mono text-[10px] text-mute">
                          Farmer Share of Consumer Rupee
                        </span>
                      </div>
                    </div>

                    {/* Comparative Double Bars */}
                    <div className="space-y-1.5">
                      {/* Farmer Realization Bar */}
                      <div>
                        <div className="flex justify-between text-[11px] font-mono text-mute mb-1">
                          <span>Farmer Share of Retail Value</span>
                          <span className="font-semibold text-ink">{item.farmerShare}%</span>
                        </div>
                        <div className="h-3 w-full rounded-full bg-line overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000"
                            style={{
                              width: `${item.farmerShare}%`,
                              backgroundColor: item.color,
                            }}
                          />
                        </div>
                      </div>

                      {/* 10-Year Price Volatility Spike */}
                      <div>
                        <div className="flex justify-between text-[11px] font-mono text-mute mb-1">
                          <span>Max 1-Year Price Swing Volatility</span>
                          <span className="font-semibold text-ink">+{item.volatility}%</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-line/60 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-clay opacity-80"
                            style={{ width: `${Math.min(item.volatility / 2.2, 100)}%` }}
                          />
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-ink-soft/90 italic">{item.note}</p>
                  </div>
                ))}
              </div>

              {/* Verified Government Sources */}
              <div className="mt-8 border-t border-line/60 pt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-mute leading-relaxed">
                Sources: Ministry of Statistics &amp; Programme Implementation (MoSPI) CPI Data (2015–2025);
                Reserve Bank of India (RBI) Working Paper Series (Oct 2024); National Dairy Development Board (NDDB);
                National Centre for Cold-chain Development (NCCD Assessment 2015 &amp; 2025); NABCONS Pack-House Study via Lok Sabha Unstarred Q. No. 1294 (Dec 2024).
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: The Historical Precedent Table */}
        <section className="border-t border-line bg-bone-deep/30 py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 md:px-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-mute">
              Historical Analogs
            </span>
            <h2 className="mt-4 font-sans text-[clamp(2.1rem,1.2rem+3.2vw,3.6rem)] font-bold leading-[1.06] tracking-tight text-ink">
              The playbook is proven.{" "}
              <span className="font-serif italic font-normal text-leaf-deep">
                Technology now makes it scalable.
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] sm:text-[16px] leading-[1.65] text-ink-soft">
              Whenever agriculture has transitioned from subsistence vulnerability to institutional
              resilience, the mechanism has always been an Assured Buyer operating branded processing.
            </p>

            <div className="mt-12 overflow-x-auto rounded-2xl border border-line bg-bone shadow-sm">
              <table className="w-full min-w-[720px] text-left border-collapse">
                <thead>
                  <tr className="border-b border-line bg-bone-deep/60 font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
                    <th className="p-5 sm:p-6">Institution</th>
                    <th className="p-5 sm:p-6">Origin &amp; Scale</th>
                    <th className="p-5 sm:p-6">Operating Mechanism</th>
                    <th className="p-5 sm:p-6">Structural Takeaway</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line text-sm">
                  {PRECEDENTS.map((p) => (
                    <tr
                      key={p.institution}
                      className={p.highlight ? "bg-leaf/5 font-medium" : "hover:bg-bone-deep/30"}
                    >
                      <td className="p-5 sm:p-6 align-top">
                        <span className="font-sans font-bold text-base text-ink block">
                          {p.institution}
                        </span>
                        {p.highlight && (
                          <span className="inline-block mt-1 rounded-full bg-leaf px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-bone">
                            Our Architecture
                          </span>
                        )}
                      </td>
                      <td className="p-5 sm:p-6 align-top font-mono text-xs text-ink-soft">
                        <span className="block text-ink font-semibold">{p.origin}</span>
                        <span className="text-leaf-deep">{p.scale}</span>
                      </td>
                      <td className="p-5 sm:p-6 align-top text-ink-soft leading-[1.6]">
                        {p.mechanism}
                      </td>
                      <td className="p-5 sm:p-6 align-top text-ink leading-[1.6]">
                        {p.lesson}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 3: Innaya's 4-Layer Closed-Loop Solution */}
        <section className="border-t border-line bg-ink text-bone py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 md:px-12">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.24em] text-bone/50">
              <span>Architectural Blueprint</span>
              <span>The 4-Layer Closed Loop</span>
            </div>

            <h2 className="mt-6 font-sans text-[clamp(2.2rem,1.2rem+3.6vw,4rem)] font-bold leading-[1.04] tracking-tight text-bone max-w-3xl">
              From harvest glut to branded pantry staples.{" "}
              <span className="font-serif italic font-normal text-amber">
                Without government subsidies or warehouse rot.
              </span>
            </h2>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {LAYERS.map((l) => (
                <div
                  key={l.layer}
                  className="rounded-2xl border border-bone/15 bg-bone/[0.04] p-7 flex flex-col justify-between hover:bg-bone/[0.08] transition-colors"
                >
                  <div>
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-amber">
                      {l.layer}
                    </span>
                    <h3 className="mt-3 font-sans text-xl font-bold tracking-tight text-bone">
                      {l.title}
                    </h3>
                    <p className="mt-1 font-serif italic text-xs text-bone/60">
                      {l.subtitle}
                    </p>
                    <p className="mt-4 text-[13.5px] leading-[1.65] text-bone/75">
                      {l.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 border-t border-bone/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone/50">
                  Venture &amp; Institutional Inquiries
                </span>
                <p className="mt-1 text-sm font-medium text-bone/90">
                  Review our complete unit economics and farmgate pilot data room.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-all duration-200 hover:bg-amber active:scale-[0.98] active:translate-y-[1px]"
              >
                Request Strategic Briefing →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
