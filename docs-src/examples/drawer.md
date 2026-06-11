---
layout: example.11ty.cjs
title: Workshop Expressive Web Components ⌲ Examples ⌲ Drawer navigation
tags: example
name: Drawer navigation
description: ws-drawer header, footer, nested items, badges, progress, disabled, and selection
order: 4
---

<p>Drawers organize durable navigation destinations and can show hierarchy, progress, badges, and disabled destinations.</p>

## Live demo

<div class="demo-panel component-demo">
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

## Code

```html
<ws-drawer selected-item-id="home">
  <div slot="header" class="drawer-header">
    <strong>Workshop</strong>
    <span>Expressive</span>
  </div>

  <ws-drawer-item item-id="home" title="Home">
    <i slot="icon" class="ri-home-5-line" aria-hidden="true"></i>
  </ws-drawer-item>

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

  <ws-drawer-item item-id="reports" title="Reports" badge="12">
    <i slot="icon" class="ri-bar-chart-line" aria-hidden="true"></i>
  </ws-drawer-item>
  <ws-drawer-item
    item-id="locked"
    title="Locked lesson"
    subtitle="Disabled"
    disabled
  >
    <i slot="icon" class="ri-lock-line" aria-hidden="true"></i>
  </ws-drawer-item>
  <ws-drawer-item item-id="settings" title="Settings">
    <i slot="icon" class="ri-settings-3-line" aria-hidden="true"></i>
  </ws-drawer-item>

  <div slot="footer" class="drawer-footer-note">Version 0.1.0</div>
</ws-drawer>

<script type="module">
  const drawer = document.querySelector('ws-drawer');
  drawer.addEventListener('ws-drawer-item-click', (event) => {
    drawer.selectedItemId = event.detail.itemId;
  });
</script>
```

## API

| Element          | Property           | Type      | Default | Description                                                |
| ---------------- | ------------------ | --------- | ------- | ---------------------------------------------------------- |
| `ws-drawer`      | `selected-item-id` | `string`  | —       | Selected leaf item id.                                     |
| `ws-drawer-item` | `item-id`          | `string`  | —       | Stable item identifier returned in events.                 |
| `ws-drawer-item` | `title`            | `string`  | —       | Primary label.                                             |
| `ws-drawer-item` | `subtitle`         | `string`  | —       | Optional supporting label.                                 |
| `ws-drawer-item` | `badge`            | `string`  | —       | Optional count or short status.                            |
| `ws-drawer-item` | `progress`         | `number`  | —       | Progress value from 0 to 1.                                |
| `ws-drawer-item` | `expanded`         | `boolean` | `false` | Shows nested drawer items.                                 |
| `ws-drawer-item` | `selected`         | `boolean` | `false` | Reflects selected state. Usually controlled by the drawer. |
| `ws-drawer-item` | `disabled`         | `boolean` | `false` | Prevents activation.                                       |

## Slots

| Element          | Slot     | Description              |
| ---------------- | -------- | ------------------------ |
| `ws-drawer`      | `header` | Optional top content.    |
| `ws-drawer`      | default  | Drawer items.            |
| `ws-drawer`      | `footer` | Optional bottom content. |
| `ws-drawer-item` | `icon`   | Optional leading icon.   |
| `ws-drawer-item` | default  | Nested drawer items.     |

## Events

| Event                  | Detail             | Description                                      |
| ---------------------- | ------------------ | ------------------------------------------------ |
| `ws-drawer-item-click` | `{ itemId, item }` | Fired by `ws-drawer` when a leaf item activates. |

## Accessibility notes

- Keep navigation labels unique and concise.
- Do not put essential destinations only inside a disabled item.
- Use badges for short status only; place longer explanations in page content.

## Design notes

- Use hierarchy sparingly so the drawer stays scannable.
- Reserve progress for task-like navigation where completion is meaningful.
