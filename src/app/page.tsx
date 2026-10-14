import type { LucideIcon } from "lucide-react"
import {
  ArrowRight,
  BellRing,
  CalendarCheck,
  Clock,
  Dumbbell,
  Flame,
  HeartPulse,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Plus,
  Salad,
  TrendingDown,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"

import { Pricing } from "@/components/pricing"
import { BrandMark, SiteHeader } from "@/components/site-header"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const stats = [
  { value: "2,500+", label: "Active members" },
  { value: "18", label: "Expert trainers" },
  { value: "40+", label: "Classes every week" },
  { value: "4.8★", label: "Google rating" },
]

const classes = [
  ["6:00 AM", "Power Yoga", "Studio 1"],
  ["7:30 AM", "Strength Basics", "Main floor"],
  ["6:30 PM", "HIIT Burn", "Turf"],
  ["8:00 PM", "Kickboxing", "Studio 2"],
]

const reminderSteps = [
  {
    icon: Zap,
    title: "Subscribe online",
    text: "Pick a plan, enter your WhatsApp number and pay in under a minute.",
  },
  {
    icon: CalendarCheck,
    title: "Instant confirmation",
    text: "Your payment confirmation and membership details arrive on WhatsApp right away.",
  },
  {
    icon: BellRing,
    title: "Never miss a renewal",
    text: "We message you 7 days and 1 day before your plan ends, plus optional workout reminders.",
  },
]

const chat = [
  ["Payment received: ₹11,999 for your Annual plan. Welcome to Iron Warriors, Aarav.", "9:41 AM"],
  ["Reminder: Leg day today at 6:30 PM. Your squat rack is waiting.", "4:00 PM"],
  ["Your membership renews in 7 days. Reply RENEW to continue without a break.", "10:00 AM"],
]

const testimonials = [
  {
    quote:
      "I lost 9 kg in five months without giving up home food. The diet plan is built around an Indian kitchen, which is why I could stick to it.",
    name: "Priya N.",
    plan: "Annual member",
    area: "HSR Layout",
  },
  {
    quote:
      "I train at 5:30 AM before work and the floor is never crowded. The WhatsApp renewal reminders have kept my membership from lapsing twice.",
    name: "Rohan K.",
    plan: "Half-Yearly member",
    area: "Koramangala",
  },
  {
    quote:
      "The coaches correct your form before you have to ask. My deadlift went from 80 kg to 140 kg in a year, with no injuries along the way.",
    name: "Sandeep M.",
    plan: "Annual member",
    area: "BTM Layout",
  },
  {
    quote:
      "I joined for Zumba and stayed for the strength classes. Clean facilities, a professional front desk and no sales pressure at any point.",
    name: "Ananya R.",
    plan: "Quarterly member",
    area: "Ejipura",
  },
]

const faqs = [
  {
    q: "How do the WhatsApp reminders work?",
    a: "As soon as you subscribe you get a payment confirmation on WhatsApp. We then message you 7 days and 1 day before your plan ends, and you can opt in to workout reminders on your training days. Reply STOP at any time to turn them off.",
  },
  {
    q: "Do the prices include GST?",
    a: "Yes. Every price on this page includes 18% GST, so the amount you see is the amount you pay. Your GST invoice arrives on WhatsApp right after payment.",
  },
  {
    q: "Can I freeze my Annual membership?",
    a: "Yes. Annual members can freeze their plan for up to 30 days in total for travel, illness or exams. Message us on WhatsApp or tell the front desk and we extend your end date.",
  },
  {
    q: "How does checkout work on this site?",
    a: "This is a demo, so checkout is simulated: no money is charged and no WhatsApp message is sent. On the live site you would pay through a secure payment gateway with UPI, cards or netbanking, and the confirmation would arrive on WhatsApp within seconds.",
  },
  {
    q: "Where are you and when are you open?",
    a: "80 Feet Road, 4th Block, Koramangala, Bengaluru 560034. We are open 5 AM to 11 PM Monday to Friday, and 6 AM to 9 PM on Saturday and Sunday.",
  },
]

// Weekly training split shown under the hero gauge. The crimson arc on the
// gauge is the current month's streak.
const disciplines = [
  { label: "Strength", days: "Mon · Thu" },
  { label: "Conditioning", days: "Tue · Fri" },
  { label: "Recovery", days: "Sun" },
]

// Section header used on every band. Left aligned, editorial: label and
// headline on the left, the supporting line on the right on wide screens.
function SectionIntro({
  eyebrow,
  title,
  text,
  dark = false,
  id,
}: {
  eyebrow: string
  title: string
  text: string
  dark?: boolean
  id?: string
}) {
  return (
    <div className="mb-12 grid gap-6 sm:mb-16 lg:grid-cols-12 lg:items-end lg:gap-10">
      <div className="lg:col-span-7">
        <p className={cn("eyebrow", dark && "eyebrow-dark")}>{eyebrow}</p>
        <h2
          id={id}
          className={cn(
            "headline mt-6 text-[40px] sm:text-[52px] lg:text-[60px]",
            dark ? "text-white" : "text-ink"
          )}
        >
          {title}
        </h2>
      </div>
      <p
        className={cn(
          "max-w-xl text-subheading lg:col-span-5 lg:pb-1",
          dark ? "text-mist" : "text-graphite"
        )}
      >
        {text}
      </p>
    </div>
  )
}

function IconTile({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink">
      <Icon className="size-[18px]" strokeWidth={1.75} />
    </span>
  )
}

function FeatureText({
  index,
  icon,
  title,
  text,
}: {
  index: string
  icon: LucideIcon
  title: string
  text: string
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <IconTile icon={icon} />
        <span className="label-caps text-pewter">{index}</span>
      </div>
      <h3 className="headline text-[26px] text-ink">{title}</h3>
      <p className="text-body text-graphite">{text}</p>
    </div>
  )
}

const cardBase = "rounded-xl border border-line bg-white p-6 sm:p-8"
const panel = "rounded-lg border border-line bg-bone"

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-white">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero: full bleed ink band. Two column split, headline left and a
            schematic membership panel right, then a stat strip. */}
        <section className="bg-ink text-white">
          <div className="mx-auto max-w-page px-4 pt-14 pb-16 sm:px-6 sm:pt-20 lg:pt-24">
            <div className="grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-10">
              <div className="lg:col-span-7">
                <a
                  href="#reminders"
                  className="inline-flex min-h-10 items-center gap-3 rounded-full border border-line-dark py-1.5 pr-4 pl-1.5 text-body-sm text-mist transition-colors hover:border-fog hover:text-white"
                >
                  <span className="rounded-full bg-crimson px-2.5 py-1 text-[11px] font-semibold tracking-[0.12em] text-white uppercase">
                    New
                  </span>
                  WhatsApp reminders on every membership
                  <ArrowRight className="size-3.5" />
                </a>

                <h1 className="headline mt-8 text-[52px] sm:text-[72px] lg:text-[84px]">
                  Iron Warriors.
                  <span className="block text-fog">Train with discipline.</span>
                </h1>

                <p className="mt-8 max-w-xl text-subheading text-mist">
                  Serious equipment, certified coaches and WhatsApp reminders that keep you
                  consistent. Koramangala, Bengaluru, from ₹1,499/month.
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a href="#pricing" className={cn(buttonVariants({ size: "lg" }), "px-7")}>
                    Join Now
                    <ArrowRight />
                  </a>
                  <a
                    href="#pricing"
                    className={cn(buttonVariants({ variant: "inverse", size: "lg" }), "px-7")}
                  >
                    View plans from ₹1,499
                  </a>
                </div>

                <ul className="mt-8 flex flex-col gap-x-6 gap-y-2 text-body-sm text-mist sm:flex-row sm:flex-wrap">
                  {["2,500+ members in Koramangala", "Free joining fee this month", "Cancel anytime"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span aria-hidden className="size-1.5 rounded-full bg-ember" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Schematic membership panel: a static illustration. */}
              <div className="lg:col-span-5">
                <div className="mx-auto max-w-[460px] overflow-hidden rounded-xl border border-line-dark bg-ink-2">
                  <div className="flex items-center justify-between border-b border-line-dark px-6 py-4">
                    <span className="label-caps text-mist">Training split</span>
                    <span className="text-body-sm text-fog">Wed 14 Oct</span>
                  </div>

                  <div className="px-6 pt-8">
                    <svg
                      viewBox="0 0 320 192"
                      role="img"
                      aria-label="Training split gauge showing a 21 day streak this month"
                      className="w-full"
                    >
                      <g fill="none" strokeWidth="1">
                        {[150, 115, 85, 55].map((r) => (
                          <circle key={r} cx="160" cy="190" r={r} className="stroke-line-dark" />
                        ))}
                        <circle
                          cx="160"
                          cy="190"
                          r="115"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeDasharray="253 1000"
                          transform="rotate(180 160 190)"
                          className="stroke-crimson"
                        />
                      </g>
                      <line x1="0" y1="190" x2="320" y2="190" className="stroke-line-dark" />
                      <text
                        x="160"
                        y="180"
                        textAnchor="middle"
                        className="fill-white font-heading text-[36px] font-bold"
                      >
                        21
                      </text>
                    </svg>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-4 py-5 sm:grid-cols-4">
                      <li>
                        <span className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] text-white uppercase">
                          <span aria-hidden className="h-0.5 w-3 bg-crimson" />
                          Streak
                        </span>
                        <span className="mt-1 block text-caption text-fog">21 days</span>
                      </li>
                      {disciplines.map(({ label, days }) => (
                        <li key={label}>
                          <span className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] text-mist uppercase">
                            <span aria-hidden className="h-0.5 w-3 bg-line-dark" />
                            {label}
                          </span>
                          <span className="mt-1 block text-caption text-fog">{days}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-line-dark bg-ink-3 px-6 py-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="label-caps text-fog">Membership</p>
                        <p className="headline mt-2 text-heading text-white">Annual plan</p>
                      </div>
                      <span className="inline-flex items-center gap-2 rounded-full border border-line-dark px-3 py-1 text-caption font-semibold text-white">
                        <span aria-hidden className="size-1.5 rounded-full bg-ember" />
                        Active
                      </span>
                    </div>
                    <dl className="mt-5 grid grid-cols-3 divide-x divide-line-dark border-y border-line-dark">
                      {[
                        ["Member", "Aarav S."],
                        ["Valid till", "13 Oct 2027"],
                        ["Streak", "21 days"],
                      ].map(([label, value]) => (
                        <div key={label} className="px-3 py-3 first:pl-0">
                          <dt className="text-caption text-fog">{label}</dt>
                          <dd className="mt-1 text-body-sm font-semibold text-white">{value}</dd>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-4 flex items-start gap-3 text-body-sm">
                      <MessageCircle className="mt-0.5 size-4 shrink-0 text-mist" />
                      <span className="text-mist">
                        <span className="font-semibold text-white">WhatsApp · now. </span>
                        Payment received: ₹11,999. See you at the gym!
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <dl className="mt-20 grid grid-cols-2 gap-y-8 border-t border-line-dark pt-10 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse gap-1">
                  <dt className="text-body-sm text-fog">{stat.label}</dt>
                  <dd className="figure text-[40px] leading-none text-white sm:text-[48px]">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Features: bone band, white hairline cards in an alternating grid. */}
        <section id="features" className="scroll-mt-16 bg-bone">
          <div className="mx-auto max-w-page px-4 py-24 sm:px-6 lg:py-28">
            <SectionIntro
              eyebrow="Why Iron Warriors"
              title="Built for real results"
              text="Everything you need to show up, train well and keep coming back."
            />
            <div className="grid gap-4 lg:grid-cols-5">
              <div className={cn(cardBase, "grid gap-8 sm:grid-cols-2 lg:col-span-3")}>
                <FeatureText
                  index="01"
                  icon={Flame}
                  title="Group classes"
                  text="HIIT, Zumba, yoga, kickboxing and CrossFit-style WODs, all included from the Quarterly plan."
                />
                <div className={cn(panel, "p-4")}>
                  <div className="mb-3 flex gap-1.5" aria-hidden>
                    {["M", "T", "W", "T", "F"].map((day, i) => (
                      <span
                        key={i}
                        className={cn(
                          "flex size-8 items-center justify-center rounded-full border text-caption font-semibold",
                          i === 2
                            ? "border-ink bg-ink text-white"
                            : "border-line-strong bg-white text-graphite"
                        )}
                      >
                        {day}
                      </span>
                    ))}
                  </div>
                  <ul className="divide-y divide-line rounded-md border border-line bg-white">
                    {classes.map(([time, name, place]) => (
                      <li key={name} className="flex items-center justify-between px-3 py-2.5">
                        <span>
                          <span className="block text-body-sm font-semibold text-ink">{name}</span>
                          <span className="block text-caption text-pewter">{place}</span>
                        </span>
                        <span className="text-body-sm font-medium text-graphite tabular-nums">
                          {time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={cn(cardBase, "lg:col-span-2")}>
                <FeatureText
                  index="02"
                  icon={Users}
                  title="Certified trainers"
                  text="ACE and K11 certified coaches on the floor from 5 AM to 11 PM, ready to fix your form."
                />
              </div>

              <div className={cn(cardBase, "lg:col-span-2")}>
                <FeatureText
                  index="03"
                  icon={Dumbbell}
                  title="Pro equipment"
                  text="Imported racks, plate-loaded machines, Olympic platforms and a 20 m turf for functional work."
                />
              </div>
              <div className={cn(cardBase, "grid gap-8 sm:grid-cols-2 lg:col-span-3")}>
                <div className={cn(panel, "order-last p-4 sm:order-first")}>
                  <p className="label-caps text-pewter">This month</p>
                  <div className="mt-3 divide-y divide-line rounded-md border border-line bg-white">
                    {[
                      { label: "Body fat", value: "18.2%", delta: "-1.4%", icon: TrendingDown, bar: "w-[45%]" },
                      { label: "Muscle mass", value: "34.1 kg", delta: "+0.8 kg", icon: TrendingUp, bar: "w-[72%]" },
                      { label: "Visceral fat", value: "7", delta: "-1", icon: TrendingDown, bar: "w-[35%]" },
                    ].map(({ label, value, delta, icon: Icon, bar }) => (
                      <div key={label} className="p-3">
                        <div className="flex items-center justify-between text-body-sm">
                          <span className="text-graphite">{label}</span>
                          <span className="flex items-center gap-1.5 font-semibold text-ink tabular-nums">
                            {value}
                            <span className="flex items-center gap-0.5 text-caption font-medium text-pewter">
                              <Icon className="size-3" /> {delta}
                            </span>
                          </span>
                        </div>
                        <div className="mt-2 h-1 rounded-full bg-line">
                          <div className={cn("h-full rounded-full bg-crimson", bar)} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <FeatureText
                  index="04"
                  icon={HeartPulse}
                  title="Progress tracking"
                  text="Body composition checks so you see fat loss and muscle gain, not just a number on the scale."
                />
              </div>

              <div className={cn(cardBase, "grid gap-8 sm:grid-cols-2 lg:col-span-3")}>
                <FeatureText
                  index="05"
                  icon={Clock}
                  title="Open 7 days"
                  text="5 AM to 11 PM on weekdays, 6 AM to 9 PM on weekends. Train before work or after dinner."
                />
                <div className={cn(panel, "p-4")}>
                  <ul className="divide-y divide-line rounded-md border border-line bg-white text-body-sm">
                    {[
                      ["Monday to Friday", "5 AM to 11 PM"],
                      ["Saturday", "6 AM to 9 PM"],
                      ["Sunday", "6 AM to 9 PM"],
                    ].map(([day, hours]) => (
                      <li key={day} className="flex items-center justify-between px-3 py-3">
                        <span className="text-graphite">{day}</span>
                        <span className="font-semibold text-ink">{hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={cn(cardBase, "lg:col-span-2")}>
                <FeatureText
                  index="06"
                  icon={Salad}
                  title="Diet guidance"
                  text="Indian diet plans built around dal, roti and paneer, not imported superfoods you cannot find."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Member stories: ink band, flat graphite cards, tag at the foot. */}
        <section aria-labelledby="stories-title" className="bg-ink text-white">
          <div className="mx-auto max-w-page px-4 py-24 sm:px-6 lg:py-28">
            <SectionIntro
              id="stories-title"
              dark
              eyebrow="Member stories"
              title="Trusted in Koramangala"
              text="Rated 4.8★ on Google by the people who train here every week."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {testimonials.map(({ quote, name, plan, area }) => (
                <figure
                  key={name}
                  className="flex flex-col justify-between gap-8 rounded-xl border border-line-dark bg-ink-3 p-6 sm:p-7"
                >
                  <div>
                    <span aria-hidden className="headline block text-[44px] leading-none text-crimson">
                      &ldquo;
                    </span>
                    <blockquote className="mt-2 text-body text-white">
                      <p>{quote}</p>
                    </blockquote>
                  </div>
                  <figcaption className="border-t border-line-dark pt-5">
                    <span className="block text-body-sm font-semibold text-white">{name}</span>
                    <span className="label-caps mt-1.5 block text-fog">
                      {plan} · {area}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* WhatsApp reminders: white band. Numbered steps left, chat right. */}
        <section id="reminders" className="scroll-mt-16 bg-white">
          <div className="mx-auto max-w-page px-4 py-24 sm:px-6 lg:py-28">
            <SectionIntro
              eyebrow="Auto WhatsApp reminders"
              title="Your membership, on autopilot"
              text="Every member gets automatic WhatsApp messages: a payment confirmation as soon as you subscribe, renewal reminders 7 days and 1 day before your plan ends, and optional workout reminders on your training days."
            />
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <ol className="divide-y divide-line border-y border-line lg:col-span-7">
                {reminderSteps.map(({ icon, title, text }, index) => (
                  <li key={title} className="grid grid-cols-[auto_1fr] gap-6 py-8 sm:grid-cols-[80px_auto_1fr]">
                    <span className="figure hidden text-[40px] leading-none text-line-strong sm:block">
                      0{index + 1}
                    </span>
                    <IconTile icon={icon} />
                    <div>
                      <p className="headline text-heading text-ink">
                        <span className="sr-only">Step {index + 1}: </span>
                        {title}
                      </p>
                      <p className="mt-2 text-body text-graphite">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* Mock WhatsApp chat preview (static illustration, not a real chat) */}
              <div className="lg:col-span-5">
                <div className={cn(panel, "mx-auto max-w-md rounded-xl p-4")}>
                  <div className="flex items-center gap-3 rounded-lg border border-line bg-white p-3">
                    <span className="flex size-10 items-center justify-center rounded-full bg-ink font-heading text-[12px] font-bold text-white">
                      IW
                    </span>
                    <div>
                      <p className="text-body-sm font-semibold text-ink">Iron Warriors</p>
                      <p className="text-caption text-pewter">Business account</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 py-4 text-body-sm">
                    {chat.map(([message, time]) => (
                      <div
                        key={time}
                        className="max-w-[88%] rounded-lg rounded-tl-sm border border-line bg-white px-4 py-3"
                      >
                        <p className="text-graphite">{message}</p>
                        <p className="mt-1 text-right text-caption text-pewter">{time}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-caption text-pewter">
                    Preview only. This demo does not send WhatsApp messages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing: bone band. */}
        <section id="pricing" className="scroll-mt-16 bg-bone">
          <div className="mx-auto max-w-page px-4 py-24 sm:px-6 lg:py-28">
            <SectionIntro
              eyebrow="Membership plans"
              title="Pick your plan"
              text="Simple pricing in INR, GST included. No joining fee this month. Every plan comes with WhatsApp reminders."
            />
            <Pricing />
            <p className="mt-8 text-center text-body-sm text-pewter">
              Demo site: checkout is simulated. No real payment is processed and no WhatsApp
              message is sent.
            </p>
          </div>
        </section>

        {/* FAQ: white band, ruled list. Native details/summary, no library. */}
        <section id="faq" className="scroll-mt-16 bg-white">
          <div className="mx-auto grid max-w-page gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:py-28">
            <div className="lg:col-span-4">
              <p className="eyebrow">FAQ</p>
              <h2 className="headline mt-6 text-[40px] text-ink sm:text-[52px]">
                Questions, answered
              </h2>
              <p className="mt-5 text-subheading text-graphite">
                Everything members usually ask before they join.
              </p>
            </div>
            <div className="divide-y divide-line border-y border-line lg:col-span-8">
              {faqs.map(({ q, a }, i) => (
                <details key={q} open={i === 0} className="group">
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-subheading font-semibold text-ink outline-none focus-visible:ring-3 focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden">
                    {q}
                    <span
                      aria-hidden
                      className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line-strong transition-colors group-open:border-crimson group-open:bg-crimson group-open:text-white"
                    >
                      <Plus className="size-4 transition-transform duration-200 group-open:rotate-45" />
                    </span>
                  </summary>
                  <p className="max-w-2xl pb-6 text-body text-graphite">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA: ink band. */}
        <section className="bg-ink text-white">
          <div className="mx-auto grid max-w-page gap-10 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:items-end lg:py-28">
            <div className="lg:col-span-8">
              <p className="eyebrow eyebrow-dark">Start today</p>
              <h2 className="headline mt-6 text-[48px] sm:text-[64px] lg:text-[76px]">
                Ready when you are.
              </h2>
              <p className="mt-6 max-w-xl text-subheading text-mist">
                No joining fee this month, WhatsApp reminders on every plan and a coach on the
                floor from 5 AM.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
              <a href="#pricing" className={cn(buttonVariants({ size: "lg" }), "px-7")}>
                Join Now
                <ArrowRight />
              </a>
              <a
                href="#contact"
                className={cn(buttonVariants({ variant: "inverse", size: "lg" }), "px-7")}
              >
                Contact us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer: carbon surface with a hairline top border. */}
      <footer id="contact" className="scroll-mt-16 border-t border-line-dark bg-ink-2 text-white">
        <div className="mx-auto w-full max-w-page px-4 pt-16 pb-10 sm:px-6">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <BrandMark />
              <p className="mt-4 max-w-xs text-body-sm text-mist">
                Strength, conditioning and community in the heart of Bengaluru.
              </p>
            </div>
            <div className="space-y-3 text-body-sm text-mist">
              <p className="label-caps mb-4 text-fog">Visit us</p>
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0" /> 80 Feet Road, 4th Block,
                Koramangala, Bengaluru 560034
              </p>
              <p className="flex items-start gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0" /> Mon to Fri 5 AM to 11 PM, Sat and Sun
                6 AM to 9 PM
              </p>
            </div>
            <div className="space-y-3 text-body-sm text-mist">
              <p className="label-caps mb-4 text-fog">Contact</p>
              <p className="flex items-center gap-2.5">
                <Phone className="size-4" /> +91 80000 00000
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="size-4" /> hello@ironwarriors.example
              </p>
              <p className="flex items-center gap-2.5">
                <MessageCircle className="size-4" /> WhatsApp: +91 80000 00000
              </p>
            </div>
          </div>
          <p className="mt-16 border-t border-line-dark pt-6 text-caption text-fog">
            © 2026 Iron Warriors. Demo website: no real payments or WhatsApp messages.
          </p>
        </div>
      </footer>
    </div>
  )
}
