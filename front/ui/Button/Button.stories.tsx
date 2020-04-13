import * as React from 'react';
import { Button } from '.';
import { text, boolean, number } from '@storybook/addon-knobs';

import { Background } from '../Background';

export default { title: 'UI/Button' };

export const standartButton = () => (
  <>
    <Background style={{ padding: 20 }}>
      <Button
        onClick={(e) => console.log('ha', e)}
        disabled={boolean('Disabled', false)}
        primary={boolean('Primary', false)}
        expanded={boolean('Expanded', false)}
      >
        {text('Button text', 'Click me')}
      </Button>
    </Background>
  </>
);
standartButton.story = {
  parameters: {
    info: {
      text: `
            simple frinedly button
            `,
      propTables: [Button],
    },
  },
};
