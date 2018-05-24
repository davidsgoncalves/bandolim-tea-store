import React from 'react';
import ReactDOM from 'react-dom';
import 'react-table/react-table.css'
import './index.css';
import Routes from './containers/';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Routes />,
  document.getElementById('root'),
);
registerServiceWorker();