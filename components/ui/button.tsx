"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium tracking-tight transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--accent)] text-[var(--accent-foreground)] hover:bg-[color-mix(in_oklab,var(--accent)_88%,black)] shadow-sm",
        dark:
          "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[color-mix(in_oklab,var(--primary)_92%,black)]",
        outline:
          "border border-[var(--foreground)]/25 text-[var(--foreground)] bg-transparent hover:border-[var(--foreground)]/50 hover:bg-[var(--foreground)]/[0.03]",
        ghost:
          "text-[var(--foreground)] hover:bg-[var(--foreground)]/[0.05]",
        link:
          "text-[var(--foreground)] underline-offset-4 hover:underline p-0 h-auto",
        terracotta:
          "bg-[var(--secondary)] text-[var(--secondary-foreground)] hover:bg-[color-mix(in_oklab,var(--secondary)_88%,black)]",
      },
      size: {
        sm: "h-9 px-3 rounded-sm text-xs",
        md: "h-11 px-5 rounded-sm",
        lg: "h-12 px-6 rounded-sm text-[15px]",
        icon: "h-10 w-10 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
