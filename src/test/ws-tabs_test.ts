import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

import '../components/tabs/ws-tab.js';
import '../components/tabs/ws-tabs.js';
import type {WsTab} from '../components/tabs/ws-tab.js';
import type {WsTabs} from '../components/tabs/ws-tabs.js';

suite('ws-tabs', () => {
  test('renders slotted tabs inside the tablist', async () => {
    const el = await fixture<WsTabs>(html`
      <ws-tabs>
        <ws-tab href="/" selected>Home</ws-tab>
        <ws-tab href="/api/">API</ws-tab>
      </ws-tabs>
    `);

    assert.equal(
      el.shadowRoot!.querySelector('[role="tablist"]')!.getAttribute('part'),
      'tabs'
    );
    assert.lengthOf(el.querySelectorAll('ws-tab'), 2);
  });

  test('forwards selected state and current semantics', async () => {
    const el = await fixture<WsTab>(html`
      <ws-tab href="/api/" selected>API</ws-tab>
    `);
    const anchor = el.shadowRoot!.querySelector<HTMLAnchorElement>('a')!;

    assert.equal(anchor.getAttribute('href'), '/api/');
    assert.equal(anchor.getAttribute('aria-selected'), 'true');
    assert.equal(anchor.getAttribute('aria-current'), 'page');
  });
});
