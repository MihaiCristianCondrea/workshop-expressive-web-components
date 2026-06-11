import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';

import {WsTab} from './ws-tab.js';
import {wsTabsStyles} from './ws-tabs.styles.js';

export type WsTabsOrientation = 'horizontal' | 'vertical';

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

  /** Visual and accessibility orientation for the tab list. */
  @property({reflect: true})
  orientation: WsTabsOrientation = 'horizontal';

  override render() {
    return html`
      <div
        class="tabs"
        part="tabs"
        role="tablist"
        aria-label=${ifDefined(this.accessibleLabel)}
        aria-orientation=${this.orientation}
        @click=${this.selectClickedTab}
      >
        <slot></slot>
      </div>
    `;
  }

  private selectClickedTab(event: MouseEvent) {
    const clickedTab = event
      .composedPath()
      .find((target): target is WsTab => target instanceof WsTab);

    if (!clickedTab || clickedTab.hasAttribute('disabled')) return;

    this.querySelectorAll<WsTab>('ws-tab').forEach((tab) => {
      tab.selected = tab === clickedTab;
    });

    this.dispatchEvent(
      new CustomEvent('ws-tab-change', {
        detail: {tab: clickedTab, href: clickedTab.href},
        bubbles: true,
        composed: true,
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ws-tabs': WsTabs;
  }
}
