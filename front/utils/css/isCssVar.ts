export const cssVarRegExp = /--\S*/g;
export const cssVarCallRegExp = /var\((--\S*)\)/g;

export const isCssVar = (cssvar: string) => cssvar.match(cssVarRegExp) !== null;

export const getCssVars = (searchStr: string) =>
  searchStr.match(cssVarCallRegExp);
