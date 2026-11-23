import Image from "next/image";
import { cn } from "@/lib/cn";

interface LogoMarkProps {
  className?: string;
  tone?: "leaf" | "bone";
  size?: number;
  priority?: boolean;
}

export function LogoMark({ className, tone = "leaf", size = 40, priority = false }: LogoMarkProps) {
  const src = tone === "bone" ? "/innaya-logo-bone.png" : "/innaya-logo.png";
  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      className={cn("h-auto w-auto", className)}
      priority={priority}
    />
  );
}

interface LogoLockupProps {
  className?: string;
  tone?: "ink" | "paper";
}

export function LogoLockup({ className, tone = "ink" }: LogoLockupProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="block h-8 w-8 shrink-0">
        <LogoMark
          tone={tone === "paper" ? "bone" : "leaf"}
          size={32}
          className="!h-full !w-full"
          priority
        />
      </span>
      <span className="text-[17px] font-semibold tracking-[-0.03em]">Innaya</span>
    </span>
  );
}
