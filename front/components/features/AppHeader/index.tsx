import * as React from 'react';
import { css } from 'linaria';

const header = css`
  grid-area: header;
  background: var(--blue-base);
`;

export const AppHeader: React.FC = ({ ...props }) => {
  return <header className={header}>header</header>;
};
