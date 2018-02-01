
import cuid from 'cuid';
export const cuidFn = cuid;


export default function manageRestaurant(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      // create variable to append id to:
      const restaurant = Object.assign({}, action.restaurant, { id: cuidFn() });
      // clone entire state and update the element that the case stmnt refers to:
      return Object.assign({}, state, {restaurants: state.restaurants.concat(restaurant) });
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter( restaurant => restaurant.id !== action.id);
      return Object.assign({}, state, { restaurants });
    case 'ADD_REVIEW':
      const review = Object.assign({}, action.review, { id: cuidFn() });
      return Object.assign({}, state, {reviews: state.reviews.concat(review) });
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter( review => review.id !== action.id);
      return Object.assign({}, state, { reviews })
    default:
      return state;
  }
}
