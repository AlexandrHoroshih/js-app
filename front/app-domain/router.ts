import createRouter, { SubscribeState } from 'router5';
import browserPlugin from 'router5-plugin-browser';
import { createStore, fromObservable } from 'effector';
import { useStoreMap } from 'effector-react';

export const router = createRouter();

router.usePlugin(browserPlugin());

const updateRouteState = fromObservable<SubscribeState>(router);

export const $routeState = createStore<SubscribeState | null>(null).on(
  updateRouteState,
  (_, routeState) => routeState,
);

export const useCurrentRoute = () =>
  useStoreMap({ store: $routeState, keys: [], fn: (s) => s?.route });
