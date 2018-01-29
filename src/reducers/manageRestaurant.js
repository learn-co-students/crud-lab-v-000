import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants:[],
  }, action) {
  switch(action.type){
    case 'ADD_RESTAURANT':
      const restaurant = { text: action.restaurant.text, id: cuidFn()}
      return Object.assign({}, state, {
        restaurants: state.restaurants.concat(restaurant),
      });
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return  { restaurants }
    default:
      return state
  }
}
