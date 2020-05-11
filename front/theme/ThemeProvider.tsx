import * as React from 'react';
import { Box } from 'reakit/Box';
import { css, cx } from 'linaria';

import * as c from './colors';

// theme source: https://www.figma.com/file/jegoPdeeeAK0kwnWQIFkDd/Figma-design-system-template-(setproduct.com)-(Copy)?node-id=82%3A35224

const colorVars = css`
  --red-base: ${c.RED_BASE};
  --red-smooth: ${c.RED_SMOOTH};
  --blue-base: ${c.BLUE_BASE};
  --blue-smooth: ${c.BLUE_SMOOTH};
  --yellow-base: ${c.YELLOW_BASE};
  --yellow-smooth: ${c.YELLOW_SMOOTH};
  --green-base: ${c.GREEN_BASE};
  --green-smooth: ${c.GREEN_SMOOTH};
`;

export const ThemeProvider: React.FC = ({ children }) => {
  return <Box className={cx(colorVars)}>{children}</Box>;
};
