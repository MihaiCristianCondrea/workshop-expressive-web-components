---
layout: example.11ty.cjs
title: Workshop Expressive Web Components ⌲ Examples ⌲ Design tokens
tags: example
name: Design tokens
description: Foundation color and shape tokens
order: 1
---

<p>Foundation tokens are CSS custom properties that keep components visually consistent across light and dark themes.</p>

<div class="demo-panel">
  <h2>Shape tokens</h2>
  <section class="token-grid" aria-label="Shape tokens">
    <ws-card><div class="shape-swatch" style="border-radius: var(--ws-shape-extra-small, 4px)"></div><strong>extra-small</strong><p>4px</p></ws-card>
    <ws-card><div class="shape-swatch" style="border-radius: var(--ws-shape-small, 6px)"></div><strong>small</strong><p>6px</p></ws-card>
    <ws-card><div class="shape-swatch" style="border-radius: var(--ws-shape-medium, 8px)"></div><strong>medium</strong><p>8px</p></ws-card>
    <ws-card><div class="shape-swatch" style="border-radius: var(--ws-shape-large, 12px)"></div><strong>large</strong><p>12px</p></ws-card>
    <ws-card><div class="shape-swatch" style="border-radius: var(--ws-shape-extra-large, 16px)"></div><strong>extra-large</strong><p>16px</p></ws-card>
  </section>

  <h2>Color tokens</h2>
  <section class="token-grid" aria-label="Color tokens">
    <ws-card><div class="color-swatch" style="background: var(--ws-color-primary)"></div><strong>primary</strong><p>Brand actions</p></ws-card>
    <ws-card><div class="color-swatch" style="background: var(--ws-color-secondary)"></div><strong>secondary</strong><p>Supporting actions</p></ws-card>
    <ws-card><div class="color-swatch" style="background: var(--ws-color-tertiary)"></div><strong>tertiary</strong><p>Success accents</p></ws-card>
    <ws-card><div class="color-swatch" style="background: var(--ws-color-surface)"></div><strong>surface</strong><p>Cards and panels</p></ws-card>
  </section>
</div>

```css
.demo {
  background: var(--ws-color-surface);
  border: 1px solid var(--ws-color-outline-variant);
  border-radius: var(--ws-shape-large);
  color: var(--ws-color-on-surface);
}
```
