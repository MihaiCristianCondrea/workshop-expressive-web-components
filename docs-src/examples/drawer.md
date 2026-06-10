---
layout: example.11ty.cjs
title: Workshop Expressive Web Components ⌲ Examples ⌲ Drawer navigation
tags: example
name: Drawer navigation
description: ws-drawer header, footer, nested items, badges, progress, disabled, and selection
---

<div class="demo-panel">
  <ws-drawer id="example-drawer" selected-item-id="home">
    <div slot="header" class="drawer-header">
      <strong>Workshop</strong>
      <span>Expressive</span>
    </div>

    <ws-drawer-item item-id="home" title="Home"><i slot="icon" class="ri-home-5-line" aria-hidden="true"></i></ws-drawer-item>

    <ws-drawer-item item-id="learn" title="Learn" badge="3" expanded>
      <i slot="icon" class="ri-graduation-cap-line" aria-hidden="true"></i>
      <ws-drawer-item item-id="compose" title="Compose" subtitle="Declarative UI" progress="0.4"></ws-drawer-item>
      <ws-drawer-item item-id="kmp" title="KMP" subtitle="Shared Kotlin" progress="0.7"></ws-drawer-item>
    </ws-drawer-item>

    <ws-drawer-item item-id="reports" title="Reports" badge="12"><i slot="icon" class="ri-bar-chart-line" aria-hidden="true"></i></ws-drawer-item>
    <ws-drawer-item item-id="locked" title="Locked lesson" subtitle="Disabled" disabled><i slot="icon" class="ri-lock-line" aria-hidden="true"></i></ws-drawer-item>
    <ws-drawer-item item-id="settings" title="Settings"><i slot="icon" class="ri-settings-3-line" aria-hidden="true"></i></ws-drawer-item>

    <div slot="footer" class="drawer-footer-note">Version 0.1.0</div>

  </ws-drawer>
</div>

<script type="module">
  const drawer = document.querySelector('#example-drawer');
  drawer?.addEventListener('ws-drawer-item-click', event => {
    drawer.selectedItemId = event.detail.itemId;
  });
</script>

<h3>HTML</h3>

```html
<ws-drawer selected-item-id="home">
  <div slot="header" class="drawer-header">
    <strong>Workshop</strong>
    <span>Expressive</span>
  </div>

  <ws-drawer-item item-id="home" title="Home"
    ><i slot="icon" class="ri-home-5-line" aria-hidden="true"></i
  ></ws-drawer-item>

  <ws-drawer-item item-id="learn" title="Learn" badge="3" expanded>
    <i slot="icon" class="ri-graduation-cap-line" aria-hidden="true"></i>
    <ws-drawer-item
      item-id="compose"
      title="Compose"
      subtitle="Declarative UI"
      progress="0.4"
    ></ws-drawer-item>
    <ws-drawer-item
      item-id="kmp"
      title="KMP"
      subtitle="Shared Kotlin"
      progress="0.7"
    ></ws-drawer-item>
  </ws-drawer-item>

  <ws-drawer-item item-id="reports" title="Reports" badge="12"
    ><i slot="icon" class="ri-bar-chart-line" aria-hidden="true"></i
  ></ws-drawer-item>
  <ws-drawer-item
    item-id="locked"
    title="Locked lesson"
    subtitle="Disabled"
    disabled
    ><i slot="icon" class="ri-lock-line" aria-hidden="true"></i
  ></ws-drawer-item>
  <ws-drawer-item item-id="settings" title="Settings"
    ><i slot="icon" class="ri-settings-3-line" aria-hidden="true"></i
  ></ws-drawer-item>

  <div slot="footer" class="drawer-footer-note">Version 0.1.0</div>
</ws-drawer>
```
