
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':

        const restaurant = {
          id: cuid(),
          restaurant: action.payload
        }
        return { ...state, restaurants: [...state.restaurants, restaurant]} //???

      case 'DELETE_RESTAURANT':
          return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.payload)}

    default:
      return state;
  }
};
