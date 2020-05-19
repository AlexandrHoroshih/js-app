import * as React from 'react';
import {
  Button as ReakitButton,
  ButtonProps as ReakitButtonProps,
} from 'reakit/Button';
import { css, cx } from 'linaria';
import { rem } from 'polished';

import { getColoredShadow } from '../../../theme/shadows';
import { makeColorSmooth } from '../../../theme/colors';

type ButtonVariantToClassMap = {
  default: string;
  ghost: string;
  smooth: string;
  raised: string;
};

type ButtonVariant = keyof ButtonVariantToClassMap;

interface Props {
  variant?: ButtonVariant;
  mainColor?: string;
  secondaryColor?: string;
}

type ButtonProps = ReakitButtonProps & Props;

const buttonBase = css`
  display: flex;
  align-items: center;

  width: max-content;
  padding: 12px 24px;

  font-size: ${rem(14)};
  font-style: normal;
  font-weight: 500;
  line-height: ${rem(16)};
  color: var(--white);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: ${rem(0.75)};

  cursor: pointer;
  background: var(--btn-main-color);
  border: none;
  border-radius: var(--b-radius-4);
  box-shadow: ${getColoredShadow('var(--btn-main-color)', 8)};
  transition: transform 0.4s cubic-bezier(0.8, -0.8, 0, 2);

  &:hover {
    transform: scale(1.2, 1.1);
  }
`;

const buttonSmooth = css`
  color: var(--btn-main-color);
  background: var(--blue-smooth);
  box-shadow: none;
`;

const buttonGhost = css`
  color: var(--btn-main-color);
  background: none;
  border: 1px solid var(--btn-main-color);
  box-shadow: none;
`;

const buttonRaised = css`
  color: var(--btn-main-color);
  background: none;
  border: none;
  box-shadow: var(--shadow8dp);
`;

const mapVariantToClass: ButtonVariantToClassMap = {
  default: '',
  smooth: buttonSmooth,
  ghost: buttonGhost,
  raised: buttonRaised,
};

export const Button = ({
  variant = 'default',
  className,
  mainColor = 'var(--blue-base)',
  secondaryColor = 'var(--white)',
  ...props
}: ButtonProps) => {
  const variantClass = mapVariantToClass[variant];

  return (
    <ReakitButton
      {...props}
      className={cx(buttonBase, variantClass, className)}
      style={{ ['--btn-main-color' as any]: mainColor }}
    />
  );
};
