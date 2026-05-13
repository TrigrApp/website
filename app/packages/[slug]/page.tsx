import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, Download } from "lucide-react";
import { packages } from "@/lib/packages";
import { siteUrl } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) return {};
  return {
    title: `${pkg.name} — trigr Packages`,
    description: pkg.description,
    openGraph: {
      title: pkg.name,
      description: pkg.description,
      url: `${siteUrl}/packages/${pkg.slug}`,
      siteName: "trigr",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pkg.name,
      description: pkg.description,
    },
  };
}

const colorMap: Record<string, string> = {
  amber: "bg-amber-500/15 text-amber-400 border-amber-500/25",
  blue: "bg-blue-500/15 text-blue-400 border-blue-500/25",
  yellow: "bg-yellow-500/15 text-yellow-400 border-yellow-500/25",
  green: "bg-green-500/15 text-green-400 border-green-500/25",
  violet: "bg-violet-500/15 text-violet-400 border-violet-500/25",
  pink: "bg-pink-500/15 text-pink-400 border-pink-500/25",
  cyan: "bg-cyan-500/15 text-cyan-400 border-cyan-500/25",
};

const dotColors: Record<string, string> = {
  amber: "bg-amber-500",
  blue: "bg-blue-500",
  yellow: "bg-yellow-500",
  green: "bg-green-500",
  violet: "bg-violet-500",
  pink: "bg-pink-500",
  cyan: "bg-cyan-500",
};

export default async function PackagePage({ params }: Props) {
  const { slug } = await params;
  const pkg = packages.find((p) => p.slug === slug);
  if (!pkg) notFound();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">
          <Link
            href="/packages"
            className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-foreground transition-colors mb-6"
          >
            <ChevronLeft size={14} />
            Back
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div
                className={`size-14 rounded-xl flex items-center justify-center shrink-0 ${colorMap[pkg.color] || "bg-accent-muted"}`}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d={
                      pkg.icon === "calendar"
                        ? "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
                        : pkg.icon === "code"
                          ? "M16 18l6-6-6-6M8 6l-6 6 6 6"
                          : pkg.icon === "smile"
                            ? "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM8 9h.01M16 9h.01M12 16a4 4 0 0 0 3.24-1.87"
                            : pkg.icon === "dollar"
                              ? "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                              : pkg.icon === "text"
                                ? "M3 3h18M3 9h18M3 15h12M3 21h6"
                                : pkg.icon === "type"
                                  ? "M4 7V4h16v3M9 20h6M12 4v16"
                                  : "M16 4h-4m-4 0H4m4 0v16m0 0h4m4 0h4M8 20V4"
                    }
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-semibold tracking-tight mb-1">
                  {pkg.name}
                </h1>
                <p className="text-sm text-secondary">{pkg.description}</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-white text-sm font-medium select-none self-start shrink-0">
              <Download size="15" />
              Install Package
            </span>
          </div>

          <div className="flex items-center gap-3 mb-8">
            <span className="text-xs text-muted bg-background/50 px-2 py-0.5 rounded border border-border/50">
              v{pkg.version}
            </span>
            <span className="text-xs text-muted">{pkg.triggers} triggers</span>
            <span className="text-xs text-muted">by {pkg.author}</span>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Triggers</h4>
            <div className="rounded-xl border border-border bg-card/50 overflow-hidden">
              <div className="divide-y divide-border/30">
                {pkg.triggersList.map((trigger) => (
                  <div
                    key={trigger.abbreviation}
                    className="px-4 py-3 flex items-center gap-3 hover:bg-card/30 transition-colors"
                  >
                    <span
                      className={`size-1.5 rounded-full shrink-0 ${dotColors[pkg.color] || "bg-accent"}`}
                    />
                    <code className="text-xs font-mono text-accent shrink-0">
                      {trigger.abbreviation}
                    </code>
                    <span className="text-[11px] text-muted shrink-0">→</span>
                    <span className="text-xs text-secondary truncate">
                      {trigger.replacement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
