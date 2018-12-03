
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  reviews: [], restaurants: []
}, action) {
  switch(action.type) {
    case 'ADD_RESTAURANT':
      const res = {
        id: cuidFn(),
        text: action.text
      }
      return { ...state, restaurants: state.restaurants.concat(res) }
    case 'DELETE_RESTAURANT':
      return { ...state, restaurants: state.restaurants.filter(res => res.id !== action.id )}
    case 'ADD_REVIEW':
      const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuidFn() }
      return { ...state, reviews: state.reviews.concat(review) }
    case 'DELETE_REVIEW':
      return { ...state, reviews: state.reviews.filter(review => review.id !== action.id )}
    default:
      return state;
  }
}
