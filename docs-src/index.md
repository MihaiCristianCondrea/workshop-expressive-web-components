---
layout: page.11ty.cjs
title: Workshop Expressive Web Components ⌲ Home
---

# Workshop Expressive Web Components

A tiny Lit component playground for expressive Workshop UI primitives. The first component is `<ws-button>`, with variants, sizes, icons, disabled states, and loading feedback ready to preview on GitHub Pages.

## Button variants

<section class="demo-panel">
  <div class="button-row" aria-label="Button variants">
    <ws-button variant="primary" size="medium">Continue</ws-button>
    <ws-button variant="secondary" size="medium">Save</ws-button>
    <ws-button variant="outlined" size="medium">Cancel</ws-button>
    <ws-button variant="ghost" size="medium">Learn more</ws-button>
  </div>
</section>

```html
<ws-button variant="primary" size="medium">Continue</ws-button>
<ws-button variant="secondary" size="medium">Save</ws-button>
<ws-button variant="outlined" size="medium">Cancel</ws-button>
<ws-button variant="ghost" size="medium">Learn more</ws-button>
```

## Sizes

<section class="demo-panel">
  <div class="button-row" aria-label="Button sizes">
    <ws-button variant="primary" size="small">Small</ws-button>
    <ws-button variant="primary" size="medium">Medium</ws-button>
    <ws-button variant="primary" size="large">Large</ws-button>
  </div>
</section>

```html
<ws-button variant="primary" size="small">Small</ws-button>
<ws-button variant="primary" size="medium">Medium</ws-button>
<ws-button variant="primary" size="large">Large</ws-button>
```

## Interaction states

<section class="demo-panel">
  <div class="button-row" aria-label="Button states">
    <ws-button variant="primary" disabled>Disabled</ws-button>
    <ws-button variant="secondary" loading>Saving</ws-button>
    <ws-button variant="outlined">
      <span slot="icon" aria-hidden="true">↗</span>
      Open details
    </ws-button>
  </div>
</section>

```html
<ws-button variant="primary" disabled>Disabled</ws-button>
<ws-button variant="secondary" loading>Saving</ws-button>
<ws-button variant="outlined">
  <span slot="icon" aria-hidden="true">↗</span>
  Open details
</ws-button>
```
