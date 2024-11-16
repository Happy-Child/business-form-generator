import { MutableRefObject, RefCallback, useCallback } from 'react';

import { isFunction } from '_utils/typeChecking';

type CombinedRef<T extends HTMLElement> =
  | RefCallback<T | null>
  | MutableRefObject<T | null>
  | null;

type UseCombinedRefs<T extends HTMLElement> = (el: T | null) => void;

export const useCombinedRefs = <T extends HTMLElement>(
  ...refs: CombinedRef<T>[]
): UseCombinedRefs<T> => {
  return useCallback((el: T | null) => {
    refs.forEach((ref) => {
      if (!ref) {
        return;
      }

      if (isFunction(ref)) {
        ref(el);
      } else {
        ref.current = el;
      }
    });
  }, refs);
};