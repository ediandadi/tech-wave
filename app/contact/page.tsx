import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { ContactSection } from "@/components/sections/contact";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tech Wave. We respond within one business day to inquiries about sourcing, coordination, partnerships, and press.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar variant="solid" />
      <main className="pt-28 sm:pt-32 pb-12">
        <Container size="xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
              Get in touch
            </p>
            <h1 className="font-serif text-3xl sm:text-[2rem] lg:text-[2.75rem] font-medium leading-[1.08] tracking-tight">
              Tell us what you&apos;re sourcing,
              <br />
              or what you need coordinated.
            </h1>
            <p className="mt-5 text-base text-[var(--muted-foreground)] leading-relaxed max-w-xl">
              We respond within one business day. Every inquiry goes to our principals — not a
              support queue.
            </p>
          </div>
        </Container>
        <ContactSection variant="page" />
      </main>
      <Footer />
    </>
  );
}
