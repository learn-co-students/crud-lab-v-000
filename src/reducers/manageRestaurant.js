
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [],}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      let id = cuid();
      let restaurant = Object.assign({}, action.restaurant, {id: id});
      return {restaurants: state.restaurants.concat(restaurant)};
    case 'DELETE_RESTAURANT':
      let restaurants = state.restaurants.filter(shop => shop.id !== action.id)
      return {restaurants: restaurants}  
    default:
      return state;
  }

}
