
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return {...state, restaurants: [...state.restaurants, { text: action.restaurant, id: cuid() }] }
    default:
      return state;
  }
}
