import * as React from 'react';
import { Store } from '@reatom/core';
import { context } from '@reatom/react';
import { connectReduxDevtools } from '@reatom/debug';

interface StoreProviderProps {
  store: Store;
}

const { Provider } = context;

export const StoreProvider: React.FC<StoreProviderProps> = ({
  store,
  children,
}) => {
  React.useEffect(() => {
    return connectReduxDevtools(store);
  });

  return <Provider value={store}>{children}</Provider>;
};
