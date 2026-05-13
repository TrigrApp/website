import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AppMockup, PackagesMockup } from "@/components/AppMockup";
import { DownloadButton } from "@/components/DownloadButton";

const features = [
  {
    letter: "T",
    title: "Text Triggers",
    description:
      "Define shortcuts that auto-expand as you type. Organize into categories with search, toggle, and argument mode support.",
  },
  {
    letter: "S",
    title: "Trill Scripting",
    description:
      "Built-in scripting language for dynamic text. String manipulation, date/time formatting, conditionals, and more.",
  },
  {
    letter: "V",
    title: "Global Variables",
    description:
      "Create reusable Trill expressions across all triggers using {{varname}} syntax.",
  },
  {
    letter: "P",
    title: "Packages",
    description:
      "Browse and install pre-built trigger packages for common content with one click.",
  },
  {
    letter: "E",
    title: "Export / Import",
    description:
      "Backup and restore all your triggers, variables, and settings to a JSON file via native file dialogs.",
  },
  {
    letter: "C",
    title: "Customizable",
    description:
      "Theme colors, configurable ender character, and a full dark theme. Tailor trigr to your workflow.",
  },
];

export const metadata: Metadata = {
  title: "trigr — Text expansion at your fingertips",
  description:
    "A desktop text expander that turns your shortcuts into text. Powered by Trill, a custom scripting language for dynamic text generation. Free and open source.",
  openGraph: {
    title: "trigr — Text expansion at your fingertips",
    description:
      "A desktop text expander that turns your shortcuts into text. Powered by Trill, a custom scripting language for dynamic text generation.",
    url: "https://trigr.pancake.wtf",
    siteName: "trigr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "trigr — Text expansion at your fingertips",
    description:
      "A desktop text expander that turns your shortcuts into text. Powered by Trill, a custom scripting language for dynamic text generation.",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="relative px-6 pt-32 pb-28 max-w-4xl mx-auto text-center overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] bg-accent/3 rounded-full blur-3xl pointer-events-none" />

          <ScrollReveal delay={100}>
            <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight leading-[1.05] mb-6">
              Text expansion at
              <br />
              <span className="text-gradient">your fingertips</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-base sm:text-lg text-secondary max-w-lg mx-auto mb-10 leading-relaxed">
              A desktop text expander that turns your shortcuts into text.
              Define triggers, use dynamic scripting with Trill, and supercharge
              your typing.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <DownloadButton />
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="text-xs text-muted mt-4">
              Free & open source
            </p>
          </ScrollReveal>
        </section>

        <section className="px-6 pb-28 max-w-5xl mx-auto">
          <div className="space-y-24">
            <ScrollReveal delay={100}>
              <div className="grid lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-2 lg:pr-4">
                  <span className="text-[10px] font-semibold text-muted uppercase tracking-widest">
                    01
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-3 mb-3">
                    Trigger Manager
                  </h2>
                  <p className="text-sm text-secondary leading-relaxed">
                    Browse, search, and manage all your text expansion shortcuts
                    from one place. Organize by categories, toggle on the fly,
                    and see usage history.
                  </p>
                </div>
                <div className="lg:col-span-3">
                  <AppMockup />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="grid lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3 lg:order-first">
                  <PackagesMockup />
                </div>
                <div className="lg:col-span-2 lg:pl-4">
                  <span className="text-[10px] font-semibold text-muted uppercase tracking-widest">
                    02
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mt-3 mb-3">
                    Package Browser
                  </h2>
                  <p className="text-sm text-secondary leading-relaxed">
                    Discover and install pre-built trigger collections. Date
                    formatters, code snippets, email templates: all available
                    with one click.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="px-6 pb-28 max-w-5xl mx-auto">
          <div className="border-t border-border pt-16">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
                Everything you need
              </h2>
              <p className="text-sm text-secondary max-w-md mx-auto">
                Stop typing the same things over and over. trigr expands your
                shortcuts instantly.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {features.map((f, i) => (
                <ScrollReveal key={f.title} delay={100 + i * 60}>
                  <div className="group rounded-xl border border-border bg-card/50 p-5 card-hover flex flex-col h-full">
                    <div className="size-9 rounded-lg bg-accent-muted flex items-center justify-center mb-3 text-accent text-sm font-mono font-bold shrink-0">
                      {f.letter}
                    </div>
                    <h3 className="font-semibold text-sm mb-1.5 shrink-0">{f.title}</h3>
                    <p className="text-xs text-secondary leading-relaxed grow">
                      {f.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 pb-28 max-w-5xl mx-auto">
          <div className="border-t border-border pt-16">
            <div className="grid sm:grid-cols-3 gap-3">
              <Link
                href="/docs"
                className="group rounded-xl border border-border bg-card/50 p-6 card-hover"
              >
                <span className="text-xs font-mono text-accent mb-2 block">
                  docs
                </span>
                <h3 className="font-semibold text-sm mb-1.5 group-hover:text-accent transition-colors">
                  Documentation
                </h3>
                <p className="text-xs text-secondary leading-relaxed mb-3">
                  Learn how to use trigr, from basic triggers to advanced Trill
                  scripting.
                </p>
                <span className="text-xs text-accent font-medium">
                  Browse docs →
                </span>
              </Link>

              <Link
                href="/packages"
                className="group rounded-xl border border-border bg-card/50 p-6 card-hover"
              >
                <span className="text-xs font-mono text-accent mb-2 block">
                  packages
                </span>
                <h3 className="font-semibold text-sm mb-1.5 group-hover:text-accent transition-colors">
                  Packages
                </h3>
                <p className="text-xs text-secondary leading-relaxed mb-3">
                  Pre-built trigger collections. Date formatters, code snippets,
                  email templates.
                </p>
                <span className="text-xs text-accent font-medium">
                  Browse packages →
                </span>
              </Link>

              <div className="rounded-xl border border-border bg-card/50 p-6">
                <span className="text-xs font-mono text-muted mb-2 block">
                  stack
                </span>
                <h3 className="font-semibold text-sm mb-1.5">
                  Built with Tauri
                </h3>
                <p className="text-xs text-secondary leading-relaxed mb-3">
                  Lightweight native desktop app. Runs in your tray, expands
                  text everywhere.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["Rust", "React", "Tauri v2", "SQLite"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md border border-border text-[10px] text-muted bg-background/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
