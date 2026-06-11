import {LitElement, html} from 'lit';
import {customElement, property, query} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';

import {WsTab} from './ws-tab.js';
import {wsTabsStyles} from './ws-tabs.styles.js';

export type WsTabsOrientation = 'horizontal' | 'vertical';

/**
 * Workshop tabs container for top-level navigation.
 *
 * @slot - One or more `ws-tab` elements.
 * @csspart tabs - The tablist container.
 * @csspart indicator - The animated active-tab indicator.
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

  @query('.tabs')
  private tabsElement?: HTMLElement;

  @query('slot')
  private slotElement?: HTMLSlotElement;

  private indicatorAnimationTimeout = 0;

  private readonly resizeObserver = new ResizeObserver(() => {
    this.updateIndicator();
  });

  override connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.updateIndicator);
  }

  override disconnectedCallback() {
    window.removeEventListener('resize', this.updateIndicator);
    window.clearTimeout(this.indicatorAnimationTimeout);
    this.resizeObserver.disconnect();
    super.disconnectedCallback();
  }

  override firstUpdated() {
    this.observeTabs();
    this.updateIndicator();
  }

  override updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('orientation')) {
      this.updateComplete.then(() => this.updateIndicator());
    }
  }

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
        <div
          class="indicator"
          part="indicator"
          aria-hidden="true"
          @transitionend=${this.handleIndicatorTransitionEnd}
        ></div>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }

  private animateIndicator() {
    window.clearTimeout(this.indicatorAnimationTimeout);
    this.toggleAttribute('indicator-animated', true);
    this.indicatorAnimationTimeout = window.setTimeout(() => {
      this.toggleAttribute('indicator-animated', false);
    }, 320);
  }

  private handleIndicatorTransitionEnd(event: TransitionEvent) {
    if (event.target !== event.currentTarget) return;
    window.clearTimeout(this.indicatorAnimationTimeout);
    this.toggleAttribute('indicator-animated', false);
  }

  private readonly updateIndicator = () => {
    const tabsElement = this.tabsElement;
    const selectedTab = this.selectedTab;

    if (!tabsElement || !selectedTab) {
      this.style.setProperty('--ws-tabs-indicator-opacity', '0');
      return;
    }

    const hostRect = tabsElement.getBoundingClientRect();
    const selectedRect = selectedTab.getBoundingClientRect();

    if (this.orientation === 'vertical') {
      this.style.setProperty('--ws-tabs-indicator-inline-size', '3px');
      this.style.setProperty(
        '--ws-tabs-indicator-block-size',
        `${selectedRect.height}px`
      );
      this.style.setProperty('--ws-tabs-indicator-x', '0px');
      this.style.setProperty(
        '--ws-tabs-indicator-y',
        `${selectedRect.top - hostRect.top}px`
      );
    } else {
      this.style.setProperty(
        '--ws-tabs-indicator-inline-size',
        `${selectedRect.width}px`
      );
      this.style.setProperty('--ws-tabs-indicator-block-size', '3px');
      this.style.setProperty(
        '--ws-tabs-indicator-x',
        `${selectedRect.left - hostRect.left}px`
      );
      this.style.setProperty('--ws-tabs-indicator-y', '0px');
    }

    this.style.setProperty('--ws-tabs-indicator-opacity', '1');
  };

  private get selectedTab() {
    return this.tabs.find((tab) => tab.selected) ?? null;
  }

  private get tabs() {
    return (
      this.slotElement
        ?.assignedElements({flatten: true})
        .filter((element): element is WsTab => element instanceof WsTab) ?? []
    );
  }

  private observeTabs() {
    this.resizeObserver.disconnect();
    if (this.tabsElement) this.resizeObserver.observe(this.tabsElement);
    this.tabs.forEach((tab) => {
      this.resizeObserver.observe(tab);
    });
  }

  private handleSlotChange() {
    this.observeTabs();
    this.updateComplete.then(() => this.updateIndicator());
  }

  private selectClickedTab(event: MouseEvent) {
    const clickedTab = event
      .composedPath()
      .find((target): target is WsTab => target instanceof WsTab);

    if (
      !clickedTab ||
      clickedTab.hasAttribute('disabled') ||
      !this.tabs.includes(clickedTab)
    ) {
      return;
    }

    if (clickedTab.href.startsWith('#')) {
      event.preventDefault();
    }

    if (clickedTab !== this.selectedTab) {
      this.animateIndicator();
    }

    this.tabs.forEach((tab) => {
      tab.selected = tab === clickedTab;
    });

    this.updateComplete.then(() => this.updateIndicator());

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
