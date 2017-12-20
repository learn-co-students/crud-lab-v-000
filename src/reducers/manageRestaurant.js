
import cuid from 'cuid';
export const cuidFn = cuid;

const defaultState = {restaurants: [], reviews: []}

export default function manageRestaurants(state = defaultState, action) {
	switch(action.type) {
		case 'ADD_RESTAURANT':
			const restaurant = Object.assign({}, action.restaurant, {id: cuidFn()})
			return Object.assign({}, state, { restaurants: state.restaurants.concat(restaurant) })
		case 'DELETE_RESTAURANT':
			const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
			return Object.assign({}, state, { restaurants: restaurants })
		case 'ADD_REVIEW':
			const review = {...action.review, id: cuidFn(), restaurantId: action.restaurantId}
      return {...state, reviews: [...state.reviews, review]}
    case 'DELETE_REVIEW':
    	const reviews = state.reviews.filter(review => review.id !== action.id)
    	return Object.assign({}, state, {reviews: reviews})
		default:
			return state
	};
}