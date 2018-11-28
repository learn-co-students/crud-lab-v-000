import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import combinedReducers from './reducers/combinedReducers'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(combinedReducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)
