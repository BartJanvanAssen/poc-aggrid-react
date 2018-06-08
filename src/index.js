import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { agGridApp } from './reducers';
import {LicenseManager} from "ag-grid-enterprise/main";
LicenseManager.setLicenseKey("Evaluation_License_Valid_Until__11_August_2018__MTUzMzk0MjAwMDAwMA==6f92d56ec392de1c9f07ac3bc2cc7059");
// import 'ag-grid-enterprise';

ReactDOM.render(
  <Provider store={createStore(agGridApp,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <App />
  </Provider>,
  document.getElementById('root'));
