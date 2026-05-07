"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
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

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[backdrop-filter,background,border] duration-500",
          scrolled || open
            ? "border-b border-line/60 bg-bone/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10">
          <Link
            href="/"
            title="Innaya Nutri Foods — home"
            onClick={() => setOpen(false)}
            className="group flex items-center"
          >
            <LogoLockup />
            <span className="sr-only">— home</span>
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
            <MenuButton open={open} onClick={() => setOpen((o) => !o)} />
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-sheet"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bone/[0.97] backdrop-blur-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex h-full flex-col px-5 pb-8 pt-24">
              <nav className="flex flex-1 flex-col">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ delay: 0.06 + i * 0.05, duration: 0.5, ease: EASE }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline justify-between border-b border-line/60 py-5 active:bg-ink/[0.03]"
                    >
                      <span className="font-serif text-[2.25rem] leading-none tracking-tight text-ink transition-transform group-hover:translate-x-1">
                        {l.label}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.06 + links.length * 0.05, duration: 0.5, ease: EASE }}
                className="mt-8 flex flex-col gap-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-[14px] font-medium text-bone transition-colors active:bg-ink-soft"
                >
                  <span className="relative h-1.5 w-1.5 rounded-full bg-leaf">
                    <span className="absolute inset-0 animate-ping rounded-full bg-leaf opacity-75" />
                  </span>
                  Get in touch
                  <ArrowIcon />
                </Link>
                <p className="text-center font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                  Kerala · India
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

interface MenuButtonProps {
  open: boolean;
  onClick: () => void;
}

function MenuButton({ open, onClick }: MenuButtonProps) {
  return (
    <button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      aria-controls="mobile-sheet"
      onClick={onClick}
      className={cn(
        "relative grid h-11 w-11 place-items-center rounded-full border transition-colors lg:hidden",
        open
          ? "border-ink bg-ink text-bone"
          : "border-line bg-bone/70 text-ink backdrop-blur hover:border-ink/40",
      )}
    >
      <span className="relative block h-3.5 w-5">
        <motion.span
          aria-hidden="true"
          animate={open ? { y: 7, rotate: 45 } : { y: 0, rotate: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="absolute left-0 top-0 block h-[1.75px] w-5 rounded-full bg-current"
        />
        <motion.span
          aria-hidden="true"
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 top-1.5 block h-[1.75px] w-5 rounded-full bg-current"
        />
        <motion.span
          aria-hidden="true"
          animate={open ? { y: -7, rotate: -45 } : { y: 0, rotate: 0 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="absolute bottom-0 left-0 block h-[1.75px] w-5 rounded-full bg-current"
        />
      </span>
    </button>
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
