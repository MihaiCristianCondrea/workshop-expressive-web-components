---
layout: page.11ty.cjs
title: Workshop Expressive Web Components ⌲ Local usage
---

# Local usage

This project is currently a demo site for the Workshop component library. Build the package and documentation locally before publishing the `/docs` folder with GitHub Pages.

## Build the component library

```bash
npm install
npm run build
```

## Generate the GitHub Pages demo

```bash
npm run docs
```

The generated `/docs/index.html` loads the bundled demo with a relative module path so it works from a GitHub Pages project URL such as `/workshop-expressive-web-components/`.

## Icons and typography

The component library exposes icon slots and does not inject an icon font into consuming apps. Install Remix Icon in your app when you want the documented default icon set:

```bash
npm install remixicon
```

Then import the Remix Icon stylesheet once in the app or docs bundle entry:

```ts
import 'remixicon/fonts/remixicon.css';
```

Use icon slots so the app, not the component, chooses the icon library:

```html
<ws-button variant="primary">
  <i slot="icon" class="ri-add-line" aria-hidden="true"></i>
  Create
</ws-button>

<ws-drawer-item item-id="settings" title="Settings">
  <i slot="icon" class="ri-settings-3-line" aria-hidden="true"></i>
</ws-drawer-item>
```

Google Sans Flex is loaded by the Workshop foundation theme so apps and documentation that import the design library receive the font family automatically. You can still add the preconnect hints in your document `<head>` for faster font startup:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap"
/>

<body></body>
```
