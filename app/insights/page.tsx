import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Container } from "@/components/ui/container";
import { ARTICLES } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Field reports, price benchmarks, and commodity outlooks from West Africa — written by the Tech Wave team.",
};

export default function InsightsPage() {
  return (
    <>
      <Navbar variant="solid" />
      <main className="pt-28 sm:pt-32 pb-24 bg-[var(--background)]">
        <Container size="xl">
          <div className="max-w-3xl mb-14">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
              Field reports
            </p>
            <h1 className="font-serif text-3xl sm:text-[2rem] lg:text-[2.75rem] font-medium leading-[1.08] tracking-tight">
              Market Intelligence.
            </h1>
            <p className="mt-5 text-base text-[var(--muted-foreground)] leading-relaxed">
              Field reports, price benchmarks, and commodity outlooks — written by our team across
              Nigeria and West Africa. We write when we have something useful to say, not on a
              schedule.
            </p>
          </div>

          {/* Featured article */}
          <Link
            href={`/insights/${ARTICLES[0].slug}`}
            className="group block border border-[var(--border)] bg-[var(--card)] hover:border-[var(--foreground)]/20 transition-colors mb-10"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div
                className="aspect-[5/3] lg:aspect-auto lg:min-h-[360px] relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #143524 0%, #1F3D2A 50%, #DCA34B 100%)",
                }}
              >
                <div className="absolute inset-0 bg-topo opacity-40 mix-blend-overlay" />
                <div className="absolute top-5 left-5 px-2.5 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm">
                  <span className="text-[10px] uppercase tracking-[0.15em] font-medium text-white">
                    Featured · {ARTICLES[0].category}
                  </span>
                </div>
              </div>
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-[var(--muted-foreground)] font-medium">
                  <span>{ARTICLES[0].date}</span>
                  <span className="h-1 w-1 rounded-full bg-[var(--muted-foreground)]/40" />
                  <span>{ARTICLES[0].readTime}</span>
                </div>
                <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-medium leading-tight tracking-tight group-hover:text-[var(--secondary)] transition-colors">
                  {ARTICLES[0].title}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--muted-foreground)]">
                  {ARTICLES[0].excerpt}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.1em] text-[var(--foreground)]">
                  Read article
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </span>
              </div>
            </div>
          </Link>

          {/* Other articles */}
          <div className="grid md:grid-cols-2 gap-6">
            {ARTICLES.slice(1).map((article) => (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group flex flex-col border border-[var(--border)] bg-[var(--card)] hover:border-[var(--foreground)]/20 transition-colors"
              >
                <div
                  className="aspect-[5/3] relative overflow-hidden"
                  style={{
                    background:
                      article.category === "Mining"
                        ? "linear-gradient(135deg, #2A322C 0%, #4A3325 60%, #C8553D 100%)"
                        : article.category === "Agriculture"
                        ? "linear-gradient(135deg, #143524 0%, #1F3D2A 50%, #DCA34B 100%)"
                        : "linear-gradient(135deg, #0D2818 0%, #1F3D2A 50%, #D4A24C 100%)",
                  }}
                >
                  <div className="absolute inset-0 bg-topo opacity-40 mix-blend-overlay" />
                  <div className="absolute top-4 left-4 px-2.5 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm">
                    <span className="text-[10px] uppercase tracking-[0.15em] font-medium text-white">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.15em] text-[var(--muted-foreground)] font-medium">
                    <span>{article.date}</span>
                    <span className="h-1 w-1 rounded-full bg-[var(--muted-foreground)]/40" />
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-lg sm:text-xl font-medium tracking-tight leading-snug group-hover:text-[var(--secondary)] transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-[var(--muted-foreground)] flex-1">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
