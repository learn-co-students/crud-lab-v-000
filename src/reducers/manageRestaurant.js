
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  switch(action.type){
    case 'ADD_RESTAURANT':
      const restaurant = {id: cuid(), text: action.text}
      // console.log('adding resturant...', resturant)
      // console.log('result:', {restaurants: state.restaurants.concat(restaurant)})
      return {restaurants: state.restaurants.concat(restaurant)}
    case 'DELETE_RESTAURANT':
      // console.log('action is ' , action)
      const restaurants = state.restaurants.filter( restaurant => restaurant.id !== action.id)
      // console.log('returning',restaurants );
      return {restaurants: restaurants}
    default:
      return state
  }
}
