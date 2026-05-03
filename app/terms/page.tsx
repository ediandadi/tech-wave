import type { Metadata } from "next";
import { LegalLayout, type TocItem } from "@/components/legal/legal-layout";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms governing your use of the Tech Wave website and services. Tech Wave is a trade facilitation and advisory company.",
};

const toc: TocItem[] = [
  { id: "introduction", label: "1. Introduction" },
  { id: "about-tech-wave", label: "2. About Tech Wave" },
  { id: "eligibility", label: "3. Eligibility" },
  { id: "services", label: "4. Services and Engagements" },
  { id: "counterparty-information", label: "5. Counterparty Information" },
  { id: "commodity-disclaimers", label: "6. Commodity Sourcing Disclaimers" },
  { id: "third-party-services", label: "7. Third-Party Services Disclaimer" },
  { id: "intellectual-property", label: "8. Intellectual Property" },
  { id: "limitation-of-liability", label: "9. Limitation of Liability" },
  { id: "indemnification", label: "10. Indemnification" },
  { id: "force-majeure", label: "11. Force Majeure" },
  { id: "governing-law", label: "12. Governing Law and Dispute Resolution" },
  { id: "severability", label: "13. Severability" },
  { id: "changes", label: "14. Changes" },
  { id: "contact", label: "15. Contact" },
];

export default function TermsPage() {
  return (
    <LegalLayout title="Terms and Conditions" lastUpdated="January 5, 2026" toc={toc}>
      <h2 id="introduction">1. Introduction</h2>
      <p>
        These Terms govern your use of the Tech Wave website and services provided by Tech Wave
        Limited (&ldquo;Tech Wave,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). By using the Site or
        engaging our services, you agree to these Terms.
      </p>

      <h2 id="about-tech-wave">2. About Tech Wave</h2>
      <p>
        Tech Wave Limited is a company registered in the Federal Republic of Nigeria, with its
        principal place of business in Lagos. Tech Wave is a trade facilitation and advisory
        company. We provide:
      </p>
      <ul>
        <li>Sourcing intelligence and supplier verification</li>
        <li>Trade coordination, including documentation, inspection, and logistics support</li>
        <li>Advisory services to international buyers and West African producers</li>
      </ul>
      <p>
        <strong>
          Tech Wave does not provide loans, take deposits, or hold client funds. We are not a
          financial institution. Where financing is required, we may introduce clients to
          independent third-party providers, with whom clients engage directly.
        </strong>
      </p>

      <h2 id="eligibility">3. Eligibility</h2>
      <p>Our services are intended for:</p>
      <ul>
        <li>Registered businesses</li>
        <li>Persons over 18 years of age with legal capacity to contract</li>
        <li>Counterparties willing to provide standard commercial verification information</li>
      </ul>
      <p>We reserve the right to decline service at our discretion.</p>

      <h2 id="services">4. Services and Engagements</h2>
      <ul>
        <li>All commercial engagements require a signed Service Agreement or equivalent contract.</li>
        <li>
          Tech Wave acts as a sourcing and facilitation agent. We do not take title to commodities
          unless explicitly agreed in writing.
        </li>
        <li>
          Where third-party providers (inspection agencies, freight forwarders, escrow providers,
          finance providers) are involved, those parties are engaged directly by the client and
          govern their own terms.
        </li>
      </ul>

      <h2 id="counterparty-information">5. Counterparty Information</h2>
      <p>
        By engaging Tech Wave, you agree to provide accurate business and identity information
        needed for routine commercial verification. You represent that:
      </p>
      <ul>
        <li>The funds and goods involved are derived from lawful sources</li>
        <li>You are not subject to international sanctions</li>
        <li>Information provided is accurate and complete</li>
      </ul>

      <h2 id="commodity-disclaimers">6. Commodity Sourcing Disclaimers</h2>
      <ul>
        <li>
          Quality, quantity, and specifications are subject to verification through agreed
          inspection protocols.
        </li>
        <li>
          Force majeure events (weather, civil unrest, regulatory changes, port disruptions) may
          affect delivery; remedies are governed by the specific commodity agreement.
        </li>
        <li>
          Market price fluctuations are inherent to commodity trade. Tech Wave makes no guarantees
          regarding pricing beyond what is contractually agreed.
        </li>
      </ul>

      <h2 id="third-party-services">7. Third-Party Services Disclaimer</h2>
      <p>
        Tech Wave may introduce clients to third-party providers, including inspection agencies,
        freight forwarders, escrow providers, and independent finance providers. Tech Wave does not
        control these third parties and is not responsible for their performance, terms, or pricing.
        Clients engage these parties directly.
      </p>

      <h2 id="intellectual-property">8. Intellectual Property</h2>
      <p>
        All content on the Site — text, graphics, logos, and software — is owned by Tech Wave or
        licensed to us. You may not reproduce, distribute, or create derivative works without
        written permission.
      </p>

      <h2 id="limitation-of-liability">9. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law:</p>
      <ul>
        <li>
          Tech Wave&apos;s aggregate liability under any engagement shall not exceed the fees paid
          to Tech Wave under that engagement in the preceding twelve (12) months.
        </li>
        <li>Tech Wave shall not be liable for indirect, consequential, special, or punitive damages.</li>
        <li>
          Nothing limits liability for fraud, willful misconduct, or any liability that cannot be
          excluded by law.
        </li>
      </ul>

      <h2 id="indemnification">10. Indemnification</h2>
      <p>
        You agree to indemnify Tech Wave against any claims arising from your breach of these Terms,
        misrepresentation, or violation of applicable laws.
      </p>

      <h2 id="force-majeure">11. Force Majeure</h2>
      <p>
        Neither party shall be liable for delays or failures resulting from causes beyond reasonable
        control, including natural disasters, war, civil unrest, government action, port closures,
        currency restrictions, or pandemics.
      </p>

      <h2 id="governing-law">12. Governing Law and Dispute Resolution</h2>
      <ul>
        <li>These Terms are governed by the laws of the Federal Republic of Nigeria.</li>
        <li>Disputes shall first be addressed through good-faith negotiation.</li>
        <li>
          Unresolved disputes shall be submitted to arbitration in Lagos under the Arbitration and
          Mediation Act 2023, before a single arbitrator, conducted in English.
        </li>
        <li>
          For international counterparties, the parties may mutually elect ICC or LCIA arbitration
          in a neutral seat (London, Dubai, or Singapore).
        </li>
      </ul>

      <h2 id="severability">13. Severability</h2>
      <p>If any provision is found unenforceable, the remaining provisions remain in full force.</p>

      <h2 id="changes">14. Changes</h2>
      <p>We may update these Terms. Material changes will be posted with an updated date.</p>

      <h2 id="contact">15. Contact</h2>
      <p>
        <strong>Tech Wave Limited</strong>
        <br />
        3 Boge Gbaga Pipeline, Ikorodu, Lagos, Nigeria
        <br />
        Email:{" "}
        <a href="mailto:legal@techwave.ng">legal@techwave.ng</a>
      </p>
    </LegalLayout>
  );
}
