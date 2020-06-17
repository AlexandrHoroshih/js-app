import { isCssVar } from './isCssVar';

/**
 * based on polished.js cssVar helper https://github.com/styled-components/polished/blob/master/src/helpers/cssVar.js
 * but can fetch from other DOM element than the root one (use "refNode" param).
 * if provided string is not cssVar - its just passed through.
 * if it is a cssVar - returns its value, if there is one on provided refNode.
 */

export const fetchCssVar = (
  cssvar: string,
  refNode: HTMLElement | null,
): string => {
  if (!isCssVar(cssvar) || !refNode) return cssvar;

  let value = null;

  try {
    if (refNode || document.documentElement) {
      value = getComputedStyle(refNode).getPropertyValue(cssvar);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    return cssvar;
  }

  if (value) {
    return value;
  }

  return cssvar;
};
