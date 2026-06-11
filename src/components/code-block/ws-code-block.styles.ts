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

  .source {
    display: none;
  }

  .code-block {
    margin: 0;
    overflow: hidden;
    border: 1px solid var(--ws-color-outline-variant, #e2e8f0);
    border-radius: var(--ws-shape-large, 12px);
    background: var(--ws-color-code-background, #0f172a);
    box-shadow: var(--ws-elevation-sm, 0 1px 2px rgb(15 23 42 / 8%));
  }

  .header {
    min-height: var(--ws-code-block-header-height, 40px);
    padding: 0 var(--ws-spacing-md, 12px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--ws-color-code-border, rgb(255 255 255 / 10%));
  }

  .language {
    color: var(--ws-color-code-muted, rgb(255 255 255 / 64%));
    font: var(--ws-typography-label-small);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  pre {
    margin: 0;
    overflow: auto;
    padding: var(--ws-spacing-lg, 16px);
  }

  code {
    white-space: pre;
    color: var(--ws-color-code-on-background, #f8fafc);
    font: var(--ws-typography-code);
  }

  .copy-button {
    border: 0;
    border-radius: var(--ws-shape-small, 6px);
    padding: var(--ws-code-copy-padding-block, var(--ws-spacing-xs, 4px))
      var(--ws-code-copy-padding-inline, var(--ws-spacing-md, 12px));
    cursor: pointer;
    color: var(--ws-color-code-on-background, #f8fafc);
    background: var(--ws-color-code-button, rgb(255 255 255 / 10%));
    font: var(--ws-typography-label-small);
    transition: background-color var(--ws-motion-duration-fast, 120ms)
        var(--ws-motion-easing-standard, ease),
      transform var(--ws-motion-duration-fast, 120ms)
        var(--ws-motion-easing-standard, ease);
  }

  .copy-button:focus-visible {
    outline: var(--ws-focus-ring-inner-size, 2px) solid
      var(--ws-color-code-on-background, #f8fafc);
    outline-offset: var(--ws-spacing-xs, 4px);
  }

  .copy-button:hover {
    background: var(--ws-color-code-button-hover, rgb(255 255 255 / 16%));
  }

  .copy-button:active {
    transform: scale(0.96);
  }
`;
