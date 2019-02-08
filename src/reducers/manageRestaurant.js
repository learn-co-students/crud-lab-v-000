
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
	state = {
		restaurants: [],
		reviews: [],
	}, action) {

	switch (action.type) {

		case 'ADD_RESTAURANT':		
			const rest = {
				text: action.payload,
				id: cuid()
			}
			return { ...state, restaurants: state.restaurants.concat(rest)}

	
		case 'DELETE_RESTAURANT':
			return { ...state, restaurants: state.restaurants.filter(r => r.id !== action.payload) }


		case 'ADD_REVIEW':
			const review = { 
				text: action.review.text, 
				restaurantId: action.review.restaurantId, 
				id: cuid() 
			}
			return { ...state, reviews: state.reviews.concat(review) }

			case 'DELETE_REVIEW':
	
				return {...state, reviews: state.reviews.filter(r => r.id !== action.review.id)}

		default: 
			return state
	}
}
