---
layout: example.11ty.cjs
title: Workshop Expressive Web Components ⌲ Examples ⌲ Tabs
tags: example
name: Tabs
description: ws-tabs and ws-tab navigation
order: 6
---

<div class="demo-panel">
  <ws-tabs aria-label="Demo sections">
    <ws-tab selected href="#overview">
      <i slot="icon" class="ri-home-5-line" aria-hidden="true"></i>
      Overview
    </ws-tab>
    <ws-tab href="#components">Components</ws-tab>
    <ws-tab href="#settings">Settings</ws-tab>
  </ws-tabs>
</div>

```html
<ws-tabs aria-label="Demo sections">
  <ws-tab selected href="#overview">
    <i slot="icon" class="ri-home-5-line" aria-hidden="true"></i>
    Overview
  </ws-tab>
  <ws-tab href="#components">Components</ws-tab>
  <ws-tab href="#settings">Settings</ws-tab>
</ws-tabs>
```
