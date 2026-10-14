"use client"

import { useState } from "react"
import { Check, MessageCircle } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SubscribeDialog } from "@/components/subscribe-dialog"
import { cn } from "@/lib/utils"
import {
  formatINR,
  personalTrainingAddOn,
  plans,
  whatsappReminderNote,
  type Plan,
} from "@/lib/plans"

export function Pricing() {
  const [selected, setSelected] = useState<Plan | null>(null)
  const [open, setOpen] = useState(false)
  // Bumped on every new checkout so the dialog form starts fresh.
  const [checkoutId, setCheckoutId] = useState(0)

  function startCheckout(plan: Plan) {
    setSelected(plan)
    setCheckoutId((id) => id + 1)
    setOpen(true)
  }

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => {
          // The Most Popular plan is set on the ink surface so it reads as the
          // recommended choice without any extra decoration.
          const featured = Boolean(plan.popular)
          return (
            <Card
              key={plan.id}
              className={cn(
                "relative [--card-spacing:--spacing(7)]! sm:[--card-spacing:--spacing(7)]!",
                featured && "border-crimson/80 bg-ink-3 text-white xl:-my-3 xl:py-10"
              )}
            >
              <CardHeader>
                <div className="flex min-h-7 flex-wrap items-center justify-between gap-2">
                  <CardTitle className={cn(featured && "text-white")}>{plan.name}</CardTitle>
                  {plan.popular && <Badge>Most Popular</Badge>}
                </div>
                <CardDescription
                  className={cn("text-body-sm", featured ? "text-mist" : "text-pewter")}
                >
                  {plan.duration} membership
                  {plan.savings && (
                    <>
                      {" · "}
                      <span className={cn("font-semibold", featured ? "text-paper" : "text-paper")}>
                        {plan.savings}
                      </span>
                    </>
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-6">
                <div
                  className={cn(
                    "border-y py-5",
                    featured ? "border-line-dark" : "border-line"
                  )}
                >
                  <p
                    className={cn(
                      "figure text-[48px] sm:text-[52px] leading-none",
                      featured ? "text-white" : "text-paper"
                    )}
                  >
                    {formatINR(plan.price)}
                  </p>
                  <p className={cn("mt-2 text-body-sm", featured ? "text-mist" : "text-graphite")}>
                    {plan.billingNote}
                  </p>
                  <p className={cn("mt-0.5 text-caption", featured ? "text-fog" : "text-pewter")}>
                    incl. GST
                    {plan.months > 1 && <> · about {formatINR(plan.perMonth)}/mo</>}
                  </p>
                </div>
                <ul
                  className={cn(
                    "space-y-3 text-body-sm",
                    featured ? "text-mist" : "text-graphite"
                  )}
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className={cn(
                          "mt-1 size-4 shrink-0",
                          featured ? "text-paper" : "text-paper"
                        )}
                        strokeWidth={2.5}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p
                  className={cn(
                    "mt-auto flex items-start gap-2 border-t pt-5 text-caption",
                    featured ? "border-line-dark text-fog" : "border-line text-pewter"
                  )}
                >
                  <MessageCircle className="mt-px size-3.5 shrink-0" />
                  <span>{whatsappReminderNote}</span>
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  size="lg"
                  className="w-full"
                  variant={featured ? "default" : "dark"}
                  onClick={() => startCheckout(plan)}
                >
                  Buy Subscription
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>

      <div className="mt-10 grid gap-6 rounded-xl border border-line bg-ink-2 p-6 sm:p-8 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-10">
        <p className="eyebrow">Add-on</p>
        <div>
          <p className="headline text-heading text-paper">{personalTrainingAddOn.name}</p>
          <p className="mt-1 text-body text-graphite">
            {personalTrainingAddOn.description} Add it to any plan at checkout.
          </p>
        </div>
        <div className="md:text-right">
          <p className="text-caption font-semibold tracking-[0.12em] text-pewter uppercase">From</p>
          <p className="figure mt-1 text-[32px] leading-none text-paper">
            {formatINR(personalTrainingAddOn.pricePerMonth)}
            <span className="ml-1 font-sans text-body-sm font-medium tracking-normal text-pewter">
              /mo incl. GST
            </span>
          </p>
        </div>
      </div>

      <SubscribeDialog
        key={checkoutId}
        plan={selected}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  )
}
