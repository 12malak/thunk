import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DataComponent from './components/DataComponent';

ReactDOM.render(
  <Provider store={store}>
    <DataComponent />
  </Provider>,
  document.getElementById('root')
);