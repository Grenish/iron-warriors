import { ArrowDown } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"

const facts = [
  ["5 AM", "Doors open daily"],
  ["₹1,499", "Monthly, incl. GST"],
  ["2 reminders", "Before every renewal"],
]

// Typographic hero on the page background. The headline is the visual and
// the largest paint; a hairline fact row and a round glass control anchor
// the bottom so the space reads as composed, not empty.
export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative flex min-h-[100svh] flex-col bg-void">
      <div className="mx-auto flex w-full max-w-page flex-1 flex-col justify-end px-5 pt-32 pb-12 sm:px-8 sm:pb-16">
        <p className="label text-smoke">Koramangala, Bengaluru</p>
        <h1
          id="hero-title"
          className="display mt-6 text-[60px] leading-[0.98] text-ink sm:text-[104px] lg:text-display"
        >
          Iron Warriors.
          <br />
          Train with <span className="payoff">discipline</span>.
        </h1>
        <div className="mt-10 flex flex-col gap-10 sm:mt-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p className="text-body-lg text-mute">
              Serious equipment, certified coaches and WhatsApp reminders that keep you consistent.
              Koramangala, Bengaluru, from ₹1,499/month.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#plans" className={buttonVariants({ size: "lg" })}>
                Join now
              </a>
              <a href="#plans" className={buttonVariants({ variant: "ghost", size: "lg" })}>
                View plans from ₹1,499
              </a>
            </div>
          </div>
          <a
            href="#floor"
            className="glass hidden size-32 shrink-0 flex-col items-center justify-center gap-2 rounded-full text-ink transition-colors duration-300 ease-film hover:bg-ink/10 lg:flex"
          >
            <ArrowDown className="size-4" strokeWidth={1.5} />
            <span className="text-[13px] tracking-[0.03em] uppercase">See the gym</span>
          </a>
        </div>
        <dl className="mt-14 grid grid-cols-1 border-t border-graphite sm:mt-20 sm:grid-cols-3">
          {facts.map(([value, label]) => (
            <div key={label} className="flex items-baseline justify-between gap-4 border-b border-graphite py-5 sm:flex-col sm:items-start sm:border-b-0 sm:py-6 sm:pr-8">
              <dt className="label text-smoke sm:mt-2">{label}</dt>
              <dd className="display order-first text-[28px] leading-none text-ink sm:text-sub">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
