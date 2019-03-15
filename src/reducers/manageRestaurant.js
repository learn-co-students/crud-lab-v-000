
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':

    //  return { ...state, action.payload }

      case 'DELETE_RESTAURANT':
          return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.payload)}

    default:
      return state;
  }
};
