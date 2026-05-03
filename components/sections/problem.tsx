"use client";

import { motion } from "framer-motion";
import { Layers, ScanSearch, AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

const PROBLEMS = [
  {
    icon: Layers,
    title: "Layered intermediaries",
    body: "Every middleman erodes margin and obscures origin. By the time the cargo reaches you, the trail to the producer is gone.",
  },
  {
    icon: ScanSearch,
    title: "Verification gaps",
    body: "Quality, quantity, and origin claims often don't match reality. Without ground-truth verification, you transact on assumptions.",
  },
  {
    icon: AlertTriangle,
    title: "Execution risk",
    body: "Without local presence, deals fall apart between purchase order and bill of lading. Documentation, logistics, and handover all need someone there.",
  },
];

export function ProblemSection() {
  return (
    <Section spacing="lg" bg="default" id="problem">
      <Container size="xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--secondary)]">
              The problem
            </p>
            <h2 className="font-serif text-3xl sm:text-[2rem] lg:text-[2.75rem] font-medium leading-[1.08] tracking-tight">
              Buying African
              <br />
              commodities shouldn&apos;t
              <br />
              be a leap of faith.
            </h2>
            <p className="mt-5 text-base text-[var(--muted-foreground)] leading-relaxed max-w-md">
              Yet for most international buyers, it is.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="space-y-px">
              {PROBLEMS.map((problem, i) => {
                const Icon = problem.icon;
                return (
                  <motion.div
                    key={problem.title}
                    initial={{ y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative border-t border-[var(--border)] last:border-b py-8 sm:py-10 grid grid-cols-12 gap-6 items-start"
                  >
                    <div className="col-span-2 sm:col-span-1">
                      <span className="block text-[10px] uppercase tracking-[0.2em] text-[var(--muted-foreground)] mb-2">
                        0{i + 1}
                      </span>
                    </div>
                    <div className="col-span-10 sm:col-span-11 grid sm:grid-cols-12 gap-4 sm:gap-8">
                      <div className="sm:col-span-1 flex sm:justify-end pt-1">
                        <Icon className="h-5 w-5 text-[var(--secondary)]" strokeWidth={1.5} />
                      </div>
                      <div className="sm:col-span-11">
                        <h3 className="font-serif text-xl font-medium leading-snug tracking-tight">
                          {problem.title}
                        </h3>
                        <p className="mt-3 text-[15px] leading-relaxed text-[var(--muted-foreground)] max-w-xl">
                          {problem.body}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
