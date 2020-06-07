import * as React from 'react';
import { css } from 'linaria';

import { NavRoute } from './NavRoute';

const nav = css`
  display: flex;
  flex-flow: column nowrap;
  grid-area: nav;
  padding: 16px;

  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const AppNavigation: React.FC = () => {
  return (
    <nav className={nav}>
      <NavRoute href="/" name="Main" />
      <NavRoute href="/about" name="About" />
    </nav>
  );
};
