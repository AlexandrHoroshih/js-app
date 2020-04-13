import * as React from 'react';
import { css, cx } from 'linaria';
import { Button as ReakitButton } from "reakit/Button";

interface Props {
    className?: string
}

const testClass = css`
    color: red;
    border: 2px solid black;
`;

export const Button: React.FunctionComponent<Props> = React.memo((props: Props) => (
    <ReakitButton
        {...props}
        className={cx(testClass, props.className)}
    />
));
