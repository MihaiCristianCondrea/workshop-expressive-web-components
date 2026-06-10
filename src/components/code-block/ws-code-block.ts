import {LitElement, html, nothing} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';

import {wsCodeBlockStyles} from './ws-code-block.styles.js';

/**
 * A component for displaying code snippets with an optional copy-to-clipboard button.
 *
 * @fires ws-code-copy - Dispatched when the code is copied to the clipboard.
 */
@customElement('ws-code-block')
export class WsCodeBlock extends LitElement {
  static override styles = wsCodeBlockStyles;

  /** The programming language of the code snippet. */
  @property({type: String})
  language = 'text';

  /** The code snippet to display. */
  @property({type: String})
  code = '';

  /** Whether to show a copy-to-clipboard button. */
  @property({type: Boolean, reflect: true})
  copy = false;

  @state()
  private copied = false;

  private async copyCode() {
    if (!this.code.trim()) return;

    try {
      await navigator.clipboard.writeText(this.code);
      this.copied = true;

      window.setTimeout(() => {
        this.copied = false;
      }, 1400);

      this.dispatchEvent(
        new CustomEvent('ws-code-copy', {
          detail: {code: this.code},
          bubbles: true,
          composed: true,
        })
      );
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  }

  override render() {
    return html`
      <figure class="code-block">
        <figcaption class="header">
          <span class="language">${this.language}</span>

          ${this.copy
            ? html`
                <button
                  class="copy-button"
                  type="button"
                  @click=${this.copyCode}
                >
                  <span class="copy-label">
                    ${this.copied ? 'Copied' : 'Copy'}
                  </span>
                </button>
              `
            : nothing}
        </figcaption>

        <pre><code>${this.code}</code></pre>
      </figure>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ws-code-block': WsCodeBlock;
  }
}
