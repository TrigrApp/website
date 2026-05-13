---
title: Global Variables
description: Create reusable Trill expressions accessible from any trigger.
---

## Overview

Global variables let you define Trill expressions once and reuse them across all your triggers using the `{{varname}}` syntax.

## Creating a Variable

1. Open the Trigger Manager
2. Navigate to the **Variables** tab
3. Click **Add Variable**
4. Set the **Name** (e.g., `fullname`)
5. Set the **Expression** (a Trill expression, e.g., `"John Doe"`)
6. Click **Save**

## Using Variables

Reference variables in any trigger replacement:

```text
Abbreviation: ;;sig
Replacement: Best regards,\n{{fullname}}
```

Variables can contain any Trill expression:

| Name | Expression | Result |
|---|---|---|
| `fullname` | `"John Doe"` | John Doe |
| `email` | `"john@example.com"` | john@example.com |
| `date_today` | `today("%m/%d/%Y")` | 05/13/2026 |
| `hour_12` | `to_num(now("%H")) % 12 \|\| 12` | 2 |

## Variable Resolution Order

When a trigger replacement is expanded, variables are resolved in this order:

1. **Global variables** are evaluated first (they can reference each other by name)
2. **Trigger-level variables** are evaluated next (can reference globals)
3. **Built-in variables** (`{{date}}`, `{{time}}`, etc.) are resolved
4. **Trill expressions** (`{{...}}`) in the replacement text are evaluated last

This means a global variable can contain a Trill expression `{{today("%B")}}` that gets evaluated when the variable is used.

## Use Cases

- Store your name, email, or contact info once
- Define reusable formatting logic
- Keep consistent snippets across triggers
- Update a value in one place and all triggers reflect the change
