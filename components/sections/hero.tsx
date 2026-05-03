"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-40 pb-20 sm:pb-28 lg:pb-36 min-h-[92vh] flex items-center">
      {/* Background photographic gradient */}
      <div className="absolute inset-0 -z-20" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0D2818 0%, #143524 45%, #1F3D2A 100%)",
          }}
        />
        {/* Faux landscape with layered gradients suggesting horizon at golden hour */}
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background:
              "radial-gradient(ellipse 100% 60% at 50% 100%, rgba(212,162,76,0.35) 0%, rgba(200,85,61,0.18) 30%, rgba(13,40,24,0) 70%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{
            background:
              "linear-gradient(to top, rgba(13,40,24,0.55) 0%, rgba(13,40,24,0) 100%)",
          }}
        />
        {/* Subtle horizon line */}
        <div
          className="absolute inset-x-0 top-[58%] h-px opacity-30"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, rgba(212,162,76,0.5) 30%, rgba(212,162,76,0.5) 70%, transparent 100%)",
          }}
        />
        {/* Topographic overlay */}
        <div className="absolute inset-0 bg-topo opacity-40" />
        {/* Vignette */}
        <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 200px 40px rgba(0,0,0,0.5)" }} />
      </div>

      <Container size="xl">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-9"
          >
            <p className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-[11px] font-medium uppercase tracking-[0.2em] text-[#F0EBE0]/85">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4A24C] animate-pulse" />
              Sourcing intelligence · Trade coordination
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-light leading-[1] tracking-[-0.02em] text-[#F0EBE0] max-w-4xl">
              From Source to Shipment.
              <br />
              <span className="italic font-light text-[#DCA34B]">Without</span> the Middlemen.
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="mt-6 max-w-xl text-[15px] sm:text-base leading-relaxed text-[#F0EBE0]/75"
            >
              Tech Wave gives global buyers direct access to verified producers across West Africa —
              with ground-truth verification and end-to-end coordination.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center"
            >
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Request Access
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </Button>
              </Link>
              <Link href="/commodities">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-transparent border border-white/30 text-[#F0EBE0] hover:bg-white/10 hover:border-white/50"
                >
                  Explore Commodities
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="border-l border-white/15 pl-5 max-w-xs">
              <div className="flex items-center gap-2 text-[#DCA34B] mb-3">
                <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Operating across</span>
              </div>
              <p className="text-sm text-[#F0EBE0]/80 leading-relaxed">
                Nigeria · Ghana · Côte d&apos;Ivoire · Cameroon
              </p>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom corner marker */}
      <div className="absolute bottom-6 right-6 lg:right-10 hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#F0EBE0]/45 font-medium">
        <span>06°27&apos;N · 03°23&apos;E</span>
        <span className="h-px w-8 bg-[#F0EBE0]/30" />
        <span>Lagos HQ</span>
      </div>
    </section>
  );
}
