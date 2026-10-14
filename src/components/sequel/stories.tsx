import { Badge } from "@/components/ui/badge"
import { HeadingPair } from "./heading"

const testimonials = [
  ["I lost 9 kg in five months without giving up home food. The diet plan is built around an Indian kitchen, which is why I could stick to it.", "Priya N.", "Annual member", "HSR Layout"],
  ["I train at 5:30 AM before work and the floor is never crowded. The WhatsApp renewal reminders have kept my membership from lapsing twice.", "Rohan K.", "Half-Yearly member", "Koramangala"],
  ["The coaches correct your form before you have to ask. My deadlift went from 80 kg to 140 kg in a year, with no injuries along the way.", "Sandeep M.", "Annual member", "BTM Layout"],
  ["I joined for Zumba and stayed for the strength classes. Clean facilities, a professional front desk and no sales pressure at any point.", "Ananya R.", "Quarterly member", "Ejipura"],
]

export function Stories() {
  return (
    <section aria-labelledby="stories-title" className="bg-void">
      <div className="mx-auto max-w-page px-5 py-24 sm:px-8 lg:py-30">
        <HeadingPair
          id="stories-title"
          lead="Rated 4.8★ on Google by the people who train here every week."
          before="Trusted by people who "
          payoff="show up"
          after="."
        />
        <ul className="mt-16 grid gap-4 md:grid-cols-2 lg:mt-20">
          {testimonials.map(([quote, name, plan, area]) => (
            <li key={name} className="relative flex min-h-[360px] flex-col justify-between rounded-card bg-charcoal p-6 sm:p-8">
              <Badge className="self-end">{plan}</Badge>
              <figure className="mt-10">
                <blockquote className="display text-[24px] leading-[1.3] tracking-[-0.025em] sm:text-sub">
                  <p>&ldquo;{quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="text-body font-medium">{name}</span>
                  <span className="label text-smoke">{area}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
