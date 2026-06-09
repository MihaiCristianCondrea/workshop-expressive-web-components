import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined.js';

import {wsButtonStyles} from './ws-button.styles.js';

export type WsButtonVariant = 'primary' | 'secondary' | 'outlined' | 'ghost';
export type WsButtonSize = 'small' | 'medium' | 'large';

/**
 * Workshop button primitive.
 *
 * @slot - Button label content.
 * @slot icon - Optional leading icon content.
 * @csspart button - The native button element.
 */
@customElement('ws-button')
export class WsButton extends LitElement {
  static override styles = wsButtonStyles;

  /** Visual treatment matching the Workshop button variants. */
  @property({reflect: true})
  variant: WsButtonVariant = 'primary';

  /** Button density and height. */
  @property({reflect: true})
  size: WsButtonSize = 'medium';

  /** Disables interaction. */
  @property({type: Boolean, reflect: true})
  disabled = false;

  /** Shows progress and temporarily disables interaction. */
  @property({type: Boolean, reflect: true})
  loading = false;

  /** Accessible label forwarded to the internal native button. */
  @property({attribute: 'aria-label'})
  accessibleLabel?: string;

  override render() {
    const isUnavailable = this.disabled || this.loading;

    return html`
      <button
        class="button"
        part="button"
        type="button"
        ?disabled=${isUnavailable}
        aria-busy=${ifDefined(this.loading ? 'true' : undefined)}
        aria-label=${ifDefined(this.accessibleLabel)}
      >
        ${this.loading
          ? html`<span class="spinner" aria-hidden="true"></span>`
          : html`<span class="icon"><slot name="icon"></slot></span>`}
        <span class="label"><slot></slot></span>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ws-button': WsButton;
  }
}
