import { SectionHeader } from "./heading"
import { PhoneLazy } from "./phone-lazy"

const moments = [
  ["At payment", "Payment confirmation", "Your receipt and membership details arrive on WhatsApp right away."],
  ["7 days before", "Renewal reminder", "A message a week before your plan ends, with a button to renew."],
  ["1 day before", "Final reminder", "One more message the day before, so your membership never lapses."],
  ["Training days", "Workout reminders", "Optional. Turn them on at checkout. Reply STOP at any time to turn them off."],
]

export function Reminders() {
  return (
    <section id="reminders" aria-labelledby="reminders-title" className="scroll-mt-16 bg-paper">
      <div className="mx-auto max-w-page px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeader
          id="reminders-title"
          index="03"
          label="Renewals"
          title="Never miss a renewal"
          intro="Every membership includes automatic WhatsApp messages, from the first payment to every renewal."
        />
        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-10">
          <ol className="lg:col-span-7">
            {moments.map(([when, title, text]) => (
              <li
                key={title}
                className="grid gap-2 border-t border-rule py-7 sm:grid-cols-[160px_1fr] sm:gap-8"
              >
                <p className="eyebrow pt-1 text-muted">{when}</p>
                <div>
                  <h3 className="text-[20px] font-semibold tracking-[-0.01em]">{title}</h3>
                  <p className="mt-2 max-w-md text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <figure className="flex flex-col items-center gap-6 border border-rule bg-panel px-6 pt-12 pb-6 lg:col-span-5">
            <PhoneLazy />
            <figcaption className="eyebrow self-stretch border-t border-rule pt-4 text-muted">
              Preview. This demo does not send messages.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
