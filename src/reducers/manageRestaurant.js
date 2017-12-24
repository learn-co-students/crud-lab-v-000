
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: []
}, action) {

  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = Object.assign({}, action.restaurant, {id: cuidFn()})
      const restaurant_state = Object.assign({}, state, { restaurants: state.restaurants.concat(restaurant) });
      //console.log(restaurant_state)
      return restaurant_state
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return { restaurants }
    default:
      return state
  }

}
