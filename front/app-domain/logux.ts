import { CrossTabClient } from '@logux/client/cross-tab-client';
import { Action, Meta } from '@logux/core';
import { log } from '@logux/client';
import { createStore, createEvent, createEffect } from 'effector';

import { $config } from './config';

const { logux, backUrl } = $config.getState();

interface StartLoguxOptions {
  withLog: boolean;
}

const initLoguxClient = createEvent<CrossTabClient>();
const $logux = createStore<CrossTabClient | null>(null).on(
  initLoguxClient,
  (_, client) => client,
);

export const startLoguxClientFx = createEffect<StartLoguxOptions, void>(
  'init logux client',
  {
    handler: ({ withLog = false }) => {
      if ($logux.getState()) return; // client should be created once

      const client = new CrossTabClient({
        subprotocol: logux.subprotocol,
        server: backUrl,
        userId: 'dummy',
        token: 'dummy',
      });

      initLoguxClient(client);

      if (withLog) {
        log(client);
      }
      client.start();
    },
  },
);

type ResponseActionHandler = (a?: Action, b?: Meta | false) => void;

export const addLoguxAction = createEvent<[Action, ResponseActionHandler]>();

$logux.watch(addLoguxAction, (client, [clientAction, resHandler]) => {
  client?.log.add(clientAction).then((meta: Meta | false) => {
    const unbind = client.log.on('add', (action: Action) => {
      if (
        action.type === 'logux/processed' &&
        meta !== false &&
        action.id === meta.id
      ) {
        resHandler(action, meta);
        unbind();
      }
    });
  });
});
