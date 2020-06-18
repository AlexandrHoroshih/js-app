import {
  useEffect,
  useRef,
  MutableRefObject,
  RefCallback,
  RefObject,
} from 'react';

type MutableRefType =
  | MutableRefObject<any>
  | RefCallback<any>
  | null
  | undefined;

/** Takes group of ref's as the arguments and combines them into one
 *
 * @param refs - react ref's of different kind
 *
 */

export const useComboRef = (...refs: MutableRefType[]): RefObject<any> => {
  const finalRef = useRef();

  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(finalRef.current);
      } else {
        ref.current = finalRef.current;
      }
    });
  }, [refs]);

  return finalRef;
};
