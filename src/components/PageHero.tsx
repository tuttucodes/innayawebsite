import { cn } from "@/lib/cn";

interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  blurb?: React.ReactNode;
  className?: string;
}

export default function PageHero({
  eyebrow,
  title,
  blurb,
  className,
}: PageHeroProps) {
  return (
    <header
      className={cn(
        "relative overflow-hidden border-b border-line bg-bone pb-16 pt-32 sm:pt-40",
        className,
      )}
    >
      <div className="relative mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
          <span>{eyebrow}</span>
          <span className="h-px w-10 bg-line" />
          <span>Innaya Nutrifoods</span>
        </div>
        <h1 className="mt-8 max-w-5xl font-sans text-[clamp(2.4rem,1.5rem+5vw,5.5rem)] font-bold leading-[0.96] tracking-[-0.035em] text-ink">
          {title}
        </h1>
        {blurb && (
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.65] text-ink-soft md:text-[17px]">
            {blurb}
          </p>
        )}
      </div>
    </header>
  );
}
