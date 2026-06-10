import {LitElement, html, nothing} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';

import {wsBrandMarkStyles} from './ws-brand-mark.styles.js';

/**
 * Parameterized Workshop brand lockup.
 *
 * @slot mark - Optional custom mark content. Defaults to `mark-text`.
 * @slot - Optional custom title/subtitle content.
 * @csspart mark - The gradient mark container.
 * @csspart title - The title text.
 * @csspart subtitle - The subtitle text.
 */
@customElement('ws-brand-mark')
export class WsBrandMark extends LitElement {
  static override styles = wsBrandMarkStyles;

  /** Text rendered inside the gradient mark when the mark slot is empty. */
  @property({attribute: 'mark-text'})
  markText = 'W';

  /** Brand title text. */
  @property()
  override title = 'Workshop';

  /** Optional subtitle text. */
  @property()
  subtitle = '';

  /** Square mark size as a CSS length. */
  @property()
  size = '48px';

  /** Comma-separated CSS colors used for the mark gradient. */
  @property({attribute: 'gradient-colors'})
  gradientColors = '';

  override render() {
    const hostStyles = {
      '--ws-brand-mark-size': this.size,
      ...(this.gradientColors
        ? {'--ws-brand-mark-gradient': this.gradientValue}
        : {}),
    };

    return html`
      <div class="root" style=${styleMap(hostStyles)}>
        <span class="mark" part="mark" aria-hidden="true">
          <slot name="mark">${this.markText}</slot>
        </span>
        <span class="text">
          <slot>
            <span class="title" part="title">${this.title}</span>
            ${this.subtitle
              ? html`<span class="subtitle" part="subtitle"
                  >${this.subtitle}</span
                >`
              : nothing}
          </slot>
        </span>
      </div>
    `;
  }

  private get gradientValue() {
    const colors = this.gradientColors
      .split(',')
      .map((color) => color.trim())
      .filter(Boolean);

    if (colors.length < 2) {
      return undefined;
    }

    return `linear-gradient(135deg, ${colors.join(', ')})`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ws-brand-mark': WsBrandMark;
  }
}
