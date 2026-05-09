import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import {
  Zap,
  Code,
  Variable,
  Package,
  Download,
  Settings,
  ArrowUpFromLine,
  BookOpen,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Text Triggers",
    description: "Define shortcuts that auto-expand as you type. Organize into categories with search, toggle, and argument mode support.",
  },
  {
    icon: Code,
    title: "qlang Scripting",
    description: "Built-in scripting language for dynamic text. String manipulation, date/time formatting, conditionals, and more.",
  },
  {
    icon: Variable,
    title: "Global Variables",
    description: "Create reusable qlang expressions across all triggers using {{varname}} syntax.",
  },
  {
    icon: Package,
    title: "Packages",
    description: "Browse and install pre-built trigger packages for common content with one click.",
  },
  {
    icon: ArrowUpFromLine,
    title: "Export / Import",
    description: "Backup and restore all your triggers, variables, and settings to a JSON file via native file dialogs.",
  },
  {
    icon: Settings,
    title: "Customizable",
    description: "Theme colors, configurable ender character, and a full dark theme. Tailor trigr to your workflow.",
  },
];

const stats = [
  { label: "Version", value: "0.1.0" },
  { label: "Built with", value: "Tauri v2" },
  { label: "Language", value: "Rust + React" },
  { label: "Platform", value: "Windows 10+" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-lg border-b border-border/50">
          <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.svg" alt="trigr logo" width={28} height={28} />
          <span className="text-lg font-semibold tracking-tight">trigr</span>
        </Link>
        <div className="flex items-center gap-3">
          <a
            href="/downloads/trigr_0.1.0_x64-setup.exe"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-all duration-300"
            download
          >
            <Download size={15} />
            Download
          </a>
          <a
            href="https://github.com/TrigrApp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border text-sm text-secondary hover:text-foreground hover:border-accent/30 transition-all duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            GitHub
          </a>
        </div>
      </nav>

      <main className="flex-1">
        <section className="relative flex flex-col items-center text-center px-6 pt-32 pb-24 max-w-4xl mx-auto overflow-hidden">
          <div className="absolute inset-0 bg-grid pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent-muted text-sm text-accent mb-8">
              <Sparkles size={14} />
              v0.1.0 — Now available
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Text expansion at
              <br />
              <span className="text-gradient">your fingertips</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-lg sm:text-xl text-secondary max-w-xl mb-10 leading-relaxed">
              A desktop text expander that turns your shortcuts into text. Define triggers,
              use dynamic scripting with <span className="text-foreground font-mono text-sm bg-card px-1.5 py-0.5 rounded">qlang</span>, and supercharge your typing.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="/downloads/trigr_0.1.0_x64-setup.exe"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-white font-medium hover:bg-accent-hover transition-all duration-300 glow hover:glow"
                download
              >
                <Download size={18} className="group-hover:scale-110 transition-transform" />
                Download for Windows
              </a>
              <a
                href="/downloads/trigr_0.1.0_x64_en-US.msi"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border text-foreground font-medium hover:bg-card hover:border-accent/30 transition-all duration-300"
                download
              >
                <Download size={18} />
                MSI Installer
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="text-sm text-muted mt-5">Windows 10+ · x64 · Free</p>
          </ScrollReveal>

        </section>

        <section className="relative px-6 pb-24 max-6xl mx-auto overflow-hidden">
          <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />

          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
                Everything you need
              </h2>
              <p className="text-lg text-secondary max-w-lg mx-auto">
                Stop typing the same things over and over. trigr expands your shortcuts instantly.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={100 + i * 80}>
                <div className="group relative rounded-2xl border border-border bg-card p-6 hover:border-accent/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_-10px_#8b5cf6]">
                  <div className="size-11 rounded-xl bg-accent-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <f.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2 text-[15px]">{f.title}</h3>
                  <p className="text-sm text-secondary leading-relaxed">{f.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="px-6 pb-24 max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="relative rounded-2xl border border-border/50 bg-gradient-to-br from-card via-card to-accent/5 p-10 sm:p-14 text-center overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

              <BookOpen size={32} className="text-accent mx-auto mb-5" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">Built with Tauri</h2>
              <p className="text-secondary mb-8 max-w-md mx-auto leading-relaxed">
                trigr is a lightweight, native desktop app built with Tauri v2 and React.
                It runs as a background process and expands your text everywhere you type.
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                {["Rust", "React", "TypeScript", "Tauri v2", "SQLite"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full border border-border text-muted bg-background/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="px-6 pb-24 max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border bg-card p-5 text-center"
                >
                  <div className="text-lg font-bold text-accent mb-1">{s.value}</div>
                  <div className="text-xs text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>
      </main>

      <footer className="border-t border-border/50">
        <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.svg" alt="trigr logo" width={22} height={22} />
            <span className="font-semibold text-sm">trigr</span>
            <span className="text-xs text-muted ml-1">v0.1.0</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/TrigrApp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub
            </a>
            <a
              href="/downloads/trigr_0.1.0_x64-setup.exe"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground transition-colors"
              download
            >
              <Download size={14} />
              Download
            </a>
          </div>
          <p className="text-xs text-muted">Free and open source</p>
        </div>
      </footer>
    </div>
  );
}
