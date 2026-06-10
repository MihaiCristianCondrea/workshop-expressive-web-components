---
layout: page.11ty.cjs
title: Workshop Expressive Web Components ⌲ Home
---

# Workshop Expressive Web Components

Lit implementations of the Workshop Expressive primitives. The web package now documents the current component set: foundation shape tokens, `<ws-button>`, `<ws-drawer>`, and `<ws-drawer-item>`.

## Shape tokens

The radius scale matches the original Workshop Compose `WsShapes` scale: 4, 6, 8, 12, and 16 px. Components use these tokens instead of pill-shaped defaults unless the component explicitly needs a fully round shape.

<section class="token-grid" aria-label="Shape tokens">
  <div class="token-card"><div class="shape-swatch" style="border-radius: var(--ws-shape-extra-small, 4px)"></div><strong>extra-small</strong><p>4px</p></div>
  <div class="token-card"><div class="shape-swatch" style="border-radius: var(--ws-shape-small, 6px)"></div><strong>small</strong><p>6px</p></div>
  <div class="token-card"><div class="shape-swatch" style="border-radius: var(--ws-shape-medium, 8px)"></div><strong>medium</strong><p>8px</p></div>
  <div class="token-card"><div class="shape-swatch" style="border-radius: var(--ws-shape-large, 12px)"></div><strong>large</strong><p>12px</p></div>
  <div class="token-card"><div class="shape-swatch" style="border-radius: var(--ws-shape-extra-large, 16px)"></div><strong>extra-large</strong><p>16px</p></div>
</section>

```css
:root {
  --ws-shape-extra-small: 4px;
  --ws-shape-small: 6px;
  --ws-shape-medium: 8px;
  --ws-shape-large: 12px;
  --ws-shape-extra-large: 16px;
}
```

## Button variants

Buttons use the Compose sizes (`small` 36px, `medium` 44px, `large` 52px), `--ws-shape-medium` corner radius, and only render leading icon space when an icon is actually assigned to `slot="icon"`.

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

## Button sizes and icon states

<section class="demo-panel">
    <div class="button-row" aria-label="Button sizes and icons">
      <ws-button variant="primary" size="small">Small</ws-button>
      <ws-button variant="primary" size="medium">Medium</ws-button>
      <ws-button variant="primary" size="large">Large</ws-button>
      <ws-button variant="outlined" aria-label="Add">
        <i slot="icon" class="ri-add-line" aria-hidden="true"></i>
      </ws-button>
      <ws-button variant="secondary">
        <i slot="icon" class="ri-external-link-line" aria-hidden="true"></i>
        Open
      </ws-button>
    </div>
</section>

```html
<ws-button variant="primary" size="small">Small</ws-button>
<ws-button variant="primary" size="medium">Medium</ws-button>
<ws-button variant="primary" size="large">Large</ws-button>
<ws-button variant="outlined" aria-label="Add">
  <i slot="icon" class="ri-add-line" aria-hidden="true"></i>
</ws-button>
<ws-button variant="secondary">
  <i slot="icon" class="ri-external-link-line" aria-hidden="true"></i>
  Open
</ws-button>
```

## Button interaction states

<section class="demo-panel">
    <div class="button-row" aria-label="Button states">
      <ws-button variant="primary" disabled>Disabled</ws-button>
      <ws-button variant="secondary" loading aria-label="Saving">Saving</ws-button>
      <ws-button variant="outlined">
        <i slot="icon" class="ri-arrow-right-up-line" aria-hidden="true"></i>
        Open details
      </ws-button>
    </div>
</section>

```html
<ws-button variant="primary" disabled>Disabled</ws-button>
<ws-button variant="secondary" loading aria-label="Saving">Saving</ws-button>
<ws-button variant="outlined">
  <i slot="icon" class="ri-arrow-right-up-line" aria-hidden="true"></i>
  Open details
</ws-button>
```

## Drawer navigation

`<ws-drawer>` coordinates selection and emits `ws-drawer-item-click` for leaf items. `<ws-drawer-item>` supports header/footer composition, nested groups, selection, disabled items, badges, subtitles, icons, and progress values.

<section class="demo-panel">
    <ws-drawer id="home-drawer" selected-item-id="overview">
      <div slot="header" class="drawer-header">
        <strong>Workshop</strong>
        <span>Expressive docs</span>
      </div>
      <ws-drawer-item item-id="overview" title="Overview"><i slot="icon" class="ri-home-5-line" aria-hidden="true"></i></ws-drawer-item>
      <ws-drawer-item item-id="components" title="Components" badge="2" expanded>
        <i slot="icon" class="ri-puzzle-line" aria-hidden="true"></i>
        <ws-drawer-item item-id="button" title="Button" subtitle="Variants and states" progress="1"></ws-drawer-item>
        <ws-drawer-item item-id="drawer" title="Drawer" subtitle="Tree navigation" progress="0.8"></ws-drawer-item>
      </ws-drawer-item>
      <ws-drawer-item item-id="api" title="API reference"><i slot="icon" class="ri-code-box-line" aria-hidden="true"></i></ws-drawer-item>
      <ws-drawer-item item-id="locked" title="Locked lesson" subtitle="Disabled" disabled><i slot="icon" class="ri-lock-line" aria-hidden="true"></i></ws-drawer-item>
      <div slot="footer" class="drawer-footer-note">Version 0.1.0</div>
    </ws-drawer>
</section>

```html
<ws-drawer selected-item-id="overview">
  <div slot="header" class="drawer-header">
    <strong>Workshop</strong>
    <span>Expressive docs</span>
  </div>

  <ws-drawer-item item-id="overview" title="Overview"
    ><i slot="icon" class="ri-home-5-line" aria-hidden="true"></i
  ></ws-drawer-item>
  <ws-drawer-item item-id="components" title="Components" badge="2" expanded>
    <i slot="icon" class="ri-puzzle-line" aria-hidden="true"></i>
    <ws-drawer-item
      item-id="button"
      title="Button"
      subtitle="Variants and states"
      progress="1"
    ></ws-drawer-item>
    <ws-drawer-item
      item-id="drawer"
      title="Drawer"
      subtitle="Tree navigation"
      progress="0.8"
    ></ws-drawer-item>
  </ws-drawer-item>
  <ws-drawer-item item-id="api" title="API reference"
    ><i slot="icon" class="ri-code-box-line" aria-hidden="true"></i
  ></ws-drawer-item>
  <ws-drawer-item
    item-id="locked"
    title="Locked lesson"
    subtitle="Disabled"
    disabled
    ><i slot="icon" class="ri-lock-line" aria-hidden="true"></i
  ></ws-drawer-item>

  <div slot="footer">Version 0.1.0</div>
</ws-drawer>
```

<script type="module">
  const homeDrawer = document.querySelector('#home-drawer');
  homeDrawer?.addEventListener('ws-drawer-item-click', event => {
    homeDrawer.selectedItemId = event.detail.itemId;
  });
</script>

## Next steps

- Browse the examples for focused button and drawer recipes.
- Use the API page for generated attributes, properties, events, slots, and CSS parts.
- Import `src/foundation/theme.css` or your built package styles before rendering the components.
