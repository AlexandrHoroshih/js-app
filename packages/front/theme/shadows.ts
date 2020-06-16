// shadows are designed as here: https://www.figma.com/file/jegoPdeeeAK0kwnWQIFkDd/Figma-design-system-template-setproduct.com-Copy?node-id=82%3A35224

type DP = 4 | 8 | 16 | 24;

export const getColoredShadow = (color: string, dp: DP = 4) => {
  const thirdShadowParam = dp < 8 ? 8 : dp + 8;

  return `0px ${dp}px ${thirdShadowParam}px ${color}}`;
};

export const shadow4dp = '0px 4px 8px rgba(8, 35, 48, 0.24)';
export const shadow8dp = '0px 8px 16px rgba(8, 35, 48, 0.2)';
export const shadow16dp = '0px 16px 24px rgba(8, 35, 48, 0.16)';
export const shadow24dp = '0px 24px 32px rgba(8, 35, 48, 0.12)';
