export interface PackageItem {
  slug: string;
  id: string;
  name: string;
  description: string;
  longDescription: string;
  version: string;
  icon: string;
  color: string;
  triggers: number;
  author: string;
  triggersList: {
    abbreviation: string;
    replacement: string;
    description: string;
  }[];
}

export const packages: PackageItem[] = [
  {
    slug: "dates",
    id: "dates",
    name: "Date & Time",
    description: "Current date/time shortcuts and formatting",
    longDescription:
      "Quick date and time formatters. ISO dates, US/EU formats, timezone abbreviations, and relative time shortcuts.",
    version: "1.0.0",
    icon: "calendar",
    color: "amber",
    triggers: 42,
    author: "trigr",
    triggersList: [
      {
        abbreviation: "today-short",
        replacement: "TODAY",
        description: "Short date",
      },
      {
        abbreviation: "now-short",
        replacement: "NOW",
        description: "Current time",
      },
      {
        abbreviation: "time-12",
        replacement: "HH:MM AM",
        description: "12-hour time",
      },
      {
        abbreviation: "time-24",
        replacement: "HH:MM",
        description: "24-hour time",
      },
      {
        abbreviation: "iso-date",
        replacement: "YYYY-MM-DD",
        description: "ISO date format",
      },
      {
        abbreviation: "us-date",
        replacement: "MM/DD/YYYY",
        description: "US date format",
      },
      {
        abbreviation: "eu-date",
        replacement: "DD/MM/YYYY",
        description: "European date format",
      },
      {
        abbreviation: "timestamp",
        replacement: "Unix timestamp",
        description: "Unix timestamp",
      },
      {
        abbreviation: "expire",
        replacement: "Expires: ",
        description: "Expiration label",
      },
      {
        abbreviation: "deadline",
        replacement: "Due: ",
        description: "Deadline label",
      },
    ],
  },
  {
    slug: "code-snippets",
    id: "code-snippets",
    name: "Code Snippets",
    description: "Developer shortcuts for common code patterns",
    longDescription:
      "Essential code patterns for TypeScript, JavaScript, Python, Rust, and more. Includes function templates, console patterns, React boilerplate, and git commands.",
    version: "1.0.0",
    icon: "code",
    color: "blue",
    triggers: 95,
    author: "trigr",
    triggersList: [
      {
        abbreviation: "fn",
        replacement: "function () {\n  ",
        description: "Function declaration",
      },
      {
        abbreviation: "afn",
        replacement: "const name = () => {\n  ",
        description: "Arrow function",
      },
      {
        abbreviation: "cl",
        replacement: "console.log(",
        description: "Console log shortcut",
      },
      {
        abbreviation: "if",
        replacement: "if () {\n  ",
        description: "If statement",
      },
      {
        abbreviation: "for",
        replacement: "for (let i = 0; i < .length; i++) {\n  ",
        description: "For loop",
      },
      {
        abbreviation: "map",
        replacement: ".map(item => {\n  ",
        description: "Array map",
      },
      {
        abbreviation: "trycatch",
        replacement: "try {\n  \n} catch (error) {\n  \n}",
        description: "Try-catch block",
      },
      {
        abbreviation: "import",
        replacement: "import ",
        description: "Import statement",
      },
      {
        abbreviation: "export",
        replacement: "export ",
        description: "Export statement",
      },
      {
        abbreviation: "rfc",
        replacement:
          "import React from 'react';\n\nexport default function () {\n  \n}",
        description: "React function component",
      },
    ],
  },
  {
    slug: "emojis",
    id: "emojis",
    name: "Emojis",
    description: "Type :emoji: anywhere to expand into unicode emojis",
    longDescription:
      "Hundreds of emoji shortcuts. Type :smile:, :rocket:, :fire:, and hundreds more to insert the actual unicode emoji character.",
    version: "1.0.0",
    icon: "smile",
    color: "yellow",
    triggers: 320,
    author: "trigr",
    triggersList: [
      { abbreviation: ":skull:", replacement: "💀", description: "Skull" },
      { abbreviation: ":heart:", replacement: "❤️", description: "Red heart" },
      { abbreviation: ":fire:", replacement: "🔥", description: "Fire" },
      { abbreviation: ":star:", replacement: "⭐", description: "Star" },
      { abbreviation: ":rocket:", replacement: "🚀", description: "Rocket" },
      {
        abbreviation: ":smile:",
        replacement: "😊",
        description: "Smiling face",
      },
      {
        abbreviation: ":thumbs_up:",
        replacement: "👍",
        description: "Thumbs up",
      },
      { abbreviation: ":clap:", replacement: "👏", description: "Clapping" },
      { abbreviation: ":100:", replacement: "💯", description: "One hundred" },
      { abbreviation: ":tada:", replacement: "🎉", description: "Celebration" },
    ],
  },
  {
    slug: "currency",
    id: "currency",
    name: "Currency & Money",
    description: "Currency symbols, amounts, and financial abbreviations",
    longDescription:
      "Currency symbols (USD, EUR, GBP, JPY), financial abbreviations (net terms, tax labels), and quick money formatting for invoices and accounting.",
    version: "1.0.0",
    icon: "dollar",
    color: "green",
    triggers: 68,
    author: "trigr",
    triggersList: [
      { abbreviation: "usd", replacement: "$", description: "US Dollar sign" },
      { abbreviation: "eur", replacement: "€", description: "Euro sign" },
      { abbreviation: "gbp", replacement: "£", description: "Pound sign" },
      { abbreviation: "jpy", replacement: "¥", description: "Yen sign" },
      { abbreviation: "bitcoin", replacement: "₿", description: "Bitcoin" },
      {
        abbreviation: "invoice",
        replacement: "Invoice #",
        description: "Invoice prefix",
      },
      {
        abbreviation: "net-30",
        replacement: "Net 30",
        description: "Net 30 payment terms",
      },
      {
        abbreviation: "total",
        replacement: "Total: $",
        description: "Total label",
      },
      { abbreviation: "tax", replacement: "Tax: ", description: "Tax label" },
      { abbreviation: "paid", replacement: "PAID", description: "Paid status" },
    ],
  },
  {
    slug: "lorem",
    id: "lorem",
    name: "Lorem Ipsum",
    description: "Placeholder text and developer templates",
    longDescription:
      "Lorem Ipsum generators at various lengths, plus useful typographic symbols, list templates, doc blocks, and email templates.",
    version: "1.0.0",
    icon: "text",
    color: "violet",
    triggers: 65,
    author: "trigr",
    triggersList: [
      {
        abbreviation: "lorem",
        replacement: "Lorem ipsum dolor sit amet...",
        description: "One sentence",
      },
      {
        abbreviation: "lorems",
        replacement: "Lorem ipsum dolor sit amet... (3 sentences)",
        description: "Short paragraph",
      },
      {
        abbreviation: "loremfull",
        replacement: "Lorem ipsum dolor sit amet... (full classic passage)",
        description: "Full paragraph",
      },
      {
        abbreviation: "bullet",
        replacement: "• ",
        description: "Bullet point",
      },
      {
        abbreviation: "todo",
        replacement: "- [ ] ",
        description: "Todo checkbox",
      },
      {
        abbreviation: "doc-block",
        replacement: "/**\n * Description\n * @param {type} name\n */",
        description: "JSDoc block",
      },
      {
        abbreviation: "signature",
        replacement: "Best regards,\n[Your Name]",
        description: "Email signature",
      },
      { abbreviation: "emdash", replacement: "— ", description: "Em dash" },
      {
        abbreviation: "sentence",
        replacement: "The quick brown fox jumps over the lazy dog.",
        description: "Pangram",
      },
      {
        abbreviation: "alpha",
        replacement: "αβγδεζηθικλμνξοπρστυφχψω",
        description: "Greek alphabet",
      },
    ],
  },
  {
    slug: "symbols",
    id: "symbols",
    name: "Symbols & Shortcuts",
    description: "Arrows, math symbols, fractions, and common abbreviations",
    longDescription:
      "Mathematical symbols (arrows, operators, comparison), fractions, common abbreviations, and text shortcuts for everyday communication.",
    version: "1.0.0",
    icon: "type",
    color: "pink",
    triggers: 140,
    author: "trigr",
    triggersList: [
      { abbreviation: "->", replacement: " → ", description: "Right arrow" },
      { abbreviation: "<-", replacement: " ← ", description: "Left arrow" },
      {
        abbreviation: "=>",
        replacement: " ⇒ ",
        description: "Implies/surround",
      },
      {
        abbreviation: "<=",
        replacement: " ≤ ",
        description: "Less than or equal",
      },
      {
        abbreviation: ">=",
        replacement: " ≥ ",
        description: "Greater than or equal",
      },
      { abbreviation: "!=", replacement: " ≠ ", description: "Not equal" },
      { abbreviation: "inf", replacement: "∞", description: "Infinity" },
      { abbreviation: "+-", replacement: "±", description: "Plus-minus" },
      { abbreviation: "deg", replacement: "°", description: "Degree symbol" },
      { abbreviation: "frac12", replacement: "½", description: "One half" },
      {
        abbreviation: "asap",
        replacement: "ASAP",
        description: "As soon as possible",
      },
      {
        abbreviation: "fyi",
        replacement: "FYI",
        description: "For your information",
      },
      { abbreviation: "imo", replacement: "IMO", description: "In my opinion" },
      { abbreviation: "b/c", replacement: "because", description: "Because" },
      { abbreviation: "...", replacement: "…", description: "Ellipsis" },
    ],
  },
  {
    slug: "units",
    id: "units",
    name: "Units & Measurements",
    description: "Measurement units, conversions, and scientific notation",
    longDescription:
      "Comprehensive measurement units across length, area, volume, mass, time, temperature, data, speed, pressure, energy, and electrical units.",
    version: "1.0.0",
    icon: "ruler",
    color: "cyan",
    triggers: 120,
    author: "trigr",
    triggersList: [
      { abbreviation: "mm", replacement: "mm", description: "Millimeter" },
      { abbreviation: "kg", replacement: "kg", description: "Kilogram" },
      { abbreviation: "km", replacement: "km", description: "Kilometer" },
      {
        abbreviation: "mph",
        replacement: "mph",
        description: "Miles per hour",
      },
      { abbreviation: "celsius", replacement: "°C", description: "Celsius" },
      {
        abbreviation: "fahrenheit",
        replacement: "°F",
        description: "Fahrenheit",
      },
      { abbreviation: "MB", replacement: "MB", description: "Megabyte" },
      { abbreviation: "GB", replacement: "GB", description: "Gigabyte" },
      { abbreviation: "watt", replacement: "W", description: "Watt" },
      { abbreviation: "percent", replacement: "%", description: "Percent" },
    ],
  },
];
