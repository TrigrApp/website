---
title: Global Variables
description: Create reusable expressions accessible from any trigger.
---

## Overview

Global variables let you define Trill expressions once and reuse them across all your triggers using the `{{varname}}` syntax.

## Creating a Variable

1. Open the Trigger Manager
2. Navigate to the **Variables** tab
3. Click **Add Variable**
4. Set the **Name** (e.g., `fullname`)
5. Set the **Expression** (e.g., `"John Doe"`)
6. Click **Save**

## Using Variables

Reference variables in any trigger replacement:

```text
Abbreviation: ;;sig
Replacement: Best regards,\n{{fullname}}
```

Variables can contain Trill expressions:

| Name | Expression | Result |
|---|---|---|
| `fullname` | `"John Doe"` | John Doe |
| `email` | `"john@example.com"` | john@example.com |
| `date_today` | `date("MM/DD/YYYY")` | 05/12/2026 |
| `greeting` | `datetime("H") < 12 ? "Morning" : "Afternoon"` | Morning/Afternoon |

## Use Cases

- Store your name, email, or contact info once
- Define reusable formatting logic
- Keep consistent snippets across triggers
- Update a value in one place and all triggers reflect the change
