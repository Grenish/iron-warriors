import { cn } from "@/lib/utils"

// Section header: a ruled index line, then the title.
export function SectionHeader({
  id,
  index,
  label,
  title,
  className,
}: {
  id?: string
  index: string
  label: string
  title: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("border-t border-ink pt-5", className)}>
      <p className="eyebrow flex gap-6 text-muted">
        <span className="text-ink">{index}</span>
        <span>{label}</span>
      </p>
      <h2 id={id} className="display mt-10 text-[52px] sm:text-[72px] lg:mt-14 lg:text-[96px]">
        {title}
      </h2>
    </div>
  )
}
