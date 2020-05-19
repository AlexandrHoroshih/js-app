import { isCssVar } from './isCssVar';

const rootNode = document.documentElement || document.querySelector('body');

/**
 * based on polished.js cssVar helper https://github.com/styled-components/polished/blob/master/src/helpers/cssVar.js
 * but can fetch from other DOM element than the root one (use "ref" param).
 * if provided string is not cssVar - its just passed through.
 * if it is a cssVar - returns its value, if there is one on provided ref.
 */

export const fetchCssVar = (
  cssvar: string,
  ref: HTMLElement | null = rootNode,
): string => {
  if (!isCssVar(cssvar)) return cssvar;

  let value = null;

  if (ref) {
    value = getComputedStyle(ref).getPropertyValue(cssvar);
  }

  if (value) {
    return value;
  }

  return cssvar;
};
