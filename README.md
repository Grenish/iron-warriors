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

Paper and ink with one signal colour. Surfaces are warm off-white (#f3f2ee, panels #e9e7e1) with near-black text (#121211), separated by 1px hairline rules (#d3d0c8). Dark mode flips to #0f0f0e with #ecebe6 text. The only colour is a signal red (#c8361d light, #e8553a dark), reserved for the primary button and savings labels. Corners are square (2px), with no shadows, blur or gradients outside the photo scrims.

Type is Archivo throughout: condensed heavy uppercase (via the `wdth` axis) for headlines and prices, regular width for text. IBM Plex Mono carries small labels, section indexes and timings. Each section opens with a ruled index line (`01 The gym`), a title and a short intro. Tokens live in `src/app/globals.css`.

## Plans (INR, GST included)

| Plan        | Price    | Approx. per month | Extras                                  |
| ----------- | -------- | ----------------- | --------------------------------------- |
| Monthly     | ₹1,200   | ₹1,200            | Gym floor and locker                    |
| Quarterly   | ₹2,999   | ₹1,000            | Plus one diet consult                   |
| Half-Yearly | ₹4,999   | ₹833              | Plus monthly body composition check     |
| Annual      | ₹8,999   | ₹750              | Plus 2 PT sessions and freeze option (Most Popular) |

Add-on: Personal Training at ₹4,999/mo.

## WhatsApp reminder flow (mocked)

1. Click **Buy Subscription** on any plan.
2. Enter your name and a 10 digit Indian mobile number (+91).
3. Keep **WhatsApp reminders** on (optionally add workout reminders or Personal Training).
4. Click **Pay (demo)**. After a short simulated delay you see a confirmation with the reminder schedule: payment confirmation now, then renewal reminders 7 days and 1 day before the plan ends.

Nothing is charged and nothing is sent. Plan data lives in `src/lib/plans.ts`, the checkout in `src/components/sequel/checkout-dialog.tsx`.

## Run it

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm lint
```
