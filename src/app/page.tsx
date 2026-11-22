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

        {/* 3. The Core Thesis (Origin, Formulation, Intelligence) */}
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
