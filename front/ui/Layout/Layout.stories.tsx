import * as React from 'react';
import { Layout } from '.';

import { Button } from '../Button';

export default { title: 'Components/Layout' };

export const layout = () => (
  <Layout title="test-title">
    <Button>btn</Button>
  </Layout>
);

layout.story = {
  parameters: {
    info: {
      text: `
              layout component.

              Must be used to render shared-between-pages layout parts,
              like footer
              `,
      propTables: [Layout],
    },
  },
};
