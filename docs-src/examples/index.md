---
layout: example.11ty.cjs
title: Workshop Expressive Web Components ⌲ Examples ⌲ Buttons
tags: example
name: Buttons
description: ws-button variants, sizes, icons, and interaction states
order: 2
---

<p>Buttons communicate actions that help people submit, confirm, cancel, create, or navigate.</p>

## Live demo

<div class="demo-panel component-demo">
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

## Code

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

## API

| Property     | Type                                                | Default     | Description                                                                |
| ------------ | --------------------------------------------------- | ----------- | -------------------------------------------------------------------------- |
| `variant`    | `'primary' \| 'secondary' \| 'outlined' \| 'ghost'` | `'primary'` | Sets the visual emphasis.                                                  |
| `size`       | `'small' \| 'medium' \| 'large'`                    | `'medium'`  | Controls height and horizontal padding.                                    |
| `disabled`   | `boolean`                                           | `false`     | Prevents interaction and removes the button from normal action flow.       |
| `loading`    | `boolean`                                           | `false`     | Shows the loading treatment while preserving the label for assistive tech. |
| `aria-label` | `string`                                            | —           | Provides an accessible name when icon-only or ambiguous.                   |

## Slots

| Slot    | Description            |
| ------- | ---------------------- |
| default | Button label content.  |
| `icon`  | Optional leading icon. |

## Events

| Event   | Description                |
| ------- | -------------------------- |
| `click` | Native button click event. |

## Accessibility notes

- Keep visible labels short and action-oriented.
- Provide `aria-label` for icon-only buttons.
- Use `loading` with a stable label so screen readers still announce the action.

## Design notes

- Use `primary` for the single highest-priority action in a region.
- Use `outlined` or `ghost` when the action should not compete with the primary path.
