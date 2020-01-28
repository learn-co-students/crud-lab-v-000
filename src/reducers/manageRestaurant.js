
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
    const restaurant = {
      id: cuid(),
      text: action.restaurant
    }
    return {restaurants: state.restaurants.concat(restaurant)}

    case 'DELETE_RESTAURANT':
    const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.restaurantId)
    return {restaurants}

    default:
    return state

  }
}
