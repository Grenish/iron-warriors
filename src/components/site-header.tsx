"use client"

import { useSyncExternalStore } from "react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const links = [
  ["Why us", "#features"],
  ["WhatsApp reminders", "#reminders"],
  ["Plans", "#pricing"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
]

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true })
  return () => window.removeEventListener("scroll", onChange)
}

// Brand mark: a hairline ring with the initials, set in the heading face.
export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span
        aria-hidden
        className="flex size-8 items-center justify-center rounded-full border border-white/40 font-heading text-[12px] font-bold tracking-wide text-white"
      >
        IW
      </span>
      <span className="font-heading text-[15px] font-semibold tracking-[0.08em] uppercase">Iron Warriors</span>
    </span>
  )
}

// Sticky nav on the carbon surface (ink-2), one tone step above the ink hero.
// Once you scroll it turns slightly translucent with a backdrop blur.
export function SiteHeader() {
  const scrolled = useSyncExternalStore(
    subscribe,
    () => window.scrollY > 8,
    () => false
  )

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-line-dark text-white transition-colors duration-200",
        scrolled ? "bg-black/85 backdrop-blur-md" : "bg-black"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-page items-center justify-between gap-6 px-4 sm:px-6">
        <a href="#" className="flex min-h-11 items-center text-white">
          <BrandMark />
        </a>
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="inline-flex h-10 items-center rounded-full px-4 text-body-sm font-medium text-mist transition-colors hover:bg-white/5 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>
        <a href="#pricing" className={cn(buttonVariants(), "h-11 px-5 sm:h-10")}>
          Join Now
        </a>
      </div>
    </header>
  )
}
