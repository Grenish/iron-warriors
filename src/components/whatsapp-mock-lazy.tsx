"use client"

import dynamic from "next/dynamic"

// Same footprint as the real phone so nothing shifts when it loads.
function PhonePlaceholder() {
  return (
    <div className="mx-auto w-full max-w-[340px]">
      <div aria-hidden className="aspect-[9/18.5] w-full rounded-[40px] border border-[#333] bg-[#0b141a]" />
      <p className="mt-4 text-center text-caption text-fog">
        Preview only. This demo does not send WhatsApp messages.
      </p>
    </div>
  )
}

export const WhatsAppMockLazy = dynamic(
  () => import("@/components/whatsapp-mock").then((m) => m.WhatsAppMock),
  { ssr: false, loading: PhonePlaceholder }
)
