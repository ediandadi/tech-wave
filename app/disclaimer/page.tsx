import type { Metadata } from "next";
import { LegalLayout, type TocItem } from "@/components/legal/legal-layout";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimers regarding Tech Wave website information and services.",
};

const toc: TocItem[] = [
  { id: "general-information", label: "General Information" },
  { id: "no-professional-advice", label: "No Professional Advice" },
  { id: "no-guarantees", label: "No Guarantees of Outcome" },
  { id: "third-party-links", label: "Third-Party Links" },
  { id: "forward-looking", label: "Forward-Looking Statements" },
  { id: "limitation-of-liability", label: "Limitation of Liability" },
  { id: "contact", label: "Contact" },
];

export default function DisclaimerPage() {
  return (
    <LegalLayout title="Disclaimer" lastUpdated="January 5, 2026" toc={toc}>
      <h2 id="general-information">General Information</h2>
      <p>
        The information on this website is for general informational purposes only. While we strive
        for accuracy, we make no representations or warranties about the completeness, reliability,
        or availability of the information.
      </p>

      <h2 id="no-professional-advice">No Professional Advice</h2>
      <p>
        Nothing on this Site constitutes legal, financial, investment, tax, or regulatory advice.
        Consult qualified professionals before making decisions based on Site information.
      </p>

      <h2 id="no-guarantees">No Guarantees of Outcome</h2>
      <p>
        Case studies, testimonials, statistics, and projected outcomes are illustrative. Past
        performance does not guarantee future results.
      </p>

      <h2 id="third-party-links">Third-Party Links</h2>
      <p>
        The Site may contain links to third-party websites. We are not responsible for the content
        or practices of those sites.
      </p>

      <h2 id="forward-looking">Forward-Looking Statements</h2>
      <p>
        Any forward-looking statements involve risks and uncertainties. Actual outcomes may differ
        materially.
      </p>

      <h2 id="limitation-of-liability">Limitation of Liability</h2>
      <p>
        In no event shall Tech Wave be liable for any loss or damage arising from your use of or
        reliance on Site information.
      </p>

      <h2 id="contact">Contact</h2>
      <p>
        <a href="mailto:legal@techwave.ng">legal@techwave.ng</a>
      </p>
    </LegalLayout>
  );
}
