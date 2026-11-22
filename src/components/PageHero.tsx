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
      <div className="relative mx-auto w-full max-w-[1360px] px-5 sm:px-8 md:px-12">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-mute">
          <span>{eyebrow}</span>
          <span className="h-px w-8 bg-line" />
          <span>Innaya Nutri Foods</span>
        </div>
        <h1 className="mt-6 max-w-4xl font-serif text-[clamp(2.2rem,1.5rem+3vw,4rem)] font-normal leading-[1.1] tracking-tight text-ink">
          {title}
        </h1>
        {blurb && (
          <p className="mt-6 max-w-2xl text-base sm:text-lg leading-[1.65] text-ink-soft">
            {blurb}
          </p>
        )}
      </div>
    </header>
  );
}
