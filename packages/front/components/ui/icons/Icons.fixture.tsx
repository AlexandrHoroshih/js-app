import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';

import { StackLayout } from '../Layouts/Stack';
import { Button } from '../Button';
import { MenuIcon } from './MenuIcon';

const IconsFixture = () => {
  const [iconColor] = useValue('Icons:icon color', { defaultValue: 'white' });

  return (
    <StackLayout>
      <MenuIcon color="var(--blue-base" />
      <Button>
        <MenuIcon color={iconColor} />
        Menu
      </Button>
    </StackLayout>
  );
};

export default IconsFixture;
