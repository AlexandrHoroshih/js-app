import { rgba, darken } from 'polished';

export const makeColorSmooth = (color: string) => {
  try {
    return rgba(color, 0.2);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    return color;
  }
};

export const makeColorDarken = (color: string) => {
  try {
    return darken(0.2, color);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    return color;
  }
};
