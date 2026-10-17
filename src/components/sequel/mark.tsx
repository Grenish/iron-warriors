import { cn } from "@/lib/utils"

// Wordmark: a barbell glyph (bar with two plates) beside the name.
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5 text-ink", className)}>
      <svg viewBox="0 0 28 14" aria-hidden className="h-3.5 w-7 fill-current">
        <rect x="0" y="5.5" width="28" height="3" />
        <rect x="3" y="0" width="4" height="14" />
        <rect x="21" y="0" width="4" height="14" />
      </svg>
      <span className="display text-[22px] leading-none tracking-[0.01em]">Iron Warriors</span>
    </span>
  )
}
