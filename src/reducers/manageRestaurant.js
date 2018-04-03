
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews:[]}, action) {
  switch (action.type) {
  	case 'ADD_REST':
  	  const ID = cuid();
  	  const REST = {id: ID, text: action.name};
  	  return {restaurants: state.restaurants.concat(REST), reviews: state.reviews};
  	case 'DELETE_RESTAURANT':
  	  const RESTS = state.restaurants.filter(rest => rest.id !== action.id);
  	  return {restaurants: RESTS};
  	case 'ADD_REVIEW':
  	  const REVIEW = {id: cuid(), text: action.text, restaurantId: action.restaurantId};
  	  return {restaurants: state.restaurants, reviews: state.reviews.concat(REVIEW)};
  	case 'DELETE_REVIEW':
  		const REVIEWS = state.reviews.filter(review => review.id !== action.id);
  		return {restaurants: state.restaurants, reviews: REVIEWS};
  	default:
  	  return state;
  }
}