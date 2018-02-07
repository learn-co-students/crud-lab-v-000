
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurant(state = {
  restaurants: [], reviews: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = Object.assign({}, action.restaurant, { id: cuid() });
      return Object.assign({}, state, {restaurants: [...state.restaurants, restaurant] })
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return  Object.assign({}, state, {restaurants: restaurants})
     case 'ADD_REVIEW':
      const review = Object.assign({}, action.review, { id: cuid() });
      return Object.assign({}, state, {reviews: [...state.reviews, review] })
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return  Object.assign({}, state, {reviews: reviews})
    default:
      return state;
  }
};