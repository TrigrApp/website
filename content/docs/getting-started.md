---
title: Getting Started
description: Download, install, and set up trigr on your Windows machine.
---

## What is trigr?

trigr is a desktop text expander that runs in your system tray. Define shortcuts (triggers) and when you type them, they automatically expand into full text — anywhere you type.

## Installation

1. Download the latest installer from [trigr.pancake.wtf](https://trigr.pancake.wtf)
2. Run the `.exe` or `.msi` installer
3. Launch trigr,  it starts in your system tray
4. Click the tray icon to open the Trigger Manager

## Your First Trigger

1. Open the Trigger Manager from the tray icon
2. Click **Add Trigger**
3. Set the **Abbreviation** to `;;hello`
4. Set the **Replacement** to `Hello, world!`
5. Click **Save**
6. Open any text field and type `;;hello` — it expands immediately

## How It Works

trigr monitors your keyboard input. When it detects an abbreviation you've defined followed by the ender character (default: space or punctuation), it replaces the abbreviation with the replacement text. Everything happens locally — no data leaves your machine.

## Next Steps

- Explore [Trill Scripting](/docs/trill-scripting) for dynamic text
- Learn about [Global Variables](/docs/global-variables)
- Browse [Packages](/packages) for pre-built triggers
