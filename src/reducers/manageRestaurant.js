
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: []}, action) {

	switch(action.type) {

		case 'ADD_RESTAURANT':

			const restaurant = {
				id: cuid(),
				text: action.text
			}	

			return (
				action.name !== '' ? { restaurants: state.restaurants.concat(restaurant) } : state
			)

		case 'DELETE_RESTAURANT':

			return {
				restaurants: state.restaurants.filter(r => r.id !== action.id)
			}	

		default:

			return state
	}

}
