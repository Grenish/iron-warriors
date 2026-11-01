import Image from "next/image"

import { cn } from "@/lib/utils"

// Wordmark: the badge logo beside the name.
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5 text-ink", className)}>
      <Image src="/images/logo.webp" alt="" width={44} height={44} className="size-11 object-contain" />
      <span className="display text-[22px] leading-none tracking-[0.01em]">Iron Warriors</span>
    </span>
  )
}
