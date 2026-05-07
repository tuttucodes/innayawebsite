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
    const subject = `[${reason}] INFPL enquiry — ${name || "Anonymous"}`;
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
        blurb="Drop INFPL a note. The form drafts an email straight to the CEO."
      />

      <div className="mt-16 grid gap-10 md:mt-24 md:grid-cols-12 md:gap-12">
        <aside className="md:col-span-4">
          <div className="sticky top-28 rounded-3xl border border-line bg-bone-deep/40 p-8">
            <InfoBlock
              label="Direct line"
              primary={
                <a
                  href={`mailto:${SITE.contactEmail}`}
                  className="block break-all font-serif text-[22px] leading-[1.15] tracking-tight text-ink hover:text-leaf-deep"
                >
                  {SITE.contactEmail}
                </a>
              }
            />
            <Divider />
            <InfoBlock
              label="Headquarters"
              primary={
                <p className="text-[14px] leading-[1.6] text-ink-soft">
                  F223, DLF New Town Heights<br />
                  Seaport Airport Road, Kakkanad<br />
                  Ernakulam, Kerala — 682037, India
                </p>
              }
            />
            <Divider />
            <InfoBlock
              label="Brand · Sales"
              primary={
                <a
                  href={SITE.social.pan8}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-serif text-[20px] tracking-tight text-ink hover:text-leaf-deep"
                >
                  pan8.in <span className="text-mute">↗</span>
                </a>
              }
              secondary={
                <a
                  href={`mailto:${SITE.brandEmail}`}
                  className="mt-1.5 block text-[13px] text-ink-soft hover:text-ink"
                >
                  {SITE.brandEmail}
                </a>
              }
            />
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
          <div className="rounded-3xl border border-line bg-bone shadow-[0_30px_80px_-50px_rgba(31,26,20,0.18)]">
            <div className="grid border-b border-line/70 md:grid-cols-2">
              <Field
                id="name"
                label="Your name"
                value={name}
                onChange={setName}
                required
                placeholder="Jane Doe"
              />
              <Field
                id="email"
                type="email"
                label="Work email"
                value={email}
                onChange={setEmail}
                required
                placeholder="jane@company.com"
                className="md:border-l md:border-line/70"
              />
            </div>

            <Field
              id="company"
              label="Company / Organisation"
              hint="Optional"
              value={company}
              onChange={setCompany}
              placeholder="Acme Capital, Reliance Retail, …"
            />

            <div className="border-t border-line/70 px-7 py-6 md:px-9">
              <FieldLabel>Why are you reaching out</FieldLabel>
              <div className="mt-4 flex flex-wrap gap-2">
                {REASONS.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setReason(r)}
                    aria-pressed={reason === r}
                    className={cn(
                      "rounded-full border px-3.5 py-2 text-[12.5px] font-medium tracking-tight transition-all",
                      reason === r
                        ? "border-ink bg-ink text-bone shadow-[0_4px_12px_-4px_rgba(31,26,20,0.4)]"
                        : "border-line bg-bone text-ink-soft hover:border-ink/40 hover:text-ink",
                    )}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-line/70 px-7 py-6 md:px-9">
              <label htmlFor="message">
                <FieldLabel>Your message</FieldLabel>
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="A few lines on what you'd like to discuss…"
                className="mt-3 w-full resize-y border-0 bg-transparent text-[16px] leading-[1.65] text-ink placeholder:text-mute focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[12px] leading-[1.55] text-mute">
              Sending opens your email client with a draft to{" "}
              <span className="text-ink-soft">{SITE.contactEmail}</span>. INFPL
              stores nothing on this site.
            </p>
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-[14px] font-medium text-bone transition-colors hover:bg-leaf-deep sm:w-auto"
            >
              {sent ? "Email drafted ✓" : "Send to CEO"}
              <ArrowRight />
            </button>
          </div>
        </motion.form>
      </div>
    </SectionShell>
  );
}

interface InfoBlockProps {
  label: string;
  primary: React.ReactNode;
  secondary?: React.ReactNode;
}

function InfoBlock({ label, primary, secondary }: InfoBlockProps) {
  return (
    <div>
      <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
        {label}
      </span>
      <div className="mt-3">{primary}</div>
      {secondary}
    </div>
  );
}

function Divider() {
  return <hr className="my-6 border-0 border-t border-line/70" />;
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  hint?: string;
  className?: string;
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
  hint,
  className,
}: FieldProps) {
  return (
    <div className={cn("px-7 py-6 md:px-9", className)}>
      <div className="flex items-baseline justify-between gap-3">
        <FieldLabel htmlFor={id}>{label}</FieldLabel>
        {hint && (
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute/80">
            {hint}
          </span>
        )}
      </div>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-3 w-full border-0 border-b border-transparent bg-transparent pb-1.5 text-[18px] tracking-tight text-ink placeholder:text-mute/60 focus:border-ink focus:outline-none"
      />
    </div>
  );
}

function FieldLabel({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor?: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block font-mono text-[10px] uppercase tracking-[0.22em] text-mute"
    >
      {children}
    </label>
  );
}

function ArrowRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      className="transition-transform group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path
        d="M3 7h8m-3-3 3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
