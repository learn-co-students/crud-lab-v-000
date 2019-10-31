import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageRestaurant from './reducers/manageRestaurant'
import manageReview from './reducers/manageReview'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  restaurants: manageRestaurant,
  reviews: manageReview
})

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root')
)
