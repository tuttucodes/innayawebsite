import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Team from "@/components/Team";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Schema from "@/components/Schema";

export default function Home() {
  return (
    <>
      <Schema />
      <Nav />
      <main className="overflow-x-clip bg-bone">
        {/* 1. Master Group Positioning Hero with 3 Visual Portals */}
        <Hero />

        {/* 2. Flagship Consumer Brand Showcase (PAN8) */}
        <section className="py-20 sm:py-28 border-b border-line">
          <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 md:px-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-line/60">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-mute">
                  Consumer Nutrition · Division 02
                </span>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-normal leading-[1.15] text-ink">
                  Everyday Indian staples, re-engineered for health.
                </h2>
                <p className="mt-2 text-base text-ink-soft max-w-xl">
                  PAN8 transforms traditional breakfast routines using 100% heritage millets and pulses. 15–24g plant protein, zero preservatives, and ready in minutes.
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href="/brands/pan8"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-bone hover:bg-leaf-deep transition-colors"
                >
                  <span>Explore All 13 SKUs</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* 3 Real Food Showcase Cards */}
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="group rounded-2xl border border-line bg-bone overflow-hidden shadow-xs hover:shadow-md transition-all">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-bone-deep">
                  <Image
                    src="/images/pan8-dosa.jpg"
                    alt="PAN8 Crispy Millet Dosa"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-ink/80 backdrop-blur px-2.5 py-0.5 font-mono text-[10px] text-bone uppercase tracking-[0.12em]">
                    Dosa Mix · 250g
                  </div>
                  <div className="absolute bottom-3 right-3 rounded-full bg-leaf text-bone font-semibold px-2.5 py-0.5 text-xs">
                    18g Protein
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-normal text-ink group-hover:text-leaf-deep transition-colors">
                    Multi-Millet Protein Dosa
                  </h3>
                  <p className="mt-2 text-xs leading-[1.65] text-ink-soft">
                    Crispy golden South Indian staple made from ragi, foxtail, and yellow pea isolate. Zero rice filler and low glycemic index.
                  </p>
                  <Link href="/brands/pan8" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-ink group-hover:text-leaf-deep">
                    View formulation details →
                  </Link>
                </div>
              </div>

              <div className="group rounded-2xl border border-line bg-bone overflow-hidden shadow-xs hover:shadow-md transition-all">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-bone-deep">
                  <Image
                    src="/images/pan8-pancake.jpg"
                    alt="PAN8 Fluffy Millet Pancakes"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-ink/80 backdrop-blur px-2.5 py-0.5 font-mono text-[10px] text-bone uppercase tracking-[0.12em]">
                    Pancake Mix · 250g
                  </div>
                  <div className="absolute bottom-3 right-3 rounded-full bg-amber text-ink font-semibold px-2.5 py-0.5 text-xs">
                    15g Protein
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-normal text-ink group-hover:text-leaf-deep transition-colors">
                    Choco-Chip Vanilla Pancake
                  </h3>
                  <p className="mt-2 text-xs leading-[1.65] text-ink-soft">
                    Light, fluffy morning pancakes made from sorghum and foxtail millets. Naturally sweetened with dried dates and real cocoa nibs.
                  </p>
                  <Link href="/brands/pan8" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-ink group-hover:text-leaf-deep">
                    View formulation details →
                  </Link>
                </div>
              </div>

              <div className="group rounded-2xl border border-line bg-bone overflow-hidden shadow-xs hover:shadow-md transition-all">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-bone-deep">
                  <Image
                    src="/images/pan8-bar.jpg"
                    alt="PAN8 Plant Protein Bars"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 rounded-full bg-ink/80 backdrop-blur px-2.5 py-0.5 font-mono text-[10px] text-bone uppercase tracking-[0.12em]">
                    Protein Bar · 50g
                  </div>
                  <div className="absolute bottom-3 right-3 rounded-full bg-leaf text-bone font-semibold px-2.5 py-0.5 text-xs">
                    20g Protein
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-normal text-ink group-hover:text-leaf-deep transition-colors">
                    Coffee Almond Plant Protein Bar
                  </h3>
                  <p className="mt-2 text-xs leading-[1.65] text-ink-soft">
                    Whole South Indian filter coffee extract paired with California almonds and crispy puffed millets. Clean sustained energy on the go.
                  </p>
                  <Link href="/brands/pan8" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-ink group-hover:text-leaf-deep">
                    View formulation details →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Flagship Case Study Teaser: The Assured Buyer Economic Plate */}
        <section className="py-20 sm:py-28 border-b border-line bg-bone-deep/30">
          <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 md:px-12">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
              {/* Left Column: Thesis Executive Summary */}
              <div className="lg:col-span-6">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-mute">
                  The Assured Buyer Thesis
                </span>
                <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-normal leading-[1.15] tracking-tight text-ink">
                  Cold storage without an assured buyer is just a waiting room for spoilage.
                </h2>
                <p className="mt-6 text-base leading-[1.7] text-ink-soft max-w-xl">
                  India loses ₹57,000 Cr of harvest every year. The structural bottleneck is not cold storage capacity (403 lakh tonnes already built), but the absence of an integrated buyer with consumer processing power. Commodities backed by captive processing retain ₹70 of every ₹100 consumer rupee, while unorganized perishables capture just ₹33.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href="/thesis"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-bone transition-all duration-200 hover:bg-leaf-deep active:scale-[0.98]"
                  >
                    <span>Read the Full Economic Case Study</span>
                    <span>→</span>
                  </Link>
                  <span className="font-mono text-xs text-mute text-center sm:text-left">
                    Includes MoSPI &amp; RBI Benchmarks
                  </span>
                </div>
              </div>

              {/* Right Column: Institutional Financial Comparison Plate */}
              <div className="lg:col-span-6">
                <div className="overflow-hidden rounded-2xl border border-line bg-bone shadow-xs">
                  <div className="flex items-center justify-between border-b border-line bg-bone-deep/60 px-5 py-3.5 sm:px-6">
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-ink font-semibold">
                      Price Volatility vs. Farmer Realization
                    </span>
                    <span className="font-mono text-[10px] text-mute">
                      2015–2025 CPI Analysis
                    </span>
                  </div>

                  <div className="divide-y divide-line/60">
                    {/* Row 1: Milk */}
                    <div className="p-5 sm:p-6 transition-colors hover:bg-bone-deep/30">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="font-mono text-xs uppercase tracking-[0.12em] text-leaf-deep font-semibold">
                            Assured Buyer Model (Dairy Co-ops / Amul)
                          </span>
                          <h4 className="mt-0.5 font-serif text-lg font-normal text-ink">
                            Liquid Milk Processing
                          </h4>
                        </div>
                        <div className="text-right">
                          <span className="font-serif text-xl font-normal text-leaf-deep">
                            10% Volatility
                          </span>
                          <span className="block font-mono text-[10px] text-mute">
                            Max 1-Yr Price Swing
                          </span>
                        </div>
                      </div>

                      <div className="mt-3.5">
                        <div className="flex items-center justify-between font-mono text-xs text-ink-soft mb-1">
                          <span>Farmer Share of Consumer Rupee</span>
                          <span className="font-bold text-leaf-deep">₹70 of ₹100 (70%)</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-line/60">
                          <div className="h-full rounded-full bg-leaf-deep" style={{ width: "70%" }} />
                        </div>
                      </div>
                      <p className="mt-2 text-xs text-ink-soft">
                        Co-ops convert perishable liquid surplus into shelf-stable butter &amp; powders.
                      </p>
                    </div>

                    {/* Row 2: Potato */}
                    <div className="p-5 sm:p-6 transition-colors hover:bg-bone-deep/30">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="font-mono text-xs uppercase tracking-[0.12em] text-amber font-semibold">
                            Storage Without Assured Offtake
                          </span>
                          <h4 className="mt-0.5 font-serif text-lg font-normal text-ink">
                            Potato (Mandi Intermediaries)
                          </h4>
                        </div>
                        <div className="text-right">
                          <span className="font-serif text-xl font-normal text-amber">
                            107% Volatility
                          </span>
                          <span className="block font-mono text-[10px] text-mute">
                            Max 1-Yr Price Swing
                          </span>
                        </div>
                      </div>

                      <div className="mt-3.5">
                        <div className="flex items-center justify-between font-mono text-xs text-ink-soft mb-1">
                          <span>Farmer Share of Consumer Rupee</span>
                          <span className="font-bold text-ink">₹37 of ₹100 (37%)</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-line/60">
                          <div className="h-full rounded-full bg-amber" style={{ width: "37%" }} />
                        </div>
                      </div>
                      <p className="mt-2 text-xs text-ink-soft">
                        403 lakh tonnes of storage built, yet zero harvest-time floor price protection.
                      </p>
                    </div>

                    {/* Row 3: Tomato */}
                    <div className="p-5 sm:p-6 transition-colors hover:bg-bone-deep/30">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="font-mono text-xs uppercase tracking-[0.12em] text-clay font-semibold">
                            Open Spot Speculation
                          </span>
                          <h4 className="mt-0.5 font-serif text-lg font-normal text-ink">
                            Tomato (Zero Brand Offtake)
                          </h4>
                        </div>
                        <div className="text-right">
                          <span className="font-serif text-xl font-normal text-clay">
                            202% Volatility
                          </span>
                          <span className="block font-mono text-[10px] text-mute">
                            Max 1-Yr Price Swing
                          </span>
                        </div>
                      </div>

                      <div className="mt-3.5">
                        <div className="flex items-center justify-between font-mono text-xs text-ink-soft mb-1">
                          <span>Farmer Share of Consumer Rupee</span>
                          <span className="font-bold text-clay">₹33 of ₹100 (33%)</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-line/60">
                          <div className="h-full rounded-full bg-clay" style={{ width: "33%" }} />
                        </div>
                      </div>
                      <p className="mt-2 text-xs text-ink-soft">
                        Absence of captive food processing leaves farmers exposed to severe seasonal spot crashes.
                      </p>
                    </div>
                  </div>

                  {/* Packhouse Callout */}
                  <div className="border-t border-line bg-bone-deep/50 p-5 sm:p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-[0.14em] text-mute font-semibold">
                        National Pack-House Deficit
                      </span>
                      <span className="font-mono text-xs text-clay font-semibold">
                        68,700 Unit Gap
                      </span>
                    </div>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="font-serif text-2xl font-normal text-ink">1,300 Built</span>
                      <span className="text-xs text-ink-soft">of 70,000 Required Integrated Pack-Houses</span>
                    </div>
                    <p className="mt-1 text-xs text-ink-soft">
                      Innaya deploys asset-light micro pack-houses within 30km of South Indian harvest corridors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Operating Model */}
        <About />

        {/* 5. Executive Leadership with Monochrome Portraits */}
        <Team />

        {/* 6. Executive Inquiry & Partnership Banner */}
        <section className="py-20 sm:py-28 border-t border-line bg-bone-deep/40">
          <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 md:px-12">
            <div className="rounded-3xl border border-line bg-ink p-8 text-bone sm:p-12 md:p-16">
              <div className="max-w-2xl">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-amber">
                  Institutional Partnerships
                </span>
                <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-bone">
                  Deploy software, distribute clean food, or source verified harvest.
                </h2>
                <p className="mt-4 text-base leading-[1.65] text-bone/70">
                  We work with modern trade retail networks, enterprise food processors,
                  and institutional capital partners. Direct responses within 48 hours.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-bone px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-amber active:scale-[0.98]"
                  >
                    Start an Executive Conversation →
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-full border border-bone/30 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.12em] text-bone transition-colors hover:bg-bone/10 active:scale-[0.98]"
                  >
                    Read Corporate Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
