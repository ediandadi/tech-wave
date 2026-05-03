"use client";

import { motion } from "framer-motion";
import { Eye, FileCheck, Warehouse, Lock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

const TRUST_ELEMENTS = [
  {
    icon: Eye,
    title: "On-Ground Inspection",
    body: "Our team or accredited third parties physically verify every consignment — quality, quantity, packaging, and origin.",
  },
  {
    icon: FileCheck,
    title: "Documentation",
    body: "Full export compliance: NEPC certificate, NXP, Certificate of Origin, phytosanitary, and trade documents.",
  },
  {
    icon: Warehouse,
    title: "Independent Oversight",
    body: "Warehouse receipts and bonded storage through independent providers — never under our control.",
  },
  {
    icon: Lock,
    title: "Optional Escrow",
    body: "Introductions to independent escrow providers for buyer-seller protection. Funds remain outside Tech Wave at all times.",
  },
];

const PARTNERS = ["SGS", "Bureau Veritas", "NEPC", "Maersk", "DHL Global", "MSC"];

export function TrustSection() {
  return (
    <Section spacing="lg" bg="muted">
      <Container size="xl">
        <SectionHeader
          eyebrow="Trust architecture"
          title="Trust, but verify. We do both."
          subtitle="Every transaction is backstopped by physical verification, clear documentation, and independent oversight."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)]">
          {TRUST_ELEMENTS.map((el, i) => {
            const Icon = el.icon;
            return (
              <motion.div
                key={el.title}
                initial={{ y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[var(--card)] p-8 flex flex-col"
              >
                <Icon className="h-6 w-6 text-[var(--accent)] mb-5" strokeWidth={1.25} />
                <h3 className="font-serif text-lg font-medium tracking-tight leading-snug">
                  {el.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-[var(--muted-foreground)]">
                  {el.body}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Partner strip */}
        <div className="mt-16">
          <p className="text-center text-[10px] uppercase tracking-[0.25em] text-[var(--muted-foreground)] font-medium mb-6">
            Working with
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner}
                className="font-serif text-lg font-medium tracking-tight text-[var(--muted-foreground)]/70 hover:text-[var(--foreground)] transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
