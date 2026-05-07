const TICKER = [
  "MILLET-FIRST",
  "PLANT PROTEIN 15–24g / 100g",
  "GLUTEN-FREE",
  "VEGAN",
  "FSSAI CENTRAL",
  "DPIIT RECOGNISED",
  "MADE IN INDIA",
  "AI-DRIVEN SOURCING",
  "NO PRESERVATIVES",
  "NO ADDED SUGAR*",
  "ECO-FRIENDLY PACK",
];

export default function Marquee() {
  const items = [...TICKER, ...TICKER];
  return (
    <section
      aria-hidden="true"
      className="relative overflow-hidden border-y border-line/60 bg-ink py-5 text-bone"
    >
      <div className="flex w-max ticker">
        {items.map((t, i) => (
          <span
            key={`${t}-${i}`}
            className="flex shrink-0 items-center gap-12 whitespace-nowrap px-6 font-mono text-[12px] uppercase tracking-[0.22em]"
          >
            {t}
            <Star />
          </span>
        ))}
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" className="opacity-60" aria-hidden="true">
      <path
        d="M7 0v14M0 7h14M2 2l10 10M12 2 2 12"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}
