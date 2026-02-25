---
name: Tailwind CSS
description: Instructions for writing Tailwind CSS code.
applyTo: "**/*.astro,src/styles/**"
---

# Tailwind CSS Instructions

This project uses Tailwind CSS major version 4.

## General Guidelines

- **Class Organization:** Enhance readability by splitting long utility class strings across multiple lines using the `tw` utility function.
- **Text Casing:** Instead of hardcoding uppercase text directly into the markup, apply the `uppercase` class.

## Spacing Scale

Tailwind CSS relies on a unitless spacing scale where the base unit of `1` corresponds to `0.25rem`. The scale increments in steps of `0.25` (equivalent to `1px`).

### Standard Usage

Prioritize the predefined unitless scale over arbitrary square bracket notation to ensure alignment:

- Use `p-6` instead of `p-[1.5rem]` or `p-[24px]`.
- Use `m-5.75` instead of `m-[1.4375rem]` or `m-[23px]`.

### Fractional Pixels

Round fractional pixel values to the nearest quarter unit (0.25):

- Use `gap-4.25` instead of `gap-[1.06125rem]` or `gap-[16.98px]`.
