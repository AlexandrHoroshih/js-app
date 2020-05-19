export const cssVarRegExp = /--\S*/g;
export const cssVarCallRegExp = /var\((--\S*)\)/g;

export const isCssVar = (cssvar: string) => cssvar.match(cssVarRegExp);

export const isCssVarCall = (cssvar: string) => cssvar.match(cssVarCallRegExp);
