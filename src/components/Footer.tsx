import Link from "next/link";
import { SITE } from "@/data/site";
import { LogoLockup } from "./Logo";
import Arrow from "./ui/Arrow";

interface FooterLink {
  href: string;
  label: string;
  external?: boolean;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const COLUMNS: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Innaya" },
      { href: "/thesis", label: "The assured buyer thesis" },
      { href: "/sustainability", label: "Sustainability" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "What we do",
    links: [
      { href: "/operations", label: "Sourcing & processing" },
      { href: "/platforms", label: "Innaya Intelligence" },
      { href: "/brands/pan8", label: "PAN8" },
      { href: "/products", label: "PAN8 range" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { href: SITE.social.pan8, label: "pan8.in", external: true },
      { href: SITE.social.linkedin, label: "LinkedIn", external: true },
      { href: "https://kernelandoak.com", label: "Kernel & Oak", external: true },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-night text-paper">
      <div className="wrap pb-10 pt-20 md:pt-28">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <LogoLockup tone="paper" />
            <p className="mt-8 max-w-[22ch] text-[clamp(1.6rem,1.2rem+1vw,2.1rem)] font-normal leading-[1.15] tracking-[-0.03em]">
              From farmgate to pantry.{" "}
              <span className="serif-i text-[1.08em] text-sand-soft">Built in Kerala.</span>
            </p>
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="group mt-10 inline-flex items-center gap-2 border-b border-paper/25 pb-1.5 text-[15px] transition-colors hover:border-paper"
            >
              {SITE.contactEmail}
              <Arrow direction="up-right" className="transition-transform group-hover:-translate-y-0.5" />
            </a>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:col-span-7">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h2 className="text-[13px] text-paper/50">{col.title}</h2>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.external ? (
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[15px] text-paper/85 transition-colors hover:text-sand-soft"
                        >
                          {l.label}
                          <Arrow direction="up-right" className="h-3 w-3 opacity-60" />
                        </a>
                      ) : (
                        <Link
                          href={l.href}
                          className="text-[15px] text-paper/85 transition-colors hover:text-sand-soft"
                        >
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-20 grid gap-6 border-t border-paper/15 pt-8 text-[13px] text-paper/50 md:grid-cols-12">
          <address className="not-italic leading-relaxed md:col-span-5">
            {SITE.legal}
            <br />
            F223, DLF New Town Heights, Kakkanad, Ernakulam, Kerala 682037
          </address>
          <div className="flex flex-wrap items-start gap-x-5 gap-y-2 md:col-span-7 md:justify-end">
            <Link href="/privacy" className="hover:text-paper">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-paper">
              Terms
            </Link>
            <span>&copy; {year}</span>
          </div>
        </div>

        <p className="mt-10 text-[13px] text-paper/40">
          A{" "}
          <a
            href="https://kernelandoak.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-paper/20 underline-offset-4 hover:text-paper/70"
          >
            Kernel &amp; Oak
          </a>{" "}
          group company.
        </p>
      </div>
    </footer>
  );
}
