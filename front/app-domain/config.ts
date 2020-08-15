import { createStore } from 'effector';

import { CONFIG } from '../../app-config';

export const $config = createStore<CONFIG>({
  backPort: process.env.backPort,
  backUrl: process.env.backUrl,
  env: process.env.env,
  host: process.env.host,
  db: process.env.db,
  logux: process.env.logux,
});
