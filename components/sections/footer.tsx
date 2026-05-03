import Link from "next/link";
import { Linkedin, XIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui/container";

const COLUMNS = [
  {
    title: "Sourcing",
    links: [
      { label: "Sourcing Intelligence", href: "/sourcing" },
      { label: "Commodities", href: "/commodities" },
      { label: "How It Works", href: "/#how-it-works" },
    ],
  },
  {
    title: "Coordination",
    links: [
      { label: "Trade Coordination", href: "/coordination" },
      { label: "Insights", href: "/insights" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/about#careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Cookies", href: "/cookies" },
      { label: "Disclaimer", href: "/disclaimer" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0F1410] text-[#F0EBE0] relative overflow-hidden border-t border-[#2A322C]">
      <div className="absolute inset-0 bg-topo opacity-30" aria-hidden="true" />
      <Container size="xl">
        <div className="relative pt-20 pb-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            <div className="lg:col-span-4">
              <div className="inline-flex items-baseline gap-1.5 text-[#F0EBE0] font-serif">
                <span aria-hidden="true" className="text-[#D4A24C] font-medium translate-y-[1px] mr-0.5">~</span>
                <span className="font-medium text-[15px] tracking-[0.18em] uppercase">Tech Wave</span>
              </div>
              <p className="mt-5 font-serif text-xl sm:text-2xl font-light leading-tight tracking-tight max-w-sm text-[#F0EBE0]/90">
                From Source<br />
                <span className="italic text-[#DCA34B]">to</span> Shipment.
              </p>
              <p className="mt-5 text-[13px] text-[#F0EBE0]/55 leading-relaxed max-w-sm">
                Trade facilitation and advisory for global commodity buyers and West African producers.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {COLUMNS.map((col) => (
                <div key={col.title}>
                  <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#DCA34B] font-medium mb-4">
                    {col.title}
                  </h4>
                  <ul className="space-y-2.5">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-[#F0EBE0]/70 hover:text-[#F0EBE0] transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[#2A322C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-xs text-[#F0EBE0]/45">
              © 2026 Tech Wave Limited · Built in Lagos. Operating across West Africa.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tech Wave on LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-[#2A322C] text-[#F0EBE0]/60 hover:text-[#F0EBE0] hover:border-[#F0EBE0]/30 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Tech Wave on X"
                className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-[#2A322C] text-[#F0EBE0]/60 hover:text-[#F0EBE0] hover:border-[#F0EBE0]/30 transition-colors"
              >
                <XIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
