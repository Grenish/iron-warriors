"use client"

import { useEffect, useRef, useState, useSyncExternalStore } from "react"
import {
  ArrowLeft,
  BadgeCheck,
  Camera,
  ExternalLink,
  Mic,
  Paperclip,
  Phone,
  Smile,
  Video,
} from "lucide-react"

import { cn } from "@/lib/utils"

// All gym messages are incoming business messages. The third one is a
// WhatsApp business template with a "Renew now" button row.
const messages = [
  {
    text: "Payment received: ₹11,999 for your Annual plan. Welcome to Iron Warriors, Aarav.",
    time: "9:41 AM",
  },
  { text: "Reminder: Leg day today at 6:30 PM. Your squat rack is waiting.", time: "4:00 PM" },
  {
    text: "Your membership renews in 7 days. Tap below to renew.",
    time: "10:00 AM",
    button: "Renew now",
  },
  {
    text: "Payment received: ₹11,999. Your Annual plan now runs till 13 Oct 2028.",
    time: "10:02 AM",
  },
]

const TYPING_MS = 900
const GAP_MS = 650
const TAP_DELAY_MS = 900
const TAP_MS = 350
const LOOP_PAUSE_MS = 5000

type State = { shown: number; typing: boolean; pressed: boolean; tapped: boolean }
const initial: State = { shown: 0, typing: false, pressed: false, tapped: false }
const complete: State = { shown: messages.length, typing: false, pressed: false, tapped: true }

function subscribeMotion(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
  mq.addEventListener("change", onChange)
  return () => mq.removeEventListener("change", onChange)
}

// Faint WhatsApp style doodle wallpaper as an inline SVG tile.
const doodle =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' fill='none' stroke='%23ffffff' stroke-opacity='0.045' stroke-width='1.5'%3E%3Ccircle cx='20' cy='22' r='7'/%3E%3Cpath d='M70 14l8 8-8 8-8-8z'/%3E%3Cpath d='M98 60c6-8 14 0 8 8'/%3E%3Crect x='14' y='72' width='16' height='11' rx='3'/%3E%3Cpath d='M58 92h18M67 83v18'/%3E%3Cpath d='M40 48q6-10 12 0t12 0'/%3E%3Ccircle cx='100' cy='104' r='3'/%3E%3C/svg%3E\")"

function Bubble({
  children,
  time,
  tail,
  animate,
}: {
  children: React.ReactNode
  time: string
  tail: boolean
  animate: boolean
}) {
  return (
    <div className={cn("relative max-w-[84%] self-start", animate && "wa-pop")}>
      {tail && (
        <svg
          viewBox="0 0 8 13"
          className="absolute top-0 -left-2 h-[13px] w-2 fill-[#202c33]"
          aria-hidden
        >
          <path d="M8 0H1.5C.4 0-.4 1.3.3 2.2L8 13z" />
        </svg>
      )}
      <div
        className={cn(
          "overflow-hidden rounded-lg bg-[#202c33] text-[13.5px] leading-[19px] text-[#e9edef]",
          tail && "rounded-tl-none"
        )}
      >
        {children}
        {/* time sits inside the text block */}
        <span className="sr-only">{time}</span>
      </div>
    </div>
  )
}

export function WhatsAppMock() {
  const reduced = useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  )
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [state, setState] = useState<State>(initial)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.35,
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (reduced || !visible) return
    const timers: ReturnType<typeof setTimeout>[] = []
    const at = (ms: number, fn: () => void) => timers.push(setTimeout(fn, ms))

    function run(start: number) {
      let t = start
      at(t, () => setState(initial))
      t += 400
      messages.forEach((m, i) => {
        if (i === messages.length - 1) {
          // Tap the template button, then the confirmation arrives.
          t += TAP_DELAY_MS
          at(t, () => setState((s) => ({ ...s, pressed: true })))
          t += TAP_MS
          at(t, () => setState((s) => ({ ...s, pressed: false, tapped: true })))
          t += 300
        }
        at(t, () => setState((s) => ({ ...s, typing: true })))
        t += TYPING_MS
        at(t, () => setState((s) => ({ ...s, typing: false, shown: i + 1 })))
        t += GAP_MS
      })
      t += LOOP_PAUSE_MS
      at(t, () => run(0))
    }
    run(0)
    return () => timers.forEach(clearTimeout)
  }, [reduced, visible])

  const view = reduced ? complete : state

  return (
    <figure ref={ref} className="mx-auto w-full max-w-[340px]">
      <div
        aria-hidden
        className="flex aspect-[9/18.5] w-full flex-col overflow-hidden rounded-[40px] border border-[#333] bg-[#0b141a] p-[6px]"
      >
        <div className="flex h-full flex-col overflow-hidden rounded-[34px]">
          {/* Status bar */}
          <div className="relative flex h-8 shrink-0 items-center justify-between bg-[#202c33] px-6 text-[11px] font-semibold text-[#e9edef]">
            <span>10:02</span>
            <span className="absolute top-1.5 left-1/2 h-[18px] w-[84px] -translate-x-1/2 rounded-full bg-black" />
            <span className="flex items-end gap-[2px]">
              {[4, 6, 8, 10].map((h) => (
                <span key={h} className="w-[3px] rounded-[1px] bg-[#e9edef]" style={{ height: h }} />
              ))}
              <span className="ml-1.5 h-[9px] w-[18px] rounded-[2px] border border-[#e9edef]/80 p-[1px]">
                <span className="block h-full w-3/4 rounded-[1px] bg-[#e9edef]" />
              </span>
            </span>
          </div>

          {/* Chat header */}
          <div className="flex shrink-0 items-center gap-2 bg-[#202c33] px-2.5 pt-1 pb-2.5 text-[#e9edef]">
            <ArrowLeft className="size-5 shrink-0" />
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#0b141a] text-[12px] font-bold text-[#e9edef] ring-1 ring-[#e9edef]/30">
              IW
            </span>
            <div className="min-w-0 flex-1 leading-tight">
              <p className="flex items-center gap-1 text-[15px] font-medium">
                Iron Warriors
                <BadgeCheck className="size-4 fill-[#00a884] text-[#202c33]" strokeWidth={2.5} />
              </p>
              <p className="truncate text-[12px] text-[#aebac1]">
                {view.typing ? "typing..." : "Business account"}
              </p>
            </div>
            <Video className="size-5 shrink-0" />
            <Phone className="ml-3 size-[18px] shrink-0" />
          </div>

          {/* Chat body */}
          <div
            className="flex min-h-0 flex-1 flex-col justify-end gap-1.5 overflow-hidden px-3 py-3"
            style={{ backgroundImage: doodle }}
          >
            <span className="mb-1 self-center rounded-md bg-[#182229] px-2.5 py-1 text-[11px] text-[#aebac1]">
              Today
            </span>
            {messages.slice(0, view.shown).map((m, i) => (
              <Bubble key={i} time={m.time} tail={i === 0 || i === 3 || i === 2} animate={!reduced}>
                <p className="px-2.5 pt-1.5 pb-1">
                  {m.text}
                  <span className="float-right mt-1.5 ml-3 text-[11px] leading-none text-[#aebac1]">
                    {m.time}
                  </span>
                </p>
                {m.button && (
                  <div
                    className={cn(
                      "flex items-center justify-center gap-1.5 border-t border-[#ffffff1a] py-2 text-[13.5px] font-medium text-[#53bdeb] transition-colors duration-150",
                      view.pressed && "bg-[#ffffff14]",
                      view.tapped && i === 2 && "text-[#53bdeb]/80"
                    )}
                  >
                    <ExternalLink className="size-3.5" />
                    {m.button}
                  </div>
                )}
              </Bubble>
            ))}
            {view.typing && (
              <div className="wa-pop relative self-start">
                <svg viewBox="0 0 8 13" className="absolute top-0 -left-2 h-[13px] w-2 fill-[#202c33]">
                  <path d="M8 0H1.5C.4 0-.4 1.3.3 2.2L8 13z" />
                </svg>
                <div className="flex gap-1 rounded-lg rounded-tl-none bg-[#202c33] px-3.5 py-3">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="wa-dot size-1.5 rounded-full bg-[#8696a0]"
                      style={{ animationDelay: `${d * 150}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input bar, purely visual */}
          <div className="flex shrink-0 items-center gap-2 bg-[#0b141a] px-2 pt-1 pb-3">
            <div className="flex h-10 flex-1 items-center gap-2.5 rounded-full bg-[#202c33] px-3 text-[#8696a0]">
              <Smile className="size-5 shrink-0" />
              <span className="flex-1 text-[14px]">Message</span>
              <Paperclip className="size-[18px] shrink-0 -rotate-45" />
              <Camera className="size-[18px] shrink-0" />
            </div>
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#00a884] text-[#0b141a]">
              <Mic className="size-5" />
            </span>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-caption text-fog">
        <span className="sr-only">
          Example WhatsApp chat from Iron Warriors: a payment confirmation, a workout reminder, a
          renewal reminder with a Renew now button, and a renewal payment confirmation.{" "}
        </span>
        Preview only. This demo does not send WhatsApp messages.
      </figcaption>
    </figure>
  )
}
