
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return Object.assign({}, state, {restaurants: [...state.restaurants, {id: cuid(), text: action.text}]});
    case 'DELETE_RESTAURANT':
      return Object.assign({}, state, {restaurants: state.restaurants.filter(e => e.id !== action.id)});
    case 'ADD_REVIEW':
      return Object.assign({}, state, {reviews: [...state.reviews, {id: cuid(), restaurantId: action.restaurantId, text: action.text}]});
    case 'DELETE_REVIEW':
      return Object.assign({}, state, {reviews: state.reviews.filter(e => e.id !== action.id)});
    default:
      return state;
  }
}
