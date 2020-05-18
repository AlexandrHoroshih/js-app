import * as React from 'react';
import { Box } from 'reakit/Box';
import { css, cx } from 'linaria';

import * as c from './colors';
import * as s from './shadows';

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

  --black: ${c.BLACK_BASE};
  --white: ${c.WHITE_BASE};
`;

const shadowVars = css`
  --shadow4dp: ${s.shadow4dp};
  --shadow8dp: ${s.shadow8dp};
  --shadow16dp: ${s.shadow16dp};
  --shadow24dp: ${s.shadow24dp};

  --blue-shadow4dp: ${s.getColoredShadow(c.BLUE_BASE)};
  --blue-shadow8dp: ${s.getColoredShadow(c.BLUE_BASE, 8)};
  --blue-shadow16dp: ${s.getColoredShadow(c.BLUE_BASE, 16)};
  --blue-shadow24dp: ${s.getColoredShadow(c.BLUE_BASE, 24)};
`;

const miscVars = css`
  --b-radius-4: 4px;
  --b-radius-6: 6px;
`;

export const ThemeProvider: React.FC = ({ children }) => {
  return <Box className={cx(colorVars, shadowVars, miscVars)}>{children}</Box>;
};
