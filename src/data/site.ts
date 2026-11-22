export const SITE = {
  name: "Innaya Nutri Foods",
  legal: "Innaya Nutri Foods Private Limited",
  short: "INFPL",
  cin: "U47219KL2024PTC088769",
  tagline: "Operating the infrastructure of food — from origin to shelf.",
  domain: "innayanutrifoods.com",
  url: "https://innayanutrifoods.com",
  contactEmail: "ceo@innayanutrifoods.com",
  hrEmail: "careers@innayanutrifoods.com",
  brandEmail: "sales@pan8.in",
  hq: "Kakkanad, Ernakulam, Kerala, India",
  incorporated: "22 July 2024",
  social: {
    linkedin: "https://www.linkedin.com/company/innaya-nutri-foods",
    pan8: "https://www.pan8.in",
  },
} as const;

export const TRACTION = [
  { value: "50+ Panels", label: "Blind Taste Trials (Chennai & Kochi)" },
  { value: "85%+", label: "Repeat-Purchase Intent" },
  { value: "3 Flagship SKUs", label: "R&D Formulation Finalized" },
  { value: "FSSAI + DPIIT", label: "Central Licensed · Valid till 2034" },
] as const;

/* =========================================================================
   DIVISIONS OF INNAYA
   ========================================================================= */
export interface Division {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
  cta: string;
  offerings: string[];
}

export const DIVISIONS: Division[] = [
  {
    id: "platforms",
    num: "01",
    title: "Software & Platforms",
    tagline: "Supply Chain Intelligence",
    description:
      "Enterprise AI systems designed for food sourcing, logistics, and quality assurance. Combines vernacular telephony, computer vision, and cold-chain telemetry.",
    image: "/innaya-infrastructure.jpg",
    href: "/platforms",
    cta: "Explore Software Suite",
    offerings: [
      "Innaya Intelligence Suite",
      "Innaya FirstMile Network",
      "Multilingual Voice Telephony",
      "Transit Telemetry & Traceability",
    ],
  },
  {
    id: "brands",
    num: "02",
    title: "Consumer Brands",
    tagline: "Packaged Food Portfolio",
    description:
      "Innaya's fast-moving consumer goods arm. Formulates, manufactures, and markets clean-label, high-protein daily nutrition products for Indian households.",
    image: "/pan8-hero.jpg",
    href: "/brands/pan8",
    cta: "Explore PAN8 & Products",
    offerings: [
      "PAN8 — A Nutri Co. (Live)",
      "13 Millet-First Formulations",
      "Direct-to-Consumer & Retail",
      "Export-Ready Clean Formulations",
    ],
  },
  {
    id: "operations",
    num: "03",
    title: "Operations & Infrastructure",
    tagline: "Origin to Processing",
    description:
      "Physical agricultural procurement corridors across Tamil Nadu and Kerala, paired with certified commercial contract processing facilities.",
    image: "/innaya-sourcing.jpg",
    href: "/operations",
    cta: "Explore Supply Footprint",
    offerings: [
      "Farmgate & Mandi Aggregation",
      "Certified Manufacturing Partnerships",
      "Strict Quality Sampling",
      "Cold-Chain Logistics Management",
    ],
  },
];

/* =========================================================================
   INNAYA INTELLIGENCE & FIRSTMILE (Software Products of Innaya)
   ========================================================================= */
export interface IntelModule {
  id: string;
  name: string;
  tagline: string;
  body: string;
  capabilities: string[];
  status: "Active Pilot" | "Core Platform" | "Deployed in PAN8";
}

export const INTEL_MODULES: IntelModule[] = [
  {
    id: "voice",
    name: "Innaya Voice",
    tagline: "Multilingual operations agents",
    body: "Consent-aware autonomous phone interactions in Tamil, Malayalam, Hindi, and English. Contacts drivers and suppliers for dispatch updates, ETA confirmation, and delay logging without requiring app downloads.",
    capabilities: ["Vernacular Speech", "Delay Extraction", "Automatic Escalation"],
    status: "Active Pilot",
  },
  {
    id: "source",
    name: "Innaya Source",
    tagline: "Procurement intelligence",
    body: "Aggregates mandi prices, RFQs, and supplier availability across regional hubs. Automatically calculates true landed cost inclusive of handling, freight, and expected grade deductions.",
    capabilities: ["Mandi Price Discovery", "RFQ Comparison", "Landed-Cost Analysis"],
    status: "Active Pilot",
  },
  {
    id: "firstmile",
    name: "Innaya FirstMile",
    tagline: "Farmgate-to-buyer network",
    body: "Orchestration system connecting farmer producer organisations (FPOs) with commercial food processors. Enables transparent net realization and scheduled batch collection.",
    capabilities: ["FPO Coordination", "Pickup Scheduling", "Loss Prevention"],
    status: "Active Pilot",
  },
  {
    id: "vision",
    name: "Innaya Vision",
    tagline: "Crop quality verification",
    body: "Image-based screening calibrated against verified field ground truth. Evaluates crop physical attributes at collection points to prevent subjective quality disputes at intake.",
    capabilities: ["Intake Screening", "Defect Detection", "Standardized Grading"],
    status: "Core Platform",
  },
  {
    id: "cold",
    name: "Innaya Cold",
    tagline: "Cold-chain telemetry",
    body: "Sensor integration tracking temperature telemetry in transit. Detects refrigeration failures in real time to reroute vulnerable produce before spoilage occurs.",
    capabilities: ["IoT Temperature Logs", "Failure Alerts", "Dynamic Rerouting"],
    status: "Core Platform",
  },
  {
    id: "trace",
    name: "Innaya Trace",
    tagline: "Batch lineage & compliance",
    body: "Generates auditable digital batch records, weighment evidence, and regulatory documentation for domestic processors and food exporters.",
    capabilities: ["Batch Lineage", "Weighment Evidence", "Export Workflows"],
    status: "Core Platform",
  },
  {
    id: "nutri",
    name: "Innaya Nutri",
    tagline: "Formulation & nutritional engine",
    body: "Formulation optimization engine that balances bioavailable plant protein, dietary fiber, and glycemic load. Powers the recipes and nutrition panels across the PAN8 brand.",
    capabilities: ["Protein Target Engines", "Sensory Balance", "Clean Labeling"],
    status: "Deployed in PAN8",
  },
];

/* =========================================================================
   PAN8 — A NUTRI CO. (Brand Owned by Innaya)
   PRODUCTS UNDER PAN8 (Not direct products of Innaya)
   ========================================================================= */
export interface Pan8Product {
  name: string;
  category: "Pancake Mix" | "Dosa Mix" | "Upma Mix" | "Plant Protein Bar";
  weight: string;
  keyBenefit: string;
}

export const PAN8_PRODUCTS: Pan8Product[] = [
  // Pancake Mixes
  { name: "Choco-Chip Vanilla Pancake", category: "Pancake Mix", weight: "250g", keyBenefit: "Cocoa + sorghum blend" },
  { name: "Banana & Dates Pancake", category: "Pancake Mix", weight: "250g", keyBenefit: "Naturally sweetened" },
  { name: "Blueberry Pancake", category: "Pancake Mix", weight: "250g", keyBenefit: "Antioxidant-rich breakfast" },

  // Dosa Mixes
  { name: "Multi-Millet Dosa", category: "Dosa Mix", weight: "250g", keyBenefit: "5 heritage millets" },
  { name: "Ragi Dosa", category: "Dosa Mix", weight: "250g", keyBenefit: "Iron & calcium rich" },
  { name: "Millet-Spinach Dosa", category: "Dosa Mix", weight: "250g", keyBenefit: "Baked-in daily greens" },
  { name: "Millet-Moong Dosa", category: "Dosa Mix", weight: "250g", keyBenefit: "High protein staple" },
  { name: "Millet-Moringa Dosa", category: "Dosa Mix", weight: "250g", keyBenefit: "Superfood breakfast" },

  // Upma Mixes
  { name: "Millet Upma", category: "Upma Mix", weight: "250g", keyBenefit: "Traditional format, low GI" },
  { name: "Vermicelli Upma", category: "Upma Mix", weight: "250g", keyBenefit: "Quick-cook morning bowl" },

  // Protein Bars
  { name: "Coffee Almond Bar", category: "Plant Protein Bar", weight: "50g", keyBenefit: "Clean caffeine & protein" },
  { name: "Blueberry Bar", category: "Plant Protein Bar", weight: "50g", keyBenefit: "Whole fruit on-the-go" },
  { name: "Dry Fruits Bar", category: "Plant Protein Bar", weight: "50g", keyBenefit: "Nut & seed nutrient density" },
];

export interface Product {
  name: string;
  category: "Pancake" | "Dosa" | "Upma" | "Bar";
  size: string;
  highlight: string;
}

/* Backward compatibility alias if needed */
export const PRODUCTS: Product[] = PAN8_PRODUCTS.map((p) => ({
  name: p.name,
  category: p.category.split(" ")[0] as "Pancake" | "Dosa" | "Upma" | "Bar",
  size: p.weight,
  highlight: p.keyBenefit,
}));

/* =========================================================================
   LEADERSHIP
   ========================================================================= */
export const TEAM = [
  {
    name: "Rahul Babu",
    role: "Managing Director & CEO",
    focus: "Technology · Supply Chain · Growth",
    bio: "Oversees system architecture, platform software, and corporate operations. B.Tech Computer Science @ VIT Chennai.",
  },
  {
    name: "Irfan Habeeb",
    role: "Co-founder & Director",
    focus: "Product Design · Manufacturing · Operations",
    bio: "Leads food manufacturing partnerships, packaging engineering, and physical plant operations. Bachelors in Transportation Design.",
  },
];
