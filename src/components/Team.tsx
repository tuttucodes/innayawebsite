"use client";

import { motion } from "motion/react";
import { SectionHead, SectionShell } from "./Section";
import { TEAM } from "@/data/site";

export default function Team() {
  return (
    <SectionShell id="team">
      <SectionHead
        index="07"
        eyebrow="Founders & team"
        title={
          <>
            Built by{" "}
            <span className="italic text-leaf-deep">2 founders</span> +{" "}
            <span className="italic">13 operators.</span>
          </>
        }
        blurb="A young, technical team running tech, brand, growth, design, manufacturing and ops. Lean by design — every hire is a multiplier."
      />

      <div className="mt-16 grid gap-6 md:mt-24 md:grid-cols-2">
        {TEAM.map((m, i) => (
          <motion.article
            key={m.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-line bg-bone-deep/40 p-8 transition-all hover:border-ink/30 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.2)] md:p-10"
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                Co-founder · 0{i + 1}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                50% equity
              </span>
            </div>
            <div className="flex items-end gap-5">
              <Initials name={m.name} />
              <div>
                <h3 className="font-serif text-3xl tracking-tight md:text-4xl">{m.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{m.role}</p>
              </div>
            </div>
            <p className="text-[15px] leading-[1.6] text-ink-soft">{m.bio}</p>
            <span className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
              {m.focus}
            </span>
          </motion.article>
        ))}
      </div>

      <div className="mt-12 grid gap-6 rounded-3xl border border-line bg-ink p-8 text-bone md:grid-cols-4 md:p-12">
        <div className="md:col-span-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55">
            Operating team
          </span>
          <h3 className="mt-3 font-serif text-3xl tracking-tight md:text-4xl">
            13 operators across 4 functions.
          </h3>
        </div>
        <FuncCard k="Sales & Marketing" v="Outbound · Distribution · Retail seeding" />
        <FuncCard k="Tech & Product" v="pan8.in · E-commerce · Internal tools" />
        <FuncCard k="Design & Social" v="Packaging · Content · Social presence" />
        <FuncCard k="Operations & Logistics" v="Manufacturing · Dispatch · Inventory" />
      </div>
    </SectionShell>
  );
}

function Initials({ name }: { name: string }) {
  const parts = name.split(" ");
  const initials = (parts[0]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "");
  return (
    <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-ink text-bone md:h-20 md:w-20">
      <span className="font-serif text-xl tracking-tight md:text-2xl">
        {initials.toUpperCase()}
      </span>
    </span>
  );
}

function FuncCard({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-bone/15 bg-bone/[0.04] p-5">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-bone/55">
        {k}
      </span>
      <p className="mt-2 text-[14px] leading-[1.5] text-bone/85">{v}</p>
    </div>
  );
}
