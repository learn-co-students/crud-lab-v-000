
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const id = cuid()
      const restaurant = {...action.restaurant, ...{ id: id}}
      return { ...state, ...{restaurants: state.restaurants.concat(restaurant)} }
    
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return { restaurants}
    
    case 'ADD_REVIEW':
      const reviewId = cuid()
      const review = {...action.review, ...{ id:reviewId }}
      return { ...state, ...{reviews: state.reviews.concat(review)} }
    
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id)
      return { reviews }
    
    default:
      return state
  }
}