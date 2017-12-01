
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={restaurants: [], reviews:[]}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {...action.restaurant, id: cuidFn()}
      return {...state, restaurants: state.restaurants.concat(restaurant)}
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter((restaurant)=> restaurant.id !== action.id)
      return {...state, restaurants}
      break;
    case 'ADD_REVIEW':
      const review = {...action.review, id: cuidFn()}
      return {...state, reviews: state.reviews.concat(review)}
      break;
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id!==action.id)
      return {...state, reviews}
      break;
    default:
      return state
  }
}
