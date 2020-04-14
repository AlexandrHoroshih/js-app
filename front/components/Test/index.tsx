import React from 'react';
import { css } from 'linaria';

import { Button } from '../../ui/Button';

const buttons = css`
  display: flex;
  flex-flow: row nowrap;
`;

export const Test: React.FC = () => {
  const [text, setText] = React.useState('button II');

  const testBackend = async () => {
    const res = await fetch('http://localhost:3001/testing');
    const json = await res.json();

    if (json.test.length > 0) {
      setText(`request succeded, response: ${json.test}`);
    }
  };

  return (
    <div className={buttons}>
      <Button style={{ marginRight: 20 }}>button I</Button>
      <Button primary onClick={testBackend}>
        {text}
      </Button>
    </div>
  );
};
