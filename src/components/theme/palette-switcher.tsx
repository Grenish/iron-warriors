"use client"

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react"
import { Check, Palette } from "lucide-react"
import { useTheme } from "next-themes"

// PREVIEW ONLY. Lets Grenish compare candidate palettes before one is final.
// The choice lives on <html data-palette> and in localStorage; the inline
// script in layout.tsx applies it before paint so there is no flash.
type Pal = { slug: string; name: string; dark: string[]; light: string[] }
const CURRENT: Pal = { slug: "current", name: "Current", dark: ["#1a1a1a", "#262626", "#f5f5f0"], light: ["#f5f5f0", "#ecebe4", "#161616"] }
export const PALETTES: Pal[] = [
  CURRENT,
  { slug: "warm-stone", name: "Warm Stone", dark: ["#222220", "#2e2e2c", "#ebe8df"], light: ["#f0efe8", "#e4e2d8", "#1c1c1a"] },
  { slug: "sage-mist", name: "Sage Mist", dark: ["#20231f", "#2b2f2a", "#a3b8a0"], light: ["#eef0ea", "#e2e6dd", "#3f5a44"] },
  { slug: "slate-dusk", name: "Slate Dusk", dark: ["#1f2329", "#282d35", "#c9b99a"], light: ["#eef0f3", "#e3e7ec", "#3d4a5c"] },
  { slug: "driftwood", name: "Driftwood", dark: ["#25221f", "#2f2c28", "#c4a382"], light: ["#efebe4", "#e5e0d6", "#7d5137"] },
  { slug: "soft-graphite", name: "Soft Graphite", dark: ["#242424", "#2d2d2d", "#cbb590"], light: ["#f1f0ec", "#e6e4de", "#6e5a3a"] },
]
const KEY = "sequel-palette"
const noop = () => () => {}

function read() {
  return document.documentElement.getAttribute("data-palette") || "current"
}
function watch(onChange: () => void) {
  const mo = new MutationObserver(onChange)
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-palette"] })
  return () => mo.disconnect()
}

export function PaletteSwitcher() {
  const mounted = useSyncExternalStore(noop, () => true, () => false)
  const { resolvedTheme } = useTheme()
  const active = useSyncExternalStore(watch, read, () => "current")
  const [open, setOpen] = useState(false)
  const btn = useRef<HTMLButtonElement>(null)
  const list = useRef<HTMLDivElement>(null)
  const id = useId()

  useEffect(() => {
    if (!open) return
    const items = list.current?.querySelectorAll<HTMLButtonElement>("[role=menuitemradio]")
    const idx = PALETTES.findIndex((p) => p.slug === active)
    items?.[Math.max(0, idx)]?.focus()
    const onDown = (e: PointerEvent) => {
      if (!list.current?.contains(e.target as Node) && !btn.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("pointerdown", onDown)
    return () => document.removeEventListener("pointerdown", onDown)
  }, [open, active])

  function choose(slug: string) {
    const html = document.documentElement
    if (slug === "current") {
      html.removeAttribute("data-palette")
      localStorage.removeItem(KEY)
    } else {
      html.setAttribute("data-palette", slug)
      localStorage.setItem(KEY, slug)
    }
  }

  function onKey(e: React.KeyboardEvent) {
    const items = Array.from(list.current?.querySelectorAll<HTMLButtonElement>("[role=menuitemradio]") ?? [])
    const i = items.indexOf(document.activeElement as HTMLButtonElement)
    if (e.key === "Escape") {
      e.preventDefault()
      setOpen(false)
      btn.current?.focus()
    } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault()
      const n = (i + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length
      items[n]?.focus()
    } else if (e.key === "Home" || e.key === "End") {
      e.preventDefault()
      items[e.key === "Home" ? 0 : items.length - 1]?.focus()
    }
  }

  if (!mounted) return null
  const name = PALETTES.find((p) => p.slug === active)?.name ?? "Current"
  const dark = resolvedTheme === "dark"

  return (
    <div
      className="fixed right-4 z-40 sm:right-6"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))", right: "max(1rem, env(safe-area-inset-right))" }}
      onKeyDown={onKey}
    >
      {open && (
        <div
          ref={list}
          id={id}
          role="menu"
          aria-label="Color palette preview"
          className="glass absolute right-0 bottom-14 w-60 rounded-card border border-graphite bg-charcoal/90 p-2 text-ink motion-safe:animate-in motion-safe:fade-in-0 motion-safe:zoom-in-95"
        >
          <p className="label px-2 pt-1 pb-2 text-smoke">Preview, not final</p>
          {PALETTES.map((p) => {
            const sw = dark ? p.dark : p.light
            const on = p.slug === active
            return (
              <button
                key={p.slug}
                type="button"
                role="menuitemradio"
                aria-checked={on}
                onClick={() => choose(p.slug)}
                className="flex h-11 w-full cursor-pointer items-center gap-3 rounded-md px-2 text-left text-[15px] hover:bg-ink/5 focus-visible:bg-ink/5"
              >
                <span className="flex -space-x-1" aria-hidden>
                  {sw.map((c, k) => (
                    <span key={k} className="size-4 rounded-full border border-ink/25" style={{ background: c }} />
                  ))}
                </span>
                <span className="flex-1">{p.name}</span>
                {on && <Check className="size-4" strokeWidth={1.75} aria-hidden />}
              </button>
            )
          })}
        </div>
      )}
      <button
        ref={btn}
        type="button"
        aria-label={`Color palette: ${name}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? id : undefined}
        onClick={() => setOpen((o) => !o)}
        className="glass inline-flex size-12 cursor-pointer items-center justify-center rounded-full border border-graphite text-ink transition-colors duration-300 ease-film hover:bg-ink/10 motion-reduce:transition-none"
      >
        <Palette className="size-5" strokeWidth={1.5} />
      </button>
    </div>
  )
}
