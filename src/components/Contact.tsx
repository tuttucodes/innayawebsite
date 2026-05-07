"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { SectionHead, SectionShell } from "./Section";
import { SITE } from "@/data/site";
import { cn } from "@/lib/cn";

const REASONS = [
  "Investment",
  "Distribution / Retail",
  "Modern Trade",
  "Export",
  "Partnership",
  "Press",
  "Careers",
  "Other",
] as const;

type Reason = (typeof REASONS)[number];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [reason, setReason] = useState<Reason>("Investment");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = `[${reason}] Innaya Nutri Foods enquiry — ${name || "Anonymous"}`;
    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      `Reason: ${reason}`,
      "",
      message,
    ].filter(Boolean);
    const body = lines.join("\n");
    const href = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <SectionShell id="contact" className="pb-32">
      <SectionHead
        index="08"
        eyebrow="Contact"
        title={
          <>
            Investors, retailers,<br />
            <span className="italic text-leaf-deep">distributors —</span> say hi.
          </>
        }
        blurb="Drop us a note. The form drafts an email straight to the CEO."
      />

      <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12">
        <aside className="md:col-span-4">
          <div className="rounded-3xl border border-line bg-bone-deep/40 p-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
              Direct line
            </span>
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="mt-3 block break-all font-serif text-2xl tracking-tight text-ink hover:text-leaf-deep"
            >
              {SITE.contactEmail}
            </a>
            <hr className="my-6 border-line" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
              Headquarters
            </span>
            <p className="mt-3 text-[15px] leading-[1.55] text-ink-soft">
              F223, DLF New Town Heights<br />
              Seaport Airport Road, Kakkanad<br />
              Ernakulam, Kerala — 682037<br />
              India
            </p>
            <hr className="my-6 border-line" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
              Brand · Sales
            </span>
            <a
              href="https://www.pan8.in"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block font-serif text-xl tracking-tight text-ink hover:text-leaf-deep"
            >
              pan8.in ↗
            </a>
            <a
              href={`mailto:${SITE.brandEmail}`}
              className="mt-2 block text-sm text-ink-soft hover:text-ink"
            >
              {SITE.brandEmail}
            </a>
          </div>
        </aside>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={handleSubmit}
          className="md:col-span-8"
        >
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line">
            <div className="grid bg-bone p-6 md:grid-cols-2 md:gap-px md:bg-line">
              <Field
                id="name"
                label="Your name"
                value={name}
                onChange={setName}
                required
              />
              <Field
                id="email"
                type="email"
                label="Work email"
                value={email}
                onChange={setEmail}
                required
              />
            </div>
            <div className="grid bg-bone p-6">
              <Field
                id="company"
                label="Company / Organisation (optional)"
                value={company}
                onChange={setCompany}
              />
            </div>
            <div className="bg-bone p-6">
              <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
                Why are you reaching out
              </span>
              <div className="mt-4 flex flex-wrap gap-2">
                {REASONS.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setReason(r)}
                    className={cn(
                      "rounded-full border px-4 py-2 text-[13px] tracking-tight transition-all",
                      reason === r
                        ? "border-ink bg-ink text-bone"
                        : "border-line bg-bone text-ink-soft hover:border-ink/40 hover:text-ink",
                    )}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-bone p-6">
              <label
                htmlFor="message"
                className="block font-mono text-[10px] uppercase tracking-[0.22em] text-mute"
              >
                Your message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you'd like to talk about…"
                className="mt-3 w-full resize-y border-0 bg-transparent text-[16px] leading-[1.6] text-ink placeholder:text-mute focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs text-mute">
              By sending, you&apos;ll be redirected to your email client to draft a
              message to <span className="text-ink-soft">{SITE.contactEmail}</span>.
              No data is stored on this site.
            </p>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium text-bone transition-colors hover:bg-leaf-deep"
            >
              {sent ? "Email drafted ✓" : "Send to CEO"}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </motion.form>
      </div>
    </SectionShell>
  );
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}

function Field({ id, label, value, onChange, type = "text", required }: FieldProps) {
  return (
    <div className="bg-bone p-2 first:pl-0 md:p-6">
      <label
        htmlFor={id}
        className="block font-mono text-[10px] uppercase tracking-[0.22em] text-mute"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-3 w-full border-0 border-b border-transparent bg-transparent pb-1 text-[18px] tracking-tight text-ink focus:border-ink focus:outline-none"
        placeholder={type === "email" ? "you@company.com" : ""}
      />
    </div>
  );
}
