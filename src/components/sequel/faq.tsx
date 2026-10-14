import { Plus } from "lucide-react"

import { HeadingPair } from "./heading"

const faqs = [
  ["How do the WhatsApp reminders work?", "As soon as you subscribe you get a payment confirmation on WhatsApp. We then message you 7 days and 1 day before your plan ends, and you can opt in to workout reminders on your training days. Reply STOP at any time to turn them off."],
  ["Do the prices include GST?", "Yes. Every price on this page includes 18% GST, so the amount you see is the amount you pay. Your GST invoice arrives on WhatsApp right after payment."],
  ["Can I freeze my Annual membership?", "Yes. Annual members can freeze their plan for up to 30 days in total for travel, illness or exams. Message us on WhatsApp or tell the front desk and we extend your end date."],
  ["How does checkout work on this site?", "This is a demo, so checkout is simulated: no money is charged and no WhatsApp message is sent. On the live site you would pay through a secure payment gateway with UPI, cards or netbanking, and the confirmation would arrive on WhatsApp within seconds."],
  ["Where are you and when are you open?", "80 Feet Road, 4th Block, Koramangala, Bengaluru 560034. We are open 5 AM to 11 PM Monday to Friday, and 6 AM to 9 PM on Saturday and Sunday."],
]

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-18 bg-void">
      <div className="mx-auto max-w-page px-5 py-24 sm:px-8 lg:py-30">
        <HeadingPair
          id="faq-title"
          center
          lead="Everything members usually ask before they join."
          before="Questions, "
          payoff="answered"
          after="."
        />
        <div className="mx-auto mt-16 max-w-3xl border-t border-graphite lg:mt-20">
          {faqs.map(([q, a], i) => (
            <details key={q} open={i === 0} className="group border-b border-graphite">
              <summary className="flex min-h-18 cursor-pointer list-none items-center justify-between gap-6 py-6 text-body-lg font-light tracking-[-0.01em] [&::-webkit-details-marker]:hidden">
                {q}
                <span aria-hidden className="glass flex size-10 shrink-0 items-center justify-center rounded-full">
                  <Plus className="size-4 transition-transform duration-300 ease-film group-open:rotate-45" strokeWidth={1.5} />
                </span>
              </summary>
              <p className="max-w-2xl pb-8 text-body text-mute">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
