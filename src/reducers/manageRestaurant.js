
import cuid from 'cuid'
export const cuidFn = cuid

export default function manageRestaurants(state ={
  restaurants: [],
  reviews: []},
  action) {

  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = Object.assign({}, action.restaurant, { id: cuid() })
      return Object.assign({},state,{ restaurants: state.restaurants.concat(restaurant)})
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return Object.assign({}, state, { restaurants });
    case 'ADD_REVIEW':
      const review = Object.assign({}, action.review, {id: cuid()}, {restaurantId: action.restaurantId})
      return Object.assign({},{restaurants: state.restaurants}, {reviews: state.reviews.concat(review)})
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id)
      return Object.assign({}, state, {reviews})
    default:
      return state

  }

}