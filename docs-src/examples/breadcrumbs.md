---
layout: example.11ty.cjs
title: Workshop Expressive Web Components ⌲ Examples ⌲ Breadcrumbs
tags: example
name: Breadcrumbs
description: ws-breadcrumbs hierarchical navigation
order: 5
---

<div class="demo-panel">
  <ws-breadcrumbs id="demo-breadcrumbs"></ws-breadcrumbs>
</div>

```html
<ws-breadcrumbs id="demo-breadcrumbs"></ws-breadcrumbs>
<script>
  document.querySelector('#demo-breadcrumbs').crumbs = [
    {id: 'home', label: 'Home', href: '/'},
    {id: 'components', label: 'Components', href: '/examples/'},
    {id: 'breadcrumbs', label: 'Breadcrumbs'},
  ];
</script>
```

<script>
  document.querySelector('#demo-breadcrumbs').crumbs = [
    {id: 'home', label: 'Home', href: '#'},
    {id: 'components', label: 'Components', href: '#'},
    {id: 'breadcrumbs', label: 'Breadcrumbs'},
  ];
</script>
