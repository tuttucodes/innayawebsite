import Link from "next/link";
import { SITE } from "@/data/site";
import { LogoMark } from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative max-w-full overflow-hidden bg-ink text-bone">
      <div className="mx-auto max-w-[1360px] px-5 pb-10 pt-20 sm:px-8 md:px-12 md:pt-28">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-5">
            <div className="mb-6 flex items-center gap-3.5">
              <span className="block h-10 w-10">
                <LogoMark tone="bone" />
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-sans text-xl font-bold tracking-tight text-bone">
                  Innaya
                </span>
                <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-bone/60">
                  Nutrifoods Private Limited
                </span>
              </div>
            </div>

            <h2 className="mt-6 font-sans text-[clamp(2.2rem,1rem+4.5vw,4.5rem)] font-bold leading-[0.98] tracking-[-0.035em] text-bone">
              Operating the infrastructure{" "}
              <span className="font-serif italic font-normal text-amber">of food.</span>
            </h2>

            <p className="mt-5 max-w-md text-[15px] leading-[1.65] text-bone/70">
              Integrated agricultural technology and consumer food operations. Headquartered
              in Kakkanad, Kerala. Operating across South India.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Innaya Nutri Foods on LinkedIn"
                className="group inline-flex items-center gap-2 rounded-full border border-bone/20 bg-bone/[0.05] px-4 py-2 text-[13px] tracking-tight text-bone/85 transition-all hover:border-amber hover:bg-bone/[0.1] hover:text-amber"
              >
                <LinkedinIcon />
                LinkedIn
                <span className="opacity-50 transition-opacity group-hover:opacity-100">↗</span>
              </a>
              <a
                href={SITE.social.pan8}
                target="_blank"
                rel="noopener noreferrer"
                title="PAN8 — A Nutri Co."
                className="group inline-flex items-center gap-2 rounded-full border border-bone/20 bg-bone/[0.05] px-4 py-2 text-[13px] tracking-tight text-bone/85 transition-all hover:border-amber hover:bg-bone/[0.1] hover:text-amber"
              >
                <span className="font-sans font-medium">pan8.in</span>
                <span className="opacity-50 transition-opacity group-hover:opacity-100">↗</span>
              </a>
            </div>
          </div>

          {/* Directory Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <Col title="The Group">
              <Link href="/">Overview</Link>
              <Link href="/#divisions">Divisions</Link>
              <Link href="/operations">Operations</Link>
              <Link href="/about">Corporate Info</Link>
              <Link href="/contact">Contact</Link>
            </Col>
            <Col title="Platforms & Software">
              <Link href="/platforms">Innaya Intelligence</Link>
              <Link href="/platforms">Innaya Voice &amp; Source</Link>
              <Link href="/platforms">Innaya FirstMile</Link>
              <Link href="/platforms">Cold-Chain Telemetry</Link>
              <Link href="/platforms">AWS Cloud Stack</Link>
            </Col>
            <Col title="Consumer Brands">
              <a href={SITE.social.pan8} target="_blank" rel="noopener noreferrer">
                PAN8 Store (pan8.in) ↗
              </a>
              <Link href="/brands/pan8">PAN8 Brand Overview</Link>
              <Link href="/products">All 13 Millet SKUs</Link>
              <Link href="/brands/pan8">Pancakes &amp; Dosas</Link>
              <Link href="/brands/pan8">Upma &amp; Protein Bars</Link>
            </Col>
          </div>
        </div>

        {/* Corporate bottom row */}
        <div className="mt-16 flex flex-col gap-4 border-t border-bone/15 pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/60 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {SITE.legal} · All Rights Reserved
          </span>
          <span>{SITE.hq}</span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden px-5 pb-4 md:px-12"
      >
        <span className="block font-sans font-bold text-[clamp(3.5rem,1rem+16vw,16rem)] leading-[0.8] tracking-[-0.05em] text-bone/[0.08]">
          INNAYA
        </span>
      </div>
    </footer>
  );
}

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50">
        {title}
      </span>
      <div className="mt-4 flex flex-col gap-2.5 text-[14px] text-bone/85 [&_a]:transition-colors [&_a:hover]:text-amber">
        {children}
      </div>
    </div>
  );
}

function LinkedinIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
