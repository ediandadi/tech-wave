import type { Metadata } from "next";
import { LegalLayout, type TocItem } from "@/components/legal/legal-layout";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Tech Wave uses cookies on its website.",
};

const toc: TocItem[] = [
  { id: "what-are-cookies", label: "What Are Cookies?" },
  { id: "types", label: "Types of Cookies We Use" },
  { id: "managing", label: "Managing Cookies" },
  { id: "third-party-services", label: "Third-Party Services" },
  { id: "contact", label: "Contact" },
];

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="January 5, 2026" toc={toc}>
      <h2 id="what-are-cookies">What Are Cookies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They help
        websites function and provide information about user behavior.
      </p>

      <h2 id="types">Types of Cookies We Use</h2>
      <p>
        <strong>Strictly Necessary</strong> — Required for the website to function. Cannot be
        disabled.
      </p>
      <p>
        <strong>Analytics</strong> — Help us understand how visitors use the site (e.g., Google
        Analytics, Plausible).
      </p>
      <p>
        <strong>Functional</strong> — Remember your preferences (language, dark/light mode).
      </p>
      <p>
        <strong>Marketing</strong> — Used only with consent.
      </p>

      <h2 id="managing">Managing Cookies</h2>
      <p>
        You can control cookies through your browser settings or our cookie consent banner.
        Disabling cookies may affect website functionality.
      </p>

      <h2 id="third-party-services">Third-Party Services</h2>
      <p>We may use:</p>
      <ul>
        <li>Google Analytics (analytics)</li>
        <li>LinkedIn Insight Tag (marketing, with consent)</li>
        <li>Vercel Analytics (performance)</li>
      </ul>
      <p>Each has its own privacy policies, which you should review.</p>

      <h2 id="contact">Contact</h2>
      <p>
        <a href="mailto:privacy@techwave.ng">privacy@techwave.ng</a>
      </p>
    </LegalLayout>
  );
}
