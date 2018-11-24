
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
 restaurants: []
}, action) { 
  switch (action.type) {
    case 'ADD_RESTAURANT':
debugger

      const restaurant = {
          id: cuidFn(),
          name: action.payload
      }

      return { ...state, restaurants: [...state.restaurants, restaurant] }
    
    case 'DELETE_RESTAURANT':
debugger
      return { restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
    case 'ADD_REVIEW':
debugger 
      //const review	
     //state.restaurants.filter(restaurant => restaurant.id === action.id)
     const reviews = state.restaurants.map(restaurant =>{ 
        let result = {};
	if (restaurant.id == action.id) {
    	  result[restaurant.review] = 'Here goes the action value. This should be the review content from the input';
	  return result;
	}
     });

  return { ...state }
      //return { reviews: state.restaurants.filter(restaurant => restaurant.id === action.id) }

    default:
      return state;
  }

}
