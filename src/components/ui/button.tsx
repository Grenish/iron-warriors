import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border text-body font-medium whitespace-nowrap transition-[background-color,border-color,color,opacity] duration-300 ease-film outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // Sequel primary: near-black pill on paper, lamp cream pill on charcoal, the only filled button.
        default: "border-transparent bg-primary text-primary-foreground shadow-lamp hover:bg-primary-hover",
        // Sequel secondary: ghost outline pill on the void.
        ghost: "border-ink/80 bg-transparent text-ink hover:border-ink hover:bg-ink/5",
        outline: "border-ink/80 bg-transparent text-ink hover:border-ink hover:bg-ink/5",
        quiet: "border-transparent text-ink hover:bg-ink/5",
        link: "border-transparent text-ink underline underline-offset-4",
      },
      size: {
        default: "h-11 gap-2 px-6",
        sm: "h-9 gap-1.5 px-5",
        lg: "h-12 gap-2 px-7",
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
