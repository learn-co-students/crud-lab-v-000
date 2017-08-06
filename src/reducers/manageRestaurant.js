import cuid from 'cuid';
export const cuidFn = cuid;

let restaurantId = 0
let reviewId = 0

export default function manageRestaurants(state = {restaurants: []}, action) {
	switch (action.type) {
      case 'ADD_RESTAURANT':
        restaurantId++
        state.restaurants.push({text: action.text, id: restaurantId, reviews: []})
        return state
       case 'DELETE_RESTAURANT':
         return {restaurants: state.restaurants.filter((restaurant) => { return restaurant.id !== action.id})}
       case 'ADD_REVIEW':
         debugger
         reviewId++

         var restaurant = state.restaurants.find((restaurant) => {return restaurant.id == action.restaurantId})
         restaurant.reviews.push({text: action.text, id:reviewId})
         debugger
         return state      
      default:
        return state
	}

}