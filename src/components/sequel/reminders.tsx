import { Badge } from "@/components/ui/badge"
import { HeadingPair } from "./heading"
import { PhoneLazy } from "./phone-lazy"

const moments = [
  ["Right after you pay", "Payment confirmation", "Your payment confirmation and membership details arrive on WhatsApp right away."],
  ["7 days before", "Renewal reminder", "A message a week before your plan ends, with a button to renew."],
  ["1 day before", "Final reminder", "One more nudge the day before, so your membership never lapses."],
  ["On training days", "Workout reminders", "Optional. Turn them on at checkout. Reply STOP at any time to turn them off."],
]

export function Reminders() {
  return (
    <section id="reminders" aria-labelledby="reminders-title" className="scroll-mt-18 bg-charcoal">
      <div className="mx-auto max-w-page px-5 py-24 sm:px-8 lg:py-30">
        <HeadingPair
          id="reminders-title"
          lead="Every member gets automatic WhatsApp messages, from the first payment to every renewal."
          before="Your membership, on "
          payoff="autopilot"
          after="."
        />
        <div className="mt-16 grid gap-4 lg:mt-20 lg:grid-cols-2">
          <ol className="flex flex-col justify-between rounded-card bg-void">
            {moments.map(([when, title, text], i) => (
              <li key={title} className={i ? "border-t border-graphite p-6 sm:p-8" : "p-6 sm:p-8"}>
                <p className="label text-smoke">{when}</p>
                <p className="mt-3 text-[21px] font-medium tracking-[-0.02em]">{title}</p>
                <p className="mt-2 text-body text-mute">{text}</p>
              </li>
            ))}
          </ol>
          <figure className="relative flex flex-col items-center justify-center gap-8 rounded-card bg-void px-6 pt-20 pb-8">
            <Badge className="absolute top-4 right-4">Preview</Badge>
            <PhoneLazy />
            <figcaption className="self-start text-body text-smoke">
              Preview only. This demo does not send WhatsApp messages.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
