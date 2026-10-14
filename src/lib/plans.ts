// Membership plans for the Iron Warriors demo.
// All prices are in INR and include GST. Mock data only: nothing here is
// connected to a real payment gateway.

export type Plan = {
  id: string
  name: string
  duration: string
  months: number
  price: number
  perMonth: number
  billingNote: string
  savings?: string
  popular?: boolean
  features: string[]
}

export const plans: Plan[] = [
  {
    id: "monthly",
    name: "Monthly",
    duration: "1 month",
    months: 1,
    price: 1499,
    perMonth: 1499,
    billingNote: "per month",
    features: ["Full gym floor access", "Personal locker and showers"],
  },
  {
    id: "quarterly",
    name: "Quarterly",
    duration: "3 months",
    months: 3,
    price: 3999,
    perMonth: 1333,
    billingNote: "for 3 months",
    savings: "Save 11%",
    features: [
      "Full gym floor access",
      "Personal locker and showers",
      "One diet consultation",
    ],
  },
  {
    id: "half-yearly",
    name: "Half-Yearly",
    duration: "6 months",
    months: 6,
    price: 6999,
    perMonth: 1167,
    billingNote: "for 6 months",
    savings: "Save 22%",
    features: [
      "Full gym floor access",
      "Personal locker and showers",
      "One diet consultation",
      "Monthly body composition check",
    ],
  },
  {
    id: "annual",
    name: "Annual",
    duration: "12 months",
    months: 12,
    price: 11999,
    perMonth: 1000,
    billingNote: "for 12 months",
    savings: "Save 33%",
    popular: true,
    features: [
      "Full gym floor access",
      "Personal locker and showers",
      "One diet consultation",
      "Monthly body composition check",
      "2 personal training sessions",
      "Membership freeze option",
    ],
  },
]

// Optional add-on, billed per month of the chosen plan.
export const personalTrainingAddOn = {
  name: "Personal Training",
  pricePerMonth: 4999,
  description: "1:1 coaching with a certified trainer, billed monthly.",
}

// What every member gets on WhatsApp (mocked in this demo).
export const whatsappReminderNote =
  "Get WhatsApp reminders 7 days and 1 day before renewal, plus a payment confirmation."

// Formats a number as Indian Rupees, e.g. 11999 -> "₹11,999".
export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount)
}
