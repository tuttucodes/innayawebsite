import Image from "next/image";
import { cn } from "@/lib/cn";

interface LogoMarkProps {
  className?: string;
  tone?: "leaf" | "bone";
  size?: number;
}

export function LogoMark({ className, tone = "leaf", size = 40 }: LogoMarkProps) {
  const src = tone === "bone" ? "/innaya-logo-mono-bone.svg" : "/innaya-logo.svg";
  return (
    <Image
      src={src}
      alt="Innaya Nutri Foods"
      width={size}
      height={Math.round(size * 1.1)}
      className={cn("h-auto w-auto", className)}
      priority
    />
  );
}

interface LogoLockupProps {
  className?: string;
  tone?: "ink" | "bone";
}

export function LogoLockup({ className, tone = "ink" }: LogoLockupProps) {
  const text = tone === "ink" ? "text-ink" : "text-bone";
  const sub = tone === "ink" ? "text-mute" : "text-bone/55";
  const markTone = tone === "bone" ? "bone" : "leaf";
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span className="block h-9 w-auto sm:h-10">
        <LogoMark tone={markTone} size={36} className="!h-full !w-auto" />
      </span>
      <span className={cn("flex flex-col gap-1 leading-none", text)}>
        <span className="font-serif text-[16px] tracking-[-0.01em] sm:text-[18px]">
          Innaya
        </span>
        <span
          className={cn(
            "font-mono text-[9px] uppercase tracking-[0.2em]",
            sub,
          )}
        >
          Nutri Foods
        </span>
      </span>
    </span>
  );
}
