"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ARTICLES } from "@/lib/insights";

export function InsightsSection() {
  return (
    <Section spacing="lg" bg="muted">
      <Container size="xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
              Field reports
            </p>
            <h2 className="font-serif text-3xl sm:text-[2rem] lg:text-[2.75rem] font-medium leading-[1.08] tracking-tight">
              Market Intelligence.
            </h2>
            <p className="mt-4 text-base text-[var(--muted-foreground)] leading-relaxed max-w-xl">
              Field reports, price benchmarks, and commodity outlooks from West Africa.
            </p>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--secondary)] transition-colors group"
          >
            <span>View All Insights</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {ARTICLES.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col"
            >
              <Link href={`/insights/${article.slug}`} className="flex flex-col h-full">
                {/* Editorial visual placeholder */}
                <div
                  className="aspect-[5/3] mb-5 relative overflow-hidden border border-[var(--border)]"
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
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.1em] text-[var(--foreground)]">
                  Read article
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
