import {fixture, assert} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

import '../components/brand/ws-brand-mark.js';
import type {WsBrandMark} from '../components/brand/ws-brand-mark.js';

suite('ws-brand-mark', () => {
  test('renders mark text, title, and subtitle', async () => {
    const el = await fixture<WsBrandMark>(html`
      <ws-brand-mark
        mark-text="A"
        title="Atlas"
        subtitle="Expressive UI"
      ></ws-brand-mark>
    `);

    assert.equal(
      el.shadowRoot!.querySelector('.mark')!.textContent!.trim(),
      'A'
    );
    assert.equal(el.shadowRoot!.querySelector('.title')!.textContent, 'Atlas');
    assert.equal(
      el.shadowRoot!.querySelector('.subtitle')!.textContent,
      'Expressive UI'
    );
  });

  test('applies custom size and gradient tokens', async () => {
    const el = await fixture<WsBrandMark>(html`
      <ws-brand-mark
        size="56px"
        gradient-colors="#111827, #6c5cff"
      ></ws-brand-mark>
    `);
    const root = el.shadowRoot!.querySelector<HTMLElement>('.root')!;

    assert.include(
      root.getAttribute('style') ?? '',
      '--ws-brand-mark-size: 56px'
    );
    assert.include(
      root.getAttribute('style') ?? '',
      '--ws-brand-mark-gradient: linear-gradient(135deg, #111827, #6c5cff)'
    );
  });
});
