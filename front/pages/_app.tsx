import * as React from 'react';
import { AppProps } from 'next/app';

import { CommonStylesProvider } from '../theme';
import { StoreProvider } from '../store/StoreProvider';
import { AppLayout, AppContentWrapper } from '../features/AppLayout';
import { AppHeader } from '../features/AppHeader';
import { AppNavigation } from '../features/AppNavigation';
import { Login } from '../features/Login';

const { useLayoutEffect } = React;

const appStore = initStore();

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  useLayoutEffect(() => {
    const client = initLoguxClient();

    console.log('client', client);
  }, []);

  return (
    <StoreProvider store={appStore}>
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
    </StoreProvider>
  );
}
