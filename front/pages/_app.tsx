import * as React from 'react';

import { CommonStylesProvider } from '../theme';
import { AppLayout, AppContentWrapper } from '../features/AppLayout';
import { startLoguxClientFx, addLoguxAction } from '../app-domain/logux';

import { Button } from '../components/ui/Button';
import { TextInput } from '../components/ui/Inputs/TextInput';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp() {
  React.useEffect(() => {
    startLoguxClientFx({ withLog: true });
    console.log('logux!');
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
          <TextInput label="test" />
        </AppContentWrapper>
      </AppLayout>
    </CommonStylesProvider>
  );
}
