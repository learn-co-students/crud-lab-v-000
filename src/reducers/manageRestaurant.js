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
    default:
      return state
  }
}
