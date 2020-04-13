import * as React from 'react';
import { Layout } from '.';
import { text, boolean, number } from '@storybook/addon-knobs';

import { Button } from '../../ui/Button';

export default { title: 'Components/Layout' };

export const layout = () => (
  <Layout title="test-title">
    <Button>btn</Button>
  </Layout>
);
