import { cn } from "@/lib/cn";

interface ArrowProps {
  className?: string;
  direction?: "right" | "up-right" | "left";
}

const ROTATION: Record<NonNullable<ArrowProps["direction"]>, string> = {
  right: "",
  "up-right": "-rotate-45",
  left: "rotate-180",
};

export default function Arrow({ className, direction = "right" }: ArrowProps) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className={cn("shrink-0", ROTATION[direction], className)}
    >
      <path
        d="M2 7h10M8 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}
