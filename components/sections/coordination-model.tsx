"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { Users, Factory, Briefcase } from "lucide-react";

const COLUMNS = [
  {
    icon: Users,
    title: "For Buyers",
    items: [
      "Verified suppliers vetted at origin",
      "Independent quality and quantity verification before payment",
      "Optional escrow via third-party providers",
      "Full export documentation handled",
    ],
  },
  {
    icon: Factory,
    title: "For Producers",
    items: [
      "Connection to qualified international buyers",
      "Help structuring deal terms that match your cash flow",
      "Introductions to our network of independent finance providers (where applicable)",
      "Logistics and export support",
    ],
  },
  {
    icon: Briefcase,
    title: "Our Role",
    items: [
      "Sourcing intelligence",
      "Verification and inspection",
      "Documentation and logistics",
      "Mediation and dispute resolution",
      "Service fees and commissions — never spreads on funds we don't handle",
    ],
  },
];

export function CoordinationModelSection() {
  return (
    <Section spacing="lg" bg="default">
      <Container size="xl">
        <SectionHeader
          eyebrow="Our model"
          title="Trust, structured into the deal."
          subtitle="We don't move money. We move information, cargo, and confidence."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]">
          {COLUMNS.map((column, i) => {
            const Icon = column.icon;
            return (
              <motion.div
                key={column.title}
                initial={{ y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[var(--card)] p-8 sm:p-10 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="h-5 w-5 text-[var(--accent)]" strokeWidth={1.5} />
                  <h3 className="font-serif text-xl font-medium tracking-tight">
                    {column.title}
                  </h3>
                </div>
                <ul className="space-y-2.5 mt-2 flex-1">
                  {column.items.map((item) => (
                    <li
                      key={item}
                      className="text-[13px] leading-relaxed text-[var(--foreground)]/80 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:h-px before:w-2 before:bg-[var(--accent)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-[var(--muted-foreground)]/80">
          Tech Wave is a trade facilitation and advisory company. We do not provide loans, take deposits,
          or handle client funds. Where financing is needed, we may introduce clients to independent
          third-party providers, with whom they engage directly.
        </p>
      </Container>
    </Section>
  );
}
