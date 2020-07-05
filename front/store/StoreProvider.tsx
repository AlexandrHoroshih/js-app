import * as React from 'react';
import { createStore, combine, declareAction, declareAtom } from '@reatom/core';
import { context } from '@reatom/react';
import { observe } from '@reatom/observable';
import { connectReduxDevtools } from '@reatom/debug';

import { userAtom, initUser } from '../features/Auth/model';

import { createLoguxClient } from '../logux';

const inc = declareAction('inc');
const counterAtom = declareAtom('counter', 0, (on) => [on(inc, (s) => s + 1)]);

interface StoreProviderProps {}

const { Provider } = context;

const rootAtom = combine([userAtom]);

const store = createStore(rootAtom);

store.subscribe(counterAtom, (s) => console.log('counter', s));

const loguxClient = createLoguxClient();

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  React.useEffect(() => {
    return connectReduxDevtools(store);
  });

  React.useLayoutEffect(() => {
    loguxClient.start();
    observe(store).subscribe((action) =>
      loguxClient.log.add({
        ...action,
        channel: 'test',
      }),
    );
    store.dispatch(initUser({ test: ['payload'] }));
    console.log('layout effect shot');
    setInterval(() => store.dispatch(inc()), 900);
  }, []);

  return <Provider value={store}>{children}</Provider>;
};
