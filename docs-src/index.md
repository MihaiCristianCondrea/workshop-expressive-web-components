---
layout: page.11ty.cjs
title: Workshop Expressive Web Components ⌲ Home
hideBreadcrumbs: true
---

# Workshop Expressive Web Components

Lit implementations of the Workshop Expressive primitives. The package includes foundation tokens, navigation surfaces, controls, and documentation helpers for building expressive web interfaces.

<div class="demo-panel intro-panel">
  <h2>Install</h2>
  <p>Install dependencies, build the component library, and import the theme plus the components you need.</p>

```bash
npm install
npm run build
```

```ts
import '@workshop/expressive-web-components/foundation/theme.css';
import '@workshop/expressive-web-components/components/button/ws-button.js';
import '@workshop/expressive-web-components/components/switch/ws-switch.js';
```

  <p>The library exposes icon slots and does not inject an icon font into consuming apps. Install Remix Icon when you want to use the icon classes shown in these docs.</p>

```bash
npm install remixicon
```

```ts
import 'remixicon/fonts/remixicon.css';
```

</div>

## What is included

- Foundation color, spacing, shape, elevation, motion, and typography tokens.
- Components for buttons, switches, drawers, breadcrumbs, tabs, cards, and code blocks.
- Documentation shell components used by this site.

## Local documentation workflow

Generate the GitHub Pages demo locally when you want to preview the full documentation site:

```bash
npm run docs
```

The generated `/docs/index.html` loads the bundled demo with relative module paths so it works from a GitHub Pages project URL such as `/workshop-expressive-web-components/`.
