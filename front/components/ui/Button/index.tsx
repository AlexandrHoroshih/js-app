import * as React from 'react';
import {
  Button as ReakitButton,
  ButtonProps as ReakitButtonProps,
} from 'reakit/Button';
import { css, cx } from 'linaria';
import { rem } from 'polished';

import { getColoredShadow } from '../../../theme/shadows';
import { makeColorSmooth, makeColorDarken } from '../../../theme/colors';
import { useFetchedCssVar } from '../../../utils/hooks/useFetchedCssVar';

type ButtonVariantToClassMap = {
  default: string;
  ghost: string;
  raised: string;
  clean: string;
};

type ButtonVariant = keyof ButtonVariantToClassMap;

interface Props {
  variant?: ButtonVariant;
  mainColor?: string;
  secondaryColor?: string;
}

type ButtonProps = ReakitButtonProps & Props;

type FabProps = ButtonProps;

const buttonBase = css`
  display: flex;
  align-items: center;

  width: max-content;
  padding: 12px 24px;

  font-size: ${rem(14)};
  font-style: normal;
  font-weight: 500;
  line-height: ${rem(16)};
  color: var(--btn-sec-color);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: ${rem(0.75)};

  cursor: pointer;
  background: var(--btn-main-color);
  border: none;
  border-radius: var(--b-radius-4);

  &:focus,
  &:focus-within {
    outline: 2px solid var(--btn-focus-color);
  }

  &[disabled] {
    color: lightgrey;
    background: grey;
    border: none;
    box-shadow: none;
  }
`;

const buttonDefault = css`
  box-shadow: ${getColoredShadow('var(--btn-main-color)', 8)};

  transition: transform 0.4s cubic-bezier(0.8, -0.8, 0, 2);

  &:hover {
    transform: scale(1.15, 1.1);
  }
`;

const buttonGhost = css`
  padding-right: 23px;
  padding-left: 23px;
  color: var(--btn-main-color);
  background: none;
  border: 1px solid var(--btn-main-color);

  transition: background-color 0.1s ease-in;

  &:hover {
    background: var(--btn-smooth-color);
  }
`;

const buttonRaised = css`
  color: var(--btn-main-color);
  background: var(--white);
  border: none;
  box-shadow: var(--shadow8dp);

  transition: transform 0.4s cubic-bezier(0.8, -0.8, 0, 2);

  &:hover {
    transform: scale(1.15, 1.1);
  }
`;

const buttonClean = css`
  color: var(--btn-main-color);
  background: none;
  border: none;

  transition: background-color 0.1s ease-in;

  &:hover {
    background: var(--btn-smooth-color);
  }
`;

const mapVariantToClass: ButtonVariantToClassMap = {
  default: buttonDefault,
  ghost: buttonGhost,
  raised: buttonRaised,
  clean: buttonClean,
};

export const Button = ({
  variant = 'default',
  className,
  mainColor = 'var(--blue-base)',
  secondaryColor = 'var(--white)',
  style,
  ...props
}: ButtonProps) => {
  const btnRef = React.useRef(null);
  const variantClass = mapVariantToClass[variant];
  const [smoothColor, setSmoothColor] = React.useState('var(--white)');
  const [focusColor, setFocusColor] = React.useState('var(--btn-main-color)');

  useFetchedCssVar('--btn-main-color', {
    ref: btnRef,
    onFetch: (val) => {
      setSmoothColor(makeColorSmooth(val));
      setFocusColor(makeColorDarken(val));
    },
    depsArray: [mainColor],
  });

  return (
    <ReakitButton
      {...props}
      className={cx(buttonBase, variantClass, className)}
      style={{
        ['--btn-main-color' as any]: mainColor,
        ['--btn-sec-color' as any]: secondaryColor,
        ['--btn-smooth-color' as any]: smoothColor,
        ['--btn-focus-color' as any]: focusColor,
        ...style,
      }}
      ref={btnRef}
    />
  );
};

const fabBase = css`
  justify-content: center;
  padding: 16px;
`;

export const Fab = ({ className, ...rest }: FabProps) => (
  <Button className={cx(fabBase, className)} {...rest} />
);

export const LinkButton: React.FC<ButtonProps> = ({ ...props }) => (
  <Button {...props} as="a" />
);
