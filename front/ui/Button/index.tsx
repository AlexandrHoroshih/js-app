import * as React from 'react';
import { css, cx } from 'linaria';
import { Button as ReakitButton, ButtonProps } from 'reakit/Button';
import { darken } from 'polished';

import { MAIN, DARK } from '../../theme/colors';

interface CustomProps {
  className?: string;
  primary?: boolean;
  expanded?: boolean;
}

type Props = CustomProps & ButtonProps;

const basicButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  font-size: 21px;
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  color: ${DARK};
  text-align: center;
  letter-spacing: -0.4px;

  cursor: pointer;

  background: white;
  border: none;
  border-radius: 10px;
  box-shadow: 4px 4px 20px rgba(111, 140, 176, 0.41), -6px -6px 20px #ffffff,
    2px 2px 4px rgba(114, 142, 171, 0.1);

  &:hover,
  &:focus,
  &:focus-within {
    background: ${darken(0.02, 'white')};
    box-shadow: 2px 2px 10px rgba(111, 140, 176, 0.41), -3px -3px 10px #ffffff,
      1px 1px 2px rgba(114, 142, 171, 0.1);
  }

  &[disabled] {
    pointer-events: none;
    cursor: not-allowed;
    box-shadow: inset 4px 4px 14px #c1d5ee,
      inset -4px -4px 9px rgba(255, 255, 255, 0.88);
    opacity: 0.5;
  }
`;

const primaryButton = css`
  color: white;
  background: linear-gradient(270deg, #50caff 0%, #0478ff 100%);

  &:hover,
  &:focus,
  &:focus-within {
    background: linear-gradient(
      270deg,
      ${darken(0.1, '#50CAFF')} 0%,
      ${darken(0.1, '#0478FF')} 100%
    );
    box-shadow: none;
  }
`;

const expandedButton = css`
  width: 100%;
  padding: 20px 50px;
`;

export const Button: React.FC<Props> = React.memo((props: Props) => (
  <ReakitButton
    {...props}
    className={cx(
      basicButton,
      props.primary && primaryButton,
      props.expanded && expandedButton,
      props.className,
    )}
  />
));

Button.displayName = 'Button';
