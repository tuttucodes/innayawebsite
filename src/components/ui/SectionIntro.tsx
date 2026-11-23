import { cn } from "@/lib/cn";
import Headline from "./Headline";

interface SectionIntroProps {
  kicker?: string;
  title: React.ReactNode;
  accent?: React.ReactNode;
  body?: React.ReactNode;
  aside?: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

/**
 * Section opener: kicker, two-voice headline on the left,
 * supporting copy (or an action) bottom-right. Left-aligned by design.
 */
export default function SectionIntro({
  kicker,
  title,
  accent,
  body,
  aside,
  tone = "light",
  className,
}: SectionIntroProps) {
  const dark = tone === "dark";
  return (
    <div className={cn("grid gap-10 md:grid-cols-12", className)}>
      <div className="md:col-span-7">
        {kicker && (
          <p className={cn("kicker mb-7", dark ? "text-paper/70" : "text-ink-soft")}>{kicker}</p>
        )}
        <Headline accent={accent} tone={tone}>
          {title}
        </Headline>
      </div>
      {(body || aside) && (
        <div className="flex flex-col gap-7 md:col-span-4 md:col-start-9 md:self-end">
          {body && (
            <p
              className={cn(
                "max-w-[46ch] text-[16px] leading-[1.7]",
                dark ? "text-paper/70" : "text-ink-soft",
              )}
            >
              {body}
            </p>
          )}
          {aside}
        </div>
      )}
    </div>
  );
}
