import { declareAtom, declareAction } from '@reatom/core';

type TestPayload = { test: [string] };

export const initUser = declareAction<TestPayload>('initUser', (...args) => {
  console.log('reaction', args);
});

export const userAtom = declareAtom(['userAtom'], {}, (on) => [
  on(initUser, (state, payload) => {
    return { ...state, ...payload };
  }),
]);
