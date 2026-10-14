"use client"

// DEMO ONLY: this checkout is a mock. No payment gateway is called and no
// WhatsApp message is sent. The "processing" step is a simple timeout and the
// reminder schedule is computed locally so the flow can be shown end to end.

import { useState } from "react"
import { toast } from "sonner"
import {
  BellRing,
  CheckCircle2,
  Dumbbell,
  Loader2,
  MessageCircle,
  ShieldCheck,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { formatINR, personalTrainingAddOn, type Plan } from "@/lib/plans"

type Step = "form" | "processing" | "success"

type Reminder = { label: string; when: string }

// Indian mobile numbers: 10 digits starting with 6, 7, 8 or 9.
const INDIAN_MOBILE = /^[6-9]\d{9}$/

function formatPhone(digits: string) {
  return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

function buildReminderSchedule(months: number): Reminder[] {
  const today = new Date()
  const renewal = new Date(today)
  renewal.setMonth(renewal.getMonth() + months)
  const sevenDaysBefore = new Date(renewal)
  sevenDaysBefore.setDate(sevenDaysBefore.getDate() - 7)
  const oneDayBefore = new Date(renewal)
  oneDayBefore.setDate(oneDayBefore.getDate() - 1)

  return [
    { label: "Payment confirmation", when: "Right now" },
    { label: "Renewal reminder (7 days before)", when: formatDate(sevenDaysBefore) },
    { label: "Renewal reminder (1 day before)", when: formatDate(oneDayBefore) },
  ]
}

type SubscribeDialogProps = {
  plan: Plan | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SubscribeDialog({ plan, open, onOpenChange }: SubscribeDialogProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [whatsapp, setWhatsapp] = useState(true)
  const [workoutNudges, setWorkoutNudges] = useState(true)
  const [addTraining, setAddTraining] = useState(false)
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({})
  const [step, setStep] = useState<Step>("form")
  const [schedule, setSchedule] = useState<Reminder[]>([])

  if (!plan) return null

  const trainingCost = addTraining ? personalTrainingAddOn.pricePerMonth * plan.months : 0
  const total = plan.price + trainingCost

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!plan) return

    const nextErrors: { name?: string; phone?: string } = {}
    if (name.trim().length < 2) nextErrors.name = "Please enter your full name."
    if (!INDIAN_MOBILE.test(phone)) {
      nextErrors.phone = "Enter a valid 10 digit Indian mobile number."
    }
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    // Mock "payment processing". A real app would create an order with a
    // payment gateway here and wait for its webhook before confirming.
    setStep("processing")
    const months = plan.months
    const planName = plan.name
    window.setTimeout(() => {
      setSchedule(buildReminderSchedule(months))
      setStep("success")
      // Mock WhatsApp send. A real app would call the WhatsApp Business API
      // from the server. Nothing leaves the browser in this demo.
      toast.success("Demo: subscription confirmed", {
        description: whatsapp
          ? `A WhatsApp reminder would be sent to ${formatPhone(phone)}.`
          : `${planName} plan activated. WhatsApp reminders are off.`,
      })
    }, 1200)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (step === "processing") return
        onOpenChange(nextOpen)
      }}
    >
      <DialogContent className="max-h-[calc(100dvh-2rem)] overflow-y-auto sm:max-w-lg">
        {step === "success" ? (
          <div className="flex flex-col gap-5">
            <DialogHeader className="items-center text-center">
              <div className="flex size-14 items-center justify-center rounded-xl bg-ink text-white">
                <CheckCircle2 className="size-7 text-paper" />
              </div>
              <DialogTitle>
                Demo: subscription confirmed
              </DialogTitle>
              <DialogDescription>
                Welcome to Iron Warriors, {name.trim().split(" ")[0]}. Your{" "}
                {plan.name} plan ({formatINR(total)}, incl. GST) is active.
              </DialogDescription>
            </DialogHeader>

            {whatsapp ? (
              <div className="rounded-lg border border-line bg-ink-3 p-5">
                <p className="flex items-start gap-2 text-body-sm font-semibold text-paper">
                  <MessageCircle className="mt-0.5 size-4 shrink-0 text-paper" />
                  A WhatsApp reminder would be sent to {formatPhone(phone)}
                </p>
                <ul className="mt-4 divide-y divide-line border-t border-line text-body-sm">
                  {schedule.map((reminder) => (
                    <li key={reminder.label} className="flex justify-between gap-4 py-2.5">
                      <span className="text-graphite">{reminder.label}</span>
                      <span className="font-semibold whitespace-nowrap text-paper">{reminder.when}</span>
                    </li>
                  ))}
                  {workoutNudges && (
                    <li className="flex justify-between gap-4 py-2.5">
                      <span className="text-graphite">Workout reminders</span>
                      <span className="font-semibold whitespace-nowrap text-paper">Mon, Wed, Fri</span>
                    </li>
                  )}
                </ul>
              </div>
            ) : (
              <p className="rounded-lg border border-line bg-ink-3 p-5 text-body-sm text-graphite">
                WhatsApp reminders are turned off. You can switch them on any time at
                the front desk.
              </p>
            )}

            <p className="text-center text-body-sm text-pewter">
              Demo only: no payment was charged and no WhatsApp message was sent.
            </p>

            <Button size="lg" variant="dark" onClick={() => onOpenChange(false)}>
              Done
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
            <DialogHeader>
              <div className="flex flex-wrap items-center gap-3 pr-8">
                <p className="eyebrow">Demo checkout</p>
                {plan.popular && <Badge>Most Popular</Badge>}
              </div>
              <DialogTitle>
                {plan.name} membership
              </DialogTitle>
              <DialogDescription>
                {plan.duration} at Iron Warriors. Fill in your details to subscribe.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="member-name">Full name</Label>
                <Input
                  id="member-name"
                  placeholder="Aarav Sharma"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && <p className="text-body-sm text-destructive">{errors.name}</p>}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="member-phone">WhatsApp number</Label>
                <div className="flex">
                  <span className="inline-flex h-11 items-center rounded-l-lg border border-r-0 border-input bg-ink-3 px-4 text-body font-medium text-graphite">
                    +91
                  </span>
                  <Input
                    id="member-phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    placeholder="98765 43210"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    aria-invalid={Boolean(errors.phone)}
                    className="rounded-l-none"
                  />
                </div>
                {errors.phone && <p className="text-body-sm text-destructive">{errors.phone}</p>}
              </div>
            </div>

            <div className="grid gap-4 rounded-lg border border-line bg-ink-3 p-5">
              <div className="flex items-start justify-between gap-4">
                <Label htmlFor="whatsapp-reminders" className="flex-col items-start gap-1">
                  <span className="flex items-center gap-2">
                    <BellRing className="size-4 text-paper" />
                    WhatsApp reminders
                  </span>
                  <span className="text-body-sm font-normal text-graphite">
                    Payment confirmation, plus renewal reminders 7 days and 1 day before
                    your plan ends.
                  </span>
                </Label>
                <Switch
                  id="whatsapp-reminders"
                  checked={whatsapp}
                  onCheckedChange={(checked) => setWhatsapp(checked)}
                />
              </div>
              {whatsapp && (
                <div className="flex items-start justify-between gap-4">
                  <Label htmlFor="workout-nudges" className="flex-col items-start gap-1">
                    <span>Workout reminders</span>
                    <span className="text-body-sm font-normal text-graphite">
                      A friendly nudge on your training days.
                    </span>
                  </Label>
                  <Switch
                    id="workout-nudges"
                    size="sm"
                    checked={workoutNudges}
                    onCheckedChange={(checked) => setWorkoutNudges(checked)}
                  />
                </div>
              )}
            </div>

            <div className="flex items-start justify-between gap-4 rounded-lg border border-line p-5">
              <Label htmlFor="pt-addon" className="flex-col items-start gap-1">
                <span className="flex items-center gap-2">
                  <Dumbbell className="size-4 text-paper" />
                  Add {personalTrainingAddOn.name}
                </span>
                <span className="text-body-sm font-normal text-graphite">
                  {formatINR(personalTrainingAddOn.pricePerMonth)}/mo.{" "}
                  {personalTrainingAddOn.description}
                </span>
              </Label>
              <Switch
                id="pt-addon"
                checked={addTraining}
                onCheckedChange={(checked) => setAddTraining(checked)}
              />
            </div>

            <div className="grid gap-2.5 text-body-sm">
              <p className="text-caption font-semibold tracking-[0.14em] text-pewter uppercase">Order summary</p>
              <div className="flex justify-between">
                <span className="text-graphite">
                  {plan.name} plan ({plan.duration})
                </span>
                <span>{formatINR(plan.price)}</span>
              </div>
              {addTraining && (
                <div className="flex justify-between">
                  <span className="text-graphite">
                    Personal Training ({plan.months} x {formatINR(personalTrainingAddOn.pricePerMonth)})
                  </span>
                  <span>{formatINR(trainingCost)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-graphite">Joining fee</span>
                <span>
                  <span className="mr-2 text-pewter line-through">{formatINR(999)}</span>
                  {formatINR(0)}
                </span>
              </div>
              <Separator className="my-1" />
              <div className="flex items-baseline justify-between">
                <span className="font-semibold text-paper">Total</span>
                <span className="figure text-[28px] leading-none text-paper">
                  {formatINR(total)}
                  <span className="ml-1.5 font-sans text-body-sm font-normal tracking-normal text-pewter">
                    incl. GST
                  </span>
                </span>
              </div>
            </div>

            <DialogFooter className="flex-col gap-3 sm:flex-col sm:justify-start">
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={step === "processing"}
              >
                {step === "processing" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" /> Processing
                  </>
                ) : (
                  <>Pay {formatINR(total)} (demo)</>
                )}
              </Button>
              <p className="flex items-center justify-center gap-1.5 text-center text-body-sm text-pewter">
                <ShieldCheck className="size-3.5" />
                Demo only. No real payment is taken and no WhatsApp message is sent.
              </p>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
