import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css';
import 'bulma/css/bulma.css';
import './styles/styles.scss';
  
ReactDOM.render(<AppRouter />, document.getElementById('app'));