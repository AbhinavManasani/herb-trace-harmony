import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        
        // Ayurvedic theme variants
        hero: "bg-gradient-nature text-white hover:shadow-glow transform hover:scale-105 transition-spring shadow-soft",
        emerald: "bg-emerald text-emerald-foreground hover:bg-emerald/90 shadow-soft",
        gold: "bg-gold text-gold-foreground hover:bg-gold/90 shadow-premium border border-gold/20",
        saffron: "bg-saffron text-saffron-foreground hover:bg-saffron/90 shadow-soft",
        trust: "bg-trust text-trust-foreground hover:bg-trust/90 shadow-soft",
        earth: "bg-earth text-earth-foreground hover:bg-earth/90 shadow-soft",
        wisdom: "bg-gradient-wisdom text-white hover:shadow-premium transform hover:scale-105 transition-spring",
        "nature-outline": "border-2 border-forest text-forest bg-transparent hover:bg-forest hover:text-white transition-smooth",
        "premium-outline": "border-2 border-gold text-gold bg-transparent hover:bg-gold hover:text-white transition-smooth shadow-premium",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
