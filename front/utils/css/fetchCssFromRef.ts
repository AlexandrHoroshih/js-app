/**
 * @param propName - property name, can be regular css prop or custom prop (like --my-custom-prop-name)
 * @param refNode - DOM element which css prop will be fetched
 * @param isThrows - if true, then throws error if one happens. defaults to false
 */

export const fetchCssProp = (
  propName: string,
  refNode: HTMLElement | null | undefined,
  isThrows: boolean = false,
): string => {
  try {
    return getComputedStyle(
      refNode || document.documentElement,
    ).getPropertyValue(propName);
  } catch (error) {
    if (isThrows) throw error;
    // eslint-disable-next-line no-console
    console.error(error);

    return propName;
  }
};
