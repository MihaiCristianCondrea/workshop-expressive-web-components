import {css} from 'lit';

export const wsPageStyles = css`
  :host {
    display: block;
    width: min(100% - 32px, 1120px);
    margin: 0 auto;
    padding: var(--ws-page-padding-vertical, 48px) 0 24px;
    font-family: var(--ws-font-family, 'Google Sans Flex', system-ui, sans-serif);
  }

  @media (max-width: 820px) {
    :host {
      padding-top: 24px;
    }
  }
`;
