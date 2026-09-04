import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        whatsapp:
          "bg-whatsapp text-whatsapp-foreground shadow-glow hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0",
        primary:
          "bg-gradient-brand text-primary-foreground shadow-glow hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "border border-border bg-surface/40 text-foreground hover:border-primary/60 hover:bg-surface hover:-translate-y-0.5",
        ghost: "text-muted-foreground hover:text-foreground",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-[0.95rem]",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type CTAProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof ctaVariants>;

export function CTALink({ className, variant, size, ...props }: CTAProps) {
  return <a className={cn(ctaVariants({ variant, size }), className)} {...props} />;
}
