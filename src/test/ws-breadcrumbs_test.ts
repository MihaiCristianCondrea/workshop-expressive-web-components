import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

import '../components/breadcrumbs/ws-breadcrumbs.js';
import type {WsBreadcrumbs} from '../components/breadcrumbs/ws-breadcrumbs.js';

suite('ws-breadcrumbs', () => {
  test('renders links and marks the final crumb as current', async () => {
    const el = await fixture<WsBreadcrumbs>(html`
      <ws-breadcrumbs></ws-breadcrumbs>
    `);
    el.crumbs = [
      {id: 'home', label: 'Home', href: '/'},
      {id: 'components', label: 'Components', href: '/components/'},
      {id: 'tabs', label: 'Tabs'},
    ];
    await el.updateComplete;

    assert.lengthOf(el.shadowRoot!.querySelectorAll('a.crumb'), 2);
    assert.equal(
      el.shadowRoot!.querySelector('[aria-current="page"]')!.textContent,
      'Tabs'
    );
    assert.lengthOf(el.shadowRoot!.querySelectorAll('.separator'), 2);
  });
});
