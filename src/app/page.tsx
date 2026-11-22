import Link from "next/link";
import Hero from "@/components/Hero";
import Divisions from "@/components/Divisions";
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
        {/* 1. Master Group Positioning Hero */}
        <Hero />

        {/* 2. The Three Operating Divisions (With Editorial Photography) */}
        <Divisions />

        {/* 3. Flagship Case Study Teaser: The Assured Buyer Economic Plate */}
        <section className="border-t border-line bg-bone-deep/30 py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 md:px-12">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
              {/* Left Column: Thesis Executive Summary */}
              <div className="lg:col-span-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-mute font-semibold">
                  Macro Economic Thesis // 01
                </span>
                <h2 className="mt-4 font-sans text-[clamp(2.1rem,1.3rem+3.5vw,3.8rem)] font-bold leading-[1.04] tracking-[-0.03em] text-ink">
                  Building India&apos;s Assured Buyer.{" "}
                  <span className="block mt-2 font-serif italic font-normal text-leaf-deep text-[0.88em]">
                    From farmgate volatility to branded shelf demand.
                  </span>
                </h2>
                <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.68] text-ink-soft max-w-xl">
                  India loses ₹57,000 Cr of agricultural harvest every year. The structural bottleneck is not cold storage capacity (403 lakh tonnes already built), but the absence of an integrated buyer with consumer processing power. Commodities backed by captive processing retain ₹70 of every ₹100 consumer rupee, while unorganized perishables capture just ₹33.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href="/thesis"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-bone transition-all duration-200 hover:bg-leaf-deep active:scale-[0.98] active:translate-y-[1px]"
                  >
                    <span>Read Full Assured Buyer Blueprint</span>
                    <span>→</span>
                  </Link>
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-mute text-center sm:text-left">
                    Includes MoSPI &amp; RBI Data
                  </span>
                </div>
              </div>

              {/* Right Column: Institutional Financial Comparison Plate (RBI / MoSPI Style) */}
              <div className="lg:col-span-6">
                <div className="overflow-hidden rounded-2xl border border-line bg-bone shadow-xs">
                  <div className="flex items-center justify-between border-b border-line bg-bone-deep/60 px-5 py-3.5 sm:px-6">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink font-semibold">
                      Comparative Volatility &amp; Farmer Realization
                    </span>
                    <span className="font-mono text-[10px] text-mute">
                      2015–2025 CPI Analysis
                    </span>
                  </div>

                  <div className="divide-y divide-line/60">
                    {/* Row 1: Milk (Co-op / Assured Buyer) */}
                    <div className="p-5 sm:p-6 transition-colors hover:bg-bone-deep/30">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-leaf-deep font-semibold">
                            Assured Buyer Model (Dairy Co-ops / Amul)
                          </span>
                          <h4 className="mt-0.5 font-sans text-base font-bold text-ink">
                            Liquid Milk Processing
                          </h4>
                        </div>
                        <div className="text-right">
                          <span className="font-sans text-xl font-bold text-leaf-deep">
                            10% Volatility
                          </span>
                          <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-mute">
                            Max 1-Yr Price Swing
                          </span>
                        </div>
                      </div>

                      {/* Visual Proportional Bar */}
                      <div className="mt-3.5">
                        <div className="flex items-center justify-between font-mono text-[10px] text-ink-soft mb-1">
                          <span>Farmer Share of Consumer Rupee</span>
                          <span className="font-bold text-leaf-deep">₹70 of ₹100 (70%)</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-line/60">
                          <div className="h-full rounded-full bg-leaf-deep" style={{ width: "70%" }} />
                        </div>
                      </div>
                      <p className="mt-2 text-xs text-ink-soft">
                        Co-ops convert perishable winter liquid surplus into shelf-stable butter &amp; powders.
                      </p>
                    </div>

                    {/* Row 2: Potato (Unorganized Storage) */}
                    <div className="p-5 sm:p-6 transition-colors hover:bg-bone-deep/30">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber font-semibold">
                            Storage Without Assured Offtake
                          </span>
                          <h4 className="mt-0.5 font-sans text-base font-bold text-ink">
                            Potato (Mandi Intermediaries)
                          </h4>
                        </div>
                        <div className="text-right">
                          <span className="font-sans text-xl font-bold text-amber">
                            107% Volatility
                          </span>
                          <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-mute">
                            Max 1-Yr Price Swing
                          </span>
                        </div>
                      </div>

                      <div className="mt-3.5">
                        <div className="flex items-center justify-between font-mono text-[10px] text-ink-soft mb-1">
                          <span>Farmer Share of Consumer Rupee</span>
                          <span className="font-bold text-ink">₹37 of ₹100 (37%)</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-line/60">
                          <div className="h-full rounded-full bg-amber" style={{ width: "37%" }} />
                        </div>
                      </div>
                      <p className="mt-2 text-xs text-ink-soft">
                        403 lakh tonnes of cold storage built, yet zero harvest-time floor price protection.
                      </p>
                    </div>

                    {/* Row 3: Tomato (Open Market Speculation) */}
                    <div className="p-5 sm:p-6 transition-colors hover:bg-bone-deep/30">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-clay font-semibold">
                            Open Spot Speculation
                          </span>
                          <h4 className="mt-0.5 font-sans text-base font-bold text-ink">
                            Tomato (Zero Brand Integration)
                          </h4>
                        </div>
                        <div className="text-right">
                          <span className="font-sans text-xl font-bold text-clay">
                            202% Volatility
                          </span>
                          <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-mute">
                            Max 1-Yr Price Swing
                          </span>
                        </div>
                      </div>

                      <div className="mt-3.5">
                        <div className="flex items-center justify-between font-mono text-[10px] text-ink-soft mb-1">
                          <span>Farmer Share of Consumer Rupee</span>
                          <span className="font-bold text-clay">₹33 of ₹100 (33%)</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded-full bg-line/60">
                          <div className="h-full rounded-full bg-clay" style={{ width: "33%" }} />
                        </div>
                      </div>
                      <p className="mt-2 text-xs text-ink-soft">
                        Absence of captive food processing leaves farmers exposed to 200%+ periodic spot crashes.
                      </p>
                    </div>
                  </div>

                  {/* Farmgate Infrastructure Gap Callout Bar */}
                  <div className="border-t border-line bg-bone-deep/50 p-5 sm:p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute font-semibold">
                        National Pack-House Deficit
                      </span>
                      <span className="font-mono text-[10px] text-clay font-semibold">
                        68,700 Unit Deficit
                      </span>
                    </div>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="font-sans text-2xl font-bold text-ink">1,300 Built</span>
                      <span className="text-sm text-ink-soft">of 70,000 Required Integrated Pack-Houses</span>
                    </div>
                    <p className="mt-1 text-xs text-ink-soft">
                      Innaya deploys asset-light micro pack-houses within 30km of South Indian harvest corridors rather than waiting for state infra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Core Thesis (Origin, Formulation, Intelligence) */}
        <About />

        {/* 5. Executive Leadership */}
        <Team />

        {/* 6. Executive Inquiry & Partnership Banner */}
        <section className="border-t border-line bg-bone-deep/40 py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 md:px-12">
            <div className="rounded-3xl border border-line bg-ink p-8 text-bone sm:p-12 md:p-16">
              <div className="max-w-2xl">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-amber font-semibold">
                  Institutional Partnerships
                </span>
                <h2 className="mt-4 font-sans text-[clamp(2rem,1.2rem+3vw,3.6rem)] font-bold leading-[1.04] tracking-tight text-bone">
                  Deploy software, distribute clean nutrition, or source verified harvest.
                </h2>
                <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.65] text-bone/70">
                  We work with enterprise food processors, modern trade retail networks,
                  and institutional capital partners. Direct responses within 48 hours.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-bone px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-200 hover:bg-amber active:scale-[0.98] active:translate-y-[1px]"
                  >
                    Start an Executive Conversation →
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-full border border-bone/30 px-7 py-3.5 text-sm font-medium text-bone transition-all duration-200 hover:bg-bone/10 active:scale-[0.98] active:translate-y-[1px]"
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
