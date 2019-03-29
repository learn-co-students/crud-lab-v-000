
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = [], action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {
        id: cuid(),
        text: action.text
      }
      return state.concat(restaurant);

    case 'DELETE_RESTAURANT':
      return state.filter(restaurant => restaurant.id !== action.id);

    default:
      return state;
  }
}
