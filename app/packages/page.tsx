import type { Metadata } from "next";
import Link from "next/link";
import { packages } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Packages — trigr",
  description:
    "Browse and install pre-built trigger packages for trigr text expander.",
  openGraph: {
    title: "Packages — trigr",
    description:
      "Browse and install pre-built trigger packages for trigr text expander.",
    url: "https://trigr.pancake.wtf/packages",
    siteName: "trigr",
    type: "website",
  },
};

const colors: Record<string, string> = {
  amber: "text-amber-400",
  blue: "text-blue-400",
  yellow: "text-yellow-400",
  green: "text-green-400",
  violet: "text-violet-400",
  pink: "text-pink-400",
  cyan: "text-cyan-400",
};

const iconSvgs: Record<string, string> = {
  calendar:
    "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  code: "M16 18l6-6-6-6M8 6l-6 6 6 6",
  smile:
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM8 9h.01M16 9h.01M12 16a4 4 0 0 0 3.24-1.87",
  dollar: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  text: "M3 3h18M3 9h18M3 15h12M3 21h6",
  type: "M4 7V4h16v3M9 20h6M12 4v16",
  ruler: "M16 4h-4m-4 0H4m4 0v16m0 0h4m4 0h4M8 20V4",
};

const TWEMOJI_BASE = "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg";
const TWEMOJI = (cp: string) => `${TWEMOJI_BASE}/${cp}.svg`;

export default function PackagesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="px-6 pt-28 pb-20 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3">
              Packages
            </h1>
            <p className="text-secondary max-w-md mx-auto">
              Install trigger packages for common content
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {packages.map((pkg) => (
              <Link
                key={pkg.slug}
                href={`/packages/${pkg.slug}`}
                className="group rounded-xl border border-border bg-card/50 p-4 hover:border-accent/25 hover:bg-card transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <div className="size-10 rounded-lg bg-background/40 border border-border flex items-center justify-center shrink-0 overflow-hidden">
                    {pkg.slug === "emojis" ? (
                      <img src={TWEMOJI("1f60a")} alt="" className="size-6" crossOrigin="anonymous" />
                    ) : (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={colors[pkg.color] || "text-accent"}
                      >
                        <path d={iconSvgs[pkg.icon] || "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"} />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <h2 className="font-semibold text-sm truncate">{pkg.name}</h2>
                      <span className="text-[10px] text-muted/50 font-mono border border-border px-1 rounded shrink-0">
                        v{pkg.version}
                      </span>
                    </div>
                    <p className="text-xs text-secondary leading-relaxed line-clamp-2">
                      {pkg.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border">
                  <span className="text-[11px] text-muted">{pkg.triggers} triggers</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted/40 group-hover:text-accent ml-auto transition-colors">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
