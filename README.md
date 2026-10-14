# Iron Warriors (demo)

A single-page landing site for a fictional Indian gym, Iron Warriors. Members can pick a plan, check out with a mock payment, and opt in to automatic WhatsApp reminders.

**Demo only:** there is no real payment gateway and no WhatsApp API. The checkout is simulated in the browser.

## Stack

- Next.js (App Router) with TypeScript
- Tailwind CSS v4
- shadcn/ui (Base UI primitives)
- ESLint
- pnpm

## Design

The page follows the Sleeve design system: a light, monochrome look on a pure white canvas. Text is black (#000000), secondary text #333333 and muted text #999999. Surfaces are #ffffff and #f9fafb, separated only by white space and 1px #e5e7eb hairline borders. The single accent, blue #0e95ee, appears only on small uppercase eyebrow labels and on the hero showcase gradient. Buttons are solid black or hairline outlined, never colored. Tokens live in the `@theme` block of `src/app/globals.css`.

## Plans (INR, GST included)

| Plan        | Price    | Approx. per month | Extras                                  |
| ----------- | -------- | ----------------- | --------------------------------------- |
| Monthly     | ₹1,499   | ₹1,499            | Gym floor and locker                    |
| Quarterly   | ₹3,999   | ₹1,333            | Plus one diet consult                   |
| Half-Yearly | ₹6,999   | ₹1,167            | Plus monthly body composition check     |
| Annual      | ₹11,999  | ₹1,000            | Plus 2 PT sessions and freeze option (Most Popular) |

Add-on: Personal Training at ₹4,999/mo.

## WhatsApp reminder flow (mocked)

1. Click **Buy Subscription** on any plan.
2. Enter your name and a 10 digit Indian mobile number (+91).
3. Keep **WhatsApp reminders** on (optionally add workout reminders or Personal Training).
4. Click **Pay (demo)**. After a short simulated delay you see a confirmation with the reminder schedule: payment confirmation now, then renewal reminders 7 days and 1 day before the plan ends.

Nothing is charged and nothing is sent. Plan data lives in `src/lib/plans.ts`, the checkout in `src/components/subscribe-dialog.tsx`.

## Run it

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm lint
```
