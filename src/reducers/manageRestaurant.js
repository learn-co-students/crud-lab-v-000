import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
	switch (action.type) {
      case 'ADD_RESTAURANT':
        const restaurant = Object.assign({}, {text: action.text, id: cuidFn(), reviews: []})
        return Object.assign({}, state, {restaurants: state.restaurants.concat(restaurant)})
      case 'DELETE_RESTAURANT':
         return Object.assign({}, state, {restaurants: state.restaurants.filter((restaurant) => {return restaurant.id !== action.id})})
       case 'ADD_REVIEW':
       	  const review = Object.assign({}, {text: action.review}, {id: cuidFn()}, {restaurantId: action.restaurantId})
       	  return Object.assign({}, state, {reviews: state.reviews.concat(review)})
       case 'DELETE_REVIEW':
          return Object.assign({}, state, {reviews: state.reviews.filter((review) => {return review.id !== action.id})})
       default:
        return state
	}

}