
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: []
}, action) {

  const restaurant = {
    text: action.formData
  }

  switch (action.type) {

    case 'ADD_RESTAURANT':
      return { restaurants: [...state.restaurants, restaurant] }
    
    default:
      return state
    }
}
