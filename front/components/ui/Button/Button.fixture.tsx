import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';

import { Button } from '.';

export default () => {
  const [disabled] = useValue('disabled', { defaultValue: false });

  return (
    <div style={{ padding: 16 }}>
      <Button disabled={disabled}>button</Button>
    </div>
  );
};
