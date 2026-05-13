---
title: Trill Scripting
description: Learn the Trill scripting language syntax, data types, operators, and control flow.
---

## What is Trill?

Trill is trigr's built-in expression-oriented scripting language. Everything in Trill is an expression — every construct produces a value. Use it inside trigger replacements with `{{expression}}` syntax.

```text
{{upper("hello")}}
{{if 5 > 3 then "yes" else "no"}}
```

## Literals

```trill
42          // integer
-3.14       // floating-point
"hello"     // string
true        // boolean
false
nil         // null value
```

Strings support escape sequences: `\n` (newline), `\t` (tab), `\"` (double quote), `\\` (backslash).

Character literals use single quotes: `'a'`, `'\n'`.

## Comments

```trill
// line comment

/* block comment
   spanning multiple lines */
```

## Variables

`let` binds a name to a value within the following expression:

```trill
let name = "Juliette"
let age = 17
name
```

The semicolon after the value is optional. The binding is scoped to the body expression only.

Assignment (`=`) creates a new let binding (shadows, does not mutate):

```trill
let x = 5
x = x + 1    // same as: let x = x + 1; x
```

## Data Types

| Type | Examples | Notes |
|------|----------|-------|
| `Num` | `42`, `3.14`, `-1` | All floating-point internally |
| `Str` | `"hello"`, `"42"` | Double-quoted with escapes |
| `Bool` | `true`, `false` | |
| `Nil` | `nil` | Null / absence of value |
| `List` | `[1, 2, 3]` | Heterogeneous, zero-indexed {:info negative indices wrap around:} |
| `Map` | `{name: "Sal", age: 20}` | Key-value objects |

### Truthiness

| Value | Truthy? |
|-------|---------|
| `Bool(true)` | Yes |
| `Bool(false)` | No |
| `Num` (non-zero) | Yes |
| `Num(0)` | No |
| `Str` (non-empty) | Yes |
| `Str("")` | No |
| `Nil` | No |
| `List` (any) | Yes |
| `Map` (any) | Yes |

### Type Coercion

- `Num + Str` / `Str + any` → string concatenation: `"Count: " + 42` → `"Count: 42"`
- `Nil` converts to empty string `""` when used as text
- Numbers display as integers when whole and under 10¹⁵

## Operators

### Arithmetic

```trill
1 + 2       // → 3
10 - 4      // → 6
3 * 4       // → 12
10 / 3      // → 3.333...
10 % 3      // → 1
```

### Comparison

```trill
1 == 1      // true
2 != 1      // true
3 > 1       // true
1 < 3       // true
3 >= 3      // true
3 <= 4      // true
```

### Logical

```trill
true and false    // false
true or false     // true
not true          // false
```

### Unary (`-`, `not`)

```trill
-5           // negate a number
not true     // logical NOT
```

### Operator Precedence

Expressions are evaluated in a specific order. Higher-precedence operators bind tighter.

| Level | Operators | Associativity |
|-------|-----------|---------------|
| 1 (tightest) | `-` `not` (prefix) | right-to-left |
| 2 | `*` `/` `%` | left-to-right |
| 3 | `+` `-` | left-to-right |
| 4 | `<` `>` `<=` `>=` | left-to-right |
| 5 | `==` `!=` | left-to-right |
| 6 | `and` | left-to-right |
| 7 | `or` | left-to-right |
| 8 | `=` (assignment) | right-to-left |
| 9 | `match … { … }` | — |
| 10 | `if … then … else …` | — |
| 11 (loosest) | `\|` (pipe) | left-to-right |

When in doubt, use parentheses — they override precedence:

```trill
5 + 3 * 2       // → 11  (multiply first)
(5 + 3) * 2     // → 16  (parens force addition first)
```

## If Expressions

`if` always produces a value:

```trill
if 5 > 3 then "yes" else "no"
// → "yes"
```

Chain with `else if`:

```trill
let score = 85
if score > 90 then
  "A"
else if score > 80 then
  "B"
else
  "C"
```

Without `else`, a false condition returns `nil`.

## Match Expressions

Match a value against literal patterns:

```trill
let status = "success"
match status {
  "success" => "green",
  "warning" => "yellow",
  "error" => "red",
  _ => "gray"
}
// → "green"
```

Patterns must be literals (numbers, strings, booleans, or `nil`). The `_` wildcard acts as a catch-all default.

## Lists

```trill
[1, 2, 3]
["a", "b", "c"]
[1, "hello", true]    // mixed types
```

Access by index — negative indices wrap from the end:

```trill
let nums = [10, 20, 30]
nums[0]         // 10
nums[1]         // 20
nums[-1]        // 30 (last)
nums[-2]        // 20 (second-to-last)
```

## Objects

```trill
{
  name: "Sal",
  age: 20
}
```

Access fields with dot notation or bracket indexing:

```trill
let user = { name: "Sal", age: 20 }
user.name            // "Sal"
user["name"]         // "Sal"
```

Nested access:

```trill
let data = { profile: { username: "sal" } }
data.profile.username   // "sal"
```

Bracket indexing also works on strings and lists:

```trill
"hello"[0]    // "h"
```

## Pipe Operator

The pipe `|` threads a value into a function call as the first argument:

```trill
"  hello  " | trim | upper
// → "HELLO"
```

This is equivalent to `upper(trim("  hello  "))`.

## Function Calls

Call built-in functions with standard syntax:

```trill
upper("hello")                    // "HELLO"
len("hello")                      // 5
replace("hi there", "hi", "hello")  // "hello there"
```

See the [Function Reference](/docs/trill-functions) for the complete list of all built-in functions.

## Template Variables

In trigger replacements, these built-in variables are always available:

`{{date}}` `{{time}}` `{{datetime}}` `{{year}}` `{{month}}` `{{day}}`
`{{hour}}` `{{minute}}` `{{second}}` `{{weekday}}` `{{shortdate}}`

## Trigger Arguments

With argument mode enabled, typed arguments are available as a list:

```trill
args[0]              // first argument
args[-1]             // last argument
join(args, " ")      // combine all arguments
choice(args)         // pick random argument
```

Individual args are also available as `_arg_0`, `_arg_1`, etc., and `_args_len` holds the count.

## Limitations

- **Lambdas** (`fn a, b -> expr`) — parsed but not yet callable at runtime
- **For loops** (`for x in list body`) — parsed but not evaluated (returns `nil`)
- **`return`** — parsed but has no effect

These are reserved for future versions of Trill.

## Next Steps

- Browse the [Function Reference](/docs/trill-functions) for all available built-in functions
- Learn about [Global Variables](/docs/global-variables) to reuse expressions across triggers
