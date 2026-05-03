import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://techwave.ng"),
  title: {
    default: "Tech Wave — Sourcing Intelligence & Trade Coordination",
    template: "%s · Tech Wave",
  },
  description:
    "Tech Wave connects global commodity buyers directly with verified producers across Nigeria and West Africa — with on-the-ground verification and end-to-end trade coordination.",
  keywords: [
    "West Africa commodities",
    "Nigeria sourcing",
    "cocoa exports",
    "sesame exports",
    "lithium Nigeria",
    "trade coordination",
    "commodity sourcing",
    "agricultural exports",
    "mining exports",
  ],
  authors: [{ name: "Tech Wave Limited" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techwave.ng",
    siteName: "Tech Wave",
    title: "Tech Wave — From Source to Shipment",
    description:
      "Direct access to verified West African producers, with on-the-ground verification and end-to-end trade coordination.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Wave — From Source to Shipment",
    description:
      "Sourcing intelligence and trade coordination for global commodity buyers across West Africa.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <ThemeProvider>
          {children}
          <Toaster
            position="bottom-right"
            theme="system"
            toastOptions={{
              style: {
                fontFamily: "var(--font-inter)",
                borderRadius: "4px",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
