---
name: Tailwind CSS
description: Instructions for writing Tailwind CSS code.
applyTo: "**/*.astro,src/styles/**"
---

# Tailwind CSS Instructions

Tailwind CSS major version: 4

## Spacing Scale

Use Tailwind CSS's spacing scale (`--spacing: 0.25rem;`). Examples:

- `p-6` instead of `p-[1.5rem]` or `p-[24px]`
- `m-5.75` instead of `m-[1.4375rem]` or `m-[23px]`

Avoid fractional pixels:

- Use `gap-4` instead of `gap-[0.99875rem]` or `gap-[15.98px]`
