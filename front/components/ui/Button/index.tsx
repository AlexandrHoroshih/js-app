import {
  Button as ReakitButton,
  ButtonProps as ReakitButtonProps,
} from 'reakit/Button';
import { css, cx } from 'linaria';
import { rem } from 'polished';

interface Props {
  variant: 'default' | 'ghost' | 'smooth' | 'raised';
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

  background: var(--blue-base);
  border: none;
  border-radius: var(--b-radius);
`;

export const Button = ({
  variant = 'default',
  className,
  ...props
}: ButtonProps) => (
  <ReakitButton {...props} className={cx(buttonBase, className)} />
);
