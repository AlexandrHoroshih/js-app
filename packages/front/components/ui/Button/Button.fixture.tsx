import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';

import { Button } from '.';
import { StackLayout } from '../Layouts/Stack';

export default () => {
  const [disabled] = useValue('Button:disabled', { defaultValue: false });
  const [mainColor] = useValue('Button:mainColor', {
    defaultValue: 'var(--blue-base)',
  });
  const [secondaryColor] = useValue('Button:mainColor', {
    defaultValue: 'var(--blue-base)',
  });

  return (
    <div style={{ display: 'flex' }}>
      <StackLayout style={{ padding: 16 }}>
        <Button disabled={disabled} mainColor={mainColor}>
          button
        </Button>
        <Button
          disabled={disabled}
          variant="raised"
          mainColor={mainColor}
          secondaryColor={secondaryColor}
        >
          Raised
        </Button>
        <Button
          disabled={disabled}
          variant="ghost"
          mainColor={mainColor}
          secondaryColor={secondaryColor}
        >
          Ghost
        </Button>
        <Button
          variant="clean"
          mainColor={mainColor}
          secondaryColor={secondaryColor}
        >
          Just text
        </Button>
      </StackLayout>
      <StackLayout style={{ padding: 16 }}>
        <Button mainColor="var(--red-base)">button</Button>
        <Button variant="raised" mainColor="var(--red-base)">
          Raised
        </Button>
        <Button variant="ghost" mainColor="var(--red-base)">
          Ghost
        </Button>
        <Button variant="clean" mainColor="var(--red-base)">
          Just text
        </Button>
      </StackLayout>
      <StackLayout style={{ padding: 16 }}>
        <Button mainColor="var(--green-base)">button</Button>
        <Button variant="raised" mainColor="var(--green-base)">
          Raised
        </Button>
        <Button variant="ghost" mainColor="var(--green-base)">
          Ghost
        </Button>
        <Button variant="clean" mainColor="var(--green-base)">
          Just text
        </Button>
      </StackLayout>
      <StackLayout style={{ padding: 16 }}>
        <Button mainColor="var(--yellow-base)">button</Button>
        <Button variant="raised" mainColor="var(--yellow-base)">
          Raised
        </Button>
        <Button variant="ghost" mainColor="var(--yellow-base)">
          Ghost
        </Button>
        <Button variant="clean" mainColor="var(--yellow-base)">
          Just text
        </Button>
      </StackLayout>
    </div>
  );
};
