# Workshop Expressive Web Components

Milestone 1 ports the Workshop Kotlin design-system mental model to Lit web components:

- `WorkshopTheme` → CSS custom properties in `src/foundation/`
- `WsColors` → color tokens
- `WsShapes` → radius tokens
- `WsSpacing` → spacing tokens
- `WsTypography` → font and typography tokens
- `WsButton` → `<ws-button>`

## Current scope

This package currently includes foundation theme tokens and the first primitive component, `<ws-button>`.

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
