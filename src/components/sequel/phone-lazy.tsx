"use client"

import dynamic from "next/dynamic"

// Same footprint as the phone so nothing shifts when it loads.
function Placeholder() {
  return (
    <div className="mx-auto w-full max-w-[320px]">
      <div aria-hidden className="aspect-[9/18.5] w-full rounded-[44px] bg-[#1a1a1a] ring-1 ring-graphite" />
    </div>
  )
}

export const PhoneLazy = dynamic(() => import("./phone").then((m) => m.Phone), {
  ssr: false,
  loading: Placeholder,
})
