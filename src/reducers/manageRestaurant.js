import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
	state = {
		restaurants: [],
		reviews: []
	}, action) {

	switch(action.type){
		case "ADD_RESTAURANT":
			const rest = {
				text: action.name,
				id: cuid()
			}
			return {...state, restaurants: [
				...state.restaurants, rest
			]}
		case "ADD_REVIEW":
			const rev = {
				text: action.review.text,
				restaurantId: action.review.restaurantId,
				id: cuid()
			}
			return {...state, reviews: [...state.reviews, rev]}
		case "DELETE_RESTAURANT":
		console.log(action)
			return {...state, restaurants: state.restaurants.filter(r => r.id !== action.restaurantId), reviews: state.reviews.filter(r => r.restaurantId !== action.restaurantId)}
		case "DELETE_REVIEW":
			return {...state, reviews: state.reviews.filter(r => r.id !== action.id)}
		default:
			return state
	}
	

}
