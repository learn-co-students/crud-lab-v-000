
import cuid from 'cuid';
export const cuidFn = cuid;

let id = 0;
export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  let restaurants;
  switch(action.type){
    case 'ADD_RESTAURANT':
      id++
      restaurants = [...state.restaurants, {text: action.text, id: id}]
      return { restaurants }

    case 'DELETE_RESTAURANT':
      restaurants = state.restaurants.filter( restaurant => restaurant.id !== action.id)
      return { restaurants }

    default:
      return state
  }
}
