import App from './components/App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import history from './history.js';
import './css/styles.css';

ReactDOM.render(
  <HashRouter history={history}>
    <App />
  </HashRouter>,
  document.getElementById('root'));
