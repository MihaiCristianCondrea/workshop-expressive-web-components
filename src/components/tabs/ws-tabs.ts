import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';

import {wsTabsStyles} from './ws-tabs.styles.js';

/**
 * Workshop tabs container for top-level navigation.
 *
 * @slot - One or more `ws-tab` elements.
 * @csspart tabs - The tablist container.
 */
@customElement('ws-tabs')
export class WsTabs extends LitElement {
  static override styles = wsTabsStyles;

  /** Accessible label forwarded to the internal tablist. */
  @property({attribute: 'aria-label'})
  accessibleLabel?: string;

  override render() {
    return html`
      <div
        class="tabs"
        part="tabs"
        role="tablist"
        aria-label=${ifDefined(this.accessibleLabel)}
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ws-tabs': WsTabs;
  }
}
