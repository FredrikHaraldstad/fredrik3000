import type { Metadata, Viewport } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";
import ConditionalNav from "@/components/ConditionalNav";
import Footer from "@/components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Set to your production URL for correct canonical and Open Graph URLs (e.g. "https://fredrikharaldstad.no")
const siteOrigin = process.env.NEXT_PUBLIC_SITE_ORIGIN || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: "Fredrik Haraldstad - Interaction Designer & Developer",
  description:
    "Portfolio of Fredrik Haraldstad - Interaction Designer and Front-end Developer specializing in UX, UI, and Service Design",
  keywords: [
    "portfolio",
    "interaction design",
    "UX design",
    "UI design",
    "front-end development",
    "service design",
  ],
  authors: [{ name: "Fredrik Haraldstad" }],
  openGraph: {
    title: "Fredrik Haraldstad - Interaction Designer & Developer",
    description:
      "Portfolio showcasing interaction design and development projects",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      {/*
        pt-14 (3.5rem = 56px) offsets content below the fixed TopBar.
        The TopBar and ConditionalNav together form the persistent chrome.
      */}
      <body className="min-h-screen bg-background-page text-text-default pt-14 flex flex-col">
        {/* Skip to main content — WCAG 2.4.1 */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Fixed nav bar — always on top */}
        <TopBar />

        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
