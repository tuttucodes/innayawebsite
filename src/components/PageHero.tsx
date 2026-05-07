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
      <div className="pointer-events-none absolute -right-20 -top-10 h-[420px] w-[420px] rounded-full bg-leaf/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-[320px] w-[320px] rounded-full bg-amber/15 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 md:px-10">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
          <span>{eyebrow}</span>
          <span className="h-px w-10 bg-line" />
          <span>Innaya Nutri Foods</span>
        </div>
        <h1 className="mt-8 max-w-5xl font-serif text-[clamp(2.6rem,1rem+6vw,7rem)] leading-[0.94] tracking-[-0.025em]">
          {title}
        </h1>
        {blurb && (
          <p className="mt-8 max-w-2xl text-[16px] leading-[1.65] text-ink-soft md:text-[17px]">
            {blurb}
          </p>
        )}
      </div>
    </header>
  );
}
