---
name: svg-to-astro
description: Convert SVG files to Astro components.
---

# SVG to Astro

## Input

The input for this skill is an SVG file.  
For example, here is the file content of `caret-down.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <rect width="256" height="256" fill="none" />
  <polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round"
    stroke-linejoin="round" stroke-width="16" />
</svg>
```

## Output

The output for this skill is an Astro component.  
For example, here is the file content of `CaretDown.astro`:

```astro
---
import type { HTMLAttributes } from "astro/types";
type Props = HTMLAttributes<"svg">;
---

<svg viewBox="0 0 256 256" {...Astro.props}>
  <rect width="256" height="256" fill="none"></rect>
  <polyline
    points="208 96 128 176 48 96"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="16"></polyline>
</svg>
```

## Checklist

- The following redundant attributes are removed from `svg` element: `width`, `height`, `xmlns`.
- Any missing `stop[offset]` attributes are added.
