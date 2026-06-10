import {css} from 'lit';

export const wsTabsStyles = css`
  :host {
    --ws-tabs-gap: 4px;
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
`;
