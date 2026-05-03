"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const STATS = [
  { value: "15+", label: "Commodities sourced" },
  { value: "4", label: "Countries of operation" },
  { value: "200+", label: "Verified producers in network" },
  { value: "120+", label: "Shipments coordinated" },
];

export function AboutSection() {
  return (
    <Section spacing="lg" bg="default">
      <Container size="xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
              About Tech Wave
            </p>
            <h2 className="font-serif text-3xl sm:text-[2rem] lg:text-[2.75rem] font-medium leading-[1.08] tracking-tight">
              We&apos;re builders,
              <br />
              not brokers.
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-[var(--muted-foreground)] max-w-xl">
              <p>
                Tech Wave was founded by a team with deep operational roots in West African
                commodity trade — combining decades of experience in agriculture, mining, export
                logistics, and international finance.
              </p>
              <p>
                Our mission is to build transparent, verified trade infrastructure between West
                Africa and the world. We&apos;re headquartered in Lagos, with regional presence
                across Ghana, Côte d&apos;Ivoire, and Cameroon — and a verification network reaching
                deep into producing regions.
              </p>
              <p>
                We don&apos;t take spreads. We don&apos;t hold funds. We earn fees for the work we
                do — sourcing, coordinating, verifying, documenting. That alignment is the
                product.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="grid grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)]">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-[var(--card)] p-6 sm:p-7">
                  <div className="font-serif text-3xl sm:text-4xl font-light leading-none tracking-tight text-[var(--foreground)]">
                    {stat.value}
                  </div>
                  <div className="mt-2.5 text-[10px] uppercase tracking-[0.18em] text-[var(--muted-foreground)] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
