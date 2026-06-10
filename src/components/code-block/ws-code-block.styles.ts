import {css} from 'lit';

export const wsCodeBlockStyles = css`
  :host {
    display: block;
    font-family: var(
      --ws-code-font-family,
      'Google Sans Code',
      ui-monospace,
      monospace
    );
  }

  :host([hidden]) {
    display: none;
  }

  .code-block {
    margin: 0;
    overflow: hidden;
    border: 1px solid var(--ws-color-outline-variant);
    border-radius: var(--ws-shape-large);
    background: var(--ws-color-code-background, #0f172a);
    box-shadow: var(--ws-elevation-sm);
  }

  .header {
    min-height: 40px;
    padding: 0 var(--ws-spacing-md);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(255 255 255 / 10%);
  }

  .language {
    color: rgb(255 255 255 / 64%);
    font: var(--ws-typography-label-small);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  pre {
    margin: 0;
    overflow: auto;
    padding: var(--ws-spacing-lg);
  }

  code {
    white-space: pre;
    color: #f8fafc;
    font: var(--ws-typography-code);
  }

  .copy-button {
    border: 0;
    border-radius: var(--ws-shape-small);
    padding: 6px 10px;
    cursor: pointer;
    color: white;
    background: rgb(255 255 255 / 10%);
    font: var(--ws-typography-label-small);
    transition: background-color var(--ws-motion-duration-fast, 120ms)
        var(--ws-motion-easing-standard, ease),
      transform var(--ws-motion-duration-fast, 120ms)
        var(--ws-motion-easing-standard, ease);
  }

  .copy-button:hover {
    background: rgb(255 255 255 / 16%);
  }

  .copy-button:active {
    transform: scale(0.96);
  }
`;
