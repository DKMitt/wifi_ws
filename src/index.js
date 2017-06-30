import React from 'react';
import ReactDOM from 'react-dom';

import { hashRouter } from 'react-router';
import Routes from './routes';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(<Routes history={hashRouter} />,
 document.getElementById('root')
);

registerServiceWorker();