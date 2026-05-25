import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/Nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "trigr — Text expansion at your fingertips";
const description =
  "A desktop text expander that turns your shortcuts into text. Powered by Trill, a custom scripting language for dynamic text generation. Free and open source.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://trigr.pancake.wtf"),
  openGraph: {
    title,
    description,
    url: "https://trigr.pancake.wtf",
    siteName: "trigr",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "text expander",
    "text expansion",
    "auto expand",
    "text shortcuts",
    "productivity",
    "typing assistant",
    "Trill",
    "trigr",
    "desktop app",
    "tauri app",
  ],
  authors: [{ name: "Pancake" }],
  creator: "Pancake",
  other: {
    "application-name": "trigr",
  },
};

export const viewport: Viewport = {
  themeColor: "#8b5cf6",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <Script
          id="schema-org"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "trigr",
            applicationCategory: "ProductivityApplication",
            operatingSystem: "Windows 10+",
            description,
            version: "0.1.5",
            author: { "@type": "Person", name: "Pancake" },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          })}
        </Script>
      </head>
      <body className="bg-background text-foreground font-sans">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="18" height="18" viewBox="0 0 512 512">
                <rect x="48" y="48" width="416" height="416" rx="96" fill="#1a1a2e" />
                <path d="M192,160 L152,160 L120,216 L120,296 L152,352 L192,352" stroke="#8b5cf6" strokeWidth="32" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M320,160 L360,160 L392,216 L392,296 L360,352 L320,352" stroke="#8b5cf6" strokeWidth="32" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M272,128 L208,256 L248,256 L232,384 L336,240 L276,240 Z" fill="#a78bfa" stroke="#c4b5fd" strokeWidth="8" strokeLinejoin="round" />
              </svg>
              <span className="text-sm font-semibold">trigr</span>
            </div>
            <p className="text-xs text-muted/60 leading-relaxed max-w-[180px]">
              A desktop text expander that turns your shortcuts into text.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wider">Product</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-xs text-muted hover:text-foreground transition-colors">Home</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wider">Resources</h4>
            <div className="space-y-2">
              <Link href="/docs" className="block text-xs text-muted hover:text-foreground transition-colors">Documentation</Link>
              <Link href="/packages" className="block text-xs text-muted hover:text-foreground transition-colors">Packages</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wider">Connect</h4>
            <div className="space-y-2">
              <Link href="https://github.com/TrigrApp" target="_blank" rel="noopener noreferrer" className="block text-xs text-muted hover:text-foreground transition-colors">GitHub</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <p className="text-xs text-muted/60">Free and open source</p>
          <p className="text-xs text-muted/60">v0.1.5</p>
        </div>
      </div>
    </footer>
  );
}
