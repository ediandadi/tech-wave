"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MapPin, Sprout, Mountain } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";
import { AGRICULTURE_COMMODITIES, MINING_COMMODITIES, type Commodity } from "@/lib/commodities";
import { cn } from "@/lib/utils";

type Tab = "agriculture" | "mining";

export function CommoditiesSection() {
  const [tab, setTab] = React.useState<Tab>("agriculture");
  const items = tab === "agriculture" ? AGRICULTURE_COMMODITIES : MINING_COMMODITIES;

  return (
    <Section spacing="lg" bg="default" id="commodities">
      <Container size="xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
              The catalog
            </p>
            <h2 className="font-serif text-3xl sm:text-[2rem] lg:text-[2.75rem] font-medium leading-[1.08] tracking-tight">
              What we source.
            </h2>
            <p className="mt-4 text-base text-[var(--muted-foreground)] leading-relaxed max-w-xl">
              Direct from producers across West Africa.
            </p>
          </div>

          <div className="inline-flex p-1 rounded-sm border border-[var(--border)] bg-[var(--muted)] self-start lg:self-end">
            <TabButton active={tab === "agriculture"} onClick={() => setTab("agriculture")} icon={Sprout}>
              Agriculture
            </TabButton>
            <TabButton active={tab === "mining"} onClick={() => setTab("mining")} icon={Mountain}>
              Mining &amp; Minerals
            </TabButton>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]"
          >
            {items.map((item) => (
              <CommodityCard key={item.name} commodity={item} />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 text-center">
          <p className="text-sm text-[var(--muted-foreground)]">
            Don&apos;t see what you need? We source over 30 commodities.{" "}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1 text-[var(--foreground)] underline underline-offset-4 hover:text-[var(--secondary)] transition-colors"
            >
              Talk to us
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </p>
        </div>
      </Container>
    </Section>
  );
}

function TabButton({
  active,
  onClick,
  icon: Icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] rounded-sm transition-colors",
        active
          ? "bg-[var(--card)] text-[var(--foreground)] shadow-sm"
          : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
      )}
    >
      <Icon className="h-3.5 w-3.5" strokeWidth={1.5} />
      {children}
    </button>
  );
}

function CommodityCard({ commodity }: { commodity: Commodity }) {
  return (
    <div className="group bg-[var(--card)] p-6 sm:p-7 flex flex-col h-full hover:bg-[var(--muted)]/50 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-lg font-medium tracking-tight leading-snug">
            {commodity.name}
          </h3>
          <div className="mt-2 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] text-[var(--muted-foreground)] font-medium">
            <MapPin className="h-3 w-3" strokeWidth={1.5} />
            {commodity.region}
          </div>
        </div>
      </div>
      <p className="mt-3 text-[13px] leading-relaxed text-[var(--muted-foreground)] flex-1">
        {commodity.spec}
      </p>
      <Link
        href="/contact"
        className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--foreground)] hover:text-[var(--secondary)] transition-colors uppercase tracking-[0.1em]"
      >
        Request Specs
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.5} />
      </Link>
    </div>
  );
}
