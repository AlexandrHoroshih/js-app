import * as React from 'react';

import { CommonStylesProvider } from '../theme';
import { AppLayout, AppContentWrapper } from '../features/AppLayout';
import { startLoguxClientFx, addLoguxAction } from '../app-domain/logux';

import { Button } from '../components/ui/Button';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp() {
  React.useLayoutEffect(() => {
    startLoguxClientFx({ withLog: true });
    addLoguxAction([
      { type: 'lalala', channel: 'none' },
      (action, meta) => console.log(action, meta),
    ]);
  });
  return (
    <CommonStylesProvider>
      <AppLayout>
        <AppContentWrapper>
          bla <Button>check</Button>
        </AppContentWrapper>
      </AppLayout>
    </CommonStylesProvider>
  );
}
