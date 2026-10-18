import Image from "next/image"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const facts = [
  ["Hours", "6 to 11 AM, 4 to 10 PM"],
  ["Membership from", "₹1,200 / month"],
  ["Coaching", "Certified, on the floor"],
  ["Renewals", "Reminders on WhatsApp"],
]

// Full-bleed photo hero. It always uses the dark tokens so the type stays
// legible on the image in either theme.
export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="dark relative isolate flex min-h-[100svh] flex-col bg-photo text-ink"
    >
      <Image
        src="/images/feature-3.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[70%_center]"
      />
      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-photo via-photo/80 to-photo/30"
      />
      <span aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-photo to-transparent" />

      <div className="mx-auto flex w-full max-w-page flex-1 flex-col justify-end px-5 pt-32 sm:px-8">
        <p className="eyebrow text-muted">Strength and conditioning, Tezpur, Assam</p>
        <h1 id="hero-title" className="display mt-6 text-[72px] sm:text-[120px] lg:text-[168px]">
          Strength is
          <br />
          earned here.
        </h1>
        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-lg text-[18px] leading-relaxed text-ink/80">
            A proper training floor with Olympic platforms and power racks, certified coaches in
            every session, and straightforward memberships with GST included.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#plans" className={buttonVariants({ size: "lg" })}>
              See membership
            </a>
            <a href="#contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
              Visit the gym
            </a>
          </div>
        </div>
        <dl className="mt-16 grid grid-cols-2 border-t border-ink/25 lg:mt-20 lg:grid-cols-4">
          {facts.map(([label, value], i) => (
            <div
              key={label}
              className={cn(
                "border-ink/25 py-5 sm:py-6",
                i % 2 === 1 && "border-l pl-4",
                i >= 2 && "border-t lg:border-t-0",
                i > 0 && "lg:border-l lg:pl-6"
              )}
            >
              <dt className="eyebrow text-muted">{label}</dt>
              <dd className="mt-2 text-[17px] font-semibold sm:text-[19px]">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
