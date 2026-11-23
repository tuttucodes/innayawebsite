"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { TOPICS, type Topic } from "@/data/contact";
import { SITE } from "@/data/site";
import { cn } from "@/lib/cn";
import Arrow from "./ui/Arrow";


interface FormValues {
  name: string;
  email: string;
  company: string;
  message: string;
}

type FieldErrors = Partial<Record<keyof FormValues, string>>;
type Status = "idle" | "sending" | "sent" | "failed";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 10;

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) errors.name = "Tell us who you are.";
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "Enter an email we can reply to.";
  if (values.message.trim().length < MIN_MESSAGE_LENGTH) {
    errors.message = "A sentence or two helps us route this to the right person.";
  }
  return errors;
}

function mailtoFor(topic: Topic, values: FormValues): string {
  const subject = `[${topic}] Enquiry from ${values.name || "the website"}`;
  const body = `Name: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company || "N/A"}\n\n${values.message}`;
  return `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

interface ContactFormProps {
  initialTopic?: Topic;
}

export default function ContactForm({ initialTopic = "Investment" }: ContactFormProps) {
  const [topic, setTopic] = useState<Topic>(initialTopic);
  const [values, setValues] = useState<FormValues>({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function update(field: keyof FormValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, reason: topic }),
      });
      if (!res.ok) throw new Error(`Request failed with ${res.status}`);
      setStatus("sent");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="border-t border-line pt-10"
        role="status"
      >
        <p className="text-[clamp(1.75rem,1.3rem+1.4vw,2.5rem)] font-normal leading-[1.1] tracking-[-0.035em] text-ink">
          Thank you, {values.name.split(" ")[0]}.
        </p>
        <p className="serif-i mt-1 text-[clamp(1.75rem,1.3rem+1.4vw,2.5rem)] leading-[1.1] text-sand">
          We&apos;ll be in touch within two working days.
        </p>
        <p className="mt-8 max-w-[48ch] text-[15.5px] leading-[1.7] text-ink-soft">
          Your note went straight to the founders. If it&apos;s urgent, write to{" "}
          <a href={`mailto:${SITE.contactEmail}`} className="text-ink underline decoration-line-strong underline-offset-4">
            {SITE.contactEmail}
          </a>
          .
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="border-t border-line pt-8">
      <fieldset>
        <legend className="text-[14px] font-medium text-ink">What is this about?</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {TOPICS.map((t) => {
            const active = t === topic;
            return (
              <button
                key={t}
                type="button"
                aria-pressed={active}
                onClick={() => setTopic(t)}
                className={cn(
                  "inline-flex h-10 items-center rounded-full border px-4 text-[14px] transition-colors",
                  active
                    ? "border-forest-deep bg-forest-deep text-paper"
                    : "border-ink/15 text-ink-soft hover:border-ink/40 hover:text-ink",
                )}
              >
                {t}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        <Field id="name" label="Your name" autoComplete="name" value={values.name} error={errors.name} onChange={(v) => update("name", v)} />
        <Field
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          value={values.email}
          error={errors.email}
          onChange={(v) => update("email", v)}
        />
      </div>
      <div className="mt-8">
        <Field
          id="company"
          label="Company or organisation"
          helper="Optional"
          autoComplete="organization"
          value={values.company}
          onChange={(v) => update("company", v)}
        />
      </div>
      <div className="mt-8 flex flex-col gap-2">
        <label htmlFor="message" className="text-[14px] font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-help"}
          className={cn(
            "w-full resize-y rounded-[6px] border bg-paper px-4 py-3 text-[16px] leading-[1.6] text-ink outline-none transition-colors placeholder:text-mute/70 focus:border-forest",
            errors.message ? "border-rust" : "border-line-strong",
          )}
          placeholder="Volumes, timelines, what you'd like to explore."
        />
        {errors.message ? (
          <p id="message-error" className="text-[13px] text-rust">
            {errors.message}
          </p>
        ) : (
          <p id="message-help" className="text-[13px] text-mute">
            Goes directly to the founders. No brokers, no ticket queue.
          </p>
        )}
      </div>

      <AnimatePresence>
        {status === "failed" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            role="alert"
            className="overflow-hidden"
          >
            <p className="mt-8 rounded-[6px] border border-rust/40 bg-rust/5 px-4 py-3 text-[14px] leading-[1.6] text-ink">
              Sorry, that didn&apos;t go through. Your message is still here. Try again, or{" "}
              <a href={mailtoFor(topic, values)} className="underline underline-offset-4">
                send it by email instead
              </a>
              .
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-10 flex flex-col-reverse gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-mute">We reply within two working days.</p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-forest-deep pl-6 pr-5 text-[14px] font-medium text-paper transition-[background-color,transform] hover:bg-forest active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          <Arrow className="transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </form>
  );
}

interface FieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  helper?: string;
  error?: string;
}

function Field({ id, label, value, onChange, type = "text", autoComplete, helper, error }: FieldProps) {
  const describedBy = error ? `${id}-error` : helper ? `${id}-help` : undefined;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="text-[14px] font-medium text-ink">
          {label}
        </label>
        {helper && !error && (
          <span id={`${id}-help`} className="text-[13px] text-mute">
            {helper}
          </span>
        )}
      </div>
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        className={cn(
          "h-12 w-full rounded-[6px] border bg-paper px-4 text-[16px] text-ink outline-none transition-colors focus:border-forest",
          error ? "border-rust" : "border-line-strong",
        )}
      />
      {error && (
        <p id={`${id}-error`} className="text-[13px] text-rust">
          {error}
        </p>
      )}
    </div>
  );
}
