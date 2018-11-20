import { combineReducers } from 'redux';
import cuid from 'cuid';
export const cuidFn = cuid;

function manageRestaurants(state = [], action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return [
          ...state,
          {
            id: cuid(),
            name: action.name
          }
        ];
    case 'DELETE_RESTAURANT':
      return state.filter(
        res => res.id !== action.restaurant.id);
    default:
      return state;
  }
}

function manageReviews(state = [], action) {
  switch (action.type) {
    case 'ADD_REVIEW':
      return [
          ...state,
          {
            restaurantId: action.review.restaurantId,
            text: action.review.text,
            id: cuid()
          }
        ];
    case 'DELETE_REVIEW':
      return state.filter(review =>
          review.id !== action.review.id
        );
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  restaurants: manageRestaurants,
  reviews: manageReviews
})

export default rootReducer;
