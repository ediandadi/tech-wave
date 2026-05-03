import type { Metadata } from "next";
import { LegalLayout, type TocItem } from "@/components/legal/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Tech Wave handles personal data when you use our website or engage our services.",
};

const toc: TocItem[] = [
  { id: "data-we-collect", label: "1. Data We Collect" },
  { id: "why-we-collect", label: "2. Why We Collect Data" },
  { id: "lawful-basis", label: "3. Lawful Basis" },
  { id: "sharing-your-data", label: "4. Sharing Your Data" },
  { id: "international-transfers", label: "5. International Transfers" },
  { id: "retention", label: "6. Retention" },
  { id: "your-rights", label: "7. Your Rights" },
  { id: "security", label: "8. Security" },
  { id: "cookies", label: "9. Cookies" },
  { id: "children", label: "10. Children" },
  { id: "updates", label: "11. Updates" },
  { id: "contact", label: "12. Contact" },
];

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="May 2, 2026" toc={toc}>
      <p>
        Tech Wave Limited (&ldquo;Tech Wave,&rdquo; &ldquo;we&rdquo;) respects your privacy. This
        Policy explains how we handle personal data when you use our website or engage our services.
      </p>

      <h2 id="data-we-collect">1. Data We Collect</h2>

      <h3>From You</h3>
      <ul>
        <li>Identity data: name, title, nationality</li>
        <li>Contact data: email, phone, business address</li>
        <li>Business data: company name, registration number, industry</li>
        <li>Commercial data: commodity preferences, transaction interests</li>
        <li>Communications and meeting records</li>
      </ul>

      <h3>Automatically</h3>
      <ul>
        <li>Device, browser, IP address</li>
        <li>Site usage and analytics data</li>
        <li>Cookies (see Cookie Policy)</li>
      </ul>

      <h3>From Third Parties</h3>
      <ul>
        <li>Business directories and trade references</li>
        <li>Publicly available business information</li>
      </ul>

      <h2 id="why-we-collect">2. Why We Collect Data</h2>
      <ul>
        <li>To respond to inquiries and provide services</li>
        <li>To verify counterparties for routine commercial purposes</li>
        <li>To communicate about engagements and updates</li>
        <li>To improve our website and services</li>
        <li>To meet legitimate legal obligations</li>
        <li>For marketing communications, only with consent</li>
      </ul>

      <h2 id="lawful-basis">3. Lawful Basis</h2>
      <ul>
        <li><strong>Contract</strong> — to deliver services you&apos;ve engaged us for</li>
        <li><strong>Legitimate interest</strong> — for routine business operations, security, and verification</li>
        <li><strong>Consent</strong> — for marketing and non-essential cookies</li>
        <li><strong>Legal obligation</strong> — where required by applicable law</li>
      </ul>

      <h2 id="sharing-your-data">4. Sharing Your Data</h2>
      <p>We share data only as needed with:</p>
      <ul>
        <li>
          <strong>Inspection partners</strong> (e.g., SGS, Bureau Veritas) — for shipment
          verification
        </li>
        <li>
          <strong>Logistics providers</strong> — shippers, freight forwarders, customs brokers
        </li>
        <li>
          <strong>Third-party providers</strong> introduced to you — only with your consent and for
          the specific engagement
        </li>
        <li>
          <strong>Professional advisors</strong> (lawyers, accountants) under confidentiality
          obligations
        </li>
        <li><strong>Authorities</strong> where required by law</li>
      </ul>
      <p>
        We do <strong>not</strong> sell personal data.
      </p>

      <h2 id="international-transfers">5. International Transfers</h2>
      <p>
        We operate across West Africa and serve clients globally. Data may be transferred between
        jurisdictions. We use Standard Contractual Clauses or equivalent safeguards where
        appropriate.
      </p>

      <h2 id="retention">6. Retention</h2>
      <p>We retain data only as long as necessary:</p>
      <ul>
        <li>Active client data: duration of relationship plus reasonable archival period</li>
        <li>Inquiry data: typically 24 months</li>
        <li>Marketing consent: until withdrawn</li>
      </ul>

      <h2 id="your-rights">7. Your Rights</h2>
      <p>Subject to applicable law, you may:</p>
      <ul>
        <li>Access your data</li>
        <li>Correct inaccuracies</li>
        <li>Request deletion</li>
        <li>Restrict or object to processing</li>
        <li>Withdraw consent</li>
        <li>Lodge a complaint with your local data protection authority</li>
      </ul>
      <p>
        Contact:{" "}
        <a href="mailto:privacy@techwave.ng">privacy@techwave.ng</a>. We respond within 30
        days.
      </p>

      <h2 id="security">8. Security</h2>
      <p>We use:</p>
      <ul>
        <li>TLS encryption for data in transit</li>
        <li>Access controls</li>
        <li>Confidentiality obligations on staff and partners</li>
      </ul>

      <h2 id="cookies">9. Cookies</h2>
      <p>
        See our <a href="/cookies">Cookie Policy</a>.
      </p>

      <h2 id="children">10. Children</h2>
      <p>Our services are B2B. We do not knowingly process data of persons under 18.</p>

      <h2 id="updates">11. Updates</h2>
      <p>We may update this Policy. Material changes will be posted with a new date.</p>

      <h2 id="contact">12. Contact</h2>
      <p>
        <strong>Tech Wave Limited</strong>
        <br />
        [Address Placeholder], Lagos, Nigeria
        <br />
        Email:{" "}
        <a href="mailto:privacy@techwave.ng">privacy@techwave.ng</a>
      </p>
    </LegalLayout>
  );
}
