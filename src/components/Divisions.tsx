"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { SectionShell } from "./Section";
import { DIVISIONS } from "@/data/site";

export default function Divisions() {
  return (
    <SectionShell id="divisions">
      <div className="border-t border-line/60 pt-10 md:pt-14">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.24em] text-mute">
          <span>Structure &amp; Portfolio</span>
          <span>Innaya Group</span>
        </div>

        {/* Editorial statement */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-16 lg:items-end">
          <div className="lg:col-span-6">
            <h2 className="font-sans text-[clamp(2.1rem,1.2rem+3.5vw,3.8rem)] font-bold leading-[1.04] tracking-[-0.03em] text-ink">
              One holding company.{" "}
              <span className="font-serif italic font-normal text-leaf-deep">
                Three focused divisions.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[16px] leading-[1.65] text-ink-soft">
              Innaya operates at the intersection of enterprise software and physical food
              manufacturing. Explore our dedicated operating divisions below.
            </p>
          </div>
        </div>

        {/* 3 Structured Showcase Cards with High-End Photography */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {DIVISIONS.map((d, i) => (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-bone transition-all duration-300 hover:border-ink/40 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)]"
            >
              <div>
                {/* Visual Header Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-bone-deep">
                  <Image
                    src={d.image}
                    alt={d.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-bone font-mono text-[10px] uppercase tracking-[0.2em]">
                    <span className="rounded-full bg-ink/70 backdrop-blur px-2.5 py-1">
                      Division {d.num}
                    </span>
                    <span className="rounded-full bg-bone/20 backdrop-blur px-2.5 py-1 text-bone">
                      {d.tagline}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="font-sans text-2xl font-bold tracking-tight text-ink">
                    {d.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.6] text-ink-soft">
                    {d.description}
                  </p>

                  <div className="mt-6 border-t border-line/60 pt-4">
                    <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-mute">
                      Core Lines &amp; Capabilities
                    </span>
                    <ul className="mt-2 space-y-1.5 text-[13px] font-medium text-ink">
                      {d.offerings.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1 w-1 rounded-full bg-leaf" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Button to Dedicated Page */}
              <div className="p-6 sm:p-7 pt-0">
                <Link
                  href={d.href}
                  className="flex w-full items-center justify-between rounded-full border border-line bg-bone-deep/50 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-bone"
                >
                  <span>{d.cta}</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
