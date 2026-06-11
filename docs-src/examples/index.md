---
layout: example.11ty.cjs
title: Workshop Expressive Web Components ⌲ Examples ⌲ Buttons
tags: example
name: Buttons
description: ws-button variants, sizes, icons, and interaction states
order: 2
---

<div class="demo-panel">
  <h3>Variants</h3>
  <div class="button-row">
    <ws-button variant="primary">Primary</ws-button>
    <ws-button variant="secondary">Secondary</ws-button>
    <ws-button variant="outlined">Outlined</ws-button>
    <ws-button variant="ghost">Ghost</ws-button>
  </div>

  <h3>Sizes</h3>
  <div class="button-row">
    <ws-button size="small">Small</ws-button>
    <ws-button size="medium">Medium</ws-button>
    <ws-button size="large">Large</ws-button>
  </div>

  <h3>States and icons</h3>
  <div class="button-row">
    <ws-button variant="primary" disabled>Disabled</ws-button>
    <ws-button variant="secondary" loading aria-label="Loading">Loading</ws-button>
    <ws-button variant="outlined" aria-label="Favorite">
      <i slot="icon" class="ri-star-line" aria-hidden="true"></i>
    </ws-button>
    <ws-button variant="primary">
      <i slot="icon" class="ri-add-line" aria-hidden="true"></i>
      Create
    </ws-button>
  </div>
</div>

<h3>HTML</h3>

```html
<ws-button variant="primary">Primary</ws-button>
<ws-button variant="secondary">Secondary</ws-button>
<ws-button variant="outlined">Outlined</ws-button>
<ws-button variant="ghost">Ghost</ws-button>

<ws-button size="small">Small</ws-button>
<ws-button size="medium">Medium</ws-button>
<ws-button size="large">Large</ws-button>

<ws-button variant="primary" disabled>Disabled</ws-button>
<ws-button variant="secondary" loading aria-label="Loading">Loading</ws-button>
<ws-button variant="outlined" aria-label="Favorite">
  <i slot="icon" class="ri-star-line" aria-hidden="true"></i>
</ws-button>
<ws-button variant="primary">
  <i slot="icon" class="ri-add-line" aria-hidden="true"></i>
  Create
</ws-button>
```
