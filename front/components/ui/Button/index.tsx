import * as React from 'react';
import {
  Button as ReakitButton,
  ButtonProps as ReakitButtonProps,
} from 'reakit/Button';
import { css, cx } from 'linaria';
import { rem } from 'polished';

interface Props {
  variant?: 'default' | 'ghost' | 'smooth' | 'raised';
}

type ButtonProps = ReakitButtonProps & Props;

const buttonBase = css`
  display: flex;
  align-items: center;
  padding: 8px 24px;

  font-size: ${rem(14)};
  font-style: normal;
  font-weight: 500;
  line-height: ${rem(16)};
  color: var(--white);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: ${rem(0.75)};

  cursor: pointer;
  background: var(--blue-base);
  border: none;
  border-radius: var(--b-radius-4);
  box-shadow: var(--blue-shadow8dp);
  transition: transform 0.4s cubic-bezier(0.8, -0.8, 0, 2);

  &:hover {
    transform: scale(1.2, 1.1);
  }
`;

const buttonSmooth = css`
  color: var(--blue-base);
  background: var(--blue-smooth);
  box-shadow: none;
`;

const mapVariantToClass = {
  default: '',
  smooth: buttonSmooth,
};

export const Button = ({
  variant = 'default',
  className,
  ...props
}: ButtonProps) => {
  const variantClass = mapVariantToClass[variant];

  return (
    <ReakitButton
      {...props}
      className={cx(buttonBase, variantClass, className)}
    />
  );
};
