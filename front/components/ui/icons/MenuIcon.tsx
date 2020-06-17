import * as React from 'react';

interface Props {
  color?: string;
  width?: number;
  height?: number;
}

export const MenuIcon: React.FC<Props> = ({
  color = 'currentColor',
  width = 18,
  height = 12,
}) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0H18V2H0V0ZM0 5H18V7H0V5ZM0 10H18V12H0V10Z" fill={color} />
  </svg>
);
