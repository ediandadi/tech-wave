import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg" | "xl";
  bg?: "default" | "muted" | "dark" | "card";
}

export function Section({
  className,
  spacing = "lg",
  bg = "default",
  ...props
}: SectionProps) {
  const spacingClass = {
    sm: "py-12 sm:py-16",
    md: "py-16 sm:py-20",
    lg: "py-20 sm:py-28",
    xl: "py-28 sm:py-40",
  }[spacing];

  const bgClass = {
    default: "bg-[var(--background)]",
    muted: "bg-[var(--muted)]",
    dark: "bg-[var(--primary)] text-[var(--primary-foreground)]",
    card: "bg-[var(--card)]",
  }[bg];

  return (
    <section className={cn("relative", spacingClass, bgClass, className)} {...props} />
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl sm:text-[2rem] lg:text-[2.5rem] font-medium leading-[1.1] tracking-tight text-[var(--foreground)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[15px] sm:text-base leading-relaxed text-[var(--muted-foreground)]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
