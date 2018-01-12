
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {...action.restaurant, id: cuid()}
      return {restaurants: state.restaurants.concat(restaurant)}
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter((restaurant) => restaurant.id !== action.id)
      return {restaurants}
    case 'ADD_REVIEW':
      const review = {...action.review, id: cuid()}
      return {reviews: state.reviews.concat(review)}
    default:
        return state;
  }
}
