import Image from "next/image"

import { cn } from "@/lib/utils"
import { SectionHeader } from "./heading"

const features = [
  ["Pro equipment", "Imported racks, plate-loaded machines, Olympic platforms and a 20 m turf for functional work."],
  ["Certified trainers", "ACE and K11 certified coaches on the floor from 5 AM to 11 PM, ready to fix your form."],
  ["Group classes", "HIIT, Zumba, yoga, kickboxing and CrossFit-style WODs, all included from the Quarterly plan."],
  ["Progress tracking", "Body composition checks so you see fat loss and muscle gain, not just a number on the scale."],
  ["Diet guidance", "Indian diet plans built around dal, roti and paneer, not imported superfoods you cannot find."],
  ["Open 7 days", "5 AM to 11 PM on weekdays, 6 AM to 9 PM on weekends. Train before work or after dinner."],
]

const photos = [
  {
    src: "/images/feature-2.webp",
    alt: "Coach standing in silhouette beside a loaded power rack",
    caption: "Coaching floor",
    className: "lg:col-span-7 lg:row-span-2",
  },
  {
    src: "/images/feature-1.webp",
    alt: "Dark studio with exercise mats and kettlebells, two figures moving in shadow",
    caption: "Class studio",
    className: "lg:col-span-5",
  },
  {
    src: "/images/feature-5.webp",
    alt: "Empty gym at night with city lights through floor-to-ceiling windows",
    caption: "Open till 11 PM",
    className: "lg:col-span-5",
  },
]

const classes = ["Power Yoga", "Strength Basics", "HIIT", "Kickboxing", "Zumba", "CrossFit-style WODs"]

export function Floor() {
  return (
    <section id="floor" aria-labelledby="floor-title" className="scroll-mt-16 bg-paper">
      <div className="mx-auto max-w-page px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeader
          id="floor-title"
          index="01"
          label="The gym"
          title="The floor"
          intro="Everything you need to train properly, kept clean, kept in order and coached all day."
        />

        <div className="mt-14 grid gap-2 lg:mt-20 lg:h-[620px] lg:grid-cols-12 lg:grid-rows-2">
          {photos.map((photo) => (
            <figure
              key={photo.src}
              className={cn("relative aspect-[4/3] overflow-hidden bg-panel lg:aspect-auto", photo.className)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
              <figcaption className="eyebrow absolute bottom-0 left-0 bg-photo/80 px-3 py-2 text-white/85">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <ol className="mt-16 grid gap-x-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {features.map(([title, text], i) => (
            <li key={title} className="border-t border-rule py-7">
              <p className="eyebrow text-muted">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-[20px] font-semibold tracking-[-0.01em]">{title}</h3>
              <p className="mt-2 max-w-sm text-muted">{text}</p>
            </li>
          ))}
        </ol>

        <div className="flex flex-col gap-3 border-y border-rule py-6 sm:flex-row sm:items-baseline sm:gap-10">
          <p className="eyebrow shrink-0 text-muted">Weekly classes</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-medium" aria-label="Weekly classes">
            {classes.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
