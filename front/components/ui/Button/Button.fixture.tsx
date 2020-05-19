import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';

import { Button } from '.';
import { StackLayout } from '../Layouts/Stack';

export default () => {
  const [disabled] = useValue('disabled', { defaultValue: false });
  const [mainColor] = useValue('button main color', {
    defaultValue: 'var(--blue-base)',
  });

  return (
    <StackLayout style={{ padding: 16, maxWidth: 320 }}>
      <Button disabled={disabled} mainColor={mainColor}>
        button
      </Button>
      <Button variant="smooth">Smooth</Button>
      <Button variant="raised">Raised</Button>
      <Button variant="ghost">Ghost</Button>
    </StackLayout>
  );
};
