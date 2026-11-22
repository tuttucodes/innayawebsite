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

interface ContactProps {
  hideHeader?: boolean;
  showSectionNumber?: boolean;
}

export default function Contact({
  hideHeader = false,
  showSectionNumber = true,
}: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [reason, setReason] = useState<Reason>("Investment");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, reason, message }),
      });

      if (!res.ok) {
        throw new Error("Failed to send inquiry");
      }

      setStatus("success");
      setMessage("");
    } catch {
      // Graceful fallback to client mailto if network or API fails
      const subject = `[${reason}] INFPL inquiry — ${name || "Anonymous"}`;
      const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\nReason: ${reason}\n\n${message}`;
      const href = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = href;
      setStatus("success");
    } finally {
      setLoading(false);
    }
  }

  function handleCopyEmail() {
    navigator.clipboard.writeText(SITE.contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  return (
    <SectionShell id="contact" className="pb-20 md:pb-28">
      {!hideHeader && (
        <SectionHead
          index="06"
          showSectionNumber={showSectionNumber}
          eyebrow="Contact"
          title={
            <>
              Start a conversation.{" "}
              <span className="font-serif italic font-normal text-leaf-deep">We respond directly.</span>
            </>
          }
          blurb="Connect with Innaya Nutrifoods regarding supply partnerships, PAN8 distribution, retail placement, or institutional procurement."
        />
      )}

      <div className={cn("grid gap-10 md:grid-cols-12 md:gap-12", !hideHeader && "mt-12 md:mt-16")}>
        <aside className="md:col-span-4">
          <div className="sticky top-28 rounded-3xl border border-line bg-bone-deep/40 p-7 sm:p-8">
            <InfoBlock
              label="Direct Executive Line"
              primary={
                <a
                  href={`mailto:${SITE.contactEmail}`}
                  className="block break-all font-sans font-semibold text-[17px] leading-[1.25] tracking-tight text-ink hover:text-leaf-deep"
                >
                  {SITE.contactEmail}
                </a>
              }
              secondary={
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="mt-2 text-xs font-mono uppercase tracking-[0.14em] text-mute hover:text-ink transition-colors"
                >
                  {copied ? "Copied to clipboard ✓" : "Copy email address ↗"}
                </button>
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
              label="PAN8 Brand &amp; Sales"
              primary={
                <a
                  href={`mailto:${SITE.brandEmail}`}
                  className="block break-all font-sans font-semibold text-[16px] text-ink hover:text-leaf-deep"
                >
                  {SITE.brandEmail}
                </a>
              }
              secondary={
                <p className="mt-1 text-xs text-ink-soft">
                  Modern trade, dark stores &amp; export distribution
                </p>
              }
            />
            <Divider />
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute space-y-1">
              <p>CIN: {SITE.cin}</p>
              <p>FSSAI Central Type 1 Licensed</p>
            </div>
          </div>
        </aside>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={handleSubmit}
          className="flex flex-col md:col-span-8"
        >
          <div className="overflow-hidden rounded-3xl border border-line bg-bone shadow-sm">
            {/* Reason selector */}
            <div className="border-b border-line bg-bone-deep/30 px-5 py-4 sm:px-8">
              <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-mute mb-2.5">
                Inquiry Topic
              </span>
              <div className="flex flex-wrap gap-1.5">
                {REASONS.map((r) => {
                  const isActive = reason === r;
                  return (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setReason(r)}
                      className={cn(
                        "rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] transition-all",
                        isActive
                          ? "bg-ink text-bone font-medium"
                          : "border border-line bg-bone text-ink-soft hover:border-ink/40 hover:text-ink",
                      )}
                    >
                      {r}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid divide-y divide-line sm:grid-cols-2 sm:divide-x sm:divide-y-0 border-b border-line">
              <Field
                id="name"
                label="Full name"
                required
                value={name}
                onChange={setName}
                placeholder="Rahul Babu"
              />
              <Field
                id="email"
                type="email"
                label="Work email"
                required
                value={email}
                onChange={setEmail}
                placeholder="name@company.com"
              />
            </div>

            <div className="border-b border-line">
              <Field
                id="company"
                label="Company / Organisation"
                value={company}
                onChange={setCompany}
                placeholder="Venture, Retail Chain, FPO, or Firm"
                hint="Optional"
              />
            </div>

            <div className="px-5 py-5 sm:px-8 sm:py-6">
              <div className="flex items-baseline justify-between gap-3">
                <FieldLabel htmlFor="message">Your Message</FieldLabel>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                  Direct to leadership
                </span>
              </div>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="A few lines on what you would like to discuss (volume, pilot, investment, or supply)..."
                className="mt-3 w-full resize-y border-0 bg-transparent text-[15px] leading-[1.65] text-ink placeholder:text-mute/70 focus:outline-none"
              />
            </div>
          </div>

          {status === "success" && (
            <div className="mt-4 rounded-2xl border border-leaf/40 bg-leaf/10 p-4 text-sm text-leaf-deep font-medium">
              Inquiry sent successfully. The CEO&apos;s office will reply within 48 hours.
            </div>
          )}

          <div className="mt-6 flex flex-col-reverse items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[12px] leading-[1.55] text-mute">
              Inquiries are routed directly to <span className="text-ink font-medium">{SITE.contactEmail}</span>. No third-party brokers.
            </p>
            <button
              type="submit"
              disabled={loading}
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-ink px-8 py-3.5 text-[14px] font-medium text-bone transition-colors hover:bg-leaf-deep disabled:opacity-50 whitespace-nowrap"
            >
              <span>{loading ? "Sending..." : "Send to CEO"}</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
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
      <div className="mt-2.5">{primary}</div>
      {secondary}
    </div>
  );
}

function Divider() {
  return <hr className="my-5 border-0 border-t border-line/70" />;
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
    <div className={cn("px-5 py-4 sm:px-8 sm:py-5", className)}>
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
        className="mt-2 w-full border-0 border-b border-transparent bg-transparent pb-1 text-[16px] tracking-tight text-ink placeholder:text-mute/60 focus:border-ink focus:outline-none"
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
