import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "trigr",
              applicationCategory: "ProductivityApplication",
              operatingSystem: "Windows 10+",
              description,
              version: "0.1.0",
              author: { "@type": "Person", name: "Pancake" },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body className="bg-background text-foreground font-sans">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/docs", label: "Docs" },
  { href: "/packages", label: "Packages" },
];

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5">
            <svg width="20" height="20" viewBox="0 0 512 512">
              <rect
                x="48"
                y="48"
                width="416"
                height="416"
                rx="96"
                fill="#1a1a2e"
              />
              <path
                d="M192,160 L152,160 L120,216 L120,296 L152,352 L192,352"
                stroke="#8b5cf6"
                strokeWidth="32"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M320,160 L360,160 L392,216 L392,296 L360,352 L320,352"
                stroke="#8b5cf6"
                strokeWidth="32"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M272,128 L208,256 L248,256 L232,384 L336,240 L276,240 Z"
                fill="#a78bfa"
                stroke="#c4b5fd"
                strokeWidth="8"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-semibold tracking-tight">trigr</span>
          </Link>
          <div className="hidden sm:flex items-center gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 rounded-lg text-sm text-secondary hover:text-foreground hover:bg-card/50 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <a
            href="https://github.com/TrigrApp"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-sm text-secondary hover:text-foreground hover:border-accent/25 transition-all"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            GitHub
          </a>
          <a
            href="/downloads/trigr_0.1.0_x64-setup.exe"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-all glow-accent"
            download
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            Download
          </a>
        </div>
      </div>
    </nav>
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
              <a href="/downloads/trigr_0.1.0_x64-setup.exe" download className="block text-xs text-muted hover:text-foreground transition-colors">Download</a>
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
              <a href="https://github.com/TrigrApp" target="_blank" rel="noopener noreferrer" className="block text-xs text-muted hover:text-foreground transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <p className="text-xs text-muted/60">Free and open source</p>
          <p className="text-xs text-muted/60">v0.1.0</p>
        </div>
      </div>
    </footer>
  );
}
