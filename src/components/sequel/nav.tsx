"use client"

import { useSyncExternalStore } from "react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Wordmark } from "./mark"

const links = [
  ["Membership", "#plans"],
  ["Reminders", "#reminders"],
  ["Questions", "#faq"],
]

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true })
  return () => window.removeEventListener("scroll", onChange)
}

// Transparent over the hero, page background once you scroll. Logo left,
// three links centre, primary pill right.
export function Nav() {
  const scrolled = useSyncExternalStore(subscribe, () => window.scrollY > 24, () => false)
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-film",
        scrolled ? "bg-void" : "bg-transparent"
      )}
    >
      <div className="mx-auto grid h-18 max-w-page grid-cols-[1fr_auto] items-center px-5 sm:px-8 md:grid-cols-[1fr_auto_1fr]">
        <a href="#top" className="flex min-h-11 items-center" aria-label="Iron Warriors, back to top">
          <Wordmark />
        </a>
        <nav aria-label="Main" className="hidden items-center gap-4 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="inline-flex h-11 items-center px-2 text-[15px] font-medium text-ink/90 transition-opacity duration-300 hover:text-ink"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-end gap-1 sm:gap-2">
          <ThemeToggle />
          <a href="#plans" className={buttonVariants({ size: "sm" })}>
            Join now
          </a>
        </div>
      </div>
    </header>
  )
}
