"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

import { SectionHeader } from "./heading"

const faqs = [
  ["How do the WhatsApp reminders work?", "As soon as you subscribe you get a payment confirmation on WhatsApp. We then message you 7 days and 1 day before your plan ends, and you can opt in to workout reminders on your training days. Reply STOP at any time to turn them off."],
  ["Do the prices include GST?", "Yes. Every price on this page includes 18% GST, so the amount you see is the amount you pay. Your GST invoice arrives on WhatsApp right after payment."],
  ["Can I freeze my Annual membership?", "Yes. Annual members can freeze their plan for up to 30 days in total for travel, illness or exams. Message us on WhatsApp or tell the front desk and we extend your end date."],
  ["How does checkout work on this site?", "This is a demo, so checkout is simulated: no money is charged and no WhatsApp message is sent. On the live site you would pay through a secure payment gateway with UPI, cards or netbanking, and the confirmation would arrive on WhatsApp within seconds."],
  ["Where are you and when are you open?", "Main Road, Tezpur, Assam 784001. We are open 5 AM to 11 PM Monday to Friday, and 6 AM to 9 PM on Saturday and Sunday."],
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-16 bg-paper">
      <div className="mx-auto max-w-page px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeader id="faq-title" index="05" label="Questions" title="Before you join" />
        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12">
          <div className="order-last lg:order-none lg:col-span-4">
            <p className="max-w-xs text-muted">
              Anything else, call the front desk on{" "}
              <a href="tel:+918000000000" className="font-medium text-ink underline underline-offset-4">
                +91 80000 00000
              </a>{" "}
              or message the same number on WhatsApp.
            </p>
          </div>
          <div className="border-b border-rule lg:col-span-7 lg:col-start-6">
            {faqs.map(([q, a], i) => {
              const isOpen = open === i
              return (
                <div key={q} className="border-t border-rule">
                  <h3>
                    <button
                      type="button"
                      id={`faq-q-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex min-h-16 w-full cursor-pointer items-center justify-between gap-6 py-5 text-left text-[18px] font-semibold tracking-[-0.01em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                    >
                      {q}
                      <Plus
                        aria-hidden
                        className={`size-5 shrink-0 transition-transform duration-300 ease-out-quint ${isOpen ? "rotate-45" : ""}`}
                        strokeWidth={1.75}
                      />
                    </button>
                  </h3>
                  {/* Answer always stays in the HTML; collapsed via grid rows so it animates. */}
                  <div
                    id={`faq-a-${i}`}
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                    inert={!isOpen}
                    data-state={isOpen ? "open" : "closed"}
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out-quint motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 text-muted">{a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
