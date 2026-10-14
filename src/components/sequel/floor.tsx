import { Badge } from "@/components/ui/badge"
import { HeadingPair } from "./heading"

const features = [
  ["Classes", "Group classes", "HIIT, Zumba, yoga, kickboxing and CrossFit-style WODs, all included from the Quarterly plan."],
  ["Coaching", "Certified trainers", "ACE and K11 certified coaches on the floor from 5 AM to 11 PM, ready to fix your form."],
  ["Equipment", "Pro equipment", "Imported racks, plate-loaded machines, Olympic platforms and a 20 m turf for functional work."],
  ["Progress", "Progress tracking", "Body composition checks so you see fat loss and muscle gain, not just a number on the scale."],
  ["Hours", "Open 7 days", "5 AM to 11 PM on weekdays, 6 AM to 9 PM on weekends. Train before work or after dinner."],
  ["Nutrition", "Diet guidance", "Indian diet plans built around dal, roti and paneer, not imported superfoods you cannot find."],
]

const classes = [
  "Power Yoga",
  "Strength Basics",
  "HIIT Burn",
  "Kickboxing",
  "Zumba",
  "CrossFit-style WODs",
  "Open 5 AM to 11 PM",
]

// Two column cinematic card grid. We have no photography yet, so each card
// carries a neutral placeholder plate, clearly marked for Grenish to replace.
export function Floor() {
  return (
    <section id="floor" aria-labelledby="floor-title" className="scroll-mt-18 bg-void">
      <div className="mx-auto max-w-page px-5 py-24 sm:px-8 lg:py-30">
        <HeadingPair
          id="floor-title"
          lead="Everything you need to show up, train well and keep coming back."
          before="Built for "
          payoff="real"
          after=" results."
        />
        <ul className="mt-16 grid gap-4 md:grid-cols-2 lg:mt-20">
          {features.map(([tag, title, text]) => (
            <li key={title} className="relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-card bg-charcoal sm:aspect-[16/11]">
              <span className="label absolute top-5 left-5 text-smoke">Photo placeholder: replace with a gym photo</span>
              <Badge className="absolute top-4 right-4">{tag}</Badge>
              <div className="p-6 sm:p-8">
                <h3 className="text-[21px] font-medium tracking-[-0.02em] text-white">{title}</h3>
                <p className="mt-2 max-w-md text-body text-mute">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="overflow-hidden border-y border-graphite py-8" aria-label="Classes and hours">
        <ul className="sr-only">
          {classes.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <div aria-hidden className="marquee flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center">
              {classes.map((c) => (
                <span key={c} className="flex items-center text-sub font-light tracking-[-0.025em] text-smoke">
                  <span className="px-10">{c}</span>
                  <span className="h-6 w-px bg-graphite" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
