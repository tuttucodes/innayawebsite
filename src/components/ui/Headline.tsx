import { cn } from "@/lib/cn";

type Level = "h1" | "h2" | "h3";
type Size = "display" | "xl" | "lg" | "md";

interface HeadlineProps {
  as?: Level;
  size?: Size;
  /** Main line, set in the sans */
  children: React.ReactNode;
  /** Optional second line in italic serif, quieter colour */
  accent?: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}

const SIZES: Record<Size, string> = {
  display: "text-[clamp(2.75rem,1.2rem+5.6vw,6.25rem)] leading-[0.98] tracking-[-0.045em]",
  xl: "text-[clamp(2.4rem,1.3rem+3.6vw,4.5rem)] leading-[1.0] tracking-[-0.04em]",
  lg: "text-[clamp(2rem,1.3rem+2.4vw,3.5rem)] leading-[1.04] tracking-[-0.035em]",
  md: "text-[clamp(1.5rem,1.1rem+1.2vw,2.25rem)] leading-[1.1] tracking-[-0.03em]",
};

/**
 * The house headline: a regular-weight sans line, optionally followed by a
 * softer italic serif line. Used for every H1/H2 so the voice stays consistent.
 */
export default function Headline({
  as: Tag = "h2",
  size = "lg",
  children,
  accent,
  tone = "light",
  className,
}: HeadlineProps) {
  const dark = tone === "dark";
  return (
    <Tag
      className={cn(
        "font-normal",
        SIZES[size],
        dark ? "text-paper" : "text-ink",
        className,
      )}
    >
      <span className="block">{children}</span>
      {accent && (
        <span
          className={cn(
            "serif-i mt-[0.04em] block text-[1.08em] leading-[1]",
            dark ? "text-sand-soft" : "text-sand",
          )}
        >
          {accent}
        </span>
      )}
    </Tag>
  );
}
