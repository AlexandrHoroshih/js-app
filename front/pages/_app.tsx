import * as React from 'react';
import { AppProps } from 'next/app';

import { CommonStylesProvider } from '../theme';
import { AppLayout, AppContentWrapper } from '../components/features/AppLayout';
import { AppHeader } from '../components/features/AppHeader';
import { AppNavigation } from '../components/features/AppNavigation';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CommonStylesProvider>
      <AppLayout>
        <AppHeader />
        <AppNavigation />
        <AppContentWrapper>
          <Component {...pageProps} />
        </AppContentWrapper>
      </AppLayout>
    </CommonStylesProvider>
  );
}
