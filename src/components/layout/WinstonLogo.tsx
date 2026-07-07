import { cn } from "@/lib/utils";

export function WinstonLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display select-none text-xl font-semibold tracking-[0.25em] text-white",
        className,
      )}
    >
      WINSTON
    </span>
  );
}
