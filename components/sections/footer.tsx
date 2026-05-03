import Link from "next/link";
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
      { label: "Verification", href: "/coordination#verification" },
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

          <div className="mt-16 pt-8 border-t border-[#2A322C]">
            <p className="text-xs text-[#F0EBE0]/45">
              © 2026 Tech Wave Limited · Built in Lagos. Operating across West Africa.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
