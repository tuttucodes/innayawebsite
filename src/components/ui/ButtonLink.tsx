import Link from "next/link";
import { cn } from "@/lib/cn";
import Arrow from "./Arrow";

type Variant = "primary" | "secondary" | "inverse" | "ghostDark" | "text";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}

const BASE =
  "group inline-flex items-center justify-center gap-3 text-[14px] font-medium tracking-[-0.005em] transition-[background-color,color,border-color,transform] duration-300 active:scale-[0.98]";

const VARIANTS: Record<Variant, string> = {
  primary: "min-h-12 rounded-full bg-forest-deep pl-6 pr-5 text-paper hover:bg-forest",
  secondary:
    "min-h-12 rounded-full border border-ink/20 pl-6 pr-5 text-ink hover:border-ink/60",
  inverse: "min-h-12 rounded-full bg-paper pl-6 pr-5 text-ink hover:bg-sand-soft",
  ghostDark:
    "min-h-12 rounded-full border border-paper/30 pl-6 pr-5 text-paper hover:border-paper/70",
  text: "border-b border-current/30 pb-1.5 text-ink hover:border-current",
};

export function buttonClass(variant: Variant = "primary", className?: string) {
  return cn(BASE, VARIANTS[variant], className);
}

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: ButtonLinkProps) {
  const arrow = (
    <Arrow
      direction="up-right"
      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    />
  );

  if (external || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={buttonClass(variant, className)}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
        {arrow}
      </a>
    );
  }

  return (
    <Link href={href} className={buttonClass(variant, className)}>
      {children}
      {arrow}
    </Link>
  );
}
