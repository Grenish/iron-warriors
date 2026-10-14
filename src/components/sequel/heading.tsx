import { cn } from "@/lib/utils"

// Sequel "section heading pair": a context line in hairline sans, then the
// payoff line with one accent word.
export function HeadingPair({
  id,
  lead,
  before,
  payoff,
  after = "",
  center = false,
  className,
}: {
  id?: string
  lead: string
  before: string
  payoff: string
  after?: string
  center?: boolean
  className?: string
}) {
  return (
    <div className={cn("flex flex-col gap-6 sm:gap-8", center && "items-center text-center", className)}>
      <p className="display max-w-3xl text-[28px] text-smoke sm:text-sub">{lead}</p>
      <h2 id={id} className="display text-[48px] sm:text-[57px] lg:text-[80px]">
        {before}
        <span className="payoff">{payoff}</span>
        {after}
      </h2>
    </div>
  )
}
