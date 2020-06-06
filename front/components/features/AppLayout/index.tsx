import * as React from 'react';
import { css } from 'linaria';

const appLayout = css`
  display: grid;
  grid-template:
    'header' minmax(64px, auto)
    'content' 1fr
    'nav' minmax(64px, auto)
    / 1fr;
  min-height: 100vh;

  @media (min-width: 768px) {
    grid-template:
      'header header' minmax(64px, auto)
      'nav content' 1fr
      / minmax(200px, auto) 1fr;
  }
`;

export const AppLayout: React.FC = ({ children }) => {
  return <div className={appLayout}>{children}</div>;
};

const appContent = css`
  grid-area: content;
`;

export const AppContentWrapper: React.FC = ({ children }) => {
  return <div className={appContent}>{children}</div>;
};
