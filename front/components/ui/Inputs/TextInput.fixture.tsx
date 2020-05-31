import * as React from 'react';
import { useValue } from 'react-cosmos/fixture';

import { TextInput } from './TextInput';

const TextInputFixture = () => {
  const [error] = useValue('Input: error', { defaultValue: '' });
  const [assist] = useValue('Input: assistie text', {
    defaultValue: 'used to help to understand',
  });

  const [label] = useValue('Input: label', { defaultValue: 'label' });
  const [placeholder] = useValue('Input: placeholder', {
    defaultValue: 'placeholder',
  });

  return (
    <div style={{ padding: 20 }}>
      <TextInput
        errorText={error}
        label={label}
        assistText={assist}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInputFixture;
