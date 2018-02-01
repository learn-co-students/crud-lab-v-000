
import cuid from 'cuid';
export const cuidFn = cuid;
export default function manageRestaurants (state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      //id++
      const restaurant = Object.assign({}, action.restaurant, {id: cuidFn()})
      return {restaurants: state.restaurants.concat(restaurant)}
    case 'DELETE_RESTAURANT':
      return {restaurants: state.restaurants.filter(res => res.id !== action.id)}
    case 'ADD_REVIEW':
      const review = Object.assign({}, action.review, {id: cuidFn()})
      return Object.assign({}, state, {reviews: state.reviews.concat(review)})
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id)
      return Object.assign({}, state, {reviews})
    default:
      return state
  }
}
