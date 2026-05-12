"use client";

import React from "react";

const TWEMOJI_BASE = "https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg";
const TWEMOJI = (cp: string) => `${TWEMOJI_BASE}/${cp}.svg`;

function LogoIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="100%" stopColor="#0f3460" />
        </linearGradient>
      </defs>
      <rect x="48" y="48" width="416" height="416" rx="96" fill="url(#lg)" />
      <path d="M192,160 L152,160 L120,216 L120,296 L152,352 L192,352" stroke="#8b5cf6" strokeWidth="32" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M320,160 L360,160 L392,216 L392,296 L360,352 L320,352" stroke="#8b5cf6" strokeWidth="32" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M272,128 L208,256 L248,256 L232,384 L336,240 L276,240 Z" fill="#a78bfa" stroke="#c4b5fd" strokeWidth="8" strokeLinejoin="round" />
    </svg>
  );
}

export function AppMockup() {
  const [open, setOpen] = React.useState<Record<string, boolean>>({
    General: true,
    Code: true,
  });

  const categories = [
    {
      name: "General",
      count: 2,
      triggers: [
        { abbr: ";;sig", label: "Email signature", val: "Best regards,\nJohn Doe" },
        { abbr: ";;addr", label: "Home address", val: "123 Main St" },
      ],
    },
    {
      name: "Code",
      count: 2,
      triggers: [
        { abbr: ";;fn", label: "Arrow function", val: "const name = (args) => { body }" },
        { abbr: ";;cl", label: "Console log", val: "console.log()" },
      ],
    },
  ];

  const sideNav = [
    { icon: "zap", label: "Triggers", badge: 4, active: true },
    { icon: "hash", label: "Variables", badge: 2, active: false },
    { icon: "script", label: "Script", badge: null, active: false },
    { icon: "package", label: "Packages", badge: null, active: false },
    { icon: "settings", label: "Settings", badge: null, active: false },
  ];

  return (
    <div className="mockup-window w-full max-w-2xl mx-auto">
      <div className="flex min-h-0">
        <aside className="w-36 shrink-0 border-r border-border bg-background/30 hidden sm:flex flex-col">
          <div className="flex items-center gap-1.5 px-2.5 py-2 border-b border-border">
            <LogoIcon size={14} />
            <span className="text-[10px] font-semibold tracking-tight text-foreground">trigr</span>
          </div>
          <nav className="flex-1 px-1.5 py-1.5 space-y-0.5">
            {sideNav.map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-1.5 px-2 py-1 rounded-[4px] text-[11px] transition-colors ${
                  item.active
                    ? "bg-accent-muted text-accent font-medium"
                    : "text-secondary hover:text-foreground hover:bg-card/50"
                }`}
              >
                <span className="w-3.5 h-3.5 flex items-center justify-center shrink-0">
                  {item.icon === "zap" && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  )}
                  {item.icon === "hash" && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="4" y1="9" x2="20" y2="9" /><line x1="4" y1="15" x2="20" y2="15" /><line x1="10" y1="3" x2="8" y2="21" /><line x1="16" y1="3" x2="14" y2="21" />
                    </svg>
                  )}
                  {item.icon === "script" && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                    </svg>
                  )}
                  {item.icon === "package" && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16.5 9.4 7.55 4.24" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.29 7 12 12 20.71 7" /><line x1="12" y1="22" x2="12" y2="12" />
                    </svg>
                  )}
                  {item.icon === "settings" && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                    </svg>
                  )}
                </span>
                {item.label}
                {item.badge !== null && (
                  <span className="ml-auto text-[9px] text-muted bg-background/60 px-1 py-0.5 rounded-full border border-border">{item.badge}</span>
                )}
              </div>
            ))}
          </nav>
          <div className="px-1.5 pb-1.5 space-y-0.5 border-t border-border pt-1.5">
            {["Export", "Import"].map((label) => (
              <div key={label} className="flex items-center gap-1.5 px-2 py-1 rounded-[4px] text-[11px] text-secondary hover:text-foreground hover:bg-card/50 transition-colors cursor-pointer">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {label === "Export" ? (
                    <>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </>
                  ) : (
                    <>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1="12" y1="3" x2="12" y2="15" />
                    </>
                  )}
                </svg>
                {label}
              </div>
            ))}
          </div>
        </aside>
        <div className="flex-1 min-w-0 p-3">
          <div className="flex items-center justify-between mb-2.5">
            <h2 className="text-[11px] font-semibold text-foreground">Triggers</h2>
            <div className="relative">
              <svg className="absolute left-2 top-1/2 -translate-y-1/2 text-muted" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <div className="w-32 h-7 rounded-[4px] bg-[#181818] border border-[#2a2a2a] text-[10px] text-[#666] pl-7 pr-2.5 flex items-center select-none">
                Search...
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            {categories.map((cat) => {
              const isOpen = open[cat.name];
              return (
                <div key={cat.name} className="rounded-[6px] border border-[#2a2a2a] bg-[#1a1a1a] overflow-hidden">
                  <button
                    onClick={() => setOpen((prev) => ({ ...prev, [cat.name]: !prev[cat.name] }))}
                    className="flex items-center gap-1.5 w-full px-2.5 py-1.5 bg-[#252525] cursor-pointer hover:bg-[#2a2a2a] transition-colors"
                  >
                    <svg
                      width="9"
                      height="9"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`text-muted shrink-0 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted shrink-0">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                    <span className="flex-1 text-left text-[11px] font-semibold text-[#f5f5f5]">{cat.name}</span>
                    <span className="text-[10px] font-semibold text-[#8b5cf6] bg-[rgba(139,92,246,0.12)] px-1.5 py-0.5 rounded-full">{cat.count}</span>
                  </button>
                  <div
                    className={`grid transition-all duration-200 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-50"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="p-2 space-y-1.5">
                        {cat.triggers.map((tr) => (
                          <div key={tr.abbr} className="rounded-[8px] border border-[#2a2a2a] bg-[#1a1a1a] p-2 hover:border-[#a0a0a0] transition-colors">
                            <span className="text-[11px] font-semibold font-mono text-[#8b5cf6] bg-[rgba(139,92,246,0.12)] px-1.5 py-0.5 rounded">{tr.abbr}</span>
                            <div className="text-[11px] text-[#a0a0a0] font-mono mt-1">{tr.label}</div>
                            <div className="text-[11px] text-[#a0a0a0] font-mono mt-0.5 whitespace-pre-wrap break-words">{tr.val}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PackagesMockup() {
  const pkgs = [
    {
      name: "Date & Time",
      desc: "Current date/time shortcuts and formatting",
      count: "42 triggers",
      version: "1.0.0",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-400">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
    {
      name: "Code Snippets",
      desc: "Developer shortcuts for common code patterns",
      count: "95 triggers",
      version: "1.0.0",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-400">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      name: "Emojis",
      desc: "Type :emoji: anywhere to expand into unicode emojis",
      count: "320 triggers",
      version: "1.0.0",
      twemoji: "1f60a",
      icon: null,
    },
    {
      name: "Currency & Money",
      desc: "Currency symbols, amounts, and financial abbreviations",
      count: "68 triggers",
      version: "1.0.0",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-400">
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 6v2M12 16v2" />
        </svg>
      ),
    },
    {
      name: "Lorem Ipsum",
      desc: "Placeholder text and developer templates",
      count: "65 triggers",
      version: "1.0.0",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-violet-400">
          <path d="M17 6.1H3" /><path d="M21 12.1H3" /><path d="M15.1 18H3" />
        </svg>
      ),
    },
    {
      name: "Symbols & Shortcuts",
      desc: "Arrows, math symbols, fractions, and abbreviations",
      count: "140 triggers",
      version: "1.0.0",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-400">
          <polyline points="4 7 4 4 20 4 20 7" />
          <line x1="9" y1="20" x2="15" y2="20" />
          <line x1="12" y1="4" x2="12" y2="20" />
        </svg>
      ),
    },
    {
      name: "Units & Measurements",
      desc: "Measurement units, conversions, and scientific notation",
      count: "120 triggers",
      version: "1.0.0",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400">
          <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
        </svg>
      ),
    },
  ];

  return (
    <div className="mockup-window w-full max-w-2xl mx-auto">
      <aside className="flex items-center gap-2 px-3 py-3 border-b border-border bg-background/30">
        <LogoIcon size={16} />
        <span className="text-xs font-semibold tracking-tight text-foreground">trigr</span>
        <span className="text-[11px] text-muted font-mono tracking-tight ml-auto">Package Browser</span>
      </aside>
      <div className="p-4">
        <div className="relative mb-3">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
          </svg>
          <div className="w-full h-8 rounded-lg bg-[#181818] border border-[#2a2a2a] text-xs text-[#666] pl-9 pr-3 flex items-center select-none">
            Search packages...
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2.5">
          {pkgs.slice(0, 6).map((pkg) => (
            <div
              key={pkg.name}
              className="group rounded-xl border border-[#2a2a2a] bg-background/20 p-3.5 hover:border-accent/25 hover:bg-card/30 transition-all duration-200"
            >
              <div className="flex items-start gap-2.5">
                <div className="size-8 rounded-lg bg-background/40 border border-border flex items-center justify-center shrink-0 overflow-hidden">
                  {pkg.twemoji ? (
                    <img src={TWEMOJI(pkg.twemoji)} alt="" className="size-5" crossOrigin="anonymous" />
                  ) : pkg.icon ? (
                    pkg.icon
                  ) : (
                    <span className="size-2.5 rounded-full bg-yellow-500" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-sm font-medium truncate">{pkg.name}</span>
                    <span className="text-[9px] text-muted/50 font-mono border border-border px-1 rounded shrink-0">v{pkg.version}</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed line-clamp-2">{pkg.desc}</p>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2.5">
                <span className="text-[10px] text-muted/60">{pkg.count}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted/40 group-hover:text-muted transition-colors">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
