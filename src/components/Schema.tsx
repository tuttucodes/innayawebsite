import { SITE } from "@/data/site";

function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function Schema() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.legal,
    alternateName: "Innaya Nutri Foods",
    url: SITE.url,
    email: SITE.contactEmail,
    foundingDate: "2024-07-22",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kakkanad",
        addressRegion: "Kerala",
        postalCode: "682037",
        addressCountry: "IN",
      },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "F223, DLF New Town Heights, Seaport Airport Road",
      addressLocality: "Kakkanad, Ernakulam",
      addressRegion: "Kerala",
      postalCode: "682037",
      addressCountry: "IN",
    },
    legalName: SITE.legal,
    sameAs: [SITE.social.pan8, SITE.social.linkedin],
    logo: `${SITE.url}/innaya-logo.png`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SITE.contactEmail,
        areaServed: "IN",
      },
      {
        "@type": "ContactPoint",
        contactType: "human resources",
        email: SITE.hrEmail,
        areaServed: "IN",
      },
    ],
    description:
      "Innaya Nutri Foods Pvt Ltd is an AI-first food technology company headquartered in Kerala, India, building millet-based plant-protein nutrition under the PAN8 brand.",
    industry: "Food & Beverages",
    brand: [
      {
        "@type": "Brand",
        name: "PAN8 — A Nutri Co.",
        slogan: "Nutrition that works with you.",
        url: "https://www.pan8.in",
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Innaya Nutri Foods",
    url: SITE.url,
    publisher: { "@type": "Organization", name: SITE.legal },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD: payload is fully controlled & escaped
        dangerouslySetInnerHTML={{ __html: jsonLd(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(website) }}
      />
    </>
  );
}
