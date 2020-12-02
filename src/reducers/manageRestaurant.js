
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
    const restaurant = { id: cuid(), name: action.name }
      return { ...state, restaurants: [...state.restaurants, restaurant] }
    case 'DELETE_RESTAURANT':
    const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return {restaurants}

    default:
      return state;
  }
}
