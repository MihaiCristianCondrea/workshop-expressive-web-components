import {LitElement, html, nothing} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import {wsBreadcrumbsStyles} from './ws-breadcrumbs.styles.js';

export interface WsCrumb {
  id: string;
  label: string;
  href?: string;
}

/**
 * Workshop breadcrumb navigation.
 *
 * @csspart nav - The breadcrumb navigation element.
 * @csspart crumb - Each breadcrumb label/link.
 * @csspart separator - The separator icon between crumbs.
 */
@customElement('ws-breadcrumbs')
export class WsBreadcrumbs extends LitElement {
  static override styles = wsBreadcrumbsStyles;

  /** Crumbs to render. Use the `crumbs` attribute with JSON or set this property. */
  @property({type: Array})
  crumbs: WsCrumb[] = [];

  override render() {
    if (this.crumbs.length === 0) {
      return nothing;
    }

    return html`
      <nav class="breadcrumbs" part="nav" aria-label="Breadcrumb">
        ${this.crumbs.map((crumb, index) => this.renderCrumb(crumb, index))}
      </nav>
    `;
  }

  private renderCrumb(crumb: WsCrumb, index: number) {
    const isLast = index === this.crumbs.length - 1;
    const label = crumb.label;
    const crumbTemplate = isLast
      ? html`<span class="crumb" part="crumb" aria-current="page"
          >${label}</span
        >`
      : html`<a class="crumb" part="crumb" href=${crumb.href ?? '#'}
          >${label}</a
        >`;

    return html`
      ${crumbTemplate} ${isLast ? nothing : this.renderSeparator()}
    `;
  }

  private renderSeparator() {
    return html`
      <svg
        class="separator"
        part="separator"
        viewBox="0 0 24 24"
        focusable="false"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="m13.172 12-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
        ></path>
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ws-breadcrumbs': WsBreadcrumbs;
  }
}
