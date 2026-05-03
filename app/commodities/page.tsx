import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { CommoditiesFull } from "@/components/sections/commodities-full";
import { CtaSection } from "@/components/sections/cta";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Commodities",
  description:
    "The full Tech Wave commodities catalog — agriculture and mining, sourced direct from verified producers across West Africa.",
};

export default function CommoditiesPage() {
  return (
    <>
      <Navbar variant="solid" />
      <main>
        {/* Hero */}
        <section className="pt-28 sm:pt-32 lg:pt-36 pb-12 bg-[var(--background)]">
          <Container size="xl">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                The catalog
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-medium leading-[1.04] tracking-tight">
                Direct from producers
                <br />
                across West Africa.
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[var(--muted-foreground)] max-w-2xl">
                We source over thirty commodities — every line in this catalog comes from verified
                producing regions and is backed by full export documentation. Don&apos;t see what
                you need?{" "}
                <Link
                  href="/contact"
                  className="text-[var(--foreground)] underline underline-offset-4 hover:text-[var(--secondary)]"
                >
                  Talk to us
                </Link>
                .
              </p>
            </div>
          </Container>
        </section>

        {/* Catalog */}
        <Section spacing="md" bg="default">
          <CommoditiesFull />
        </Section>

        {/* What "verified" means */}
        <Section spacing="lg" bg="muted">
          <Container size="xl">
            <SectionHeader
              eyebrow="Quality assurance"
              title="What 'verified' means at Tech Wave."
              subtitle="Every commodity in our catalog comes with the same baseline of operational verification."
            />
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)]">
              {[
                {
                  title: "Producer mapped",
                  body: "We know the farm, cooperative, or mine. Not just an aggregator — the source.",
                },
                {
                  title: "Capacity audited",
                  body: "We've validated production volumes match what the producer claims they can ship.",
                },
                {
                  title: "Sample tested",
                  body: "Quality parameters verified against export-grade standards before any contract.",
                },
                {
                  title: "Documentation ready",
                  body: "Export paperwork pre-mapped: NEPC, NXP, Certificate of Origin, phytosanitary.",
                },
              ].map((b, i) => (
                <div key={b.title} className="bg-[var(--card)] p-6 sm:p-7">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--accent)] font-medium">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-medium tracking-tight leading-snug">
                    {b.title}
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-[var(--muted-foreground)]">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
