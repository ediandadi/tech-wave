import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline" | "accent" | "muted";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  const variantClass = {
    default: "bg-[var(--primary)] text-[var(--primary-foreground)]",
    outline: "border border-[var(--border)] text-[var(--foreground)]",
    accent: "bg-[var(--accent)]/15 text-[color-mix(in_oklab,var(--accent)_70%,var(--foreground))] border border-[var(--accent)]/30",
    muted: "bg-[var(--muted)] text-[var(--muted-foreground)]",
  }[variant];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.15em] rounded-sm",
        variantClass,
        className
      )}
      {...props}
    />
  );
}
