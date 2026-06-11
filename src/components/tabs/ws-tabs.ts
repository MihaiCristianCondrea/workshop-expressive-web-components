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

  /** Delay normal same-origin navigation until selection motion can complete. */
  @property({attribute: 'defer-navigation', type: Boolean})
  deferNavigation = false;

  /** Prefetch same-origin tab destinations when the browser is idle. */
  @property({type: Boolean})
  prefetch = false;

  @query('.tabs')
  private tabsElement?: HTMLElement;

  @query('slot')
  private slotElement?: HTMLSlotElement;

  private hasMeasuredIndicator = false;
  private indicatorAnimationTimeout = 0;
  private indicatorUpdateFrame = 0;
  private navigationTimeout = 0;
  private prefetchTimeout = 0;
  private lastSelectedTab: WsTab | null = null;

  private readonly mutationObserver = new MutationObserver(() => {
    this.scheduleIndicatorUpdate();
  });

  private readonly resizeObserver = new ResizeObserver(() => {
    this.scheduleIndicatorUpdate({animate: false});
  });

  override connectedCallback() {
    super.connectedCallback();
    window.addEventListener('resize', this.handleResize);
  }

  override disconnectedCallback() {
    window.removeEventListener('resize', this.handleResize);
    window.clearTimeout(this.indicatorAnimationTimeout);
    window.clearTimeout(this.navigationTimeout);
    window.clearTimeout(this.prefetchTimeout);
    window.cancelAnimationFrame(this.indicatorUpdateFrame);
    this.mutationObserver.disconnect();
    this.resizeObserver.disconnect();
    super.disconnectedCallback();
  }

  override firstUpdated() {
    this.observeTabs();
    this.updateIndicator({animate: false});
  }

  override updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has('orientation')) {
      this.scheduleIndicatorUpdate({animate: false});
    }

    if (changedProperties.has('prefetch') && this.prefetch) {
      this.schedulePrefetch();
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

  private readonly handleResize = () => {
    this.scheduleIndicatorUpdate({animate: false});
  };

  private scheduleIndicatorUpdate(options: {animate?: boolean} = {}) {
    window.cancelAnimationFrame(this.indicatorUpdateFrame);
    this.indicatorUpdateFrame = window.requestAnimationFrame(() => {
      this.updateIndicator(options);
    });
  }

  private readonly updateIndicator = (options: {animate?: boolean} = {}) => {
    const tabsElement = this.tabsElement;
    const selectedTab = this.selectedTab;
    const selectedChanged = selectedTab !== this.lastSelectedTab;
    const shouldAnimate =
      options.animate !== false && this.hasMeasuredIndicator && selectedChanged;

    this.lastSelectedTab = selectedTab;

    if (!tabsElement || !selectedTab) {
      this.style.setProperty('--ws-tabs-indicator-opacity', '0');
      this.hasMeasuredIndicator = true;
      return;
    }

    if (shouldAnimate) {
      this.animateIndicator();
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
    this.hasMeasuredIndicator = true;
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
    this.mutationObserver.disconnect();

    if (this.tabsElement) this.resizeObserver.observe(this.tabsElement);
    this.tabs.forEach((tab) => {
      this.resizeObserver.observe(tab);
      this.mutationObserver.observe(tab, {
        attributeFilter: ['selected'],
        attributes: true,
      });
    });
  }

  private handleSlotChange() {
    this.observeTabs();
    this.scheduleIndicatorUpdate();
    if (this.prefetch) this.schedulePrefetch();
  }

  private getNavigationUrl(tab: WsTab) {
    try {
      return new URL(tab.href, window.location.href);
    } catch {
      return null;
    }
  }

  private isSameDocumentUrl(url: URL) {
    return (
      url.origin === window.location.origin &&
      url.pathname === window.location.pathname &&
      url.search === window.location.search
    );
  }

  private isPlainPrimaryClick(event: MouseEvent) {
    return (
      event.button === 0 &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey
    );
  }

  private getMotionDuration() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return 0;

    const value = getComputedStyle(this)
      .getPropertyValue('--ws-motion-duration-slow')
      .trim();
    if (!value) return 240;
    if (value.endsWith('ms')) return Number.parseFloat(value);
    if (value.endsWith('s')) return Number.parseFloat(value) * 1000;
    return Number.parseFloat(value) || 240;
  }

  private schedulePrefetch() {
    window.clearTimeout(this.prefetchTimeout);
    this.prefetchTimeout = window.setTimeout(() => this.prefetchTabs(), 0);
  }

  private prefetchTabs() {
    const connection = (
      navigator as Navigator & {connection?: {saveData?: boolean}}
    ).connection;
    if (connection?.saveData) return;

    const prefetched = new Set<string>();
    this.tabs.forEach((tab) => {
      const url = this.getNavigationUrl(tab);
      if (!url || url.origin !== window.location.origin) return;
      if (this.isSameDocumentUrl(url) || prefetched.has(url.href)) return;

      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url.href;
      link.as = 'document';
      document.head.append(link);
      prefetched.add(url.href);
    });
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

    const selectedChanged = clickedTab !== this.selectedTab;
    const navigationUrl = this.getNavigationUrl(clickedTab);
    const shouldDeferNavigation =
      this.deferNavigation &&
      selectedChanged &&
      this.isPlainPrimaryClick(event) &&
      navigationUrl?.origin === window.location.origin &&
      !this.isSameDocumentUrl(navigationUrl);

    if (clickedTab.href.startsWith('#') || shouldDeferNavigation) {
      event.preventDefault();
    }

    this.tabs.forEach((tab) => {
      tab.selected = tab === clickedTab;
    });

    this.scheduleIndicatorUpdate();

    this.dispatchEvent(
      new CustomEvent('ws-tab-change', {
        detail: {tab: clickedTab, href: clickedTab.href},
        bubbles: true,
        composed: true,
      })
    );

    if (shouldDeferNavigation && navigationUrl) {
      window.clearTimeout(this.navigationTimeout);
      this.navigationTimeout = window.setTimeout(() => {
        window.location.href = navigationUrl.href;
      }, this.getMotionDuration());
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ws-tabs': WsTabs;
  }
}
