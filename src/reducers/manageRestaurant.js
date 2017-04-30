
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [] }, action) {
  switch(action.type) {
    case 'ADD_RESTAURANT':
      const newRestaurant = Object.assign({}, action.name, { id: cuidFn() } )
      console.log(newRestaurant)
      return {...state, restaurants: state.restaurants.concat(newRestaurant) }
    default:
      return state
  }
}
