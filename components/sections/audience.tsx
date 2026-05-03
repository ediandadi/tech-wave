"use client";

import { motion } from "framer-motion";
import { TrendingUp, Factory, Building2, Globe2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

const AUDIENCES = [
  {
    icon: TrendingUp,
    title: "Commodity Traders",
    body: "Reliable origination across multiple markets — diversify supply without taking on local execution risk.",
  },
  {
    icon: Factory,
    title: "Manufacturers",
    body: "Direct-from-source procurement at industrial scale — consistent specs, traceable lots, repeat capacity.",
  },
  {
    icon: Building2,
    title: "Family Offices & Funds",
    body: "Direct access to vetted commodity transactions — clean structure, independent verification, clear documentation.",
  },
  {
    icon: Globe2,
    title: "SME Exporters",
    body: "Coordination support for growing export businesses — bridge the gap from first container to first hundred.",
  },
];

export function AudienceSection() {
  return (
    <Section spacing="lg" bg="default">
      <Container size="xl">
        <SectionHeader
          eyebrow="Who we serve"
          title="Built for serious buyers."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AUDIENCES.map((aud, i) => {
            const Icon = aud.icon;
            return (
              <motion.div
                key={aud.title}
                initial={{ y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="border-t-2 border-[var(--accent)] pt-6 group"
              >
                <Icon className="h-5 w-5 text-[var(--foreground)]/70 mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-lg font-medium tracking-tight leading-snug">
                  {aud.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-[var(--muted-foreground)]">
                  {aud.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
