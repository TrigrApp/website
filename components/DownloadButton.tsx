"use client";

import { useEffect, useState } from "react";

type OsInfo = {
  os: string;
  label: string;
  available: boolean;
};

function detectOs(): OsInfo {
  const ua = navigator.userAgent;
  if (ua.includes("Windows")) return { os: "windows", label: "Download for Windows", available: true };
  if (ua.includes("Mac")) return { os: "mac", label: "Coming soon for Mac", available: false };
  if (ua.includes("Linux")) return { os: "linux", label: "Coming soon for Linux", available: false };
  if (ua.includes("Android")) return { os: "android", label: "Coming soon for Android", available: false };
  if (/iPad|iPhone|iPod/.test(ua)) return { os: "ios", label: "Coming soon for iOS", available: false };
  return { os: "unknown", label: "Coming soon", available: false };
}

export function DownloadButton() {
  const [info, setInfo] = useState<OsInfo | null>(null);

  useEffect(() => {
    setInfo(detectOs());
  }, []);

  if (!info) {
    return (
      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent/50 text-white/50 text-sm font-medium animate-pulse">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
        Detecting...
      </div>
    );
  }

  if (info.available) {
    return (
      <a
        href="/downloads/trigr_0.1.1_x64-setup.exe"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-all glow-accent-strong"
        download
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
        {info.label}
      </a>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-sm text-muted font-medium cursor-default">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
      {info.label}
    </div>
  );
}
