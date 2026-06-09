import {css} from 'lit';

export const wsButtonStyles = css`
  :host {
    display: inline-flex;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
  }

  :host([hidden]) {
    display: none;
  }

  .button {
    align-items: center;
    border: 1px solid transparent;
    border-radius: var(--ws-button-radius, var(--ws-shape-full, 999px));
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    font: var(--ws-button-font, var(--ws-typography-label-large, 600 14px / 20px system-ui, sans-serif));
    gap: var(--ws-spacing-sm, 8px);
    justify-content: center;
    min-inline-size: var(--ws-button-min-width, 64px);
    outline: none;
    position: relative;
    text-decoration: none;
    transform: translateY(0) scale(1);
    transition:
      background-color var(--ws-motion-duration-medium, 180ms) var(--ws-motion-easing-standard, ease),
      border-color var(--ws-motion-duration-medium, 180ms) var(--ws-motion-easing-standard, ease),
      box-shadow var(--ws-motion-duration-medium, 180ms) var(--ws-motion-easing-standard, ease),
      color var(--ws-motion-duration-medium, 180ms) var(--ws-motion-easing-standard, ease),
      opacity var(--ws-motion-duration-medium, 180ms) var(--ws-motion-easing-standard, ease),
      transform var(--ws-motion-duration-fast, 120ms) var(--ws-motion-easing-emphasized, ease);
    user-select: none;
    width: 100%;
  }

  .button:focus-visible {
    box-shadow:
      0 0 0 2px var(--ws-color-background, #f8fafc),
      0 0 0 5px color-mix(in srgb, var(--ws-button-focus-color, var(--ws-color-primary, #6c5cff)) 45%, transparent);
  }

  .button:not(:disabled):active {
    transform: translateY(1px) scale(0.98);
  }

  :host([variant='primary']) .button,
  :host(:not([variant])) .button {
    --ws-button-focus-color: var(--ws-color-primary, #6c5cff);
    background: var(--ws-color-primary, #6c5cff);
    box-shadow: var(--ws-elevation-sm, 0 1px 2px rgb(15 23 42 / 8%));
    color: var(--ws-color-on-primary, #f8fafc);
  }

  :host([variant='primary']) .button:not(:disabled):hover,
  :host(:not([variant])) .button:not(:disabled):hover {
    background: var(--ws-purple-dark, #4f46e5);
    box-shadow: var(--ws-elevation-md, 0 8px 24px rgb(15 23 42 / 12%));
  }

  :host([variant='secondary']) .button {
    --ws-button-focus-color: var(--ws-color-secondary, #3b82f6);
    background: var(--ws-color-secondary-container, #f1f5f9);
    border-color: var(--ws-color-outline-variant, #e2e8f0);
    color: var(--ws-color-on-secondary-container, #0f172a);
  }

  :host([variant='secondary']) .button:not(:disabled):hover {
    background: color-mix(in srgb, var(--ws-color-secondary, #3b82f6) 14%, var(--ws-color-secondary-container, #f1f5f9));
    border-color: color-mix(in srgb, var(--ws-color-secondary, #3b82f6) 26%, var(--ws-color-outline-variant, #e2e8f0));
  }

  :host([variant='outlined']) .button {
    --ws-button-focus-color: var(--ws-color-primary, #6c5cff);
    background: transparent;
    border-color: var(--ws-color-outline, #e2e8f0);
    color: var(--ws-color-primary, #6c5cff);
  }

  :host([variant='outlined']) .button:not(:disabled):hover {
    background: var(--ws-color-primary-container, #f5f3ff);
    border-color: var(--ws-color-primary, #6c5cff);
  }

  :host([variant='ghost']) .button {
    --ws-button-focus-color: var(--ws-color-primary, #6c5cff);
    background: transparent;
    color: var(--ws-color-primary, #6c5cff);
  }

  :host([variant='ghost']) .button:not(:disabled):hover {
    background: var(--ws-color-primary-container, #f5f3ff);
  }

  :host([size='small']) .button {
    block-size: 32px;
    font: var(--ws-typography-label-medium, 600 12px / 16px system-ui, sans-serif);
    gap: var(--ws-spacing-xs, 4px);
    padding: 0 var(--ws-spacing-md, 12px);
  }

  :host([size='medium']) .button,
  :host(:not([size])) .button {
    block-size: 40px;
    padding: 0 var(--ws-spacing-lg, 16px);
  }

  :host([size='large']) .button {
    block-size: 48px;
    font: var(--ws-typography-label-large, 600 14px / 20px system-ui, sans-serif);
    gap: var(--ws-spacing-md, 12px);
    padding: 0 var(--ws-spacing-xl, 24px);
  }

  .button:disabled {
    cursor: not-allowed;
    opacity: 0.48;
  }

  .icon,
  .spinner {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    justify-content: center;
  }

  .icon ::slotted(*) {
    display: inline-flex;
    font-size: 1.25em;
    inline-size: 1.25em;
    block-size: 1.25em;
  }

  :host([loading]) .icon {
    display: none;
  }

  .spinner {
    block-size: 1em;
    border: 2px solid currentcolor;
    border-block-start-color: transparent;
    border-radius: var(--ws-shape-full, 999px);
    box-sizing: border-box;
    inline-size: 1em;
    animation: ws-button-spin 800ms linear infinite;
  }

  @keyframes ws-button-spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
