"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "tech-wave-cookie-consent";

type Consent = "accepted" | "declined" | null;

export function CookieBanner() {
  const [consent, setConsent] = React.useState<Consent>("accepted");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(STORAGE_KEY) as Consent;
    setConsent(stored);
  }, []);

  const handle = (next: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, next);
    setConsent(next);
  };

  if (!mounted || consent !== null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-6 lg:left-auto lg:right-6 lg:max-w-md z-50"
      >
        <div className="bg-[var(--card)] border border-[var(--border)] rounded-sm shadow-lg p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted-foreground)] font-medium">
              Cookies
            </p>
            <button
              type="button"
              onClick={() => handle("declined")}
              aria-label="Decline cookies"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors -mt-1 -mr-1"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
          <p className="text-sm leading-relaxed text-[var(--foreground)]/85">
            We use cookies to enhance your experience and analyze our traffic. By clicking
            &ldquo;Accept&rdquo;, you consent to our use of cookies.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Button variant="primary" size="sm" onClick={() => handle("accepted")}>
              Accept
            </Button>
            <Button variant="outline" size="sm" onClick={() => handle("declined")}>
              Decline
            </Button>
            <Link
              href="/cookies"
              className="text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] underline underline-offset-4 ml-auto"
            >
              Cookie Settings →
            </Link>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
