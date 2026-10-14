"use client"

import { useSyncExternalStore } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const noop = () => () => {}

// Sun in dark mode, moon in light. Renders a same-size placeholder until
// mounted so the server and first client render match.
export function ThemeToggle() {
  const mounted = useSyncExternalStore(noop, () => true, () => false)
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  if (!mounted) return <span aria-hidden className="inline-block size-11" />

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex size-11 cursor-pointer items-center justify-center rounded-full text-ink/90 transition-colors duration-300 ease-film hover:bg-ink/5 hover:text-ink"
    >
      {isDark ? <Sun className="size-[18px]" strokeWidth={1.5} /> : <Moon className="size-[18px]" strokeWidth={1.5} />}
    </button>
  )
}
