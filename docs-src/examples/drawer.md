---
layout: example.11ty.cjs
title: Workshop Expressive Web Components ⌲ Examples ⌲ Drawer navigation
tags: example
name: Drawer navigation
description: Tree navigation with nested items, selection, badges, progress, disabled state, header, and footer
---

<div class="demo-panel">
  <ws-drawer id="example-drawer" selected-item-id="home">
    <div slot="header" class="drawer-header">
      <strong>Workshop</strong>
      <span>Expressive</span>
    </div>

    <ws-drawer-item item-id="home" title="Home" icon="home"></ws-drawer-item>

    <ws-drawer-item item-id="learn" title="Learn" icon="school" badge="3" expanded>
      <ws-drawer-item item-id="compose" title="Compose" subtitle="Declarative UI" progress="0.4"></ws-drawer-item>
      <ws-drawer-item item-id="kmp" title="KMP" subtitle="Shared Kotlin" progress="0.7"></ws-drawer-item>
    </ws-drawer-item>

    <ws-drawer-item item-id="reports" title="Reports" icon="analytics" badge="12"></ws-drawer-item>
    <ws-drawer-item item-id="locked" title="Locked lesson" subtitle="Disabled" icon="lock" disabled></ws-drawer-item>
    <ws-drawer-item item-id="settings" title="Settings" icon="settings"></ws-drawer-item>

    <div slot="footer">Version 0.1.0</div>

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

  <ws-drawer-item item-id="home" title="Home" icon="home"></ws-drawer-item>

  <ws-drawer-item
    item-id="learn"
    title="Learn"
    icon="school"
    badge="3"
    expanded
  >
    <ws-drawer-item
      item-id="compose"
      title="Compose"
      progress="0.4"
    ></ws-drawer-item>
    <ws-drawer-item item-id="kmp" title="KMP" progress="0.7"></ws-drawer-item>
  </ws-drawer-item>

  <ws-drawer-item
    item-id="settings"
    title="Settings"
    icon="settings"
  ></ws-drawer-item>

  <div slot="footer">Version 0.1.0</div>
</ws-drawer>
```
