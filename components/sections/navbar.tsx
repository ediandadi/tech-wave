"use client";

import * as React from "react";
import Link from "next/link";
import { LogIn, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LoginDialog } from "@/components/login-dialog";

const NAV_LINKS = [
  { label: "Sourcing", href: "/sourcing" },
  { label: "Coordination", href: "/coordination" },
  { label: "Commodities", href: "/commodities" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

interface NavbarProps {
  variant?: "transparent" | "solid";
}

export function Navbar({ variant = "transparent" }: NavbarProps) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [loginOpen, setLoginOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isSolid = variant === "solid" || scrolled;

  const openLogin = () => {
    setMobileOpen(false);
    setLoginOpen(true);
  };

  return (
    <>
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isSolid
          ? "bg-[var(--background)]/85 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex h-16 sm:h-[72px] items-center justify-between gap-6">
          <div className="flex items-center gap-10">
            <Logo onDark={!isSolid} />
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[13px] font-medium transition-colors",
                    isSolid
                      ? "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                      : "text-[#F0EBE0]/75 hover:text-[#F0EBE0]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
            <Link
              href="/contact"
              className="hidden md:inline-flex"
            >
              <Button
                size="sm"
                className={cn(
                  "border transition-colors",
                  isSolid
                    ? "bg-transparent border-[var(--foreground)]/25 text-[var(--foreground)] hover:border-[var(--foreground)]/50 hover:bg-[var(--foreground)]/[0.03]"
                    : "bg-transparent border-[#F0EBE0]/40 text-[#F0EBE0] hover:bg-white/10 hover:border-[#F0EBE0]/70"
                )}
              >
                Request Access
              </Button>
            </Link>
            <Button
              variant="primary"
              size="sm"
              onClick={openLogin}
              className="hidden sm:inline-flex shadow-sm"
            >
              <LogIn className="h-4 w-4" strokeWidth={1.5} />
              Login
            </Button>
            <button
              type="button"
              className={cn(
                "lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-sm border transition-colors",
                isSolid
                  ? "border-[var(--border)] text-[var(--foreground)]"
                  : "border-[#F0EBE0]/30 text-[#F0EBE0]"
              )}
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-4 w-4" strokeWidth={1.5} /> : <Menu className="h-4 w-4" strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>
      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--border)] bg-[var(--background)]">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-[var(--foreground)] py-1"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 flex items-center gap-2">
                <ThemeToggle />
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">
                    Request Access
                  </Button>
                </Link>
                <Button variant="primary" size="sm" className="flex-1" onClick={openLogin}>
                  <LogIn className="h-4 w-4" strokeWidth={1.5} />
                  Login
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
    <LoginDialog open={loginOpen} onOpenChange={setLoginOpen} />
    </>
  );
}
