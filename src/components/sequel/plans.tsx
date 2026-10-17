"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Check, Minus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  formatINR,
  personalTrainingAddOn,
  plans,
  whatsappReminderNote,
  type Plan,
} from "@/lib/plans"
import { cn } from "@/lib/utils"
import { SectionHeader } from "./heading"

// Checkout code loads only in the browser, off the critical path.
const CheckoutDialog = dynamic(
  () => import("./checkout-dialog").then((m) => m.CheckoutDialog),
  { ssr: false }
)

// Every feature offered by any plan, in plan order, so the columns line up
// as a comparison.
const allFeatures = plans.reduce<string[]>(
  (list, plan) => [...list, ...plan.features.filter((f) => !list.includes(f))],
  []
)

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
    <section id="plans" aria-labelledby="plans-title" className="scroll-mt-16 bg-panel">
      <div className="mx-auto max-w-page px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeader
          id="plans-title"
          index="02"
          label="Membership"
          title="Plans and pricing"
          intro="Prices in INR with 18% GST included. No joining fee this month, and WhatsApp reminders on every plan."
        />

        <ul className="mt-14 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {plans.map((plan) => {
            const featured = Boolean(plan.popular)
            return (
              <li key={plan.id} className="flex flex-col bg-paper">
                <div
                  className={cn(
                    "eyebrow flex h-9 items-center px-6",
                    featured ? "bg-ink text-paper" : "text-muted"
                  )}
                >
                  <span>{featured ? "Best value" : plan.duration}</span>
                  {plan.savings && (
                    <span className={cn("ml-auto", !featured && "text-signal")}>{plan.savings}</span>
                  )}
                </div>
                <div className="flex flex-1 flex-col px-6 pt-5 pb-7">
                  <h3 className="display text-[36px]">{plan.name}</h3>
                  <p className="display mt-8 text-[56px] tabular-nums">{formatINR(plan.price)}</p>
                  <p className="mt-3 text-[15px] text-muted">
                    {plan.billingNote}
                    {plan.months > 1 && <>, about {formatINR(plan.perMonth)}/mo</>}
                  </p>
                  <Button
                    size="lg"
                    variant={featured ? "default" : "outline"}
                    className="mt-7 w-full"
                    onClick={() => startCheckout(plan)}
                    aria-label={`Choose the ${plan.name} plan`}
                  >
                    Choose {plan.name}
                  </Button>
                  <ul className="mt-8 border-t border-rule text-[15px]">
                    {allFeatures.map((feature) => {
                      const included = plan.features.includes(feature)
                      return (
                        <li
                          key={feature}
                          className={cn(
                            "flex items-start gap-3 border-b border-rule py-3",
                            !included && "text-muted/60"
                          )}
                        >
                          {included ? (
                            <Check className="mt-1 size-4 shrink-0" strokeWidth={2} aria-hidden />
                          ) : (
                            <Minus className="mt-1 size-4 shrink-0" strokeWidth={2} aria-hidden />
                          )}
                          <span>
                            <span className="sr-only">{included ? "Included: " : "Not included: "}</span>
                            {feature}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="grid gap-4 border border-t-0 border-rule bg-paper px-6 py-6 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-10">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
            <p className="eyebrow shrink-0 text-muted">Add-on</p>
            <h3 className="text-[18px] font-semibold">{personalTrainingAddOn.name}</h3>
            <p className="text-[15px] text-muted">
              {personalTrainingAddOn.description} Add it to any plan at checkout.
            </p>
          </div>
          <p className="text-[18px] font-semibold whitespace-nowrap tabular-nums">
            {formatINR(personalTrainingAddOn.pricePerMonth)}
            <span className="ml-1 text-[15px] font-normal text-muted">/month</span>
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-[14px] text-muted sm:flex-row sm:justify-between sm:gap-8">
          <p>{whatsappReminderNote}</p>
          <p>Demo site: checkout is simulated. No payment is processed and no message is sent.</p>
        </div>
      </div>

      <CheckoutDialog key={checkoutId} plan={selected} open={open} onOpenChange={setOpen} />
    </section>
  )
}
