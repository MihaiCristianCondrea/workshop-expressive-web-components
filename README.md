# Workshop Expressive Web Components

Milestone 1 ports the Workshop Kotlin design-system mental model to Lit web components:

- `WorkshopTheme` → CSS custom properties in `src/foundation/`
- `WsColors` → color tokens
- `WsShapes` → radius tokens
- `WsSpacing` → spacing tokens
- `WsTypography` → font and typography tokens
- `WsButton` → `<ws-button>`
- `WsDrawer` and `WsDrawerItem` → `<ws-drawer>` and `<ws-drawer-item>`

## Current scope

This package currently includes foundation theme tokens, `<ws-button>`, `<ws-drawer>`, and `<ws-drawer-item>`. Button sizing and radii mirror the original Compose primitives: small/medium/large buttons are 36/44/52 px tall and use the medium 8 px radius token.

```html
<ws-button variant="primary" size="medium">Continue</ws-button>
<ws-button variant="secondary" size="large">Save changes</ws-button>
<ws-button variant="outlined" size="small">Cancel</ws-button>
<ws-button variant="ghost">Learn more</ws-button>

<ws-button loading>Saving</ws-button>

<ws-button variant="primary">
  <span slot="icon" class="material-symbols-outlined">add</span>
  Create
</ws-button>

<ws-drawer selected-item-id="home">
  <div slot="header">Workshop</div>
  <ws-drawer-item item-id="home" title="Home" icon="home"></ws-drawer-item>
  <ws-drawer-item
    item-id="learn"
    title="Learn"
    icon="school"
    badge="3"
    expanded
  >
    <ws-drawer-item
      item-id="button"
      title="Button"
      progress="1"
    ></ws-drawer-item>
    <ws-drawer-item
      item-id="drawer"
      title="Drawer"
      progress="0.8"
    ></ws-drawer-item>
  </ws-drawer-item>
  <div slot="footer">Version 0.1.0</div>
</ws-drawer>
```

## Development

Install dependencies:

```bash
npm i
```

Build generated JavaScript and declaration files:

```bash
npm run build
```

Run unit tests:

```bash
npm test
```

Run the demo:

```bash
npm run build
npm run serve
```

Then open <http://localhost:8000/dev/index.html>.
