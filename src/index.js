import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import createStore from './createStore';
import manageRestaurant from './reducers/manageRestaurant';

const store = createStore(manageRestaurant);

function render() {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  );
};

export const renderer = { render: render };

store.dispatch({ type: '@@init' });

// store.dispatch({ type: 'ADD_RESTAURANT', restaurant: {text: "Johnny Ds"} });
// store.dispatch({ type: 'ADD_RESTAURANT', restaurant: {text: 'Saguru'} });
// store.dispatch({ type: 'ADD_RESTAURANT', restaurant: {text: 'Ocean Buffet'} });
// store.dispatch({ type: 'ADD_RESTAURANT', restaurant: {text: 'Eat Here Now'} });

// const temp_id0 = store.getState().restaurants[0].id
// const temp_id1 = store.getState().restaurants[1].id
// const temp_id2 = store.getState().restaurants[2].id
// const temp_id3 = store.getState().restaurants[3].id

// store.dispatch({ type: 'ADD_REVIEW', restaurantId: temp_id0, text: "Johnny Ds was great!" });
// store.dispatch({ type: 'ADD_REVIEW', restaurantId: temp_id0, text: "Johnny Ds has the best wings!" });
// store.dispatch({ type: 'ADD_REVIEW', restaurantId: temp_id1, text: "I love their sushi!" });
// store.dispatch({ type: 'ADD_REVIEW', restaurantId: temp_id2, text: "Bring the family!" });
// store.dispatch({ type: 'ADD_REVIEW', restaurantId: temp_id3, text: "The grease does you good!" });
 