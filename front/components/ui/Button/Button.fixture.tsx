import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';

import { Button } from '.';
import { StackLayout } from '../Layouts/Stack';

export default () => {
  const [disabled] = useValue('Button:disabled', { defaultValue: false });
  const [mainColor] = useValue('Button:mainColor', {
    defaultValue: 'var(--blue-base)',
  });

  return (
    <div style={{ display: 'flex' }}>
      <StackLayout style={{ padding: 16 }}>
        <Button disabled={disabled} mainColor={mainColor}>
          button
        </Button>
        <Button disabled={disabled} variant="smooth" mainColor={mainColor}>
          Smooth
        </Button>
        <Button disabled={disabled} variant="raised" mainColor={mainColor}>
          Raised
        </Button>
        <Button disabled={disabled} variant="ghost" mainColor={mainColor}>
          Ghost
        </Button>
      </StackLayout>
      <StackLayout style={{ padding: 16 }}>
        <Button mainColor="var(--red-base)">button</Button>
        <Button variant="smooth" mainColor="var(--red-base)">
          Smooth
        </Button>
        <Button variant="raised" mainColor="var(--red-base)">
          Raised
        </Button>
        <Button variant="ghost" mainColor="var(--red-base)">
          Ghost
        </Button>
      </StackLayout>
      <StackLayout style={{ padding: 16 }}>
        <Button mainColor="var(--green-base)">button</Button>
        <Button variant="smooth" mainColor="var(--green-base)">
          Smooth
        </Button>
        <Button variant="raised" mainColor="var(--green-base)">
          Raised
        </Button>
        <Button variant="ghost" mainColor="var(--green-base)">
          Ghost
        </Button>
      </StackLayout>
      <StackLayout style={{ padding: 16 }}>
        <Button mainColor="var(--yellow-base)">button</Button>
        <Button variant="smooth" mainColor="var(--yellow-base)">
          Smooth
        </Button>
        <Button variant="raised" mainColor="var(--yellow-base)">
          Raised
        </Button>
        <Button variant="ghost" mainColor="var(--yellow-base)">
          Ghost
        </Button>
      </StackLayout>
    </div>
  );
};
