import Image from "next/image"
import { ArrowDown } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Full viewport black still. The headline is the visual, anchored bottom
// left, with a round glass control anchored bottom right.
export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-void">
      <Image
        src="/images/hero.webp"
        alt="Dimly lit strength floor with power racks and loaded barbells under warm pendant lights"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      {/* Readability scrims: darken the bottom and the left where the copy sits. */}
      <span aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-black via-black/70 to-black/20" />
      <span aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
      <div className="mx-auto flex w-full max-w-page flex-1 flex-col justify-end px-5 pt-32 pb-14 sm:px-8 sm:pb-20">
        <p className="label text-mute">Koramangala, Bengaluru</p>
        <h1
          id="hero-title"
          className="mt-6 text-[64px] leading-[0.98] font-medium tracking-[-0.05em] text-balance sm:text-[104px] lg:text-display"
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
            className={cn(
              "glass group hidden size-32 shrink-0 flex-col items-center justify-center gap-2 rounded-full text-white transition-colors duration-300 ease-film hover:bg-white/15 lg:flex"
            )}
          >
            <ArrowDown className="size-4" strokeWidth={1.5} />
            <span className="text-[13px] tracking-[0.03em] uppercase">See the gym</span>
          </a>
        </div>
      </div>
    </section>
  )
}
