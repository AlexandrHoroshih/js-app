import { useState, useEffect, MutableRefObject } from 'react';

import { fetchCssVar } from '../css/fetchCssFromRef';

type DependencyArray = any[];

type Options = {
  ref?: MutableRefObject<null>;
  onFetch?: (str: string) => void;
  depsArray?: DependencyArray;
};

/** Fetches css var from provided React ref or root node by default.
 * returns fetched value or null if no value was fetched.
 *
 * @param varToFetch - css custom property string which value to fetch (pattern like "--my-css-var", see https://developer.mozilla.org/en-US/docs/Web/CSS/--*).
 * @param Options - object with keys ref, onFetch, depsArray,
 * where
 * @param ref - React ref object. Not required.
 * @param onFetch - function to call, when fetch is performed, first arg is fetched value (which can be undefined). Not required
 * @param depsArray - array of additional deps to React.useEffect hook under the hood, which already tracks ref.current, can think like "refetch if this things change". Not required
 *
 */

export const useFetchedCssVar = (
  varToFetch: string,
  { ref = { current: null }, onFetch, depsArray = [] }: Options,
) => {
  const [currentValue, setValue] = useState<string | null>(null);

  useEffect(() => {
    const fetchedVar = fetchCssVar(
      varToFetch,
      ref.current || document.documentElement,
    );

    if (fetchedVar) {
      setValue(fetchedVar);
    }

    if (typeof onFetch === 'function') {
      onFetch(fetchedVar);
    }
  }, [ref.current, ...depsArray]);

  return currentValue;
};
