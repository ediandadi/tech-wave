import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { TwoPillarSection } from "@/components/sections/two-pillar";
import { CommoditiesSection } from "@/components/sections/commodities";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { CoordinationModelSection } from "@/components/sections/coordination-model";
import { TrustSection } from "@/components/sections/trust";
import { AudienceSection } from "@/components/sections/audience";
import { AboutSection } from "@/components/sections/about";
import { CtaSection } from "@/components/sections/cta";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <TwoPillarSection />
        <CommoditiesSection />
        <HowItWorksSection />
        <CoordinationModelSection />
        <TrustSection />
        <AudienceSection />
        <AboutSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
