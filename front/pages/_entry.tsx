import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { loguxClient } from '../app-domain/logux';
import { router } from '../app-domain/router';

import MyApp from './_app';

loguxClient.start();
router.start();

ReactDOM.render(<MyApp />, document.querySelector('#root'));
