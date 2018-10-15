import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageRestaurant from './reducers/manageRestaurant'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(manageRestaurant, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)

//TODO: Add review actions to reducer (separate reducers and combine?)
// get state props to review components
// display reviews
// get dispatch props to review components
