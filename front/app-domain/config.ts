import { createStore } from 'effector';

import { CONFIG } from '../../app-config';

export const $config = createStore<CONFIG>({
  backPort: process.env.backPort,
  backUrl: process.env.backUrl,
  env: process.env.env,
  host: process.env.host,
  db: process.env.db,
  logux: process.env.logux,
}); // taking composed env variables out of process.env - https://nextjs.org/docs/api-reference/next.config.js/environment-variables
// the only way (that i have had figured out) to connect node-confme with next.js and have typed & composed config
