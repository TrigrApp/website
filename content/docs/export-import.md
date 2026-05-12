---
title: Export & Import
description: Backup and restore your triggers, variables, and settings.
---

## Overview

trigr supports export and import of all your data — triggers, global variables, and settings — to a single JSON file.

## Exporting

Use the export option in the Trigger Manager to save all your data to a `.json` file. Native file dialogs let you choose where to save.

## Importing

Use the import option to select a previously exported `.json` file and restore your data.

## What's Included

The export file contains:
- All triggers with abbreviations, replacements, categories, and modes
- All global variables with names and expressions
- App settings and preferences

## Notes

- Importing merges with existing data by default
- Duplicate abbreviations are skipped
- The export is a plain JSON file that can be inspected or edited manually
