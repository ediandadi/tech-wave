"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Printer, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { cn } from "@/lib/utils";

export interface TocItem {
  id: string;
  label: string;
}

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  toc: TocItem[];
  children: React.ReactNode;
}

export function LegalLayout({ title, lastUpdated, toc, children }: LegalLayoutProps) {
  const [activeId, setActiveId] = React.useState<string>(toc[0]?.id ?? "");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Track active section by scroll position
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 }
    );
    toc.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [toc]);

  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };

  return (
    <>
      <Navbar variant="solid" />
      <main className="pt-24 sm:pt-28 pb-20 bg-[var(--background)]">
        <Container size="lg">
          {/* Top action bar */}
          <div className="no-print flex items-center justify-between mb-10 pb-5 border-b border-[var(--border)]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
              Back to home
            </Link>
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            >
              <Printer className="h-4 w-4" strokeWidth={1.5} />
              Print this page
            </button>
          </div>

          {/* Mobile TOC dropdown */}
          <div className="lg:hidden no-print mb-8">
            <button
              type="button"
              onClick={() => setMobileOpen((o) => !o)}
              className="w-full flex items-center justify-between px-4 py-3 border border-[var(--border)] bg-[var(--card)] rounded-sm text-sm font-medium text-[var(--foreground)]"
              aria-expanded={mobileOpen}
            >
              <span className="text-[var(--muted-foreground)]">On this page</span>
              <ChevronDown className={cn("h-4 w-4 transition-transform", mobileOpen && "rotate-180")} strokeWidth={1.5} />
            </button>
            {mobileOpen && (
              <ul className="mt-2 border border-[var(--border)] bg-[var(--card)] rounded-sm divide-y divide-[var(--border)]">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-2.5 text-sm text-[var(--foreground)]/85 hover:bg-[var(--muted)] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            {/* Desktop sticky TOC */}
            <aside className="hidden lg:block lg:col-span-3 no-print">
              <div className="sticky top-28">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted-foreground)] font-medium mb-4">
                  On this page
                </p>
                <nav>
                  <ul className="space-y-1.5 border-l border-[var(--border)]">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={cn(
                            "block -ml-px pl-4 py-1 text-[13px] leading-relaxed transition-colors border-l",
                            activeId === item.id
                              ? "border-[var(--accent)] text-[var(--foreground)] font-medium"
                              : "border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                          )}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Content column */}
            <article className="lg:col-span-9 max-w-3xl">
              <header className="mb-10">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted-foreground)] font-medium mb-3">
                  Legal
                </p>
                <h1 className="font-serif text-3xl sm:text-4xl font-medium leading-[1.1] tracking-tight text-[var(--foreground)]">
                  {title}
                </h1>
                <p className="mt-4 text-sm text-[var(--muted-foreground)]">
                  Last updated: {lastUpdated}
                </p>
              </header>

              <div className="prose-legal">{children}</div>
            </article>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
