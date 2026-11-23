"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { cn } from "@/lib/cn";
import { LogoLockup } from "./Logo";
import Arrow from "./ui/Arrow";

interface NavLink {
  href: string;
  label: string;
  note: string;
}

const LINKS: NavLink[] = [
  { href: "/thesis", label: "Thesis", note: "Why India needs an assured buyer" },
  { href: "/operations", label: "Operations", note: "Sourcing corridors and processing" },
  { href: "/platforms", label: "Platforms", note: "Innaya Intelligence software" },
  { href: "/brands/pan8", label: "PAN8", note: "Our consumer nutrition brand" },
  { href: "/about", label: "Company", note: "Founders, story, governance" },
  { href: "/careers", label: "Careers", note: "Open roles in Kerala" },
];

const SCROLL_THRESHOLD = 32;

function isActive(pathname: string, href: string): boolean {
  if (href === "/brands/pan8") {
    return pathname.startsWith("/brands") || pathname.startsWith("/products");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > SCROLL_THRESHOLD));

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Home opens on a dark photograph: nav sits on it in light type until scrolled.
  const overlay = pathname === "/" && !scrolled && !open;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color] duration-300",
          overlay
            ? "border-b border-paper/15 bg-transparent text-paper"
            : "border-b border-line/80 bg-paper/90 text-ink backdrop-blur-md",
        )}
      >
        <div className="wrap flex h-16 items-center justify-between gap-6 md:h-[72px]">
          <Link href="/" aria-label="Innaya Nutri Foods, home" onClick={() => setOpen(false)} className="shrink-0">
            <LogoLockup tone={overlay ? "paper" : "ink"} />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {LINKS.map((l) => {
                const active = isActive(pathname, l.href);
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative inline-flex h-11 items-center px-3.5 text-[14px] tracking-[-0.01em] transition-opacity",
                        active ? "opacity-100" : "opacity-70 hover:opacity-100",
                      )}
                    >
                      {l.label}
                      {active && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-x-3.5 bottom-2.5 h-px bg-current"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className={cn(
                "group hidden h-10 items-center gap-2.5 rounded-full border pl-5 pr-4 text-[13.5px] font-medium transition-colors sm:inline-flex",
                overlay
                  ? "border-paper/40 text-paper hover:bg-paper hover:text-ink"
                  : "border-ink/20 text-ink hover:border-forest-deep hover:bg-forest-deep hover:text-paper",
              )}
            >
              Let&apos;s talk
              <Arrow direction="up-right" className="transition-transform group-hover:-translate-y-0.5" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative grid h-11 w-11 place-items-center lg:hidden"
            >
              <span className="relative block h-3 w-6">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-[1.5px] w-6 bg-current transition-transform duration-300",
                    open && "translate-y-[5px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-[1.5px] w-6 bg-current transition-transform duration-300",
                    open && "-translate-y-[5px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-paper pt-16 lg:hidden"
          >
            <nav aria-label="Mobile" className="wrap flex min-h-full flex-col pb-10">
              <ul className="border-t border-line">
                {LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i, type: "spring", stiffness: 260, damping: 28 }}
                    className="border-b border-line"
                  >
                    <Link
                      href={l.href}
                      aria-current={isActive(pathname, l.href) ? "page" : undefined}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between gap-4 py-5"
                    >
                      <span>
                        <span className="block text-[30px] font-normal leading-none tracking-[-0.035em]">
                          {l.label}
                        </span>
                        <span className="mt-2 block text-[14px] text-mute">{l.note}</span>
                      </span>
                      <Arrow className="text-mute" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-forest-deep text-[15px] font-medium text-paper"
              >
                Contact the founders
                <Arrow />
              </Link>
              <p className="mt-auto pt-10 text-[13px] text-mute">
                Kakkanad, Kerala. Operating across South India.
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
