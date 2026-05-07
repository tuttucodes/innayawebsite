export interface JobOpening {
  slug: string;
  title: string;
  team: "Sales & Marketing" | "Tech & Product" | "Design & Social" | "Operations & Logistics" | "Founder's Office";
  location: "Kakkanad, Kerala" | "Remote, India" | "Pune, Maharashtra" | "Hybrid · Kerala";
  type: "Full-time" | "Internship" | "Contract" | "Part-time";
  experience: string;
  compensation: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
}

export const JOBS: JobOpening[] = [
  {
    slug: "founders-office-associate",
    title: "Founder's Office Associate",
    team: "Founder's Office",
    location: "Hybrid · Kerala",
    type: "Full-time",
    experience: "0–2 yrs",
    compensation: "Competitive · ESOP track",
    about:
      "Sit shoulder-to-shoulder with the CEO. Touch every part of the business — fundraising, strategy, ops, hiring, brand. The fastest way to learn how a venture-backed FMCG company is built from zero.",
    responsibilities: [
      "Run founder's calendar, follow-ups, investor pipeline, and weekly board prep",
      "Own special projects across growth, ops, and finance",
      "Synthesise data into one-page memos for decisions",
      "Translate founder voice into investor and partner-facing communication",
    ],
    requirements: [
      "Strong written and verbal communication",
      "Comfort with ambiguity; closes loops without being asked twice",
      "Numbers + spreadsheets fluency",
      "High agency",
    ],
    niceToHave: ["Tier-1 college", "Prior consulting/banking/startup exposure"],
  },
  {
    slug: "growth-marketing-lead",
    title: "Growth & Performance Marketing Lead",
    team: "Sales & Marketing",
    location: "Kakkanad, Kerala",
    type: "Full-time",
    experience: "3–6 yrs",
    compensation: "Competitive · ESOP",
    about:
      "Own paid acquisition, retention loops, and the D2C P&L for pan8.in. Partner with content and brand to compound CAC down and LTV up.",
    responsibilities: [
      "Plan and run Meta, Google, and quick-commerce paid budgets",
      "Build the funnel — landing pages, offers, post-purchase, win-back",
      "Stand up dashboards for CAC, ROAS, repeat-rate, blended payback",
      "Coordinate with influencers and PR for top-of-funnel",
    ],
    requirements: [
      "Hands-on with Meta + Google Ads and analytics",
      "Has scaled a D2C brand from 1cr → 10cr ARR",
      "Strong taste for landing-page copy and creative",
    ],
  },
  {
    slug: "fullstack-engineer",
    title: "Full-Stack Engineer (Next.js · TypeScript)",
    team: "Tech & Product",
    location: "Remote, India",
    type: "Full-time",
    experience: "2–5 yrs",
    compensation: "Competitive · ESOP",
    about:
      "Build the operating system underneath Innaya — internal tools for sourcing, formulation, demand forecasting, and the consumer e-commerce stack at pan8.in.",
    responsibilities: [
      "Ship features end-to-end across Next.js + Postgres + edge runtime",
      "Own e-commerce, checkout, and the order-to-fulfilment pipeline",
      "Integrate AI models (LLMs, classical ML) into ops workflows",
    ],
    requirements: [
      "Strong TypeScript, React, and Node.js fundamentals",
      "Comfort with SQL, Postgres, and at least one cloud (AWS/GCP/Vercel)",
      "Has shipped production code that real users touch",
    ],
    niceToHave: ["AI/ML exposure", "Open-source contributions"],
  },
  {
    slug: "ai-ml-engineer",
    title: "AI / ML Engineer — Sourcing & Demand",
    team: "Tech & Product",
    location: "Remote, India",
    type: "Full-time",
    experience: "2–4 yrs",
    compensation: "Competitive · ESOP",
    about:
      "Build the models underneath sourcing intelligence and demand forecasting. Less Kaggle, more deployed ML driving real P&L decisions.",
    responsibilities: [
      "Time-series demand models for SKUs across channels",
      "Pricing and procurement models against mandi data",
      "Productionise models behind clean APIs",
    ],
    requirements: [
      "Solid Python, Pandas, scikit-learn, PyTorch or similar",
      "Has deployed at least one model that influenced real decisions",
      "Strong stats foundations — beyond just running notebooks",
    ],
  },
  {
    slug: "brand-designer",
    title: "Brand & Packaging Designer",
    team: "Design & Social",
    location: "Hybrid · Kerala",
    type: "Full-time",
    experience: "2–4 yrs",
    compensation: "Competitive",
    about:
      "Own how PAN8 looks and feels — packaging, ads, social, print. Work directly with the co-founder leading design.",
    responsibilities: [
      "Design SKU packaging that reads on a kirana shelf and a quick-commerce thumbnail",
      "Build templates for ads, organic social, and seasonal campaigns",
      "Maintain a tight brand system — type, colour, motion, photography",
    ],
    requirements: [
      "Strong portfolio with FMCG / consumer product work",
      "Figma fluency; bonus for Cinema 4D or Blender",
      "Taste — the kind that shows up in tiny details",
    ],
  },
  {
    slug: "supply-chain-manager",
    title: "Supply Chain & Manufacturing Manager",
    team: "Operations & Logistics",
    location: "Pune, Maharashtra",
    type: "Full-time",
    experience: "3–6 yrs",
    compensation: "Competitive",
    about:
      "Run the relationship with our Pune contract-manufacturing partner. Own production planning, QC, dispatch, and inventory.",
    responsibilities: [
      "Plan production runs against forecast and stock levels",
      "QC sampling and FSSAI-compliance audits at the facility",
      "Manage inbound raw materials, packaging, and outbound logistics",
    ],
    requirements: [
      "FMCG manufacturing or food-processing background",
      "FSSAI process familiarity",
      "Vendor management chops",
    ],
  },
  {
    slug: "social-content-lead",
    title: "Social & Content Lead",
    team: "Design & Social",
    location: "Hybrid · Kerala",
    type: "Full-time",
    experience: "2–4 yrs",
    compensation: "Competitive",
    about:
      "Build PAN8's voice on Instagram, YouTube Shorts, and emerging platforms. Make millet feel like the most exciting thing in the kitchen.",
    responsibilities: [
      "Plan and ship a weekly content calendar",
      "Direct shoots — recipe, lifestyle, founder, behind-the-scenes",
      "Track + report cohort growth, engagement, and conversion",
    ],
    requirements: [
      "Has grown a brand or creator account past 100k followers",
      "Camera + editing comfort (CapCut / Premiere)",
      "Strong taste for short-form storytelling",
    ],
  },
  {
    slug: "marketing-intern",
    title: "Marketing & Growth Intern",
    team: "Sales & Marketing",
    location: "Hybrid · Kerala",
    type: "Internship",
    experience: "Student / fresher",
    compensation: "Stipend · 6 months",
    about:
      "Join the operating team. Run experiments across organic, content, and outbound — and own outcomes by week two.",
    responsibilities: [
      "Outbound retail and modern-trade outreach",
      "Influencer and creator pipeline",
      "Campaign reporting",
    ],
    requirements: [
      "Currently studying or recently graduated",
      "Writes well, thinks clearly",
      "Wants startup speed — not corporate cadence",
    ],
  },
];
