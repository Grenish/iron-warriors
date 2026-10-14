"use client"

import { useSyncExternalStore } from "react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
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

// Transparent over the hero, pure black once you scroll. Logo left,
// three links centre, one cream pill right.
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
              className="inline-flex h-11 items-center px-2 text-[15px] font-medium text-white/90 transition-opacity duration-300 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex justify-end">
          <a href="#plans" className={buttonVariants({ size: "sm" })}>
            Join now
          </a>
        </div>
      </div>
    </header>
  )
}
