import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Code,
  Variable,
  Package,
  Download,
  Settings,
  Zap,
} from "lucide-react";
import { docNav } from "@/lib/docs";

export const metadata: Metadata = {
  title: "Documentation — trigr",
  description:
    "Learn how to use trigr text expander. Guides for triggers, Trill scripting, variables, and more.",
};

const iconMap: Record<string, typeof BookOpen> = {
  "getting-started": Zap,
  triggers: BookOpen,
  "trill-scripting": Code,
  "global-variables": Variable,
  "export-import": Download,
  packages: Package,
  customization: Settings,
};

export default function DocsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="relative px-6 pt-28 pb-20 max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent-muted text-sm text-accent mb-6">
              <BookOpen size={14} />
              Documentation
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Everything you need to know
            </h1>
            <p className="text-lg text-secondary max-w-lg mx-auto">
              Learn how to use trigr from basic triggers to advanced Trill
              scripting.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {docNav.map((doc) => {
              const Icon = iconMap[doc.slug] || BookOpen;
              return (
                <Link
                  key={doc.slug}
                  href={`/docs/${doc.slug}`}
                  className="group rounded-2xl border border-border bg-card p-6 hover:border-accent/40 transition-colors"
                >
                  <div className="size-10 rounded-xl bg-accent-muted flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={18} className="text-accent" />
                  </div>
                  <h2 className="font-semibold mb-1.5">{doc.title}</h2>
                  <p className="text-sm text-secondary leading-relaxed line-clamp-2">
                    {doc.title === "Getting Started" &&
                      "Download, install, and set up trigr on your Windows machine."}
                    {doc.title === "Triggers" &&
                      "Create, manage, and organize your text expansion shortcuts."}
                    {doc.title === "Trill Scripting" &&
                      "A custom scripting language for dynamic text generation."}
                    {doc.title === "Global Variables" &&
                      "Create reusable expressions accessible from any trigger."}
                    {doc.title === "Export & Import" &&
                      "Backup and restore your triggers, variables, and settings."}
                    {doc.title === "Packages" &&
                      "Browse and install pre-built trigger packages with one click."}
                    {doc.title === "Customization" &&
                      "Theme colors, ender character, and other settings."}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
