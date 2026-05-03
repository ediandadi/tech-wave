"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Compass, Anchor } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

const SOURCING_BULLETS = [
  "Verified supplier database across 15+ commodities",
  "Physical inspection and quality assurance at origin",
  "Capacity audits and operational verification",
  "Export documentation and logistics coordination",
];

const COORDINATION_BULLETS = [
  "Pre-shipment inspection (in-house or third-party)",
  "Export documentation: NEPC certificate, Certificate of Origin, phytosanitary, NXP",
  "Logistics coordination with freight forwarders",
  "Optional escrow arrangement via third-party providers",
  "Buyer-seller mediation and contract structuring",
];

export function TwoPillarSection() {
  return (
    <Section spacing="lg" bg="muted">
      <Container size="xl">
        <SectionHeader
          eyebrow="Our approach"
          title="We solve this in two ways."
          align="center"
        />
        <div className="mt-16 grid lg:grid-cols-2 gap-6 lg:gap-8">
          <Pillar
            number="01"
            icon={Compass}
            heading="Sourcing Intelligence"
            subtitle="Direct access to verified source producers."
            body="Our on-the-ground network maps producers down to the farm gate and mine head. We verify capacity, quality, certifications, and operational legitimacy before you ever transact. You get the source — not a broker pretending to be one."
            bullets={SOURCING_BULLETS}
            cta="Learn About Sourcing"
            href="/sourcing"
            visual="left"
          />
          <Pillar
            number="02"
            icon={Anchor}
            heading="Trade Coordination"
            subtitle="End-to-end execution for buyers who don't have boots on the ground."
            body="Sourcing is half the job. The other half is making sure the cargo actually leaves the port. We coordinate the full execution chain — quality control, documentation, logistics, and buyer-seller alignment — so you can transact with confidence."
            bullets={COORDINATION_BULLETS}
            cta="Learn About Coordination"
            href="/coordination"
            visual="right"
          />
        </div>
      </Container>
    </Section>
  );
}

interface PillarProps {
  number: string;
  icon: React.ElementType;
  heading: string;
  subtitle: string;
  body: string;
  bullets: string[];
  cta: string;
  href: string;
  visual: "left" | "right";
}

function Pillar({ number, icon: Icon, heading, subtitle, body, bullets, cta, href, visual }: PillarProps) {
  return (
    <motion.div
      initial={{ y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative border border-[var(--border)] bg-[var(--card)] p-8 sm:p-10 lg:p-12 flex flex-col group hover:border-[var(--foreground)]/20 transition-colors"
    >
      {/* Top decorative band */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-32 overflow-hidden pointer-events-none"
        style={{
          background:
            visual === "left"
              ? "linear-gradient(135deg, color-mix(in oklab, var(--primary) 8%, transparent) 0%, transparent 60%)"
              : "linear-gradient(225deg, color-mix(in oklab, var(--secondary) 10%, transparent) 0%, transparent 60%)",
        }}
      />

      <div className="relative">
        <div className="flex items-start justify-between mb-8">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted-foreground)] font-medium">
            Pillar {number}
          </span>
          <Icon className="h-6 w-6 text-[var(--accent)]" strokeWidth={1.25} />
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-medium leading-tight tracking-tight">
          {heading}
        </h3>
        <p className="mt-3 text-sm font-medium text-[var(--foreground)]/80 leading-snug">
          {subtitle}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[var(--muted-foreground)]">
          {body}
        </p>

        <ul className="mt-8 space-y-3 border-t border-[var(--border)] pt-6">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-[var(--foreground)]/85">
              <Check className="h-4 w-4 mt-1 flex-shrink-0 text-[var(--accent)]" strokeWidth={2} />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <Link
          href={href}
          className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--secondary)] transition-colors group/link"
        >
          <span>{cta}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" strokeWidth={1.5} />
        </Link>
      </div>
    </motion.div>
  );
}
