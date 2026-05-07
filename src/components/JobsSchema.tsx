import Script from "next/script";
import { JOBS } from "@/data/careers";
import { SITE } from "@/data/site";

function buildJobsLd(): string {
  const data = JOBS.map((j) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: j.title,
    description: `${j.about} Responsibilities: ${j.responsibilities.join(
      "; ",
    )}. Requirements: ${j.requirements.join("; ")}.`,
    datePosted: new Date().toISOString().split("T")[0],
    employmentType:
      j.type === "Full-time"
        ? "FULL_TIME"
        : j.type === "Internship"
          ? "INTERN"
          : j.type === "Part-time"
            ? "PART_TIME"
            : "CONTRACTOR",
    hiringOrganization: {
      "@type": "Organization",
      name: SITE.legal,
      sameAs: SITE.url,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: j.location.split(",")[0],
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
    },
    applicantLocationRequirements: { "@type": "Country", name: "India" },
  }));
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function JobsSchema() {
  return (
    <Script
      id="jobs-jsonld"
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {buildJobsLd()}
    </Script>
  );
}
