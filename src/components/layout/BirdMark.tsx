import { cn } from "@/lib/utils";

/**
 * Original, simplified flying-bird emblem drawn for this redesign concept.
 * Placeholder for the official Winston trademark logo asset — swap for the
 * approved vector file (kept white, undistorted) before production use.
 */
export function BirdMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 32"
      fill="none"
      className={cn("h-5 w-auto", className)}
      aria-hidden="true"
    >
      <path
        d="M1 18 C10 4 19 4 24 12 C29 4 38 4 47 18 C37 10 29 13 24 22 C19 13 11 10 1 18 Z"
        fill="currentColor"
      />
    </svg>
  );
}
