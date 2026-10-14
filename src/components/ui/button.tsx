import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-body-sm font-semibold whitespace-nowrap transition-all outline-none select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Primary actions are lamp cream pills, one per view where possible.
        // Secondary actions are solid ink or a firm outline. "inverse" is
        // the ghost outline pill for dark bands.
        default: "bg-crimson text-black shadow-lamp hover:bg-crimson-deep",
        dark: "border-white/25 bg-transparent text-white hover:border-white hover:bg-white/5",
        outline:
          "border-line-strong bg-transparent text-paper hover:border-paper hover:bg-white/5 aria-expanded:bg-ink-3",
        inverse:
          "border-white/30 bg-transparent text-white hover:border-white/70 hover:bg-white/5",
        secondary:
          "border-line bg-ink-3 text-paper hover:border-line-strong aria-expanded:bg-ink-3",
        ghost: "text-paper hover:bg-ink-3 aria-expanded:bg-ink-3",
        destructive:
          "border-line bg-transparent text-destructive hover:bg-ink-3 focus-visible:border-destructive/40",
        link: "text-paper underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-10 gap-2 px-5 has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        xs: "h-7 gap-1 px-2.5 text-caption [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 gap-1.5 px-4 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 gap-2 px-6 text-body has-data-[icon=inline-end]:pr-5 has-data-[icon=inline-start]:pl-5",
        icon: "size-10",
        "icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
