import * as React from 'react';

import { ThemeProvider } from './ThemeProvider';
import { GlobalStylesProvider } from './GlobalStylesProvider';

export const CommonStylesProvider: React.FC = ({ children }) => (
  <GlobalStylesProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </GlobalStylesProvider>
);
