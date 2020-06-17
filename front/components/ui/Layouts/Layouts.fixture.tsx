import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';

import { StackLayout } from './Stack';

const Slot = ({ width = 320, height = 320, number = 1 }) => (
  <div
    style={{
      backgroundColor: 'darkgreen',
      color: 'white',
      fontSize: 20,
      padding: 8,
      width,
      height,
    }}
  >
    {number}
  </div>
);

const getRange = (num = 1): number[] => {
  const res = [];

  for (let i = 0; i < num; i += 1) {
    res.push(i + 1);
  }

  return res;
};

const LayoutsFixture: React.FC = () => {
  const [stackChilds] = useValue('Stack:number of slots', { defaultValue: 1 });
  const [stackGap] = useValue('Stack:stackGap', { defaultValue: 16 });

  return (
    <div style={{ padding: 16 }}>
      <h2>Stack</h2>
      <p>Just a stack of elements with gap</p>
      <StackLayout stackGap={stackGap}>
        {getRange(stackChilds).map((n) => (
          <Slot key={n} number={n} />
        ))}
      </StackLayout>
    </div>
  );
};

export default LayoutsFixture;
