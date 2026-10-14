import { cn } from "@/lib/utils"

// Wordmark: a barbell glyph (bar with two plates) beside the name.
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-3 text-ink", className)}>
      <svg viewBox="0 0 28 14" aria-hidden className="h-3.5 w-7 fill-current">
        <rect x="0" y="5.5" width="28" height="3" rx="1.5" />
        <rect x="4" y="0" width="3" height="14" rx="1.5" />
        <rect x="21" y="0" width="3" height="14" rx="1.5" />
      </svg>
      <span className="text-[17px] font-medium tracking-[-0.02em]">iron warriors</span>
    </span>
  )
}
