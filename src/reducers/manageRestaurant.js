
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {resturants: []}, action) {
	switch(action.type) {
		case 'ADD_RESTAURANT':
			const resturant = Object.assign({}, action.text)
			debugger
			return { resturants: state.resturants.concat(resturant) }
			// return {...state.resturants, resturants: action.text}
		


		default:
			return state
	};
}