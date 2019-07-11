import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
	state = {
		restaurants: [],
		reviews: []
	},
	action
) {
	switch (action.type) {
		case 'ADD_RESTAURANT':
			const newRestaurant = {
				id: cuidFn(),
				text: action.payload
			};
			return {
				...state,
				restaurants: state.restaurants.concat(newRestaurant)
			};
		case 'DELETE_RESTAURANT':
			return {
				...state,
				restaurants: state.restaurants.filter((restaurant) => {
					return restaurant.id !== action.id;
				})
			};
		case 'ADD_REVIEW':
			// debugger;
			const newReview = {
				id: cuidFn(),
				text: action.formData.text,
				restaurantId: action.formData.restaurantId
			};
			// debugger;
			return {
				...state,
				reviews: state.reviews.concat(newReview)
			};
		case 'DELETE_REVIEW':
			debugger;
			return {
				...state,
				reviews: state.reviews.filter((review) => {
					return review.id !== action.id;
				})
			};

		default:
			return state;
	}
}
