"use client"

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react"
import { Check, Type } from "lucide-react"

// PREVIEW ONLY. Lets Grenish compare candidate font pairings before one is final.
// The choice lives on <html data-font> and in localStorage; the inline script
// in layout.tsx applies it before paint so there is no flash.
type Pair = { slug: string; name: string; hint: string; face: string }
export const PAIRINGS: Pair[] = [
  { slug: "current", name: "Current Sans", hint: "Geist", face: "var(--font-geist)" },
  { slug: "precision", name: "Precision", hint: "IBM Plex Sans", face: "var(--font-plex)" },
  { slug: "document", name: "Document", hint: "Source Sans 3", face: "var(--font-source)" },
  { slug: "inter", name: "Inter", hint: "Inter Tight, Inter", face: "var(--font-inter-tight)" },
  { slug: "manrope", name: "Manrope", hint: "Manrope", face: "var(--font-manrope)" },
  { slug: "public", name: "Public Sans", hint: "Public Sans", face: "var(--font-public)" },
]
const KEY = "sequel-font"
const noop = () => () => {}

function read() {
  return document.documentElement.getAttribute("data-font") || "current"
}
function watch(onChange: () => void) {
  const mo = new MutationObserver(onChange)
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-font"] })
  return () => mo.disconnect()
}

export function FontSwitcher() {
  const mounted = useSyncExternalStore(noop, () => true, () => false)
  const active = useSyncExternalStore(watch, read, () => "current")
  const [open, setOpen] = useState(false)
  const btn = useRef<HTMLButtonElement>(null)
  const list = useRef<HTMLDivElement>(null)
  const id = useId()

  useEffect(() => {
    if (!open) return
    const items = list.current?.querySelectorAll<HTMLButtonElement>("[role=menuitemradio]")
    const idx = PAIRINGS.findIndex((p) => p.slug === active)
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
      html.removeAttribute("data-font")
      localStorage.removeItem(KEY)
    } else {
      html.setAttribute("data-font", slug)
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
  const name = PAIRINGS.find((p) => p.slug === active)?.name ?? "Current Sans"

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
          aria-labelledby={`${id}-t`}
          className="glass absolute right-0 bottom-14 w-64 rounded-card border border-graphite bg-charcoal/90 p-2 text-ink motion-safe:animate-in motion-safe:fade-in-0 motion-safe:zoom-in-95"
        >
          <p id={`${id}-t`} className="label px-2 pt-1 pb-2 text-smoke">Preview, not final</p>
          {PAIRINGS.map((p) => {
            const on = p.slug === active
            return (
              <button
                key={p.slug}
                type="button"
                role="menuitemradio"
                aria-checked={on}
                onClick={() => choose(p.slug)}
                className="flex min-h-12 w-full py-1 cursor-pointer items-center gap-3 rounded-md px-2 text-left text-[15px] hover:bg-ink/5 focus-visible:bg-ink/5"
              >
                <span aria-hidden className="w-8 text-center text-[20px] leading-none" style={{ fontFamily: p.face }}>
                  Aa
                </span>
                <span className="flex flex-1 flex-col leading-tight">
                  {p.name}
                  <span className="text-[12px] text-smoke">{p.hint}</span>
                </span>
                {on && <Check className="size-4" strokeWidth={1.75} aria-hidden />}
              </button>
            )
          })}
        </div>
      )}
      <button
        ref={btn}
        type="button"
        aria-label={`Font pairing: ${name}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? id : undefined}
        onClick={() => setOpen((o) => !o)}
        className="glass inline-flex size-12 cursor-pointer items-center justify-center rounded-full border border-graphite text-ink transition-colors duration-300 ease-film hover:bg-ink/10 motion-reduce:transition-none"
      >
        <Type className="size-5" strokeWidth={1.5} />
      </button>
    </div>
  )
}
