---
layout: example.11ty.cjs
title: Workshop Expressive Web Components ⌲ Examples ⌲ Button sizing
tags: example
name: Button sizing
description: Compare ws-button size and icon-only behavior
---

<div class="demo-panel">
  <div class="button-row">
    <ws-button size="small">Small</ws-button>
    <ws-button size="medium">Medium</ws-button>
    <ws-button size="large">Large</ws-button>
    <ws-button size="small" aria-label="Small add">
      <i slot="icon" class="ri-add-line" aria-hidden="true"></i>
    </ws-button>
    <ws-button size="medium" aria-label="Medium add">
      <i slot="icon" class="ri-add-line" aria-hidden="true"></i>
    </ws-button>
    <ws-button size="large" aria-label="Large add">
      <i slot="icon" class="ri-add-line" aria-hidden="true"></i>
    </ws-button>
  </div>
</div>

<h3>HTML</h3>

```html
<ws-button size="small">Small</ws-button>
<ws-button size="medium">Medium</ws-button>
<ws-button size="large">Large</ws-button>
<ws-button size="small" aria-label="Small add">
  <i slot="icon" class="ri-add-line" aria-hidden="true"></i>
</ws-button>
<ws-button size="medium" aria-label="Medium add">
  <i slot="icon" class="ri-add-line" aria-hidden="true"></i>
</ws-button>
<ws-button size="large" aria-label="Large add">
  <i slot="icon" class="ri-add-line" aria-hidden="true"></i>
</ws-button>
```
