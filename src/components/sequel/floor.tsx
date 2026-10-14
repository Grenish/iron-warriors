import Image from "next/image"

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

// Photo per card, keyed by title so card order can change freely.
const photos: Record<string, { src: string; alt: string }> = {
  "Group classes": { src: "/images/feature-1.webp", alt: "Dark studio with exercise mats and kettlebells, two figures moving in shadow" },
  "Certified trainers": { src: "/images/feature-2.webp", alt: "Coach standing in silhouette beside a loaded power rack" },
  "Pro equipment": { src: "/images/feature-3.webp", alt: "Loaded Olympic barbell on a wooden platform with power racks and turf behind" },
  "Progress tracking": { src: "/images/feature-4.webp", alt: "Tape measure and notebook on a leather gym bench under a desk lamp" },
  "Open 7 days": { src: "/images/feature-5.webp", alt: "Empty gym at night with city lights through floor-to-ceiling windows" },
  "Diet guidance": { src: "/images/feature-6.webp", alt: "Dal in a steel bowl with rotis, paneer and a shaker bottle" },
}

const classes = [
  "Power Yoga",
  "Strength Basics",
  "HIIT Burn",
  "Kickboxing",
  "Zumba",
  "CrossFit-style WODs",
  "Open 5 AM to 11 PM",
]

// Two column cinematic media cards: full-bleed photo, glass badge top right,
// text bottom left over a bottom scrim.
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
              {photos[title] && (
                <Image
                  src={photos[title].src}
                  alt={photos[title].alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              )}
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-photo via-photo/75 to-transparent"
              />
              <Badge className="absolute top-4 right-4 bg-black/35 text-white">{tag}</Badge>
              <div className="relative p-6 sm:p-8">
                <h3 className="text-[21px] font-medium tracking-[-0.02em] text-white">{title}</h3>
                <p className="mt-2 max-w-md text-body text-photo-mute">{text}</p>
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
