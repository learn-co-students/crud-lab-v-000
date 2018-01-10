
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
    switch (action.type) {
      case 'ADD_RESTAURANT':
        return { ...state, restaurants: state.restaurants.concat( { text: action.text, id: cuid() } ) }
      case 'DELETE_RESTAURANT':
        return { reviews: state.reviews.filter( review => review.restaurantId !== action.id ), restaurants: state.restaurants.filter( restaurant => restaurant.id !== action.id )}
      case 'ADD_REVIEW':
        return { ...state, reviews: state.reviews.concat( {text: action.text, restaurantId: action.restaurantId, id: cuid()} ) }
      case 'DELETE_REVIEW':
        return { ...state, reviews: state.reviews.filter( review => review.id !== action.id )}
      default:
        return state
    }

}
