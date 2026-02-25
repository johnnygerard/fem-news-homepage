---
name: Tailwind CSS
description: Instructions for writing Tailwind CSS code.
applyTo: "**/*.astro,src/styles/**"
---

# Tailwind CSS Instructions

Tailwind CSS major version: 4

## General Guidelines

- Keep utility classes organized and readable by splitting long class strings into multiple lines with the `tw` utility function.
- Use the `uppercase` utility class rather than hardcoding text in all caps.

## Spacing Scale

Use Tailwind CSS's spacing scale (`--spacing: 0.25rem;`). Examples:

- `p-6` instead of `p-[1.5rem]` or `p-[24px]`
- `m-5.75` instead of `m-[1.4375rem]` or `m-[23px]`

Avoid fractional pixels:

- Use `gap-4` instead of `gap-[0.99875rem]` or `gap-[15.98px]`
