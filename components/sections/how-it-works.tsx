"use client";

import { motion } from "framer-motion";
import { ClipboardList, ShieldCheck, FileSignature, ScanEye, Ship } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Inquiry & Specification",
    body: "Share your commodity, volume, quality requirements, and target market. We confirm fit, timeline, and any constraints before deploying network resources.",
  },
  {
    icon: ShieldCheck,
    title: "Source Verification",
    body: "We deploy our network to identify, inspect, and qualify producers at origin — capacity audits, sample testing, certification checks, operational walkthroughs.",
  },
  {
    icon: FileSignature,
    title: "Commercial Structuring",
    body: "We negotiate terms — pricing, payment milestones, delivery — and arrange optional escrow via independent third-party providers, where required.",
  },
  {
    icon: ScanEye,
    title: "Quality & Quantity Assurance",
    body: "Pre-shipment inspection by our team or accredited third-parties (SGS, Bureau Veritas). Reports issued before any shipment is released.",
  },
  {
    icon: Ship,
    title: "Logistics & Documentation",
    body: "We handle export paperwork (NEPC, NXP, Certificate of Origin, phytosanitary), shipping coordination, and trade documents through to bill of lading.",
  },
];

export function HowItWorksSection() {
  return (
    <Section spacing="lg" bg="muted" id="how-it-works">
      <Container size="xl">
        <SectionHeader
          eyebrow="The process"
          title="From inquiry to delivery."
          subtitle="Five stages. Every shipment, every commodity. No surprises."
        />

        <div className="mt-16 lg:mt-20 relative">
          {/* Vertical center line on desktop */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[var(--border)] -translate-x-1/2"
          />

          <div className="space-y-12 lg:space-y-20">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const isEven = i % 2 === 1;

              return (
                <motion.div
                  key={step.title}
                  initial={{ y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "relative grid lg:grid-cols-2 gap-6 lg:gap-16 items-center",
                    isEven && "lg:flex-row-reverse"
                  )}
                >
                  <div
                    className={cn(
                      "relative",
                      isEven ? "lg:col-start-2" : "lg:col-start-1",
                      "lg:flex",
                      isEven ? "lg:justify-start lg:pl-12" : "lg:justify-end lg:pr-12"
                    )}
                  >
                    <div className="max-w-md">
                      <div className="inline-flex items-center gap-3 mb-3">
                        <span className="font-serif text-4xl lg:text-5xl font-light leading-none text-[var(--accent)]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <Icon className="h-5 w-5 text-[var(--foreground)]" strokeWidth={1.25} />
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-medium leading-snug tracking-tight">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
                        {step.body}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div
                    aria-hidden="true"
                    className={cn(
                      "hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                      "h-3 w-3 rounded-full bg-[var(--accent)] ring-4 ring-[var(--muted)]"
                    )}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
