import * as React from 'react';
import { Box } from 'reakit/Box';
import { css, cx } from 'linaria';

import * as c from './colors';
import * as s from './shadows';

// theme source: https://www.figma.com/file/jegoPdeeeAK0kwnWQIFkDd/Figma-design-system-template-(setproduct.com)-(Copy)?node-id=82%3A35224

const colorVars = css`
  --red-base: ${c.RED_BASE};
  --blue-base: ${c.BLUE_BASE};
  --yellow-base: ${c.YELLOW_BASE};
  --green-base: ${c.GREEN_BASE};

  --black: ${c.BLACK_BASE};
  --gray: ${c.GRAY_BASE};
  --dark-gray: ${c.DARK_GRAY_BASE};
  --white: ${c.WHITE_BASE};
`;

const shadowVars = css`
  --shadow4dp: ${s.shadow4dp};
  --shadow8dp: ${s.shadow8dp};
  --shadow16dp: ${s.shadow16dp};
  --shadow24dp: ${s.shadow24dp};
`;

const miscVars = css`
  --b-radius-4: 4px;
  --b-radius-6: 6px;
`;

export const ThemeProvider: React.FC = ({ children }) => {
  return <Box className={cx(colorVars, shadowVars, miscVars)}>{children}</Box>;
};
