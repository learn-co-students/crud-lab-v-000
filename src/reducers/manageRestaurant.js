let id = cuid();

import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = Object.assign({}, action.band, {id: id});
      return {restaurants: state.restaurants.concat(restaurant)};
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(resto => resto.id !== action.id);
      return Object.assign({}, state, { restaurants })
    default:
      return state;
  }
}
