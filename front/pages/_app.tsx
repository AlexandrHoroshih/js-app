import * as React from 'react';

import { CommonStylesProvider } from '../theme';
import { StoreProvider } from '../store/StoreProvider';
import { AppLayout, AppContentWrapper } from '../features/AppLayout';
import { AppHeader } from '../features/AppHeader';
// import { AppNavigation } from '../features/AppNavigation';
import { Login } from '../features/Auth';

interface AppProps {
  Component: React.FC;
}

// This default export is required in a new `pages/_app.js` file.
const MyApp: React.FC<AppProps> = ({ Component }) => {
  return (
    <StoreProvider>
      <CommonStylesProvider>
        <AppLayout>
          <AppHeader>
            <Login />
          </AppHeader>
          {/* <AppNavigation /> */}
          <AppContentWrapper>
            <Component />
          </AppContentWrapper>
        </AppLayout>
      </CommonStylesProvider>
    </StoreProvider>
  );
};

export default MyApp;
