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
  { value: "DPIIT", label: "Recognised Startup" },
] as const;

export interface FarmerShareRow {
  crop: string;
  model: string;
  share: number;
  volatility: number;
}

/** Farmer share of the consumer rupee and max 1-year price swing. MoSPI CPI 2015-2025, RBI WP Oct 2024, NDDB. */
export const FARMER_SHARE: FarmerShareRow[] = [
  { crop: "Milk", model: "Co-op buyer", share: 70, volatility: 10 },
  { crop: "Potato", model: "Mandi traders", share: 37, volatility: 107 },
  { crop: "Tomato", model: "Open spot market", share: 33, volatility: 202 },
];

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
  image: string;
  mrp?: string;
  shelfLife?: string;
  servings?: string;
  protein?: string;
}

export const PAN8_PRODUCTS: Pan8Product[] = [
  // Pancake Mixes
  {
    name: "Choco-Chip Vanilla Pancake",
    category: "Pancake Mix",
    weight: "250g",
    keyBenefit: "Kid-friendly cocoa + sorghum blend · Zero maida",
    image: "/images/products/pancake-choco-chip.jpg",
    mrp: "₹230",
    shelfLife: "9 Months",
    servings: "8–10 Pancakes",
    protein: "15g Protein / 100g",
  },
  {
    name: "Banana & Dates Pancake",
    category: "Pancake Mix",
    weight: "250g",
    keyBenefit: "Naturally sweetened with real dates · 9g fiber",
    image: "/images/products/pancake-banana-dates.jpg",
    mrp: "₹240",
    shelfLife: "10 Months",
    servings: "8–10 Pancakes",
    protein: "18g Protein / 100g",
  },
  {
    name: "Blueberry Pancake",
    category: "Pancake Mix",
    weight: "250g",
    keyBenefit: "Antioxidant-rich whole berries · Heritage grains",
    image: "/images/products/pancake-banana-dates.jpg",
    mrp: "₹240",
    shelfLife: "10 Months",
    servings: "8–10 Pancakes",
    protein: "16g Protein / 100g",
  },

  // Dosa Mixes
  {
    name: "Multi-Millet Dosa",
    category: "Dosa Mix",
    weight: "250g",
    keyBenefit: "5 heritage millets (ragi, foxtail, kodo) · Zero rice filler",
    image: "/images/products/dosa-multi-millet.jpg",
    mrp: "₹230",
    shelfLife: "10 Months",
    servings: "Approx. 8 Dosas",
    protein: "21g Protein / 100g",
  },
  {
    name: "Ragi Dosa",
    category: "Dosa Mix",
    weight: "250g",
    keyBenefit: "High calcium & bioavailable iron · Heart-smart",
    image: "/images/products/dosa-ragi.jpg",
    mrp: "₹220",
    shelfLife: "10 Months",
    servings: "Approx. 8 Dosas",
    protein: "24g Protein / 100g",
  },
  {
    name: "Millet-Spinach Dosa",
    category: "Dosa Mix",
    weight: "250g",
    keyBenefit: "Baked-in daily greens · Savory nutrient-dense start",
    image: "/images/products/dosa-spinach.jpg",
    mrp: "₹250",
    shelfLife: "10 Months",
    servings: "Approx. 8 Dosas",
    protein: "21g Protein / 100g",
  },
  {
    name: "Millet-Moong Dosa",
    category: "Dosa Mix",
    weight: "250g",
    keyBenefit: "Golden moong & millet powerhouse · High satiety",
    image: "/images/products/dosa-moong.jpg",
    mrp: "₹235",
    shelfLife: "10 Months",
    servings: "Approx. 8 Dosas",
    protein: "21g Protein / 100g",
  },
  {
    name: "Millet-Moringa Dosa",
    category: "Dosa Mix",
    weight: "250g",
    keyBenefit: "Superfood moringa leaf infusion · Immunity booster",
    image: "/images/products/dosa-moringa.jpg",
    mrp: "₹230",
    shelfLife: "10 Months",
    servings: "Approx. 8 Dosas",
    protein: "21g Protein / 100g",
  },

  // Upma Mixes
  {
    name: "Millet Upma",
    category: "Upma Mix",
    weight: "250g",
    keyBenefit: "Comforting heritage millet breakfast · Low GI",
    image: "/images/products/upma-millet.jpg",
    mrp: "₹220",
    shelfLife: "8 Months",
    servings: "Serves 2–3 People",
    protein: "24g Protein / 100g",
  },
  {
    name: "Vermicelli Upma",
    category: "Upma Mix",
    weight: "250g",
    keyBenefit: "Whole grain roasted vermicelli twist · Quick-cook",
    image: "/images/products/upma-vermicelli.jpg",
    mrp: "₹230",
    shelfLife: "8 Months",
    servings: "Serves 2–3 People",
    protein: "24g Protein / 100g",
  },

  // Protein Bars
  {
    name: "Coffee Almond Bar",
    category: "Plant Protein Bar",
    weight: "50g",
    keyBenefit: "South Indian filter coffee + California almonds",
    image: "/images/pan8-bar.jpg",
    mrp: "₹120",
    shelfLife: "6 Months",
    servings: "1 Bar (50g)",
    protein: "20g Protein / 100g",
  },
  {
    name: "Blueberry Bar",
    category: "Plant Protein Bar",
    weight: "50g",
    keyBenefit: "Whole dried wild blueberries + pea protein crisps",
    image: "/images/pan8-bar.jpg",
    mrp: "₹120",
    shelfLife: "6 Months",
    servings: "1 Bar (50g)",
    protein: "18g Protein / 100g",
  },
  {
    name: "Dry Fruits Bar",
    category: "Plant Protein Bar",
    weight: "50g",
    keyBenefit: "Cold-pressed cashews, almonds, chia & pumpkin seeds",
    image: "/images/pan8-bar.jpg",
    mrp: "₹130",
    shelfLife: "6 Months",
    servings: "1 Bar (50g)",
    protein: "22g Protein / 100g",
  },
];

export interface Product {
  name: string;
  category: "Pancake" | "Dosa" | "Upma" | "Bar";
  size: string;
  highlight: string;
  image: string;
  mrp?: string;
  shelfLife?: string;
  servings?: string;
  protein?: string;
}

/* Backward compatibility alias if needed */
export const PRODUCTS: Product[] = PAN8_PRODUCTS.map((p) => {
  let cat: "Pancake" | "Dosa" | "Upma" | "Bar" = "Pancake";
  if (p.category.includes("Pancake")) cat = "Pancake";
  else if (p.category.includes("Dosa")) cat = "Dosa";
  else if (p.category.includes("Upma")) cat = "Upma";
  else if (p.category.includes("Bar")) cat = "Bar";
  return {
    name: p.name,
    category: cat,
    size: p.weight,
    highlight: p.keyBenefit,
    image: p.image,
    mrp: p.mrp,
    shelfLife: p.shelfLife,
    servings: p.servings,
    protein: p.protein,
  };
});

/* =========================================================================
   LEADERSHIP
   ========================================================================= */
export const TEAM = [
  {
    name: "Rahul Babu",
    role: "Managing Director & CEO",
    focus: "Technology · Supply Chain · Growth",
    bio: "Oversees system architecture, platform software, and corporate operations.",
  },
  {
    name: "Irfan Habeeb",
    role: "Co-founder & Director",
    focus: "Product Design · Manufacturing · Operations",
    bio: "Leads food manufacturing partnerships, packaging engineering, and physical plant operations. Bachelors in Transportation Design.",
  },
];
