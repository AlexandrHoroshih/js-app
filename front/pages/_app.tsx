import * as React from 'react';
import { AppProps } from 'next/app';

import { CommonStylesProvider } from '../theme';
import { AppLayout, AppContentWrapper } from '../features/AppLayout';
import { AppHeader } from '../features/AppHeader';
import { AppNavigation } from '../features/AppNavigation';
import { Login } from '../features/Login';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CommonStylesProvider>
      <AppLayout>
        <AppHeader>
          <Login />
        </AppHeader>
        <AppNavigation />
        <AppContentWrapper>
          <Component {...pageProps} />
        </AppContentWrapper>
      </AppLayout>
    </CommonStylesProvider>
  );
}
