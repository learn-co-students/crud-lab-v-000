
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  let id
  switch (action.type) {
    case 'ADD_RESTAURANT':
      id = cuid()
      return {...state, restaurants: [...state.restaurants, {text: action.text, id: id}]}
    case 'DELETE_RESTAURANT':
      return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
    case 'ADD_REVIEW':
      id = cuid()
      return {...state, reviews: [...state.reviews, {text: action.review.text, id: id, restaurantId: action.review.restaurantId}]}
    case 'DELETE_COMMENT':
      return {...state, reviews: state.reviews.filter(review => review.id !== action.id)}
    default:
      return state

  }
}
