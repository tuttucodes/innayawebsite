"use client";

import Link from "next/link";
import { TRACTION } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92svh] flex-col justify-between overflow-hidden bg-bone px-5 pt-28 pb-10 sm:px-8 sm:pt-36 sm:pb-12 md:px-12 md:pt-40 md:pb-16"
    >
      {/* Architectural subtle hairline grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:64px_64px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1360px]">
        {/* Top Dateline / Masthead Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/60 pb-4 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-mute">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf" />
            </span>
            <span className="font-semibold text-ink">INFPL Operational Registry</span>
            <span className="text-line">/</span>
            <span>Issue 2025</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-mute">
            <span>Ernakulam &amp; Coimbatore Corridors</span>
            <span>·</span>
            <span className="text-leaf-deep font-semibold">Central FSSAI &amp; DPIIT Recognized</span>
          </div>
        </div>

        {/* Asymmetrical 2-column hero split */}
        <div className="mt-8 sm:mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16 lg:items-start">
          {/* Left Column: Authoritative Editorial Statement */}
          <div className="lg:col-span-7">
            <h1 className="font-sans text-[clamp(2.4rem,1.4rem+5vw,5.4rem)] font-bold leading-[1.01] tracking-[-0.035em] text-ink">
              Operating the physical &amp; digital infrastructure of food.
              <span className="block mt-3 font-serif italic font-normal text-leaf-deep text-[0.85em] leading-[1.12]">
                From agricultural origin to consumer shelf.
              </span>
            </h1>

            <p className="mt-6 sm:mt-8 max-w-xl text-[16px] sm:text-[17px] leading-[1.65] text-ink-soft">
              Innaya is an integrated food systems group. We develop enterprise AI
              telephony and quality inspection platforms that streamline agricultural procurement —
              while operating a consumer goods portfolio anchored by our clean-nutrition brand{" "}
              <Link href="/brands/pan8" className="font-semibold text-ink underline decoration-line hover:decoration-ink transition-colors">
                PAN8
              </Link>.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/brands/pan8"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-bone shadow-xs transition-all duration-200 hover:bg-leaf-deep active:scale-[0.98] active:translate-y-[1px]"
              >
                <span>Explore PAN8 Brand (13 SKUs)</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/platforms"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-bone-deep/60 px-7 py-4 text-sm font-semibold text-ink transition-all duration-200 hover:border-ink/50 hover:bg-bone-deep active:scale-[0.98] active:translate-y-[1px]"
              >
                <span>Innaya Intelligence Suite</span>
                <span>→</span>
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-ink-soft">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-mute">Strategic Brief:</span>
              <Link
                href="/thesis"
                className="font-medium text-leaf-deep hover:text-ink underline decoration-leaf/40 transition-colors"
              >
                Why India needs an Assured Buyer (₹57,000 Cr Spoilage Gap) →
              </Link>
            </div>
          </div>

          {/* Right Column: High-End Holdings & Operations Console */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-line bg-bone-deep/50 shadow-xs">
              <div className="flex items-center justify-between border-b border-line/70 bg-bone px-5 py-3.5 sm:px-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute font-semibold">
                  Holdings &amp; Operating Units
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-leaf-deep font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
                  Live Portfolio
                </span>
              </div>

              <div className="divide-y divide-line/50">
                {/* Division 01 */}
                <Link
                  href="/platforms"
                  className="group block p-5 sm:p-6 transition-colors hover:bg-bone"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-mute group-hover:text-ink">
                    <span>Division 01 · Software &amp; Platforms</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                  <p className="mt-1 font-sans text-base font-bold text-ink group-hover:text-leaf-deep transition-colors">
                    Innaya Intelligence &amp; FirstMile Network
                  </p>
                  <p className="mt-1 text-xs text-ink-soft leading-[1.5]">
                    Vernacular Voice Dispatch, Crop Vision Inspection, Mandi Arbitrage, Cold-Chain Telemetry &amp; Traceability.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="rounded-full bg-bone border border-line px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-mute">
                      Active Pilot · South India
                    </span>
                  </div>
                </Link>

                {/* Division 02 */}
                <Link
                  href="/brands/pan8"
                  className="group block p-5 sm:p-6 transition-colors hover:bg-bone"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-mute group-hover:text-ink">
                    <span>Division 02 · Consumer Brands</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                  <p className="mt-1 font-sans text-base font-bold text-ink group-hover:text-leaf-deep transition-colors">
                    PAN8 — A Nutri Co.
                  </p>
                  <p className="mt-1 text-xs text-ink-soft leading-[1.5]">
                    13 Millet-First Clean-Nutrition SKUs: High-Protein Pancake Mixes, Dosa Mixes, Upma &amp; Plant-Protein Bars.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="rounded-full bg-amber/20 border border-amber/40 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-ink font-semibold">
                      13 Active SKUs · 15–24g Protein
                    </span>
                  </div>
                </Link>

                {/* Division 03 */}
                <Link
                  href="/operations"
                  className="group block p-5 sm:p-6 transition-colors hover:bg-bone"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-mute group-hover:text-ink">
                    <span>Division 03 · Supply Operations</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                  <p className="mt-1 font-sans text-base font-bold text-ink group-hover:text-leaf-deep transition-colors">
                    Farmgate Sourcing &amp; Processing Footprint
                  </p>
                  <p className="mt-1 text-xs text-ink-soft leading-[1.5]">
                    Direct FPO lines in Tamil Nadu &amp; Kerala, asset-light micro pack-houses, and certified manufacturing.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="rounded-full bg-bone border border-line px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.12em] text-mute">
                      FPO Aggregation Hubs
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Traction & Validation Strip (Architectural Ledger Bar) */}
        <div className="mt-14 sm:mt-16 border-y border-line/70 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:divide-x lg:divide-line/60">
            {TRACTION.map((t, idx) => (
              <div
                key={t.label}
                className={idx > 0 ? "lg:pl-8" : ""}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                  Metric // 0{idx + 1}
                </div>
                <div className="mt-1 font-sans text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                  {t.value}
                </div>
                <p className="mt-1 text-xs leading-[1.5] text-ink-soft">
                  {t.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom anchor ticker */}
      <div className="mx-auto mt-8 sm:mt-10 flex w-full max-w-[1360px] flex-col gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-mute sm:flex-row sm:items-center sm:justify-between">
        <span>Innaya Nutri Foods Private Limited · CIN: U47219KL2024PTC088769</span>
        <span>Kerala &amp; Tamil Nadu, India</span>
      </div>
    </section>
  );
}
