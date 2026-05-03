import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-baseline gap-1.5 font-serif tracking-tight transition-colors",
        onDark ? "text-[#F0EBE0]" : "text-[var(--foreground)]",
        className
      )}
      aria-label="Tech Wave home"
    >
      <span
        aria-hidden="true"
        className="text-[var(--accent)] font-semibold translate-y-[1px] mr-0.5"
      >
        ~
      </span>
      <span className="font-semibold text-[15px] tracking-[0.18em] uppercase">
        Tech Wave
      </span>
    </Link>
  );
}
