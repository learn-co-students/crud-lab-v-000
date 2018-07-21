
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: [] }, action) {
  switch(action.type) {
    case 'ADD_RESTAURANT':
      return {...state, restaurants: state.restaurants.concat({
        id: cuid(),
        text: action.text,
      })}
    case 'DELETE_RESTAURANT':
      return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
    case 'ADD_REVIEW':
      return {...state, reviews: state.reviews.concat({id: cuid(), restaurantId: action.id, text: action.text })}
    case 'DELETE_REVIEW':
      return {...state, reviews: state.reviews.filter(review => review.id !== action.id)}
    default:
    return state;
  }
}