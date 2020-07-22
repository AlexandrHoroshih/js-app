export const getColoredShadow = (color = 'black', dp = 4) => {
  const thirdShadowParam = dp < 8 ? 8 : dp + 8;

  return `0px ${dp}px ${thirdShadowParam}px ${color}}`;
};
