import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-baseline gap-1.5 font-serif tracking-tight",
        dark ? "text-[var(--primary-foreground)]" : "text-[var(--foreground)]",
        className
      )}
      aria-label="Tech Wave home"
    >
      <span aria-hidden="true" className="text-[var(--accent)] font-medium translate-y-[1px] mr-0.5">~</span>
      <span className="font-medium text-[15px] tracking-[0.18em] uppercase">Tech Wave</span>
    </Link>
  );
}
