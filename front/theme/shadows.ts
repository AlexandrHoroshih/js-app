import { rgba } from 'polished';

// shadows are designed as here: https://www.figma.com/file/jegoPdeeeAK0kwnWQIFkDd/Figma-design-system-template-setproduct.com-Copy?node-id=82%3A35224

interface ColorShadowSettings {
  color: string;
  dp: 4 | 8 | 16 | 24;
}

export const getColoredShadow = ({ color, dp = 4 }: ColorShadowSettings) => {
  const thirdShadowParam = dp < 8 ? 8 : dp + 8;

  return `0px ${dp}px ${thirdShadowParam}px ${rgba(color, 0.2)}`;
};

export const shadow4dp = '0px 4px 8px rgba(8, 35, 48, 0.24)';
export const shadow8dp = '0px 8px 16px rgba(8, 35, 48, 0.2)';
export const shadow16dp = '0px 16px 24px rgba(8, 35, 48, 0.16)';
export const shadow24dp = '0px 24px 32px rgba(8, 35, 48, 0.12)';
