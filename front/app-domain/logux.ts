import { CrossTabClient } from '@logux/client/cross-tab-client';
import { log } from '@logux/client';

import { $config } from './config';

const { logux, backUrl } = $config.getState();

export const loguxClient = new CrossTabClient({
  subprotocol: logux.subprotocol,
  server: backUrl,
  userId: 'dummy',
  token: 'dummy',
});

log(loguxClient);
