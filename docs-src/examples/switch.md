---
layout: example.11ty.cjs
title: Workshop Expressive Web Components ⌲ Examples ⌲ Switch
tags: example
name: Switch
description: ws-switch binary controls with optional icons
order: 3
---

<div class="demo-panel">
  <div class="button-row">
    <ws-switch aria-label="Enable notifications"></ws-switch>
    <ws-switch checked aria-label="Use dark mode">
      <i slot="unchecked-icon" class="ri-sun-line" aria-hidden="true"></i>
      <i slot="checked-icon" class="ri-moon-line" aria-hidden="true"></i>
    </ws-switch>
    <ws-switch disabled aria-label="Disabled switch"></ws-switch>
  </div>
</div>

```html
<ws-switch aria-label="Enable notifications"></ws-switch>

<ws-switch checked aria-label="Use dark mode">
  <i slot="unchecked-icon" class="ri-sun-line" aria-hidden="true"></i>
  <i slot="checked-icon" class="ri-moon-line" aria-hidden="true"></i>
</ws-switch>

<ws-switch disabled aria-label="Disabled switch"></ws-switch>
```
