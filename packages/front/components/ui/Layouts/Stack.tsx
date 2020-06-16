import * as React from 'react';
import { styled } from 'linaria/react';

interface Props {
  stackGap?: number;
}

export const StackLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;

  & > *:not(:last-child) {
    margin-bottom: ${({ stackGap = 16 }: Props) => stackGap}px;
  }
`;
