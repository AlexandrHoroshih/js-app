import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';

import { Button } from '.';
import { StackLayout } from '../Layouts/Stack';

export default () => {
  const [disabled] = useValue('disabled', { defaultValue: false });

  return (
    <StackLayout style={{ padding: 16, maxWidth: 320 }}>
      <Button disabled={disabled}>button</Button>
      <Button variant="smooth">Smooth</Button>
    </StackLayout>
  );
};
