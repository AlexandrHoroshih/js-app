import * as React from 'react';
import { css, cx } from 'linaria';
import { rem } from 'polished';

import { getColoredShadow } from '../../../theme/shadows';

export interface TextInputCustomProps {
  className?: string;
  errorText?: string;
  assistText?: string;
  label: string;
  mainColor?: string;
  secondaryColor?: string;
  assistColor?: string;
}

export type TextInputProps = TextInputCustomProps & HTMLInputElement;

const inputBase = css`
  width: max-content;

  font-size: ${rem(16)};
  font-style: normal;
  font-weight: 500;
  line-height: ${rem(24)};

  background: none;
  border: none;
`;

const errorColor = css`
  --input-main-color: var(
    --red-base
  ) !important; /* to override style attribute */
`;

const labelStyle = css`
  font-size: ${rem(14)};
  font-weight: bold;
  line-height: ${rem(16)};
  color: var(--input-main-color);
  letter-spacing: ${rem(0.4)};
`;

const assistTextStyle = css`
  padding-left: 16px;
  font-size: ${rem(14)};
  line-height: ${rem(16)};
  color: var(--input-assist-color);
  letter-spacing: ${rem(0.4)};
`;

const assistToErrorMod = css`
  color: var(--input-main-color);
`;

const inputWrapper = css`
  display: flex;
  flex-flow: column nowrap;

  padding: 8px 16px;
  margin-bottom: 4px;

  background: var(--input-sec-color);
  border-bottom: 2px solid var(--input-main-color);
  border-radius: var(--b-radius-4) var(--b-radius-4) 0 0;

  box-shadow: var(--shadow4dp);

  &:hover,
  &:focus,
  &:focus-within {
    box-shadow: ${getColoredShadow('var(--input-assist-color)', 4)};
  }
`;

const inputLayout = css`
  display: flex;
  flex-flow: column nowrap;

  width: max-content;
`;

const inputError = css`
  box-shadow: ${getColoredShadow('var(--input-main-color)', 4)};

  &:focus,
  &:focus-within {
    box-shadow: ${getColoredShadow('var(--input-main-color)', 8)};
  }
`;

export const TextInput: React.FC<TextInputProps> = ({
  className,
  mainColor = 'var(--blue-base)',
  secondaryColor = 'var(--gray)',
  assistColor = 'var(--dark-gray)',
  style,
  errorText,
  assistText,
  name,
  label,
  ...props
}) => {
  const isError = errorText && errorText.length > 0;

  return (
    <div
      className={cx(inputLayout, isError && errorColor)}
      style={{
        ['--input-main-color' as any]: mainColor,
        ['--input-sec-color' as any]: secondaryColor,
        ['--input-assist-color' as any]: assistColor,
      }}
    >
      <div className={cx(inputWrapper, isError && inputError)}>
        <label className={labelStyle} htmlFor={name}>
          {label}
        </label>
        <input
          {...props}
          className={cx(inputBase, className)}
          name={name}
          id={name}
        />
      </div>
      {isError && (
        <span className={cx(assistTextStyle, assistToErrorMod)}>
          {errorText}
        </span>
      )}
      <span className={assistTextStyle}>{assistText}</span>
    </div>
  );
};
