
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  reviews: [], 
  restaurants: []
  }, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = Object.assign({}, action.restaurant, {id: cuid()})
      return {...state, restaurants: state.restaurants.concat(restaurant)}
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(res => res.id !== action.id)
      return {restaurants}
    case 'ADD_REVIEW':
      const review = Object.assign({}, action.review, {id: cuid(), restaurantId: action.restaurantId})
      return {...state, reviews: state.reviews.concat(review)}
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(res => res.id !== action.id)
      return {reviews} 
    default:
      return state;  
  }
}