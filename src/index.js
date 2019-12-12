import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageRestaurant from './reducers/manageRestaurant'

import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(manageRestaurant)
//  manageRestaurant is located in the reducer.
//  And we connect it to the store. 


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)
