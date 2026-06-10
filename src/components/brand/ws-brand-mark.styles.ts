import {css} from 'lit';

export const wsBrandMarkStyles = css`
  :host {
    --ws-brand-mark-size: 48px;
    --ws-brand-mark-gradient: linear-gradient(
      135deg,
      var(--ws-color-primary, #6c5cff),
      var(--ws-gradient-accent, #06b6d4)
    );
    color: var(--ws-color-on-surface, #0f172a);
    display: inline-block;
    font-family: var(
      --ws-font-family,
      'Google Sans Flex',
      'Google Sans',
      Roboto,
      system-ui,
      sans-serif
    );
    gap: var(--ws-spacing-md, 12px);
    min-inline-size: 0;
  }

  .root {
    align-items: center;
    display: inline-flex;
    gap: inherit;
    min-inline-size: 0;
  }

  :host([hidden]) {
    display: none;
  }

  .mark {
    align-items: center;
    background: var(--ws-brand-mark-gradient);
    block-size: var(--ws-brand-mark-size);
    border-radius: var(--ws-brand-mark-radius, var(--ws-shape-large, 12px));
    box-sizing: border-box;
    color: var(--ws-color-on-primary, #ffffff);
    display: inline-flex;
    flex: 0 0 auto;
    font-size: calc(var(--ws-brand-mark-size) * 0.42);
    font-weight: 900;
    inline-size: var(--ws-brand-mark-size);
    justify-content: center;
    letter-spacing: -0.04em;
    line-height: 1;
    overflow: hidden;
    user-select: none;
  }

  .text {
    display: grid;
    gap: 2px;
    min-inline-size: 0;
  }

  .title,
  .subtitle {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .title {
    color: var(--ws-color-on-surface, #0f172a);
    font: var(
      --ws-typography-title-medium,
      600 18px / 24px var(--ws-font-family, system-ui, sans-serif)
    );
  }

  .subtitle {
    color: var(--ws-color-on-surface-variant, #64748b);
    font: var(
      --ws-typography-label-medium,
      600 12px / 16px var(--ws-font-family, system-ui, sans-serif)
    );
  }
`;
