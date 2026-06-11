import {LitElement, html, nothing} from 'lit';
import {
  customElement,
  property,
  queryAssignedNodes,
  state,
} from 'lit/decorators.js';

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

  @state()
  private slottedCode = '';

  @queryAssignedNodes({flatten: true})
  private codeNodes!: Node[];

  private get displayCode() {
    return this.code || this.slottedCode;
  }

  private async copyCode() {
    const code = this.displayCode;
    if (!code.trim()) return;

    try {
      await navigator.clipboard.writeText(code);
      this.copied = true;

      window.setTimeout(() => {
        this.copied = false;
      }, 1400);

      this.dispatchEvent(
        new CustomEvent('ws-code-copy', {
          detail: {code},
          bubbles: true,
          composed: true,
        })
      );
    } catch (err) {
      console.error('Failed to copy code: ', err);
    }
  }

  override render() {
    const code = this.displayCode;

    return html`
      <slot class="source" @slotchange=${this.syncSlottedCode}></slot>
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

        <pre><code>${code}</code></pre>
      </figure>
    `;
  }

  private syncSlottedCode() {
    const code = this.codeNodes
      .map((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
          return node.textContent ?? '';
        }

        if (node instanceof HTMLTemplateElement) {
          return node.innerHTML;
        }

        if (node instanceof Element) {
          return node.outerHTML;
        }

        return '';
      })
      .join('')
      .replace(/^\n|\n$/g, '');

    if (this.slottedCode !== code) {
      this.slottedCode = code;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ws-code-block': WsCodeBlock;
  }
}
