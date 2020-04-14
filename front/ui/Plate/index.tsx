import * as React from 'react';
import { styled } from 'linaria/react';
import { MAIN } from '../../theme/colors';

export const Plate = styled.div`
  padding: 16px;
  background: ${MAIN};
  border-radius: 14px;
  box-shadow: 4px 4px 20px rgba(111, 140, 176, 0.41), -6px -6px 20px #ffffff,
    2px 2px 4px rgba(114, 142, 171, 0.1);
`;
