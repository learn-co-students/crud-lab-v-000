
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: []
}, action) {

  const restaurant = {
    id: Math.random()*10000000000000000,
    text: action.formData
  }

  switch (action.type) {

    case 'ADD_RESTAURANT':
      return { restaurants: [...state.restaurants, restaurant] }
    
    case 'DELETE_RESTAURANT':
      return { restaurants: state.restaurants.filter(r => r.id !== action.formData)}

    default:
      return state
    }
}
