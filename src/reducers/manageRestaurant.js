import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: []}, action) {
	switch (action.type) {
		case 'ADD_RESTAURANT':
			const restaurant = {id: cuidFn(), text: action.text, reviews: []}
			return {restaurants: state.restaurants.concat(restaurant)}

		case 'DELETE_RESTAURANT':
		  return {restaurants: state.restaurants.filter(restaurant=> restaurant.id != action.id)}

		case 'ADD_REVIEW':
		  const review = {id: cuidFn(), text: action.text, restaurantId: action.restaurantId}
		  return {restaurants: state.restaurants.map((restaurant)=>{
			if (restaurant.id != action.restaurantId) return restaurant;
			
			return {id: restaurant.id, text: restaurant.text, reviews: restaurant.reviews.concat(review)}
		  })}

		case 'DELETE_REVIEW':
		  return {restaurants: state.restaurants.map((restaurant)=>{
			if (restaurant.id != action.restaurantId) return restaurant;
			
			return {id: restaurant.id, text: restaurant.text, reviews: restaurant.reviews.filter((review)=> {
				return review.id != action.id
			})};
		  })}

		default:
			return state
	}
}