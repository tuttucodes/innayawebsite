"use client";

import { SITE } from "@/data/site";
import type { JobOpening } from "@/data/careers";

export default function JobApplyButton({
  job,
  className = "",
  children,
}: {
  job: JobOpening;
  className?: string;
  children?: React.ReactNode;
}) {
  function handleApply() {
    const subject = `Application — ${job.title} (${job.team})`;
    const body = [
      `Hi Innaya team,`,
      ``,
      `I'd like to apply for the role: ${job.title} (${job.team})`,
      `Location: ${job.location} · ${job.type}`,
      ``,
      `A bit about me:`,
      `— Name:`,
      `— Years of experience:`,
      `— Current role:`,
      `— Linkedin / portfolio:`,
      ``,
      `Why this role:`,
      ``,
      `Resume attached.`,
      ``,
      `Thanks,`,
    ].join("\n");
    const href = `mailto:${SITE.hrEmail}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }

  return (
    <button
      type="button"
      onClick={handleApply}
      className={
        className ||
        "group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-bone transition-colors hover:bg-leaf-deep"
      }
    >
      {children ?? (
        <>
          Apply
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </>
      )}
    </button>
  );
}
