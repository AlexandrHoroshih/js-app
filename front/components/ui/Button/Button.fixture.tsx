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
    <StackLayout style={{ padding: 16 }}>
      <Button disabled={disabled} mainColor={mainColor}>
        button
      </Button>
      <Button variant="smooth" mainColor={mainColor}>
        Smooth
      </Button>
      <Button variant="raised" mainColor={mainColor}>
        Raised
      </Button>
      <Button variant="ghost" mainColor={mainColor}>
        Ghost
      </Button>
    </StackLayout>
  );
};
