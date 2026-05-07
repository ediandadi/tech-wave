"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Loader2, LogIn, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
  const reduce = useReducedMotion();
  const [phone, setPhone] = React.useState("");
  const [agreed, setAgreed] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  // Close on Escape + lock body scroll while open
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onOpenChange]);

  const reset = () => {
    setPhone("");
    setAgreed(false);
    setSubmitting(false);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !agreed) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Sign-in is launching soon. We'll notify you when it's ready.");
    reset();
    onOpenChange(false);
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          aria-modal="true"
          role="dialog"
          aria-labelledby="login-title"
        >
          {/* backdrop */}
          <motion.button
            type="button"
            aria-label="Close login"
            onClick={() => onOpenChange(false)}
            className="absolute inset-0 cursor-default bg-[var(--background)]/70 backdrop-blur-md"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          />

          {/* card */}
          <motion.div
            className="relative w-full max-w-md overflow-hidden border border-[var(--border)] bg-[var(--card)] shadow-2xl"
            initial={reduce ? false : { opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* gold top bar */}
            <div className="h-[2px] w-full bg-[linear-gradient(90deg,#D4A24C,#DCA34B,#C8553D)]" />

            <div className="p-6 md:p-8">
              {/* close */}
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                aria-label="Close"
                className="absolute right-4 top-5 inline-flex h-8 w-8 items-center justify-center rounded-sm text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                <X className="h-4 w-4" strokeWidth={1.5} />
              </button>

              {/* icon header */}
              <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-[var(--accent)]/15 border border-[var(--accent)]/30">
                <LogIn className="h-5 w-5 text-[var(--accent)]" aria-hidden strokeWidth={1.5} />
              </div>

              <h2
                id="login-title"
                className="mt-5 font-serif text-2xl font-medium leading-tight tracking-tight"
              >
                Sign in to Tech Wave
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                Enter your phone number — we&rsquo;ll send a verification code.
              </p>

              {/* form */}
              <form className="mt-6 space-y-5" onSubmit={onSubmit} noValidate>
                <div>
                  <label
                    htmlFor="login-phone"
                    className="text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--muted-foreground)] mb-2 block"
                  >
                    Phone number
                  </label>
                  <div className="flex items-stretch gap-2">
                    <span className="inline-flex items-center rounded-sm border border-[var(--border)] bg-[var(--muted)] px-3 text-sm text-[var(--muted-foreground)]">
                      +234
                    </span>
                    <Input
                      id="login-phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      placeholder="801 234 5678"
                      value={phone}
                      onChange={(e) =>
                        setPhone(e.target.value.replace(/[^\d\s]/g, ""))
                      }
                      className="flex-1"
                    />
                  </div>
                </div>

                <label className="flex cursor-pointer select-none items-start gap-2.5 text-[13px] leading-relaxed text-[var(--muted-foreground)]">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-sm border-[var(--border)] accent-[var(--accent)]"
                  />
                  <span>
                    I have read and agreed to the{" "}
                    <Link
                      href="/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[var(--foreground)] underline underline-offset-2 hover:text-[var(--secondary)] transition-colors"
                    >
                      Terms &amp; Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[var(--foreground)] underline underline-offset-2 hover:text-[var(--secondary)] transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    . Unregistered phone numbers will be auto-registered after verification.
                  </span>
                </label>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={!phone || !agreed || submitting}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" strokeWidth={1.5} />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send verification code
                      <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                    </>
                  )}
                </Button>
              </form>

              <p className="mt-5 text-center text-xs text-[var(--muted-foreground)]">
                Need help?{" "}
                <a
                  href="mailto:contact@techwave.ng"
                  className="text-[var(--foreground)] underline underline-offset-2 hover:text-[var(--secondary)] transition-colors"
                >
                  contact@techwave.ng
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
