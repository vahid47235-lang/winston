import { cn } from "@/lib/utils";

/**
 * Original stylized hazard graphic — intentionally does not reproduce any
 * photograph of packaging. Communicates "counterfeit warning" abstractly
 * via a hazard-stripe frame and triangle icon.
 */
export function WarningGraphic({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border-4 border-dashed border-amber-400/60 bg-[repeating-linear-gradient(135deg,rgba(0,0,0,0.9)_0px,rgba(0,0,0,0.9)_18px,#f5b400_18px,#f5b400_36px)] p-10",
        className,
      )}
    >
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-black/85 px-6 py-10 text-center backdrop-blur-sm">
        <svg
          viewBox="0 0 24 24"
          className="h-12 w-12 text-amber-400"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2 1 21h22L12 2Zm0 5.5 6.9 11.5H5.1L12 7.5ZM11 10v5h2v-5h-2Zm0 6.5v2h2v-2h-2Z" />
        </svg>
        <span className="font-display text-lg tracking-[0.15em] text-amber-300 md:text-xl">
          {label}
        </span>
      </div>
    </div>
  );
}
