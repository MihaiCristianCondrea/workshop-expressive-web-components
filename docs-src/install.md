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
