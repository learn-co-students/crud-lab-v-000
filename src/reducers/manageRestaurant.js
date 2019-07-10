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
			// debugger;
			return { restaurants: state.restaurants.concat(newRestaurant) };
		case 'DELETE_RESTAURANT':
			// debugger;

			return {
				restaurants: state.restaurants.filter((restaurant) => {
					return restaurant.id !== action.id;
				})
			};

		default:
			return state;
	}
}
