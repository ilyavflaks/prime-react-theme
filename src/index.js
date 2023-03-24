import React from 'react';
import ReactDOM from 'react-dom/client';

import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

import App from './App';
import { HashRouter } from 'react-router-dom';

if (process.env.REACT_APP_EDITOR === 'code') {
    require('./assets/themes/mytheme/theme.scss');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
