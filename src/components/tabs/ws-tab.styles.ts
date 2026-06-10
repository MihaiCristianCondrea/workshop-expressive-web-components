import {css} from 'lit';

export const wsTabStyles = css`
  :host {
    color: var(--ws-color-on-surface-variant, #64748b);
    display: inline-flex;
    font-family: var(
      --ws-font-family,
      'Google Sans Flex',
      'Google Sans',
      Roboto,
      system-ui,
      sans-serif
    );
  }

  :host([hidden]) {
    display: none;
  }

  .tab {
    align-items: center;
    border-radius: var(--ws-tab-radius, var(--ws-shape-medium, 8px));
    box-sizing: border-box;
    color: inherit;
    display: inline-flex;
    gap: var(--ws-spacing-sm, 8px);
    font: var(
      --ws-typography-label-medium,
      700 12px / 16px var(--ws-font-family, system-ui, sans-serif)
    );
    min-block-size: var(--ws-tab-height, 48px);
    padding: 0 var(--ws-spacing-lg, 16px);
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: background-color 180ms cubic-bezier(0.2, 0, 0, 1),
      color 180ms cubic-bezier(0.2, 0, 0, 1);
  }

  .tab::after {
    background: var(--ws-color-primary, #6c5cff);
    block-size: 3px;
    border-radius: 3px 3px 0 0;
    content: '';
    inset-block-end: 6px;
    inset-inline: var(--ws-spacing-lg, 16px);
    position: absolute;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 260ms cubic-bezier(0.2, 0, 0, 1);
  }

  .tab:hover {
    background: var(--ws-color-primary-container, #f5f3ff);
    color: var(--ws-color-primary, #6c5cff);
  }

  :host([selected]) {
    color: var(--ws-color-primary, #6c5cff);
  }

  :host([selected]) .tab {
    background: color-mix(
      in srgb,
      var(--ws-color-primary, #6c5cff) 12%,
      transparent
    );
  }

  :host([selected]) .tab::after {
    transform: scaleX(1);
  }

  .icon,
  ::slotted([slot='icon']) {
    align-items: center;
    display: inline-flex;
    font-size: 1em;
    justify-content: center;
    line-height: 1;
  }
`;
