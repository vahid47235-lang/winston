import { cn } from "@/lib/utils";
import { BirdMark } from "./BirdMark";

export function WinstonLogo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex select-none items-center gap-2.5", className)}>
      <BirdMark className="h-4 w-auto text-white" />
      <span className="font-display text-xl font-semibold tracking-[0.25em] text-white">
        WINSTON
      </span>
    </span>
  );
}
