import React from 'react';
import ReactDOM from 'react-dom';

import About from './about';

import App from './_app';

ReactDOM.render(<App Component={About} />, document.querySelector('#root'));
