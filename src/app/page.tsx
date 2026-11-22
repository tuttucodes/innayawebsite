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
      <main className="overflow-x-clip">
        {/* 1. Master Group Positioning Hero */}
        <Hero />

        {/* 2. The Three Operating Divisions (With Editorial Photography) */}
        <Divisions />

        {/* 3. Flagship Case Study Teaser: The Assured Buyer */}
        <section className="border-t border-line bg-bone-deep/30 py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 md:px-12">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16 lg:items-end">
              <div className="lg:col-span-7">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-mute">
                  Strategic Case Study · The Agronomic Gap
                </span>
                <h2 className="mt-4 font-sans text-[clamp(2.1rem,1.2rem+3.5vw,3.8rem)] font-bold leading-[1.04] tracking-tight text-ink">
                  Building India&apos;s Assured Buyer.{" "}
                  <span className="font-serif italic font-normal text-leaf-deep">
                    From farmgate volatility to branded shelf demand.
                  </span>
                </h2>
                <p className="mt-6 text-[15px] sm:text-[16px] leading-[1.65] text-ink-soft max-w-xl">
                  India loses ₹57,000 Cr of harvest every year. The bottleneck is not cold storage capacity (403 lakh tonnes built), but the absence of an integrated buyer with consumer processing power. See why commodities with assured buyers retain 70% of the consumer rupee, while unorganized perishables capture just 33%.
                </p>
                <div className="mt-8">
                  <Link
                    href="/thesis"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bone hover:bg-leaf-deep transition-colors"
                  >
                    Read the Assured Buyer Case Study &amp; Data →
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-line bg-bone p-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-leaf-deep font-semibold">
                    Milk (Co-ops)
                  </span>
                  <span className="mt-2 block font-sans text-2xl font-bold text-ink">
                    10% Volatility
                  </span>
                  <p className="mt-1 text-xs text-ink-soft">
                    ₹70 of ₹100 goes to farmer via assured processing.
                  </p>
                </div>

                <div className="rounded-2xl border border-line bg-bone p-5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-clay font-semibold">
                    Tomato / Potato
                  </span>
                  <span className="mt-2 block font-sans text-2xl font-bold text-ink">
                    107%–202% Vol.
                  </span>
                  <p className="mt-1 text-xs text-ink-soft">
                    Just ₹33–₹37 to farmer without captive brand demand.
                  </p>
                </div>

                <div className="col-span-2 rounded-2xl border border-line bg-bone p-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-mute">
                      Farmgate Infrastructure Deficit
                    </span>
                    <span className="font-mono text-[10px] text-amber font-semibold">
                      68,700 Gap
                    </span>
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-sans text-2xl font-bold text-ink">1,300 Built</span>
                    <span className="text-sm text-ink-soft">of 70,000 Needed Pack-Houses</span>
                  </div>
                  <p className="mt-1 text-xs text-ink-soft">
                    Innaya micro-hubs deploy within 30km of harvest corridors without waiting for state infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Core Thesis (Origin, Formulation, Intelligence) */}
        <About />

        {/* 4. Executive Leadership */}
        <Team />

        {/* 5. Executive Inquiry & Partnership Banner */}
        <section className="border-t border-line bg-bone-deep/40 py-20 sm:py-28">
          <div className="mx-auto w-full max-w-[1360px] px-5 sm:px-8 md:px-12">
            <div className="rounded-3xl border border-line bg-ink p-8 text-bone sm:p-12 md:p-16">
              <div className="max-w-2xl">
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-amber">
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
                    className="inline-flex items-center gap-2 rounded-full bg-bone px-6 py-3.5 text-sm font-semibold text-ink hover:bg-amber transition-colors"
                  >
                    Start an Executive Conversation →
                  </Link>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 rounded-full border border-bone/30 px-6 py-3.5 text-sm font-medium text-bone hover:bg-bone/10 transition-colors"
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
