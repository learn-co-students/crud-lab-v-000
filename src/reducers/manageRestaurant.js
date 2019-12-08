
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
	state = { restaurants: [], }, 
	action
	) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {
        id: cuid(),
        text: action.name
      }
      return { restaurants: [...state.restaurants, restaurant ] };
  
  default:
      return state;
  }
}