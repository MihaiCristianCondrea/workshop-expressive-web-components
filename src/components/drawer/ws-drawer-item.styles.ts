import {css} from 'lit';

export const wsDrawerItemStyles = css`
  :host {
    font-family: var(--ws-font-family, 'Google Sans Flex', system-ui, sans-serif);
    --ws-drawer-item-depth: 0;
    display: block;
    color: var(--ws-color-on-surface, #0f172a);
  }

  :host([hidden]) {
    display: none;
  }

  :host([selected]) {
    color: var(--ws-color-on-primary, #f8fafc);
  }

  .item {
    align-items: center;
    border-radius: var(--ws-drawer-item-radius, var(--ws-shape-medium, 8px));
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    gap: var(--ws-spacing-md, 12px);
    min-block-size: var(--ws-drawer-item-min-height, 44px);
    outline: none;
    padding-block: var(--ws-spacing-md, 12px);
    padding-inline: calc(
        var(--ws-spacing-md, 12px) + (var(--ws-drawer-item-depth) * 18px)
      )
      var(--ws-spacing-sm, 8px);
    position: relative;
    transition: background-color var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-standard, ease),
      box-shadow var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-standard, ease),
      color var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-standard, ease),
      opacity var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-standard, ease),
      transform var(--ws-motion-duration-fast, 120ms)
        var(--ws-motion-easing-standard, ease);
    user-select: none;
  }

  :host([selected]) .item {
    background: linear-gradient(
      90deg,
      var(--ws-purple, #6c5cff),
      var(--ws-purple-dark, #4f46e5)
    );
    box-shadow: var(--ws-elevation-sm, 0 1px 2px rgb(15 23 42 / 8%));
  }

  :host(:not([selected]):not([disabled])) .item:hover {
    background: var(--ws-color-surface-variant, #f1f5f9);
  }

  .item:focus-visible {
    box-shadow: 0 0 0 2px var(--ws-color-surface, #ffffff),
      0 0 0 4px var(--ws-color-primary, #6c5cff);
  }

  :host([disabled]) .item {
    cursor: not-allowed;
    opacity: 0.48;
  }

  :host([data-nested]) .item {
    border-radius: var(--ws-shape-small, 6px);
    min-block-size: 36px;
    padding-block: var(--ws-spacing-sm, 8px);
  }

  .icon,
  .bullet,
  .arrow {
    align-items: center;
    color: var(--ws-color-on-surface-variant, #64748b);
    display: inline-flex;
    flex: 0 0 auto;
    justify-content: center;
    transition: color var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-standard, ease),
      transform var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-standard, ease);
  }

  :host([selected]) .icon,
  :host([selected]) .bullet,
  :host([selected]) .arrow {
    color: color-mix(in srgb, currentcolor 82%, transparent);
  }

  .icon {
    block-size: 20px;
    font-size: 20px;
    font-weight: normal;
    inline-size: 20px;
    line-height: 1;
  }

  :host([data-nested]) .icon {
    block-size: 16px;
    font-size: 16px;
    inline-size: 16px;
  }

  .icon > i,
  .icon ::slotted(*) {
    align-items: center;
    block-size: 1em;
    display: inline-flex;
    font-size: 1em;
    inline-size: 1em;
    justify-content: center;
    line-height: 1;
  }

  :host([data-settings-spin]) .icon > i,
  :host([data-settings-spin]) .icon ::slotted(*) {
    animation: ws-drawer-settings-spin 320ms
      var(--ws-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1));
  }

  .bullet {
    background: currentcolor;
    block-size: 5px;
    border-radius: var(--ws-shape-full, 999px);
    inline-size: 5px;
    opacity: 0.55;
  }

  :host([selected]) .bullet {
    block-size: 7px;
    inline-size: 7px;
    opacity: 1;
  }

  .text {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    gap: 1px;
    min-inline-size: 0;
  }

  .title,
  .subtitle {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .title {
    color: currentcolor;
    font: var(
      --ws-typography-body-medium,
      500 14px / 20px var(--ws-font-family, 'Google Sans Flex', system-ui, sans-serif)
    );
    font-weight: 500;
  }

  :host([selected]) .title,
  :host([data-has-children]) .title {
    font-weight: 600;
  }

  :host([data-nested]) .title {
    font: var(
      --ws-typography-label-medium,
      600 12px / 16px var(--ws-font-family, 'Google Sans Flex', system-ui, sans-serif)
    );
  }

  .subtitle {
    color: var(--ws-color-on-surface-variant, #64748b);
    font: var(
      --ws-typography-label-small,
      500 11px / 16px var(--ws-font-family, 'Google Sans Flex', system-ui, sans-serif)
    );
  }

  :host([selected]) .subtitle {
    color: color-mix(in srgb, currentcolor 82%, transparent);
  }

  .badge {
    background: color-mix(
      in srgb,
      var(--ws-color-primary, #6c5cff) 12%,
      transparent
    );
    border-radius: var(--ws-shape-extra-small, 4px);
    color: var(--ws-color-primary, #6c5cff);
    flex: 0 0 auto;
    font: var(
      --ws-typography-label-small,
      600 11px / 16px var(--ws-font-family, 'Google Sans Flex', system-ui, sans-serif)
    );
    font-weight: 700;
    padding: 2px var(--ws-spacing-sm, 8px);
  }

  :host([selected]) .badge {
    background: color-mix(in srgb, currentcolor 18%, transparent);
    color: currentcolor;
  }

  .arrow {
    block-size: 20px;
    inline-size: 20px;
    margin-inline-start: calc(-1 * var(--ws-spacing-xs, 4px));
  }

  .arrow svg {
    block-size: 100%;
    fill: currentcolor;
    inline-size: 100%;
  }

  :host([expanded]) .arrow {
    transform: rotate(180deg);
  }

  .children {
    display: grid;
    grid-template-rows: 0fr;
    margin-block-start: 0;
    opacity: 0;
    overflow: hidden;
    transition: grid-template-rows var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-emphasized, cubic-bezier(0.2, 0, 0, 1)),
      margin-block-start var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-standard, ease),
      opacity var(--ws-motion-duration-medium, 180ms)
        var(--ws-motion-easing-standard, ease);
  }

  .children-inner {
    display: flex;
    flex-direction: column;
    gap: var(--ws-spacing-xs, 4px);
    min-block-size: 0;
  }

  :host([expanded]) .children {
    grid-template-rows: 1fr;
    margin-block-start: var(--ws-spacing-xs, 4px);
    opacity: 1;
  }

  .progress-track {
    background: var(--ws-color-surface-variant, #f1f5f9);
    border-radius: var(--ws-shape-full, 999px);
    block-size: 4px;
    inline-size: 100%;
    margin-block-start: var(--ws-spacing-sm, 8px);
    overflow: hidden;
  }

  .progress-fill {
    background: var(--ws-color-primary, #6c5cff);
    block-size: 100%;
    border-radius: inherit;
    transition: inline-size var(--ws-motion-duration-medium, 180ms)
      var(--ws-motion-easing-standard, ease);
  }

  :host([selected]) .progress-track {
    background: color-mix(in srgb, currentcolor 28%, transparent);
  }

  :host([selected]) .progress-fill {
    background: currentcolor;
  }

  @keyframes ws-drawer-settings-spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;
