import React from 'react';
import { Plate } from '.';
import { Background } from '../Background';
import { Button } from '../Button';

export default { title: 'UI/Plate' };

export const plate = () => (
  <Background style={{ padding: 20 }}>
    <Plate style={{ margin: 20 }}>stuff of any kind</Plate>
    <Plate style={{ margin: 20 }}>stuff of any kind kind kind kind kind</Plate>
    <Plate style={{ margin: 20 }}>
      <Plate style={{ margin: 20 }}>plate in plate</Plate>
    </Plate>
    <Plate style={{ margin: 20 }}>
      <Button primary>Click</Button>
    </Plate>
  </Background>
);

plate.story = {
  parameters: {
    info: {
      text: `
            Plate component. Represents styling block
            `,
      propTables: [Plate],
    },
  },
};
