"use client";

import Image from "next/image";
import Link from "next/link";
import { TRACTION } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-bone px-5 pt-32 pb-16 sm:px-8 sm:pt-36 sm:pb-20 md:px-12 md:pt-40 md:pb-24 border-b border-line"
    >
      <div className="mx-auto w-full max-w-[1360px]">
        {/* Top Quiet Dateline */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-8 text-xs font-mono uppercase tracking-[0.16em] text-mute border-b border-line/60">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-leaf" />
            <span className="font-semibold text-ink">Innaya Nutri Foods Private Limited</span>
          </div>
          <div className="flex items-center gap-4 text-mute">
            <span>Kakkanad, Kerala · South India</span>
            <span>·</span>
            <span className="text-leaf-deep font-medium">DPIIT &amp; Central FSSAI Licensed</span>
          </div>
        </div>

        {/* Master Editorial Narrative Header */}
        <div className="mt-10 sm:mt-14 max-w-4xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-bone-deep/60 px-3.5 py-1 text-xs font-mono text-ink-soft uppercase tracking-[0.12em]">
            Food Systems &amp; Clean Nutrition
          </span>

          <h1 className="mt-6 font-serif text-[clamp(2.4rem,1.8rem+3.8vw,4.8rem)] font-normal leading-[1.08] tracking-tight text-ink">
            Rethinking Indian food, from <em className="italic text-leaf-deep">farmgate</em> to pantry.
          </h1>

          <p className="mt-6 max-w-2xl text-lg sm:text-xl font-normal leading-[1.65] text-ink-soft">
            Innaya bridges South Indian agriculture and everyday nutrition. We partner directly with farmer producer collectives to eliminate harvest spoilage — and transform resilient heritage grains into clean, high-protein daily food under our consumer brand <Link href="/brands/pan8" className="font-semibold text-ink underline decoration-line hover:decoration-ink transition-colors">PAN8</Link>.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/brands/pan8"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-bone transition-all duration-200 hover:bg-leaf-deep active:scale-[0.98]"
            >
              <span>Explore PAN8 Foods (13 SKUs)</span>
              <span>→</span>
            </Link>
            <Link
              href="/thesis"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-bone px-7 py-3.5 text-sm font-medium text-ink transition-all duration-200 hover:border-ink/50 hover:bg-bone-deep/50 active:scale-[0.98]"
            >
              <span>Why India Needs an Assured Buyer</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* 3 Visual Division Portals (Real Photography, Real Food, Real Operations) */}
        <div className="mt-16 sm:mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: PAN8 Consumer Brand */}
          <Link
            href="/brands/pan8"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line/70 bg-bone/90 backdrop-blur-md shadow-[0_16px_36px_-12px_rgba(26,22,20,0.06),inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-12px_rgba(26,22,20,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] hover:border-ink/30"
          >
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-bone-deep">
              <Image
                src="/images/products/pancake-choco-chip.jpg"
                alt="PAN8 Clean Nutrition Pancake"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 rounded-full bg-ink/75 backdrop-blur-md px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-bone border border-white/10">
                Division 02 · Brand
              </div>
              <div className="absolute bottom-3 right-3 rounded-full bg-amber/95 backdrop-blur-md text-ink font-semibold px-3 py-1 text-xs shadow-xs border border-amber/30">
                13 Active SKUs
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl font-normal tracking-tight text-ink group-hover:text-leaf-deep transition-colors">
                PAN8 — A Nutri Co.
              </h3>
              <p className="mt-2 text-sm leading-[1.6] text-ink-soft">
                Millet-first breakfast pancakes, crispy dosas, traditional upma, and cold-pressed protein bars with 15–24g plant protein.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-ink group-hover:text-leaf-deep">
                Explore the PAN8 shelf →
              </span>
            </div>
          </Link>

          {/* Card 2: Supply & Corridors */}
          <Link
            href="/operations"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line/70 bg-bone/90 backdrop-blur-md shadow-[0_16px_36px_-12px_rgba(26,22,20,0.06),inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-12px_rgba(26,22,20,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] hover:border-ink/30"
          >
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-bone-deep">
              <Image
                src="/innaya-sourcing.jpg"
                alt="Agricultural Procurement and Corridors"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 rounded-full bg-ink/75 backdrop-blur-md px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-bone border border-white/10">
                Division 03 · Sourcing
              </div>
              <div className="absolute bottom-3 right-3 rounded-full bg-bone/90 backdrop-blur-md text-ink font-mono px-3 py-1 text-xs border border-line/80 shadow-xs">
                TN &amp; Kerala Corridors
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl font-normal tracking-tight text-ink group-hover:text-leaf-deep transition-colors">
                Farmgate Sourcing &amp; Processing
              </h3>
              <p className="mt-2 text-sm leading-[1.6] text-ink-soft">
                Direct relationships with farmer producer organisations (FPOs) across Dharmapuri, Palakkad, and Wayanad, eliminating mandi middlemen.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-ink group-hover:text-leaf-deep">
                Review supply footprint →
              </span>
            </div>
          </Link>

          {/* Card 3: Software & Platforms */}
          <Link
            href="/platforms"
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-line/70 bg-bone/90 backdrop-blur-md shadow-[0_16px_36px_-12px_rgba(26,22,20,0.06),inset_0_1px_0_rgba(255,255,255,0.7)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-12px_rgba(26,22,20,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] hover:border-ink/30"
          >
            <div className="relative aspect-[16/11] w-full overflow-hidden bg-bone-deep">
              <Image
                src="/innaya-infrastructure.jpg"
                alt="Innaya Software & Cold-Chain Technology"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 rounded-full bg-ink/75 backdrop-blur-md px-3 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-bone border border-white/10">
                Division 01 · Software
              </div>
              <div className="absolute bottom-3 right-3 rounded-full bg-bone/90 backdrop-blur-md text-ink font-mono px-3 py-1 text-xs border border-line/80 shadow-xs">
                Innaya Intelligence
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl font-normal tracking-tight text-ink group-hover:text-leaf-deep transition-colors">
                Innaya Intelligence Suite
              </h3>
              <p className="mt-2 text-sm leading-[1.6] text-ink-soft">
                Multilingual vernacular telephony, computer vision grain testing, and transit cold-chain telemetry that safeguard quality and margins.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-ink group-hover:text-leaf-deep">
                See system architecture →
              </span>
            </div>
          </Link>
        </div>

        {/* Institutional Traction Bar */}
        <div className="mt-16 sm:mt-20 border-t border-line/70 pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {TRACTION.map((t) => (
              <div key={t.label} className="border-l-2 border-leaf-deep/40 pl-4">
                <div className="font-serif text-3xl sm:text-4xl font-normal text-ink">
                  {t.value}
                </div>
                <div className="mt-1 text-xs font-medium text-ink-soft leading-snug">
                  {t.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
