import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Anchor, ScanEye, FileSignature, Ship, Lock, Scale } from "lucide-react";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { CtaSection } from "@/components/sections/cta";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Trade Coordination",
  description:
    "End-to-end execution for buyers without local presence — pre-shipment inspection, full export documentation, logistics coordination, and optional escrow via independent third parties.",
};

const PILLARS = [
  {
    icon: ScanEye,
    title: "Pre-shipment inspection",
    body: "Quality and quantity verified before any cargo leaves origin. Conducted by our team or accredited third parties (SGS, Bureau Veritas, Cotecna). Reports issued before payment milestones.",
  },
  {
    icon: FileSignature,
    title: "Export documentation",
    body: "Full chain mapped per shipment: NEPC certificate, NXP form, Certificate of Origin, phytosanitary, fumigation, pre-shipment inspection report, bill of lading. Each document tracked to its issuing authority.",
  },
  {
    icon: Ship,
    title: "Logistics coordination",
    body: "Freight forwarder selection, container booking, port handling, customs clearance. We coordinate with the carriers and authorities — you get the bill of lading.",
  },
  {
    icon: Lock,
    title: "Optional escrow (third-party)",
    body: "We introduce you to independent escrow providers — never custody of your funds with us. Funds release tied to verifiable shipment milestones.",
  },
  {
    icon: Scale,
    title: "Buyer-seller mediation",
    body: "Disputes happen. When they do, we mediate. Our role is to keep the deal viable for both parties or unwind it cleanly — backed by the documentation we've maintained throughout.",
  },
  {
    icon: FileSignature,
    title: "Contract structuring",
    body: "Trade terms — Incoterms, payment milestones, quality clauses, force majeure — structured so both sides know what triggers what. Drafts reviewed by independent legal counsel where needed.",
  },
];

const TIMELINE = [
  { day: "Day 0", event: "Engagement signed", desc: "Service agreement, scope, fees defined." },
  { day: "Day 1–14", event: "Sourcing & verification", desc: "Producer qualified, samples tested, terms negotiated." },
  { day: "Day 14–21", event: "Contracting", desc: "Commercial contract executed. Optional escrow set up via third-party provider." },
  { day: "Day 21–35", event: "Production & inspection", desc: "Producer fulfills order. Pre-shipment inspection conducted before release." },
  { day: "Day 35–45", event: "Documentation & export", desc: "Export paperwork completed. Cargo loaded. Bill of lading issued." },
  { day: "Day 45+", event: "Transit & delivery", desc: "Cargo at sea. Final documentation released against payment milestones." },
];

export default function CoordinationPage() {
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
                  Pillar 02 · Trade Coordination
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-medium leading-[1.04] tracking-tight">
                  End-to-end execution for buyers without boots on the ground.
                </h1>
                <p className="mt-6 text-base sm:text-lg leading-relaxed text-[var(--muted-foreground)] max-w-2xl">
                  Sourcing is half the job. The other half is making sure the cargo actually leaves
                  the port. We coordinate the full execution chain — quality control, documentation,
                  logistics, and buyer-seller alignment — so you can transact with confidence.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Link href="/contact">
                    <Button variant="primary" size="md">
                      Coordinate a Shipment
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    </Button>
                  </Link>
                  <Link href="/sourcing">
                    <Button variant="outline" size="md">
                      Or start with sourcing
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-4">
                <div className="border-l border-[var(--border)] pl-5">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted-foreground)] font-medium mb-2">
                    Our position
                  </p>
                  <p className="text-sm leading-relaxed text-[var(--foreground)]/85">
                    Tech Wave is a trade facilitation and advisory company. We do not provide loans,
                    take deposits, or hold client funds.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    Where financing or escrow is needed, we introduce you to independent third-party
                    providers, with whom you engage directly.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Six pillars */}
        <Section spacing="lg" bg="muted">
          <Container size="xl">
            <SectionHeader
              eyebrow="The six things we coordinate"
              title="A complete execution chain — from contract to bill of lading."
            />
            <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
              {PILLARS.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="bg-[var(--card)] p-7 sm:p-8">
                    <Icon className="h-5 w-5 text-[var(--accent)] mb-5" strokeWidth={1.5} />
                    <h3 className="font-serif text-lg sm:text-xl font-medium tracking-tight leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-[var(--muted-foreground)]">
                      {p.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Timeline */}
        <Section spacing="lg" bg="default">
          <Container size="xl">
            <SectionHeader
              eyebrow="A typical engagement"
              title="What 45 days looks like."
              subtitle="Indicative timeline for a single-container coordination engagement. Actuals vary by commodity, origin, and destination."
            />
            <div className="mt-12 max-w-4xl">
              <div className="border-l border-[var(--border)]">
                {TIMELINE.map((step, i) => (
                  <div key={step.event} className="relative pl-8 pb-10 last:pb-0">
                    <div className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-[var(--accent)] ring-4 ring-[var(--background)]" />
                    <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted-foreground)] font-medium">
                      {step.day}
                    </div>
                    <h3 className="mt-2 font-serif text-lg sm:text-xl font-medium tracking-tight">
                      {step.event}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-[var(--muted-foreground)] max-w-xl">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Money note */}
        <Section spacing="md" bg="muted">
          <Container size="xl">
            <div className="border border-[var(--border)] bg-[var(--card)] p-8 sm:p-12 max-w-4xl mx-auto">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--accent)] font-medium">
                On money &amp; alignment
              </p>
              <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-medium leading-tight tracking-tight">
                We don&apos;t move money. We move information, cargo, and confidence.
              </h2>
              <div className="mt-6 grid sm:grid-cols-2 gap-8 text-[15px] leading-relaxed text-[var(--muted-foreground)]">
                <p>
                  Tech Wave earns service fees, coordination fees, and commissions for the work we
                  deliver. We do not take spreads, hold deposits, or custody client funds at any
                  point in the process.
                </p>
                <p>
                  Where escrow or financing is part of the deal, we introduce you to independent
                  third-party providers — banks, escrow agents, trade finance houses — and you
                  engage them directly. That structure is the alignment.
                </p>
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
