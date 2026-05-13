---
title: Function Reference
description: Complete reference of all built-in Trill functions — string, number, list, date, and utility functions.
---

## String Functions

### `upper(text)` → string
Convert all characters to uppercase.

```trill
upper("hello")    // "HELLO"
```

### `lower(text)` → string
Convert all characters to lowercase.

```trill
lower("HELLO")    // "hello"
```

### `trim(text)` → string
Remove leading and trailing whitespace.

```trill
trim("  hello  ")    // "hello"
```

### `trim_start(text)` → string
Remove leading whitespace only.

```trill
trim_start("  hello  ")    // "hello  "
```

### `trim_end(text)` → string
Remove trailing whitespace only.

```trill
trim_end("  hello  ")    // "  hello"
```

### `len(value)` / `length(value)` → number
Return the length of a string or number of elements in a list.

```trill
len("hello")      // 5
len([1, 2, 3])    // 3
```

### `repeat(text, count)` → string
Repeat a string `count` times.

```trill
repeat("ha", 3)    // "hahaha"
```

### `replace(text, from, to)` → string
Replace all occurrences of `from` with `to`.

```trill
replace("hi there", "hi", "hello")    // "hello there"
```

### `slice(text, start, end)` → string
Extract characters from index `start` (inclusive) to `end` (exclusive). Supports negative indices {:info negative indices count from the end:}.

```trill
slice("hello", 1, 4)    // "ell"
slice("hello", -3, -1)  // "ll"
```

### `substr(text, start, length)` → string
Extract `length` characters starting at `start`.

```trill
substr("hello", 1, 3)    // "ell"
```

### `split(text, delimiter)` → list
Split a string into a list of substrings.

```trill
split("a,b,c", ",")    // ["a", "b", "c"]
```

### `contains(text, substring)` → boolean
Check if `text` contains `substring`.

```trill
contains("hello world", "world")    // true
```

### `starts_with(text, prefix)` → boolean
Check if `text` starts with `prefix`.

```trill
starts_with("hello", "he")    // true
```

### `ends_with(text, suffix)` → boolean
Check if `text` ends with `suffix`.

```trill
ends_with("hello", "lo")    // true
```

### `reverse(value)` → string or list
Reverse a string or list in place.

```trill
reverse("hello")           // "olleh"
reverse([1, 2, 3])         // [3, 2, 1]
```

### `pad_start(text, target_len, pad_char?)` → string
Left-pad the string until it reaches `target_len`. Pads with `pad_char` (space by default).

```trill
pad_start("42", 5, "0")    // "00042"
pad_start("hi", 5)         // "   hi"
```

### `pad_end(text, target_len, pad_char?)` → string
Right-pad the string until it reaches `target_len`.

```trill
pad_end("42", 5, "0")    // "42000"
```

### `concat(a, b, ...)` → string
Concatenate all arguments as strings.

```trill
concat("hello", " ", "world")    // "hello world"
```

### `title(text)` → string
Convert to title case — uppercase the first letter after any whitespace, `-`, or `_`.

```trill
title("hello world")    // "Hello World"
```

### `join(list, separator?)` / `join_list(list, separator?)` → string
Join list elements into a string with optional separator.

```trill
join(["a", "b", "c"], ", ")    // "a, b, c"
join(["a", "b", "c"])          // "abc"
```

---

## Number Functions

### `to_num(text)` / `number(text)` → number
Parse a string into a number.

```trill
to_num("42")      // 42
to_num("3.14")    // 3.14
```

### `to_str(value)` / `string(value)` → string
Convert any value to its string representation.

```trill
to_str(42)        // "42"
to_str(true)      // "true"
to_str(nil)       // ""
```

### `floor(n)` → number
Round down to the nearest integer.

```trill
floor(3.7)    // 3
floor(-1.3)   // -2
```

### `ceil(n)` / `ceiling(n)` → number
Round up to the nearest integer.

```trill
ceil(3.2)     // 4
ceil(-1.3)    // -1
```

### `round(n)` → number
Round to the nearest integer.

```trill
round(3.7)    // 4
round(3.2)    // 3
```

### `abs(n)` → number
Absolute value.

```trill
abs(-5)    // 5
```

### `min(a, b, ...)` → number
Return the minimum of two or more values.

```trill
min(3, 7, 1, 9)    // 1
```

### `max(a, b, ...)` → number
Return the maximum of two or more values.

```trill
max(3, 7, 1, 9)    // 9
```

### `clamp(value, lo, hi)` → number
Clamp a value between `lo` and `hi`.

```trill
clamp(15, 0, 10)    // 10
clamp(-5, 0, 10)    // 0
clamp(7, 0, 10)     // 7
```

### `rand()` → number
Random float between 0 and 1. {:info uses a deterministic seed based on nanosecond timestamps:}

```trill
rand()    // e.g., 0.472839
```

### `rand(lo, hi)` → number
Random integer between `lo` and `hi` (inclusive).

```trill
rand(1, 100)    // e.g., 73
```

---

## List Functions

### `list(a, b, ...)` → list
Create a list from individual arguments.

```trill
list(1, 2, 3)    // [1, 2, 3]
```

### `len(value)` / `length(value)` → number
Return the number of elements in a list (or length of a string).

```trill
len([10, 20, 30])    // 3
```

### `first(list)` / `first(string)` → any
Return the first element of a list or character of a string.

```trill
first([10, 20, 30])    // 10
first("hello")         // "h"
```

### `last(list)` / `last(string)` → any
Return the last element of a list or character of a string.

```trill
last([10, 20, 30])    // 30
last("hello")         // "o"
```

### `reverse(list)` / `reverse(string)` → list or string
Reverse the order of a list or characters of a string.

```trill
reverse([1, 2, 3])    // [3, 2, 1]
```

### `sort(list)` → list
Sort a list by the string representation of its elements.

```trill
sort([3, 1, 2])    // [1, 2, 3]
```

### `choice(list)` → any
Pick a random element from the list.

```trill
choice(["rock", "paper", "scissors"])    // e.g., "paper"
```

### `map(list, builtin_name)` → list
Transform each element of a list by calling a built-in function on each item. The function is referenced by name as a string. {:info only built-in function names are supported, not lambdas:}

```trill
map(["hello", "world"], "upper")    // ["HELLO", "WORLD"]
```

### `filter(list, condition_name)` → list
Keep only elements where a built-in condition function returns true. The function is referenced by name as a string. {:info the function receives each element and should return a boolean:}

```trill
filter([1, 2, 3, 4], "is_even")    // calls is_even on each
```

### `join(list, separator?)` / `join_list(list, separator?)` → string
Join list elements into a string with an optional separator.

```trill
join(["a", "b", "c"], ", ")    // "a, b, c"
```

---

## Date / Time Functions

### `now(format?)` → string
Return the current date and time. Uses strftime format — defaults to `%Y-%m-%d %H:%M:%S`.

```trill
now()                       // "2026-05-13 14:30:00"
now("%Y-%m-%d")             // "2026-05-13"
now("%B %d, %Y at %I:%M %p")  // "May 13, 2026 at 02:30 PM"
```

### `today(format?)` → string
Return the current date. Defaults to `%Y-%m-%d`.

```trill
today()                    // "2026-05-13"
today("%A, %B %d, %Y")    // "Tuesday, May 13, 2026"
```

### `date_add(date_string, days)` → string
Add or subtract days from a date string.

```trill
date_add("2026-05-13", 7)    // "2026-05-20"
date_add("2026-05-13", -3)   // "2026-05-10"
```

### `date_format(date_string, format)` → string
Reformat a date string using a strftime format.

```trill
date_format("2026-05-13", "%A")    // "Tuesday"
```

### strftime Format Specifiers

| Specifier | Meaning | Example |
|-----------|---------|---------|
| `%Y` | 4-digit year {:info zero-padded to 4 digits:} | `2026` |
| `%y` | 2-digit year | `26` |
| `%m` | Zero-padded month | `05` |
| `%B` | Full month name | `May` |
| `%b` | Abbreviated month name {:info locale-dependent:} | `May` |
| `%d` | Zero-padded day of month | `13` |
| `%A` | Full weekday name | `Tuesday` |
| `%a` | Abbreviated weekday name | `Tue` |
| `%H` | 24-hour, zero-padded | `14` |
| `%I` | 12-hour, zero-padded {:info use with `%p` for AM/PM:} | `02` |
| `%M` | Minutes, zero-padded | `30` |
| `%S` | Seconds, zero-padded | `00` |
| `%p` | AM or PM {:info only meaningful with `%I`:} | `PM` |

---

## Utility Functions

### `if_then_else(condition, then_value, else_value)` → any
Ternary conditional — returns `then_value` if the condition is truthy, otherwise `else_value`.

```trill
if_then_else(5 > 3, "yes", "no")    // "yes"
```

This is equivalent to the `if then else` expression but available as a callable function.

---

## Template Variables

These built-in variables are always available in trigger replacements:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{date}}` | Current date | `2026-05-13` |
| `{{time}}` | Current time | `14:30:00` |
| `{{datetime}}` | Date and time | `2026-05-13 14:30:00` |
| `{{year}}` | Current year | `2026` |
| `{{month}}` | Current month (zero-padded) | `05` |
| `{{day}}` | Current day (zero-padded) | `13` |
| `{{hour}}` | Current hour | `14` |
| `{{minute}}` | Current minute | `30` |
| `{{second}}` | Current second | `00` |
| `{{weekday}}` | Weekday name | `Wednesday` |
| `{{shortdate}}` | Short date format | `05/13/2026` |

---

## Trigger Arguments

When a trigger has argument mode enabled, these variables are available:

| Variable | Description | Example |
|----------|-------------|---------|
| `args` | List of all arguments | `args[0]`, `args[-1]` |
| `_arg_0`, `_arg_1`, ... | Individual arguments | `_arg_0` |
| `_args_len` | Number of arguments | `3` |

---

## Map and Filter Notes

`map(list, name)` and `filter(list, name)` accept a **built-in function name** as a string, not a lambda expression. The named function is called once per element with the current item.

For example, to convert all strings in a list to uppercase:

```trill
map(["hello", "world"], "upper")
// → ["HELLO", "WORLD"]
```

To check if a condition holds for any element, you'd need a built-in that returns a boolean. Custom conditions as lambdas are not yet supported.
