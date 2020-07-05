import { CrossTabClient } from '@logux/client/cross-tab-client';
import { log, badge, badgeEn } from '@logux/client';

import { LOGUX } from '../../app-config';

const logux: LOGUX = process.env.logux;
const backUrl = process.env.backUrl;

const badgeStyles = {
  base: {
    position: 'fixed',
    width: '15.4em',
    height: '4em',
    lineHeight: '1.4',
    margin: '1.5em',
    paddingLeft: '4.2em',
    opacity: '0.8',
    borderRadius: '0.4em',
    color: '#fff',
    fontFamily: 'Helvetica Neue, sans-serif',
    zIndex: '999',
    backgroundPosition: '1.2em center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '1.8em',
  },
  text: {
    display: 'table-cell',
    verticalAlign: 'middle',
    height: '4em',
  },
  synchronized: {
    backgroundColor: '#000',
  },
  disconnected: {
    backgroundColor: '#000',
  },
  wait: {
    backgroundColor: '#000',
  },
  sending: {
    backgroundColor: '#000',
  },
  error: {
    backgroundColor: '#F42A2A',
  },
  protocolError: {
    backgroundColor: '#000',
  },
};

export const createLoguxClient = () => {
  const client = new CrossTabClient({
    subprotocol: logux.subprotocol,
    server: backUrl,
    userId: 'dummy',
    token: 'dummy',
  });

  log(client);

  badge(client, { messages: badgeEn, styles: badgeStyles });

  return client;
};
