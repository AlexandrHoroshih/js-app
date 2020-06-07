import * as React from 'react';
import Link from 'next/link';
import { css } from 'linaria';

const header = css`
  display: flex;
  grid-area: header;
  align-items: center;
  padding: 16px;

  & > *:not(:last-child) {
    margin-right: 8px;
  }
`;

const appLogo = css`
  padding: 8px;
  color: #ffffff;
  & a {
    color: #ffffff;
  }
  cursor: pointer;
  background: linear-gradient(90deg, #f093fb 0%, #f5576c 100%);
  border-radius: 8px;
  transition: transform 0.25s ease;

  &:hover,
  &:focus,
  &:focus-within {
    transform: scale(1.15);
  }
`;

const AppLogo: React.FC = () => (
  <div className={appLogo}>
    <Link href="/">
      <a>App</a>
    </Link>
  </div>
);

export const AppHeader: React.FC = ({ children }) => {
  return (
    <header className={header}>
      <AppLogo />
      {children}
    </header>
  );
};
