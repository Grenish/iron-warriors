import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-[2px] border text-[15px] font-semibold whitespace-nowrap transition-[background-color,border-color,color,opacity] duration-200 ease-out-quint outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // The only filled button: signal red.
        default: "border-transparent bg-signal text-signal-foreground hover:bg-signal-hover",
        // Hairline outline in the current ink.
        ghost: "border-ink/40 bg-transparent text-ink hover:border-ink",
        outline: "border-ink/40 bg-transparent text-ink hover:border-ink",
        quiet: "border-transparent text-ink hover:bg-ink/5",
        link: "border-transparent text-ink underline underline-offset-4",
      },
      size: {
        default: "h-11 gap-2 px-5",
        sm: "h-9 gap-1.5 px-4 text-[14px]",
        lg: "h-12 gap-2 px-6",
        icon: "size-10",
        "icon-sm": "size-9",
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
