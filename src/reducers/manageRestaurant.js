
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={
  restaurants: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {
        id: cuid(),
        text: action.payload.text
      }
    return { restaurants: state.restaurants.concat(restaurant) };

    case 'DELETE_RESTAURANT':
      debugger
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.payload);
      return { restaurants }

    default:
      return state;

  }


}
