import { combineReducers } from "redux";
import cuid from 'cuid';
export const cuidFn = cuid;

const manageRestaurants = combineReducers({
  restaurants: restaurantsReducer,
  reviews: reviewsReducer
});

export default manageRestaurants;

function restaurantsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {
        id: cuid(),
        text: action.text
      }
      return [...state, restaurant]
    case 'DELETE_RESTAURANT':
      return state.filter(restaurant => restaurant.id !== action.id)
    default:
      return state;
    }
}

function reviewsReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_REVIEW':
      const review = {
        id: cuid(),
        text: action.review.text,
        restaurantId: action.review.restaurantId
      }
      return [...state, review]
    case 'DELETE_REVIEW':
      return state.filter(review => action.id !== review.id)
    default:
      return state
  }

}
