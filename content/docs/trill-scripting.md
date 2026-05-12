---
title: Trill Scripting
description: A custom expression-oriented scripting language for dynamic text generation.
---

## What is Trill?

Trill is trigr's built-in expression-oriented scripting language. Everything in Trill is an expression — every construct produces a value. This makes it ideal for composing dynamic text transformations, data pipelines, and conditional output.

## Literals

Trill supports four primitive literal types:

```trill
42          // number (integer or floating-point)
3.14
"hello"     // string (double-quoted, with escape sequences)
true        // boolean
false
nil         // null / absence of value
```

Strings support escape sequences: `\n` (newline), `\t` (tab), `\"` (double quote), `\\` (backslash).

## Variables

Bind values to names with `let`. The binding is scoped to the expression that follows:

```trill
let name = "Juliette"
let age = 17
name
```

Assignment (`=`) desugars to a `let`:

```trill
let x = 5
x = x + 1   // equivalent to: let x = x + 1 in x
x
```

## Operators

Standard precedence applies: `not`/negate → `*` `/` `%` → `+` `-` → `<` `<=` `>` `>=` → `==` `!=` → `and` → `or`.

```trill
1 + 2 * 3        // 7 (multiplication first)
10 / 2            // 5
100 % 30          // 10
5 > 3             // true
"Hello, " + "World!"   // string concatenation
true and false    // false
not (5 > 10)      // true
```

The `+` operator works for both numeric addition and string concatenation, inferring the operation from operand types.

## If Expressions

`if` is an expression — it always produces a value:

```trill
if 5 > 3 then "yes" else "no"
```

Chain multiple conditions with `else if`:

```trill
let score = 85
if score > 90 then
  "A"
else if score > 80 then
  "B"
else
  "C"
```

Without an `else` branch, a false condition evaluates to `nil`.

## Arrays

Arrays are ordered, zero-indexed collections:

```trill
[1, 2, 3]
["a", "b", "c"]
```

Access elements by index. Negative indices wrap around (`-1` is the last element):

```trill
let nums = [10, 20, 30]
nums[0]         // 10
nums[-1]        // 30
```

## Objects

Objects group values under named keys:

```trill
{
  name: "Sal",
  age: 20
}
```

Access fields with dot notation:

```trill
let user = { name: "Sal", age: 20 }
user.name       // "Sal"
```

Nested access chains arbitrarily:

```trill
let data = { profile: { username: "sal" } }
data.profile.username   // "sal"
```

## Function Calls

Call built-in functions with standard syntax. All functions return values:

```trill
upper("hello")                   // "HELLO"
len("hello")                     // 5
split("a,b,c", ",")              // ["a", "b", "c"]
round(3.7)                       // 4
rand(1, 100)                     // random integer
sort([3, 1, 2])                  // [1, 2, 3]
now("%Y-%m-%d")                  // current date/time
today("%B %d, %Y")               // current date
```

### String Functions

| Function | Description |
|---|---|
| `upper(text)` | Convert to uppercase |
| `lower(text)` | Convert to lowercase |
| `trim(text)` | Remove leading/trailing whitespace |
| `trim_start(text)` | Remove leading whitespace |
| `trim_end(text)` | Remove trailing whitespace |
| `len(text)` | Character count or list length |
| `repeat(text, n)` | Repeat string n times |
| `replace(text, from, to)` | Replace all occurrences |
| `slice(text, start, end)` | Extract substring range |
| `substr(text, start, len)` | Extract substring by length |
| `split(text, delim)` | Split into list |
| `contains(text, sub)` | Check if contains substring |
| `starts_with(text, prefix)` | Check prefix |
| `ends_with(text, suffix)` | Check suffix |
| `reverse(text)` | Reverse string |
| `title(text)` | Title case |
| `pad_start(text, len, ch)` | Pad left with character |
| `pad_end(text, len, ch)` | Pad right with character |
| `concat(a, b, ...)` | Concatenate values |

### Date/Time Functions

| Function | Description |
|---|---|
| `now(fmt)` | Current date/time with strftime format |
| `today(fmt)` | Current date with strftime format |
| `date_add(date, days)` | Add/subtract days from date |
| `date_format(date, fmt)` | Reformat date string |

### Date/Time Format Specifiers

| Specifier | Meaning | Example |
|---|---|---|
| `%Y` | 4-digit year | 2026 |
| `%y` | 2-digit year | 26 |
| `%m` | Zero-padded month | 05 |
| `%B` | Full month name | May |
| `%b` | Abbreviated month | May |
| `%d` | Zero-padded day | 12 |
| `%A` | Full weekday name | Tuesday |
| `%a` | Abbreviated weekday | Tue |
| `%H` | 24-hour (zero-padded) | 14 |
| `%I` | 12-hour (zero-padded) | 02 |
| `%M` | Minutes | 30 |
| `%S` | Seconds | 00 |

### Math Functions

| Function | Description |
|---|---|
| `rand(lo, hi)` | Random integer in range |
| `rand()` | Random float 0-1 |
| `choice(items)` | Pick random element from list |
| `to_num(text)` | Convert string to number |
| `floor(n)` | Round down |
| `ceil(n)` | Round up |
| `round(n)` | Round to nearest |
| `abs(n)` | Absolute value |
| `min(a, b, ...)` | Minimum value |
| `max(a, b, ...)` | Maximum value |
| `clamp(val, lo, hi)` | Clamp value to range |

### List Functions

| Function | Description |
|---|---|
| `len(list)` | Get list length |
| `join(list, sep)` | Join list into string |
| `join_list(list, sep)` | Join list with separator |
| `first(list)` | First element |
| `last(list)` | Last element |
| `sort(list)` | Sort list ascending |
| `map(list, fn)` | Transform each element |
| `filter(list, fn)` | Keep elements where fn is true |

## Lambdas

Anonymous functions created with `=>` arrow syntax:

```trill
x => x * 2                              // single parameter
(a, b) => a + b                         // multiple parameters
```

Use lambdas with higher-order functions:

```trill
[1, 2, 3] | map(x => x * 2)            // [2, 4, 6]
[1, 2, 3, 4, 5] | filter(x => x > 2)   // [3, 4, 5]
```

## Pipes

The pipe operator (`|`) threads a value through a function call, passing it as the first argument:

```trill
5 | to_str | upper                       // "5" then "5"
[1, 2, 3] | filter(x => x > 1) | map(x => x * 10) | join_list(", ")
```

Each step receives the result of the previous step. Pipes compose naturally with lambdas.

## Pattern Matching

`match` tests a value against multiple patterns:

```trill
let status = "success"
match status {
  "success" => "green",
  "warning" => "yellow",
  "error" => "red",
  _ => "gray"
}
```

Patterns are literal values (numbers, strings, booleans, or nil). The underscore (`_`) acts as a catch-all default.

## Arguments

Triggers with args mode enabled pass typed arguments as the `args` list:

```trill
args[0]                                 // first argument
choice(args)                            // random argument
join(args, " ")                         // combine all arguments
```

## Examples

### Time-based greeting

```trill
let hour = to_num(now("%H"))
if hour < 12 then
  "Good morning"
else if hour < 18 then
  "Good afternoon"
else
  "Good evening"
```

### Date formatting

```trill
today("%B %d, %Y")
```

### Data pipeline

```trill
[1, 2, 3, 4, 5]
| filter(x => x > 2)
| map(x => x * 10)
| join_list(", ")
```

### Pattern match

```trill
let color = match 2 {
  1 => "red",
  2 => "blue",
  3 => "green",
  _ => "unknown"
}
"Selected: " + color
```
