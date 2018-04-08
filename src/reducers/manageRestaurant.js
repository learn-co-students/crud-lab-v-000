import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const id = cuidFn();
      const restaurant = {name: action.name, id: id}
      return {restaurants: state.restaurants.concat(restaurant)}
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return {restaurants: restaurants}
    default:
      return state;
  }
}
