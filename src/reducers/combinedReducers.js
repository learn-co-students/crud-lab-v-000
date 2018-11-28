import { combineReducers } from "redux";
import cuid from 'cuid';

export const cuidFn = cuid;

let idx;

const rootReducer = combineReducers({
  restaurants:  manageRestaurants,
  reviews: manageReviews
});

function manageRestaurants(state = [], action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
    const restaurant = {
      id: cuidFn(),
      text: action.text
    }
    return [...state, restaurant ];
    case 'DELETE_RESTAURANT':
      return [state.filter(restaurant => restaurant.id !== action.id)]
    default:
      return state;
  }
};

function manageReviews(state = [], action) {
  switch (action.type) {
    case 'ADD_REVIEW':
      const review = {
        id: cuidFn(),
        text: action.review.text,
        restaurantId: action.review.restaurantId
      }
      return [...state, review];
    case 'DELETE_REVIEW':
      return [state.filter(review => review.id !== action.id)]
    default:
      return state;
  }
}

export default rootReducer
