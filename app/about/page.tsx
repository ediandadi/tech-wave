import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { CtaSection } from "@/components/sections/cta";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tech Wave is a trade facilitation and advisory company headquartered in Lagos, building transparent infrastructure between West African producers and global buyers.",
};

const STATS = [
  { value: "15+", label: "Commodities sourced" },
  { value: "4", label: "Countries of operation" },
  { value: "200+", label: "Verified producers in network" },
  { value: "120+", label: "Shipments coordinated" },
];

const VALUES = [
  {
    title: "Verification over assumption",
    body: "Every claim — quality, quantity, capacity, certification — is verified by people on the ground or accredited third parties. Trust starts with evidence.",
  },
  {
    title: "Aligned incentives",
    body: "We charge service fees and commissions, never spreads on funds we don't handle. Our economics improve when your transaction succeeds — not when prices move.",
  },
  {
    title: "Local depth, global standards",
    body: "We grew up in West African trade, but we operate to international compliance and documentation standards. Both perspectives are required.",
  },
  {
    title: "Patient, not opportunistic",
    body: "We build relationships with producers and buyers across years, not single deals. Our network is an asset that compounds.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar variant="solid" />
      <main>
        {/* Hero */}
        <section className="pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 bg-[var(--background)]">
          <Container size="xl">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                About Tech Wave
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-medium leading-[1.04] tracking-tight">
                We&apos;re builders,
                <br />
                not brokers.
              </h1>
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[var(--muted-foreground)] max-w-2xl">
                Tech Wave is a trade facilitation and advisory company headquartered in Lagos. We
                build transparent, verified infrastructure between West African producers and the
                global buyers who source from them.
              </p>
            </div>
          </Container>
        </section>

        {/* Stats strip */}
        <section className="border-y border-[var(--border)] bg-[var(--muted)]">
          <Container size="xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)]">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-[var(--muted)] py-10 px-6 text-center">
                  <div className="font-serif text-4xl sm:text-5xl font-light leading-none tracking-tight text-[var(--foreground)]">
                    {stat.value}
                  </div>
                  <div className="mt-3 text-[10px] uppercase tracking-[0.18em] text-[var(--muted-foreground)] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Story */}
        <Section spacing="lg" bg="default">
          <Container size="xl">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted-foreground)] font-medium mb-4">
                  Origin
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium leading-tight tracking-tight">
                  Built from inside the trade.
                </h2>
              </div>
              <div className="lg:col-span-7 lg:col-start-6 space-y-5 text-[15px] leading-relaxed text-[var(--muted-foreground)]">
                <p>
                  Tech Wave was founded by a team with deep operational roots in West African
                  commodity trade — combining decades of experience across agriculture, mining,
                  export logistics, and international finance.
                </p>
                <p>
                  We started Tech Wave because we kept seeing the same pattern: serious
                  international buyers ready to engage with West African producers, but no
                  trustworthy infrastructure between them. Layered intermediaries. Unverifiable
                  claims. Documentation that fell apart at the port. Capital that arrived too late
                  or never at all.
                </p>
                <p>
                  Our model is the answer we wish had existed when we were on either side of those
                  trades: direct, verified, coordinated, and aligned. We don&apos;t take spreads. We
                  don&apos;t hold funds. We earn fees for the work we do — sourcing, verifying,
                  coordinating, documenting. That alignment is the product.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Values */}
        <Section spacing="lg" bg="muted">
          <Container size="xl">
            <SectionHeader
              eyebrow="What we believe"
              title="Four principles that shape every engagement."
            />
            <div className="mt-12 grid sm:grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)]">
              {VALUES.map((v, i) => (
                <div key={v.title} className="bg-[var(--card)] p-8 sm:p-10">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--accent)] font-medium">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-medium tracking-tight leading-snug">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Footprint */}
        <Section spacing="lg" bg="default">
          <Container size="xl">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted-foreground)] font-medium mb-4">
                  Where we operate
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium leading-tight tracking-tight">
                  Lagos HQ.
                  <br />
                  Regional presence across West Africa.
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-[var(--muted-foreground)] max-w-md">
                  Our headquarters are in Lagos, with regional offices in Accra, Abidjan, and
                  Douala. Field teams operate across producing regions — from the Plateau tin belt
                  to the cocoa highlands of Cross River and the sesame fields of Benue.
                </p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid sm:grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)]">
                  {[
                    { city: "Lagos", country: "Nigeria", role: "Headquarters" },
                    { city: "Accra", country: "Ghana", role: "Regional office" },
                    { city: "Abidjan", country: "Côte d'Ivoire", role: "Regional office" },
                    { city: "Douala", country: "Cameroon", role: "Regional office" },
                  ].map((loc) => (
                    <div key={loc.city} className="bg-[var(--card)] p-6 sm:p-7">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--muted-foreground)] font-medium">
                        {loc.role}
                      </p>
                      <h3 className="mt-3 font-serif text-xl font-medium tracking-tight">
                        {loc.city}
                      </h3>
                      <p className="text-sm text-[var(--muted-foreground)] mt-1">{loc.country}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Careers placeholder */}
        <Section spacing="md" bg="muted" id="careers">
          <Container size="xl">
            <div className="border border-[var(--border)] bg-[var(--card)] p-10 sm:p-14 max-w-4xl mx-auto text-center">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--accent)] font-medium">
                Careers
              </p>
              <h2 className="mt-4 font-serif text-2xl sm:text-3xl font-medium leading-tight tracking-tight">
                We hire people who&apos;ve been on the ground.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-[var(--muted-foreground)] max-w-xl mx-auto">
                Open roles across sourcing, coordination, and verification. We look for operators
                with real West African trade experience and the discipline to work to international
                standards.
              </p>
              <p className="mt-6 text-sm text-[var(--muted-foreground)]">
                Reach out to{" "}
                <a
                  href="mailto:careers@techwave.ng"
                  className="text-[var(--foreground)] underline underline-offset-4 hover:text-[var(--secondary)]"
                >
                  careers@techwave.ng
                </a>
                .
              </p>
            </div>
          </Container>
        </Section>

        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
