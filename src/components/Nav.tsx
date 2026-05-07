"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/cn";
import { LogoLockup } from "./Logo";

const links = [
  { href: "/about", label: "Company" },
  { href: "/brands/pan8", label: "Brands" },
  { href: "/products", label: "Products" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[backdrop-filter,background,border] duration-500",
          scrolled
            ? "border-b border-line/60 bg-bone/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10">
          <Link
            href="/"
            aria-label="Innaya Nutri Foods — home"
            className="group flex items-center"
          >
            <LogoLockup />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative rounded-full px-4 py-2 text-[13px] tracking-tight text-ink-soft transition-colors hover:text-ink"
              >
                <span className="relative z-10">{l.label}</span>
                <span className="absolute inset-0 -z-0 rounded-full bg-ink/0 transition-colors duration-300 group-hover:bg-ink/[0.05]" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden md:inline-flex group items-center gap-2 rounded-full border border-ink/20 bg-ink px-5 py-2.5 text-[13px] font-medium text-bone transition-all hover:border-ink hover:bg-ink-soft"
            >
              <span className="relative h-1.5 w-1.5 rounded-full bg-leaf">
                <span className="absolute inset-0 animate-ping rounded-full bg-leaf opacity-75" />
              </span>
              Get in touch
              <ArrowIcon />
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-bone/60 backdrop-blur lg:hidden"
            >
              <span
                className={cn(
                  "block h-px w-4 bg-ink transition-transform",
                  open ? "translate-y-px rotate-45" : "-translate-y-1",
                )}
              />
              <span
                className={cn(
                  "block h-px w-4 bg-ink transition-transform",
                  open ? "-translate-y-px -rotate-45" : "translate-y-1",
                )}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <motion.div
        initial={false}
        animate={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-40 bg-bone/95 backdrop-blur-2xl lg:hidden"
      >
        <nav className="mx-auto flex max-w-[1400px] flex-col gap-2 px-5 pt-28">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: open ? 1 : 0,
                x: open ? 0 : -20,
                transition: { delay: open ? i * 0.04 : 0, duration: 0.5 },
              }}
              className="group flex items-baseline justify-between border-b border-line/70 py-5"
            >
              <span className="font-serif text-4xl tracking-tight">{l.label}</span>
              <span className="font-mono text-xs text-mute">0{i + 1}</span>
            </motion.a>
          ))}
        </nav>
      </motion.div>
    </>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      className="-mr-0.5 transition-transform group-hover:translate-x-0.5"
      aria-hidden="true"
    >
      <path
        d="M3 7h8m-3-3 3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
