"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CtaSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0D2818] text-[#F0EBE0]">
      <div className="absolute inset-0 bg-topo opacity-50" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-60"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(212,162,76,0.18) 0%, transparent 70%)",
        }}
      />
      <Container size="xl">
        <motion.div
          initial={{ y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="py-24 sm:py-32 lg:py-40 max-w-4xl mx-auto text-center relative"
        >
          <p className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#F0EBE0]/85">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4A24C]" />
            Begin a conversation
          </p>
          <h2 className="font-serif text-3xl sm:text-[2rem] lg:text-5xl xl:text-[3.5rem] font-light leading-[1.05] tracking-tight">
            Source with confidence.
            <br />
            <span className="italic font-light text-[#DCA34B]">Coordinate</span> with structure.
          </h2>
          <p className="mt-6 text-[15px] sm:text-base leading-relaxed text-[#F0EBE0]/70 max-w-xl mx-auto">
            Whether you&apos;re sourcing your first container or your hundredth — Tech Wave builds the bridge.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Request Access
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Button>
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-[#F0EBE0]/85 hover:text-[#D4A24C] transition-colors inline-flex items-center gap-1.5"
            >
              Or speak with our team
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
