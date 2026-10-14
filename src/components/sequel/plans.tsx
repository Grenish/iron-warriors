"use client"

import { useState } from "react"
import dynamic from "next/dynamic"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  formatINR,
  personalTrainingAddOn,
  plans,
  whatsappReminderNote,
  type Plan,
} from "@/lib/plans"
import { cn } from "@/lib/utils"
import { HeadingPair } from "./heading"

// Checkout code loads only in the browser, off the critical path.
const CheckoutDialog = dynamic(
  () => import("./checkout-dialog").then((m) => m.CheckoutDialog),
  { ssr: false }
)

// Plans as a ruled ledger on one charcoal surface, not a row of cards.
export function Plans() {
  const [selected, setSelected] = useState<Plan | null>(null)
  const [open, setOpen] = useState(false)
  const [checkoutId, setCheckoutId] = useState(0)

  function startCheckout(plan: Plan) {
    setSelected(plan)
    setCheckoutId((id) => id + 1)
    setOpen(true)
  }

  return (
    <section id="plans" aria-labelledby="plans-title" className="scroll-mt-18 bg-charcoal">
      <div className="mx-auto max-w-page px-5 py-24 sm:px-8 lg:py-30">
        <HeadingPair
          id="plans-title"
          lead="Simple pricing in INR, GST included. No joining fee this month. Every plan comes with WhatsApp reminders."
          before="Pick your "
          payoff="plan"
          after="."
        />

        <ul className="mt-16 overflow-hidden rounded-card bg-void lg:mt-20">
          {plans.map((plan, i) => {
            const featured = Boolean(plan.popular)
            return (
              <li
                key={plan.id}
                className={cn(
                  "grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.1fr_1.4fr_1fr_auto] lg:items-center lg:gap-10",
                  i > 0 && "border-t border-graphite"
                )}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="display text-sub">{plan.name}</h3>
                    {featured && <Badge>Most Popular</Badge>}
                  </div>
                  <p className="label mt-3 text-smoke">
                    {plan.duration} membership
                    {plan.savings && <> · {plan.savings}</>}
                  </p>
                </div>
                <p className="text-body text-mute">{plan.features.join(", ")}.</p>
                <div>
                  <p className="display text-[48px] leading-none sm:text-[57px]">{formatINR(plan.price)}</p>
                  <p className="mt-2 text-body text-smoke">
                    {plan.billingNote}, incl. GST
                    {plan.months > 1 && <>. About {formatINR(plan.perMonth)}/mo</>}
                  </p>
                </div>
                <Button
                  size="lg"
                  variant={featured ? "default" : "ghost"}
                  onClick={() => startCheckout(plan)}
                  aria-label={`Buy Subscription, ${plan.name} plan`}
                >
                  Buy Subscription
                </Button>
              </li>
            )
          })}
          <li className="grid gap-4 border-t border-graphite p-6 sm:p-8 lg:grid-cols-[1.1fr_1.4fr_1fr_auto] lg:items-center lg:gap-10">
            <div>
              <h3 className="display text-sub">{personalTrainingAddOn.name}</h3>
              <p className="label mt-3 text-smoke">Add-on</p>
            </div>
            <p className="text-body text-mute">
              {personalTrainingAddOn.description} Add it to any plan at checkout.
            </p>
            <div className="lg:col-span-2">
              <p className="display text-[40px] leading-none">
                {formatINR(personalTrainingAddOn.pricePerMonth)}
              </p>
              <p className="mt-2 text-body text-smoke">per month, incl. GST</p>
            </div>
          </li>
        </ul>

        <div className="mt-8 flex flex-col gap-2 text-body text-smoke sm:flex-row sm:justify-between sm:gap-8">
          <p>{whatsappReminderNote}</p>
          <p>Demo site: checkout is simulated. No real payment is processed and no WhatsApp message is sent.</p>
        </div>
      </div>

      <CheckoutDialog key={checkoutId} plan={selected} open={open} onOpenChange={setOpen} />
    </section>
  )
}
