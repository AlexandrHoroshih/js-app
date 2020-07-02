import { Server } from '@logux/server';

import config from '../../app-config';

console.log(process.env.NODE_ENV);

const server = new Server(
  Server.loadOptions(process, {
    subprotocol: '1.0.0',
    supports: '1.x',
    root: __dirname,
    port: config.backPort,
  }),
);

server.auth(({ userId, token }) => {
  // Allow only local users until we will have a proper authentication
  return config.env === 'development';
});

server.listen();
