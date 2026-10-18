import Image from "next/image"

import { cn } from "@/lib/utils"
import { SectionHeader } from "./heading"

const features = [
  ["Pro equipment", "Imported racks, plate-loaded machines, Olympic platforms and a 20 m turf for functional work."],
  ["Certified trainers", "ACE and K11 certified coaches on the floor through every session, ready to fix your form."],
  ["Progress tracking", "Body composition checks so you see fat loss and muscle gain, not just a number on the scale."],
  ["Diet guidance", "Indian diet plans built around dal, roti and paneer, not imported superfoods you cannot find."],
  ["Two sessions", "Mornings from 6 AM to 11 AM, evenings from 4 PM to 10 PM. Train before work or after it."],
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
    caption: "Functional area",
    className: "lg:col-span-5",
  },
  {
    src: "/images/feature-5.webp",
    alt: "Empty gym at night with city lights through floor-to-ceiling windows",
    caption: "Open till 10 PM",
    className: "lg:col-span-5",
  },
]

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

        <ol className="mt-16 grid gap-x-10 border-b border-rule sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {features.map(([title, text], i) => (
            <li key={title} className="border-t border-rule py-7">
              <p className="eyebrow text-muted">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-[20px] font-semibold tracking-[-0.01em]">{title}</h3>
              <p className="mt-2 max-w-sm text-muted">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
