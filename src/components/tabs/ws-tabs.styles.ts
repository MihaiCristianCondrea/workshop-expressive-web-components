import {css} from 'lit';

export const wsTabsStyles = css`
  :host {
    --ws-tabs-gap: var(--ws-spacing-xs, 4px);
    display: inline-flex;
    min-inline-size: 0;
  }

  :host([hidden]) {
    display: none;
  }

  .tabs {
    align-items: center;
    display: inline-flex;
    gap: var(--ws-tabs-gap);
    min-inline-size: 0;
  }

  :host([orientation='vertical']) {
    display: flex;
    inline-size: 100%;
  }

  :host([orientation='vertical']) .tabs {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    inline-size: 100%;
  }
`;
