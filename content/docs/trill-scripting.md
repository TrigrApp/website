---
title: Trill Scripting
description: A custom scripting language for dynamic text generation.
---

## What is Trill?

Trill is trigr's built-in scripting language. It lets you create dynamic, context-aware text replacements using variables, conditions, and built-in functions.

## Syntax Overview

### Variables

```trill
let name = "World"
let count = 42
return "Hello, " + name
```

### Arguments
Access arguments passed after the abbreviation:

```trill
let name = args[0]
let greeting = "Hello, " + name
return greeting
```

### Conditionals

```trill
let hour = datetime("H")
if hour < 12 {
  return "Good morning"
} else if hour < 18 {
  return "Good afternoon"
} else {
  return "Good evening"
}
```

## Built-in Functions

Trill provides built-in functions for common tasks:

- **String manipulation** — transforming, extracting, and combining text
- **Date/time formatting** — outputting dates and times in various formats
- **Conditional logic** — branching expressions based on context

### Date/Time Format Specifiers

| Specifier | Meaning | Example |
|---|---|---|
| `YYYY` | 4-digit year | 2026 |
| `YY` | 2-digit year | 26 |
| `MM` | Zero-padded month | 05 |
| `M` | Month (no padding) | 5 |
| `DD` | Zero-padded day | 12 |
| `D` | Day (no padding) | 12 |
| `HH` | 24-hour (zero-padded) | 14 |
| `hh` | 12-hour (zero-padded) | 02 |
| `mm` | Minutes | 30 |
| `ss` | Seconds | 00 |

## Examples

### Email Signature with Date

```trill
let dateStr = date("MM/DD/YYYY")
return "Best regards,\nJohn Doe\n" + dateStr
```

### Conditional Greeting

```trill
let name = args[0]
let hour = datetime("H")
let greeting = ""

if hour < 12 {
  greeting = "Good morning"
} else if hour < 17 {
  greeting = "Good afternoon"
} else {
  greeting = "Good evening"
}

return greeting + ", " + name + "!"
```
