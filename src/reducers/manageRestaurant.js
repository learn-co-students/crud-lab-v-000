
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_REST':
      const rest = Object.assign({}, action.name, {id: cuidFn()})
      return {restaurants: state.restaurants.concat(rest), reviews: state.reviews}
    case 'DELETE_RESTAURANT':
      return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id),
              reviews: state.reviews.filter(review => review.restaurantId !== action.id)}
    case 'ADD_REVIEW':
      const reviews = Object.assign({}, action.text, {restaurantId: action.restaurantId}, {id: cuidFn()})
      return {restaurants: state.restaurants, reviews: state.reviews.concat(reviews)}
    case 'DELETE_REVIEW':
      return {restaurants: state.restaurants, reviews: state.reviews.filter(review => review.id !== action.id)}
    default:
      return state
  }
}
