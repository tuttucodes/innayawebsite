import Link from "next/link";
import { SITE } from "@/data/site";
import { LogoMark } from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink text-bone">
      <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-24 md:px-10 md:pt-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="mb-8 flex items-center gap-4">
              <span className="block h-12 w-12">
                <LogoMark tone="bone" />
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-xl tracking-tight">Innaya</span>
                <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/70">
                  Nutri Foods · INFPL
                </span>
              </div>
            </div>
            <h2 className="mt-6 font-serif text-[clamp(3rem,1rem+7vw,7rem)] leading-[0.92] tracking-[-0.03em]">
              Nutrition,<br />
              <em className="text-amber">at scale.</em>
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-[1.6] text-bone/70">
              An AI-first food technology company, headquartered in Kerala. Building the
              brands India will eat tomorrow.
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
                <span className="font-serif italic">pan8.in</span>
                <span className="opacity-50 transition-opacity group-hover:opacity-100">↗</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-6 md:grid-cols-3">
            <Col title="Sitemap">
              <Link href="/about">Company</Link>
              <Link href="/brands/pan8">Brands</Link>
              <Link href="/products">Products</Link>
              <Link href="/sustainability">Sustainability</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/contact">Contact</Link>
            </Col>
            <Col title="Brands">
              <a href={SITE.social.pan8} target="_blank" rel="noopener noreferrer">
                pan8.in ↗
              </a>
              <span className="text-bone/70">More — soon</span>
            </Col>
            <Col title="Reach us">
              <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
              <a href={`mailto:${SITE.hrEmail}`}>{SITE.hrEmail}</a>
              <a href={`mailto:${SITE.brandEmail}`}>{SITE.brandEmail}</a>
              <span className="text-bone/70">{SITE.hq}</span>
            </Col>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-bone/15 pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/70 md:flex-row md:items-center md:justify-between">
          <span>
            © {year} INFPL — {SITE.legal}. All rights reserved.
          </span>
          <span>Made in India</span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none select-none px-5 pb-6 md:px-10"
      >
        <span className="block font-serif text-[clamp(5rem,1rem+22vw,22rem)] leading-[0.85] tracking-[-0.04em] text-bone/[0.06]">
          INNAYA
        </span>
      </div>
    </footer>
  );
}

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-bone/70">
        {title}
      </span>
      <div className="mt-4 flex flex-col gap-2 text-[14px] text-bone/85 [&_a]:transition-colors [&_a:hover]:text-amber">
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
