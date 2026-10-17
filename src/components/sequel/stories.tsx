import { SectionHeader } from "./heading"

const testimonials = [
  ["I lost 9 kg in five months without giving up home food. The diet plan is built around an Indian kitchen, which is why I could stick to it.", "Priya N.", "Annual member since 2024"],
  ["I train at 5:30 AM before work and the floor is never crowded. The WhatsApp renewal reminders have kept my membership from lapsing twice.", "Rohan K.", "Half-Yearly member since 2025"],
  ["The coaches correct your form before you have to ask. My deadlift went from 80 kg to 140 kg in a year, with no injuries along the way.", "Sandeep M.", "Annual member since 2023"],
  ["I joined for Zumba and stayed for the strength classes. Clean facilities, a professional front desk and no sales pressure at any point.", "Ananya R.", "Quarterly member since 2025"],
]

export function Stories() {
  return (
    <section aria-labelledby="stories-title" className="bg-panel">
      <div className="mx-auto max-w-page px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeader
          id="stories-title"
          index="04"
          label="Members"
          title="In their words"
          intro="People who train here every week, on what keeps them coming back."
        />
        <ul className="mt-14 grid gap-x-10 md:grid-cols-2 lg:mt-20">
          {testimonials.map(([quote, name, detail]) => (
            <li key={name} className="border-t border-rule py-8 sm:py-10">
              <figure className="flex h-full flex-col justify-between gap-8">
                <blockquote className="text-[21px] leading-[1.45] font-medium tracking-[-0.01em] sm:text-[24px]">
                  <p>&ldquo;{quote}&rdquo;</p>
                </blockquote>
                <figcaption className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-semibold">{name}</span>
                  <span className="eyebrow text-muted">{detail}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
