import Image from "next/image";
import { Zap, Code, Variable, Package, Download, Settings, ArrowUpFromLine, BookOpen } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Text Triggers",
    description: "Define shortcuts that auto-expand as you type. Organize them into categories with search, toggle, and argument mode support.",
  },
  {
    icon: Code,
    title: "qlang Scripting",
    description: "Built-in scripting language for dynamic text. String manipulation, date/time formatting, conditionals, and more.",
  },
  {
    icon: Variable,
    title: "Global Variables",
    description: "Create reusable qlang expressions available across all triggers using {{varname}} syntax.",
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="flex items-center justify-center gap-2 px-6 py-5 border-b border-border">
          <Image src="/logo.svg" alt="trigr" width={32} height={32} />
        <span className="text-lg font-semibold tracking-tight">trigr</span>
      </nav>

      <main className="flex-1">
        <section className="flex flex-col items-center text-center px-6 pt-24 pb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border text-sm text-secondary mb-8">
            <Zap size={14} className="text-accent" />
            v0.1.0
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4">
            Text expansion at<br />
            <span className="text-accent">your fingertips</span>
          </h1>
          <p className="text-lg text-secondary max-w-xl mb-10 leading-relaxed">
            A desktop text expander that turns your shortcuts into text. Define triggers,
            use dynamic scripting with qlang, and supercharge your typing.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="/downloads/trigr_0.1.0_x64-setup.exe"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
              download
            >
              <Download size={18} />
              Download for Windows
            </a>
            <a
              href="/downloads/trigr_0.1.0_x64_en-US.msi"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-card transition-colors"
              download
            >
              <Download size={18} />
              MSI Installer
            </a>
          </div>
          <p className="text-sm text-muted mt-4">Windows 10+ · x64</p>
        </section>

        <section className="px-6 pb-24 max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-12">Features</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-accent/30 transition-colors"
              >
                <div className="size-10 rounded-lg bg-accent-muted flex items-center justify-center mb-4">
                  <f.icon size={20} className="text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 pb-24 max-w-3xl mx-auto text-center">
          <div className="rounded-2xl border border-border bg-card p-10 sm:p-14">
            <BookOpen size={28} className="text-accent mx-auto mb-4" />
            <h2 className="text-2xl font-semibold mb-3">Built with Tauri</h2>
            <p className="text-secondary mb-6 max-w-lg mx-auto leading-relaxed">
              trigr is a lightweight, native desktop app built with Tauri v2 and React.
              It runs as a background process and expands your text everywhere you type.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs text-muted">
              <span className="px-3 py-1 rounded-full border border-border">Rust</span>
              <span className="px-3 py-1 rounded-full border border-border">React</span>
              <span className="px-3 py-1 rounded-full border border-border">TypeScript</span>
              <span className="px-3 py-1 rounded-full border border-border">Tauri v2</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted">
        <p>trigr v0.1.0</p>
      </footer>
    </div>
  );
}
