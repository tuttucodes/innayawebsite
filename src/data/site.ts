export const SITE = {
  name: "Innaya Nutri Foods",
  legal: "Innaya Nutri Foods Private Limited",
  tagline: "Food technology, powered by AI.",
  domain: "innayanutrifoods.com",
  url: "https://innayanutrifoods.com",
  contactEmail: "ceo@innayanutrifoods.com",
  brandEmail: "sales@pan8.in",
  hq: "Kakkanad, Ernakulam, Kerala, India",
  incorporated: "22 July 2024",
} as const;

export interface Product {
  name: string;
  category: "Pancake" | "Dosa" | "Upma" | "Bar";
  size: string;
  highlight: string;
}

export const PRODUCTS: Product[] = [
  { name: "Choco-Chip Vanilla Pancake", category: "Pancake", size: "250g", highlight: "Cocoa + sorghum" },
  { name: "Banana & Dates Pancake", category: "Pancake", size: "250g", highlight: "Naturally sweet" },
  { name: "Blueberry Pancake", category: "Pancake", size: "250g", highlight: "Antioxidant-rich" },
  { name: "Multi-Millet Dosa", category: "Dosa", size: "250g", highlight: "5 millets blend" },
  { name: "Ragi Dosa", category: "Dosa", size: "250g", highlight: "Iron + calcium" },
  { name: "Millet-Spinach Dosa", category: "Dosa", size: "250g", highlight: "Greens, baked-in" },
  { name: "Millet-Moong Dosa", category: "Dosa", size: "250g", highlight: "Protein-stacked" },
  { name: "Millet-Moringa Dosa", category: "Dosa", size: "250g", highlight: "Superfood greens" },
  { name: "Millet Upma", category: "Upma", size: "250g", highlight: "Classic, reformulated" },
  { name: "Vermicelli Upma", category: "Upma", size: "250g", highlight: "Quick-cook breakfast" },
  { name: "Coffee Almond Bar", category: "Bar", size: "50g", highlight: "Caffeine + protein" },
  { name: "Blueberry Bar", category: "Bar", size: "50g", highlight: "Antioxidant on-the-go" },
  { name: "Dry Fruits Bar", category: "Bar", size: "50g", highlight: "Whole-food snack" },
];

export const COMPLIANCE = [
  { label: "FSSAI Central License", value: "Type 1 — export ready" },
  { label: "DPIIT / Startup India", value: "Recognised, valid till 2034" },
  { label: "Udyam (MSME)", value: "Micro · Manufacturing" },
  { label: "GSTIN", value: "Kerala — state code 32" },
  { label: "Incorporation", value: "22 July 2024" },
  { label: "Sector", value: "Food & Beverages / Processing" },
];

export const TEAM = [
  {
    name: "Rahul Babu",
    role: "Managing Director & CEO",
    focus: "Tech · Brand · Growth · Supply chain",
    bio: "Builds the technology stack and runs day-to-day operations. B.Tech CS @ VIT Chennai.",
  },
  {
    name: "Irfan Habeeb",
    role: "Co-founder & Director",
    focus: "Design · Manufacturing · Operations",
    bio: "Leads product design and manufacturing-partner relationships. Bachelors in Transportation Design.",
  },
];

export const AI_PILLARS = [
  {
    title: "Sourcing intelligence",
    body: "Models that price-discover millet lots across mandis, score quality signals, and time procurement to harvest cycles.",
    metric: "Lower COGS per pack",
  },
  {
    title: "Recipe & nutrition engine",
    body: "Formulation systems that hold protein, fibre, and glycaemic targets while honouring Indian palate constraints.",
    metric: "15–24g plant protein / 100g",
  },
  {
    title: "Demand forecasting",
    body: "Time-series models on D2C, retail seeding, and search trends — feeding production runs and dispatch lanes.",
    metric: "Tighter inventory turns",
  },
  {
    title: "Distribution graph",
    body: "Routing intelligence across modern trade, kirana, and quick-commerce — picking the right lane per SKU per pin.",
    metric: "Pan-India in months, not years",
  },
];

export const TAILWINDS = [
  {
    eyebrow: "Tailwind 01",
    title: "Millet revival",
    body: "Government of India's National Year of Millets and ICAR-IIMR's leadership are reframing millet from rural to mainstream.",
  },
  {
    eyebrow: "Tailwind 02",
    title: "Plant protein, on-fire",
    body: "India's plant-protein consumption is compounding 25–30% YoY across urban households.",
  },
  {
    eyebrow: "Tailwind 03",
    title: "Convenient breakfast",
    body: "On-the-go nutrition is the fastest-growing FMCG segment — and we don't ask consumers to change behaviour.",
  },
];
