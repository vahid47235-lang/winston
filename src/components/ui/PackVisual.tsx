import { cn } from "@/lib/utils";

/**
 * Placeholder pack silhouette. Real approved packaging photography
 * must replace this component before production launch — do not
 * recolor, crop, or alter official pack imagery once supplied.
 */
export function PackVisual({
  packColor,
  accent,
  className,
}: {
  packColor: string;
  accent: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[3/5] w-full max-w-[220px] overflow-hidden rounded-[14px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10",
        className,
      )}
      style={{ backgroundColor: packColor }}
    >
      <div
        className="absolute inset-x-0 top-0 h-[38%] flex items-center justify-center"
        style={{
          background: `linear-gradient(180deg, ${accent}22, transparent)`,
        }}
      >
        <span
          className="font-display text-lg tracking-[0.3em]"
          style={{ color: accent }}
        >
          WINSTON
        </span>
      </div>
      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
        <span
          className="h-1 w-10 rounded-full opacity-70"
          style={{ backgroundColor: accent }}
        />
        <span
          className="text-[10px] tracking-widest opacity-70"
          style={{ color: accent }}
        >
          20
        </span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
    </div>
  );
}
