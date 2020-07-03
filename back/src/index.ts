import { Server } from '@logux/server';

import config from '../../app-config';

console.log(process.env.NODE_ENV);

const { env, logux } = config;

const server = new Server(
  Server.loadOptions(process, {
    subprotocol: logux.subprotocol,
    supports: logux.supports,
    root: __dirname,
    port: config.backPort,
  }),
);

server.auth(({ userId, token }) => {
  // Allow only local users until we will have a proper authentication
  return env === 'development';
});

server.listen();
