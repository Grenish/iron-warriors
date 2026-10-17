"use client"

import { useSyncExternalStore } from "react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Wordmark } from "./mark"

const links = [
  ["The gym", "#floor"],
  ["Renewals", "#reminders"],
  ["Membership", "#plans"],
  ["Questions", "#faq"],
]

function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true })
  return () => window.removeEventListener("scroll", onChange)
}

// Over the dark hero the bar borrows the dark tokens so it reads light on the
// photo; once scrolled it takes the page theme with a solid background.
export function Nav() {
  const scrolled = useSyncExternalStore(subscribe, () => window.scrollY > 24, () => false)
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200",
        scrolled ? "border-rule bg-paper" : "dark border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-6 px-5 sm:px-8">
        <a href="#top" className="flex min-h-11 items-center" aria-label="Iron Warriors, back to top">
          <Wordmark />
        </a>
        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="inline-flex h-11 items-center px-3 text-[14px] font-medium text-ink/80 transition-colors duration-200 hover:text-ink"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#plans" className={buttonVariants({ size: "sm" })}>
            Join
          </a>
        </div>
      </div>
    </header>
  )
}
