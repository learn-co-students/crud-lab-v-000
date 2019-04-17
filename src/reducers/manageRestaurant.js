
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
	state = {
		restaurants: [],
		reviews: []
	}, action) {
	let newState;

	switch (action.type) {
		case 'ADD_RESTAURANT':
			newState = {
				...state, 
				restaurants: [
					...state.restaurants, 
					{ text: action.text, id: cuidFn()}]
				}
			return newState

		case 'DELETE_RESTAURANT':
			newState = {
				...state,
				restaurants: state.restaurants.filter( restaurant => restaurant.id !== action.id )}
			// console.log('delete action, updated state: ', newState)
			return newState

		case 'ADD_REVIEW':
			newState = {
				...state,
				reviews: [...state.reviews,
				{ 
					text: action.review.text,
					restaurantId: action.review.restaurantId,
					id: cuidFn()}]
			}

			//console.log('received action: ', action)
			//console.log('returning state: ', newState)

			return newState

		case 'DELETE_REVIEW':
			newState = {
				...state,
				reviews: state.reviews.filter( review => review.id !== action.id )
			}

			return newState

		default:
			return state;
	}
}
