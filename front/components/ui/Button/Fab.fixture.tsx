import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';

import { Fab } from '.';
import { StackLayout } from '../Layouts/Stack';
import { MenuIcon } from '../icons/MenuIcon';

export default () => {
  const [disabled] = useValue('Fab:disabled', { defaultValue: false });
  const [mainColor] = useValue('Fab:mainColor', {
    defaultValue: 'var(--blue-base)',
  });
  const [isCircle] = useValue('Fab:isCircle', {
    defaultValue: false,
  });

  return (
    <div style={{ display: 'flex' }}>
      <StackLayout style={{ padding: 16 }}>
        <Fab disabled={disabled} isCircle={isCircle} mainColor={mainColor}>
          <MenuIcon />
        </Fab>
        <Fab
          disabled={disabled}
          isCircle={isCircle}
          variant="clean"
          mainColor={mainColor}
        >
          <MenuIcon />
        </Fab>
        <Fab
          disabled={disabled}
          isCircle={isCircle}
          variant="raised"
          mainColor={mainColor}
        >
          <MenuIcon />
        </Fab>
        <Fab
          disabled={disabled}
          isCircle={isCircle}
          variant="ghost"
          mainColor={mainColor}
        >
          <MenuIcon />
        </Fab>
      </StackLayout>
      <StackLayout style={{ padding: 16 }}>
        <Fab mainColor="var(--red-base)">
          <MenuIcon />
        </Fab>
        <Fab variant="clean" mainColor="var(--red-base)">
          <MenuIcon />
        </Fab>
        <Fab variant="raised" mainColor="var(--red-base)">
          <MenuIcon />
        </Fab>
        <Fab variant="ghost" mainColor="var(--red-base)">
          <MenuIcon />
        </Fab>
      </StackLayout>
      <StackLayout style={{ padding: 16 }}>
        <Fab mainColor="var(--green-base)">
          <MenuIcon />
        </Fab>
        <Fab variant="clean" mainColor="var(--green-base)">
          <MenuIcon />
        </Fab>
        <Fab variant="raised" mainColor="var(--green-base)">
          <MenuIcon />
        </Fab>
        <Fab variant="ghost" mainColor="var(--green-base)">
          <MenuIcon />
        </Fab>
      </StackLayout>
      <StackLayout style={{ padding: 16 }}>
        <Fab mainColor="var(--yellow-base)">
          <MenuIcon />
        </Fab>
        <Fab variant="clean" mainColor="var(--yellow-base)">
          <MenuIcon />
        </Fab>
        <Fab variant="raised" mainColor="var(--yellow-base)">
          <MenuIcon />
        </Fab>
        <Fab variant="ghost" mainColor="var(--yellow-base)">
          <MenuIcon />
        </Fab>
      </StackLayout>
    </div>
  );
};
