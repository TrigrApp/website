---
title: Triggers
description: Create, manage, and organize your text expansion shortcuts.
---

## Overview

Triggers are the core of trigr. Each trigger has an abbreviation (the shortcut you type) and a replacement (the text it expands to).

## Creating a Trigger

1. Click **Add Trigger** in the Trigger Manager
2. Fill in the fields:
   - **Abbreviation**: The shortcut text (e.g., `;;sig`)
   - **Replacement**: The text to expand to
   - **Category**: Optional grouping (e.g., "Email", "Code")
   - **Argument Mode**: Toggle to enable argument parsing
3. Click **Save**

## Trigger Modes

### Plain Text
The simplest mode. Type the abbreviation and it's replaced verbatim.

### Argument Mode
When enabled, you can pass arguments after the abbreviation. For example:

```text
Abbreviation: ;;email
Replacement: My email is {{name}}@example.com
Type: ;;email john → "My email is john@example.com"
```

### Trill Script
Use the full power of Trill to generate dynamic text. See [Trill Scripting](/docs/trill-scripting) for details.

## Managing Triggers

- **Search**: Use the search bar to filter triggers
- **Toggle**: Disable individual triggers without deleting them
- **Categories**: Organize triggers into custom categories
- **Export/Import**: Backup your triggers to a JSON file

## Best Practices

- Use a consistent prefix like `;;` to avoid accidental expansions
- Group related triggers into categories
- Test new triggers before relying on them
- Use Trill scripting for dynamic or conditional content
