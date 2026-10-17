import { cn } from "@/lib/utils"

// Section header: a ruled index line, then the title on the left and a short
// intro on the right, aligned to the title's baseline on wide screens.
export function SectionHeader({
  id,
  index,
  label,
  title,
  intro,
  className,
}: {
  id?: string
  index: string
  label: string
  title: React.ReactNode
  intro?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("border-t border-ink pt-5", className)}>
      <p className="eyebrow flex gap-6 text-muted">
        <span className="text-ink">{index}</span>
        <span>{label}</span>
      </p>
      <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-12 lg:items-end lg:gap-10">
        <h2 id={id} className="display text-[52px] sm:text-[72px] lg:col-span-7 lg:text-[96px]">
          {title}
        </h2>
        {intro && (
          <p className="max-w-md text-[17px] leading-relaxed text-muted lg:col-span-5 lg:justify-self-end">
            {intro}
          </p>
        )}
      </div>
    </div>
  )
}
