import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { docs, docNav } from "@/lib/docs";
import { siteUrl } from "@/lib/seo";
import { renderMarkdown } from "@/lib/markdown";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return docs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = docs.find((d) => d.slug === slug);
  if (!doc) return {};
  return {
    title: `${doc.title} — trigr Documentation`,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      url: `${siteUrl}/docs/${doc.slug}`,
      siteName: "trigr",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
    },
  };
}

export default async function DocPage({ params }: Props) {
  const { slug } = await params;
  const doc = docs.find((d) => d.slug === slug);
  if (!doc) notFound();

  const currentIndex = docNav.findIndex((d) => d.slug === slug);
  const prev = currentIndex > 0 ? docNav[currentIndex - 1] : null;
  const next =
    currentIndex < docNav.length - 1 ? docNav[currentIndex + 1] : null;

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-6 pt-28 pb-20">
          <Link
            href="/docs"
            className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors mb-8"
          >
            <ChevronLeft size={14} />
            All documentation
          </Link>

          <div className="flex gap-12">
            <nav className="hidden lg:block w-52 shrink-0">
              <div className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">
                Guides
              </div>
              <div className="space-y-0.5">
                {docNav.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/docs/${d.slug}`}
                    className={`block px-3 py-1.5 rounded-lg text-sm transition-colors ${
                      d.slug === slug
                        ? "bg-accent-muted text-accent font-medium"
                        : "text-secondary hover:text-foreground hover:bg-card/50"
                    }`}
                  >
                    {d.title}
                  </Link>
                ))}
              </div>
            </nav>

            <article className="flex-1 min-w-0">
              <div className="mb-8">
                <h1 className="text-3xl font-semibold tracking-tight mb-3">
                  {doc.title}
                </h1>
                <p className="text-sm text-secondary">{doc.description}</p>
              </div>
              <div
                className="doc-content"
                dangerouslySetInnerHTML={{
                  __html: renderMarkdown(doc.content),
                }}
              />

              <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
                {prev ? (
                  <Link
                    href={`/docs/${prev.slug}`}
                    className="group flex flex-col"
                  >
                    <span className="text-xs text-muted mb-1">Previous</span>
                    <span className="text-sm text-foreground group-hover:text-accent transition-colors">
                      ← {prev.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link
                    href={`/docs/${next.slug}`}
                    className="group flex flex-col text-right"
                  >
                    <span className="text-xs text-muted mb-1">Next</span>
                    <span className="text-sm text-foreground group-hover:text-accent transition-colors">
                      {next.title} →
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
