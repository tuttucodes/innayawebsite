import { SITE } from "@/data/site";

function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function Schema() {
  const orgId = `${SITE.url}#organization`;
  const siteId = `${SITE.url}#website`;
  const placeId = `${SITE.url}#hq`;

  const organization = {
    "@context": "https://schema.org",
    "@type": ["Organization", "Corporation"],
    "@id": orgId,
    name: SITE.legal,
    legalName: SITE.legal,
    alternateName: ["Innaya Nutri Foods", "INFPL", "Innaya"],
    url: SITE.url,
    email: SITE.contactEmail,
    foundingDate: "2024-07-22",
    slogan: SITE.tagline,
    description:
      "Innaya Nutri Foods Pvt Ltd (INFPL) is an AI-first food technology holding company headquartered in Kakkanad, Kerala. It runs an end-to-end FMCG operating system — sourcing, formulation, manufacturing, brand, distribution and demand — and houses brands including PAN8.",
    foundingLocation: { "@id": placeId },
    location: { "@id": placeId },
    address: {
      "@type": "PostalAddress",
      streetAddress: "F223, DLF New Town Heights, Seaport Airport Road",
      addressLocality: "Kakkanad, Ernakulam",
      addressRegion: "Kerala",
      postalCode: "682037",
      addressCountry: "IN",
    },
    areaServed: { "@type": "Country", name: "India" },
    sameAs: [SITE.social.pan8, SITE.social.linkedin],
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/innaya-logo.png`,
      width: 371,
      height: 371,
    },
    image: [
      `${SITE.url}/innaya-logo.png`,
      `${SITE.url}/innaya-logo-full.png`,
      `${SITE.url}/opengraph-image.png`,
    ],
    industry: "Food & Beverages",
    naics: "311",
    isicV4: "1079",
    knowsAbout: [
      "Food technology",
      "Artificial intelligence in FMCG",
      "Millet-based nutrition",
      "Plant protein",
      "AI sourcing",
      "Demand forecasting",
      "Indian FMCG distribution",
      "Recipe and nutrition engineering",
    ],
    founder: [
      {
        "@type": "Person",
        name: "Rahul Babu",
        jobTitle: "Managing Director & CEO",
        worksFor: { "@id": orgId },
      },
      {
        "@type": "Person",
        name: "Irfan Habeeb",
        jobTitle: "Co-founder & Director",
        worksFor: { "@id": orgId },
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SITE.contactEmail,
        areaServed: "IN",
        availableLanguage: ["English", "Malayalam", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        contactType: "human resources",
        email: SITE.hrEmail,
        areaServed: "IN",
      },
    ],
    brand: [
      {
        "@type": "Brand",
        name: "PAN8 — A Nutri Co.",
        slogan: "Nutrition that works with you.",
        url: SITE.social.pan8,
      },
    ],
    subOrganization: [
      { "@type": "Brand", name: "PAN8", url: SITE.social.pan8 },
    ],
  };

  const place = {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": placeId,
    name: "Innaya Nutri Foods HQ — Kakkanad",
    address: {
      "@type": "PostalAddress",
      streetAddress: "F223, DLF New Town Heights, Seaport Airport Road",
      addressLocality: "Kakkanad, Ernakulam",
      addressRegion: "Kerala",
      postalCode: "682037",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 10.0159, longitude: 76.3419 },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": siteId,
    name: "Innaya Nutri Foods",
    url: SITE.url,
    inLanguage: "en-IN",
    publisher: { "@id": orgId },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Innaya Nutri Foods?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Innaya Nutri Foods Pvt Ltd (INFPL) is an AI-first food technology company based in Kakkanad, Kerala, India. It is the parent house of PAN8 and operates an end-to-end FMCG stack — sourcing, formulation, manufacturing, brand, distribution and demand — powered by artificial intelligence.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Innaya Nutri Foods headquartered?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Innaya Nutri Foods is headquartered at F223, DLF New Town Heights, Seaport Airport Road, Kakkanad, Ernakulam, Kerala 682037, India.",
        },
      },
      {
        "@type": "Question",
        name: "What brands does Innaya Nutri Foods own?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PAN8 — A Nutri Co. is the first live brand under Innaya Nutri Foods, focused on millet-based plant-protein nutrition. Two more brands are in incubation.",
        },
      },
      {
        "@type": "Question",
        name: "Who founded Innaya Nutri Foods?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Innaya Nutri Foods was founded in 2024 by Rahul Babu (Managing Director & CEO) and Irfan Habeeb (Co-founder & Director).",
        },
      },
      {
        "@type": "Question",
        name: "What does AI-powered FMCG mean at Innaya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Innaya runs AI across the FMCG value chain: mandi-level sourcing intelligence, recipe and nutrition engines, demand forecasting, and a distribution graph that picks the right channel per SKU per pincode.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // JSON-LD: payload is fully controlled & escaped
        dangerouslySetInnerHTML={{ __html: jsonLd(organization) }}
      />
      <script
        type="application/ld+json"
        // JSON-LD: payload is fully controlled & escaped
        dangerouslySetInnerHTML={{ __html: jsonLd(place) }}
      />
      <script
        type="application/ld+json"
        // JSON-LD: payload is fully controlled & escaped
        dangerouslySetInnerHTML={{ __html: jsonLd(website) }}
      />
      <script
        type="application/ld+json"
        // JSON-LD: payload is fully controlled & escaped
        dangerouslySetInnerHTML={{ __html: jsonLd(faq) }}
      />
    </>
  );
}
