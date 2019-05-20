
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
   restaurants: []
 }, action) {
  switch(action.type) {
    case 'ADD_RESTUARANT':
    const restaurant  = { id: cuid(), text: action.text};
    return {...state, restaurants: [...state.restaurants, restaurant]}

    case 'DELETE_RESTAURANT':
    return { restaurants: state.restaurants.filter(restaurant => restaurant.id != action.id)}

    default:
    return state;
  }
}
