import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Compass, Network, ScanSearch, FileCheck, Users, MapPinned } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { CtaSection } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Sourcing Intelligence",
  description:
    "Direct access to verified source producers across West Africa — capacity audits, quality verification, and operational legitimacy checks at the source.",
};

const PROCESS = [
  {
    icon: Compass,
    title: "Network mapping",
    body: "We maintain an active map of producers across our four operating countries — farms, cooperatives, mines, and primary processing facilities. Each entry is updated based on live engagement, not static directory data.",
  },
  {
    icon: ScanSearch,
    title: "Source verification",
    body: "Before you transact, we physically verify the producer. Capacity audits, sample testing, certification checks, operational walkthroughs. Done by our team or accredited third parties.",
  },
  {
    icon: FileCheck,
    title: "Documentation readiness",
    body: "We confirm the producer has — or can secure — the full export documentation chain: NEPC certificate, NXP form, Certificate of Origin, phytosanitary, fumigation, and more.",
  },
  {
    icon: Users,
    title: "Counterparty profile",
    body: "We build a counterparty file: business registration, ownership, banking, payment history, prior export volumes. The basics every responsible buyer should have before engagement.",
  },
];

const COMMODITIES_PREVIEW = [
  { name: "Sesame Seeds", region: "Nigeria — Benue, Jigawa, Kano" },
  { name: "Cocoa Beans", region: "Nigeria — Cross River, Ondo" },
  { name: "Lithium Ore", region: "Nigeria — Nasarawa, Kaduna" },
  { name: "Cashew Nuts", region: "Nigeria — Kogi, Kwara" },
  { name: "Tantalite (Coltan)", region: "Nigeria — multi-state" },
  { name: "Hibiscus Flower", region: "Nigeria — Jigawa, Bauchi" },
];

export default function SourcingPage() {
  return (
    <>
      <Navbar variant="solid" />
      <main>
        {/* Hero */}
        <section className="pt-28 sm:pt-32 lg:pt-36 pb-16 bg-[var(--background)]">
          <Container size="xl">
            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-8">
                <p className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--accent)]">
                  <span className="h-1 w-6 bg-[var(--accent)]" />
                  Pillar 01 · Sourcing Intelligence
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-medium leading-[1.04] tracking-tight">
                  Direct access to verified source producers.
                </h1>
                <p className="mt-6 text-base sm:text-lg leading-relaxed text-[var(--muted-foreground)] max-w-2xl">
                  Our on-the-ground network maps producers down to the farm gate and mine head. We
                  verify capacity, quality, certifications, and operational legitimacy before you
                  ever transact. You get the source — not a broker pretending to be one.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href="/contact">
                    <Button variant="primary" size="md">
                      Request Sourcing
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    </Button>
                  </Link>
                  <Link href="/commodities">
                    <Button variant="outline" size="md">
                      Browse the catalog
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-4">
                <div className="border-l border-[var(--border)] pl-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted-foreground)] font-medium mb-2">
                    Across
                  </p>
                  <div className="font-serif text-3xl font-light leading-tight tracking-tight">
                    Nigeria, Ghana, Côte d&apos;Ivoire, Cameroon
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-4 text-sm text-[var(--muted-foreground)]">
                    <div>
                      <div className="font-serif text-2xl text-[var(--foreground)]">15+</div>
                      <div className="text-[10px] uppercase tracking-[0.18em] mt-1">Commodities</div>
                    </div>
                    <div>
                      <div className="font-serif text-2xl text-[var(--foreground)]">200+</div>
                      <div className="text-[10px] uppercase tracking-[0.18em] mt-1">Producers</div>
                    </div>
                    <div>
                      <div className="font-serif text-2xl text-[var(--foreground)]">4</div>
                      <div className="text-[10px] uppercase tracking-[0.18em] mt-1">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* What sourcing intelligence actually means */}
        <Section spacing="lg" bg="muted">
          <Container size="xl">
            <SectionHeader
              eyebrow="What we actually do"
              title="Mapping, verification, qualification — at origin."
              subtitle="Sourcing intelligence isn't a database. It's an active operation across producing regions, refreshed against real engagement."
            />
            <div className="mt-14 grid sm:grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)]">
              {PROCESS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="bg-[var(--card)] p-8 sm:p-10">
                    <div className="flex items-start justify-between mb-6">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted-foreground)] font-medium">
                        Step {String(i + 1).padStart(2, "0")}
                      </span>
                      <Icon className="h-5 w-5 text-[var(--accent)]" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium tracking-tight leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
                      {p.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Commodity preview */}
        <Section spacing="lg" bg="default">
          <Container size="xl">
            <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted-foreground)] font-medium mb-3">
                  A few of what we source
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium leading-tight tracking-tight">
                  Active sourcing right now.
                </h2>
              </div>
              <Link
                href="/commodities"
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--secondary)] transition-colors group"
              >
                Full catalog
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
              {COMMODITIES_PREVIEW.map((c) => (
                <div key={c.name} className="bg-[var(--card)] p-6 sm:p-7">
                  <h3 className="font-serif text-lg font-medium tracking-tight">{c.name}</h3>
                  <p className="mt-2 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] text-[var(--muted-foreground)] font-medium">
                    <MapPinned className="h-3 w-3" strokeWidth={1.5} />
                    {c.region}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* What you get */}
        <Section spacing="lg" bg="muted">
          <Container size="xl">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted-foreground)] font-medium mb-4">
                  What you get
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium leading-tight tracking-tight">
                  A clean, traceable supplier package — before you commit to anything.
                </h2>
              </div>
              <div className="lg:col-span-7">
                <ul className="space-y-5 border-l border-[var(--border)] pl-6">
                  {[
                    {
                      h: "Producer profile",
                      b: "Identity, location, ownership, capacity, regulatory status. With supporting documentation.",
                    },
                    {
                      h: "Sample report",
                      b: "Lab-tested commodity sample with quality metrics relevant to your destination market.",
                    },
                    {
                      h: "Capacity statement",
                      b: "What the producer can actually ship and on what timeline — verified, not claimed.",
                    },
                    {
                      h: "Pricing range",
                      b: "Indicative price with the variables that move it. No surprises in negotiation.",
                    },
                    {
                      h: "Risk notes",
                      b: "Honest assessment of seasonal, regulatory, and counterparty risks specific to this producer and commodity.",
                    },
                  ].map((item) => (
                    <li key={item.h}>
                      <h4 className="text-sm font-medium text-[var(--foreground)]">{item.h}</h4>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--muted-foreground)]">
                        {item.b}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
