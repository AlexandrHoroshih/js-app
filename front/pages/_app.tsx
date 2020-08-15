import * as React from 'react';

import { RoutesContent } from './_routes';

import { CommonStylesProvider } from '../theme';
import { AppLayout, AppContentWrapper } from '../features/AppLayout';

export default function MyApp() {
  return (
    <CommonStylesProvider>
      <AppLayout>
        <AppContentWrapper>
          <RoutesContent />
        </AppContentWrapper>
      </AppLayout>
    </CommonStylesProvider>
  );
}
