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

  test('keeps anchor navigation semantics while forwarding selected state', async () => {
    const el = await fixture<WsTab>(html`
      <ws-tab href="/api/" selected>API</ws-tab>
    `);
    const anchor = el.shadowRoot!.querySelector<HTMLAnchorElement>('a')!;

    assert.equal(anchor.getAttribute('href'), '/api/');
    assert.equal(anchor.getAttribute('aria-selected'), 'true');
    assert.equal(anchor.getAttribute('aria-current'), 'page');
    assert.equal(anchor.getAttribute('role'), 'tab');
  });

  test('omits current semantics when a tab is not selected', async () => {
    const el = await fixture<WsTab>(html`
      <ws-tab href="/examples/">Examples</ws-tab>
    `);
    const anchor = el.shadowRoot!.querySelector<HTMLAnchorElement>('a')!;

    assert.equal(anchor.getAttribute('href'), '/examples/');
    assert.equal(anchor.getAttribute('aria-selected'), 'false');
    assert.isFalse(anchor.hasAttribute('aria-current'));
  });

  test('reflects vertical orientation to the tablist', async () => {
    const el = await fixture<WsTabs>(html`
      <ws-tabs orientation="vertical" aria-label="Components">
        <ws-tab href="/examples/" selected>Buttons</ws-tab>
      </ws-tabs>
    `);
    const tablist = el.shadowRoot!.querySelector('[role="tablist"]')!;

    assert.equal(tablist.getAttribute('aria-orientation'), 'vertical');
  });

  test('selects a clicked tab and clears sibling selection', async () => {
    const el = await fixture<WsTabs>(html`
      <ws-tabs>
        <ws-tab href="#overview" selected>Overview</ws-tab>
        <ws-tab href="#settings">Settings</ws-tab>
      </ws-tabs>
    `);
    const [overview, settings] = Array.from(
      el.querySelectorAll<WsTab>('ws-tab')
    );
    const settingsAnchor =
      settings.shadowRoot!.querySelector<HTMLAnchorElement>('a')!;

    settingsAnchor.click();
    await el.updateComplete;
    await overview.updateComplete;
    await settings.updateComplete;

    assert.isFalse(overview.selected);
    assert.isTrue(settings.selected);
  });
});
