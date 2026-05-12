export const siteName = "trigr";
export const siteUrl = "https://trigr.pancake.wtf";

export const docMeta: Record<string, { title: string; description: string }> = {
  "getting-started": {
    title: "Getting Started",
    description: "Download, install, and set up trigr on your Windows machine.",
  },
  triggers: {
    title: "Triggers",
    description: "Create, manage, and organize your text expansion shortcuts.",
  },
  "trill-scripting": {
    title: "Trill Scripting",
    description: "A custom scripting language for dynamic text generation.",
  },
  "global-variables": {
    title: "Global Variables",
    description: "Create reusable expressions accessible from any trigger.",
  },
  "export-import": {
    title: "Export & Import",
    description: "Backup and restore your triggers, variables, and settings.",
  },
  packages: {
    title: "Packages",
    description:
      "Browse and install pre-built trigger packages with one click.",
  },
  customization: {
    title: "Customization",
    description: "Theme colors, ender character, and other settings.",
  },
};

export const packageMeta: Record<
  string,
  { title: string; description: string }
> = {
  dates: {
    title: "Date & Time Package",
    description: "Current date/time shortcuts and formatting. 42 triggers.",
  },
  "code-snippets": {
    title: "Code Snippets Package",
    description: "Developer shortcuts for common code patterns. 95 triggers.",
  },
  emojis: {
    title: "Emojis Package",
    description:
      "Type :emoji: anywhere to expand into unicode emojis. 320 triggers.",
  },
  currency: {
    title: "Currency & Money Package",
    description:
      "Currency symbols, amounts, and financial abbreviations. 68 triggers.",
  },
  lorem: {
    title: "Lorem Ipsum Package",
    description: "Placeholder text and developer templates. 65 triggers.",
  },
  symbols: {
    title: "Symbols & Shortcuts Package",
    description:
      "Arrows, math symbols, fractions, and common abbreviations. 140 triggers.",
  },
  units: {
    title: "Units & Measurements Package",
    description:
      "Measurement units, conversions, and scientific notation. 120 triggers.",
  },
};
