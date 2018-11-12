
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state ={restaurants: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
  	 const restaurant = {
        id: Math.random()*10000000000000000,
        text: action.restaurant
        }
      return { ...state, restaurants: [...state.restaurants, restaurant] }
      case 'DELETE_BAND':
	      return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}

    default:
      return state;
}
}
