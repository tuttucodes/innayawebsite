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
        "group inline-flex min-h-12 items-center gap-3 rounded-full bg-forest-deep pl-6 pr-5 text-[14px] font-medium text-paper transition-colors hover:bg-forest active:scale-[0.98]"
      }
    >
      {children ?? (
        <>
          Apply for this role
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
        </>
      )}
    </button>
  );
}
