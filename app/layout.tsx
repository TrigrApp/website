import type { Metadata, Viewport } from "next";
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
  "A desktop text expander that turns your shortcuts into text. Powered by qlang, a custom scripting language for dynamic text generation. Free and open source.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://trigr.app"),
  openGraph: {
    title,
    description,
    url: "https://trigr.app",
    siteName: "trigr",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 128,
        height: 128,
        alt: "trigr logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/og-image.png"],
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
    "qlang",
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
        {children}
      </body>
    </html>
  );
}
