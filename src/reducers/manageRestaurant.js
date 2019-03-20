import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
}, action) {
  switch(action.type) {

    case 'ADD_RESTAURANT':

      const restaurant = {
        id: cuid(),
        text: action.text
      } 

      return (
        action.text !== '' ?
        {...state, restaurants:  [...state.restaurants, restaurant]} : 
        state
      )

    case 'DELETE_RESTAURANT':

      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return { ...state, restaurants}

    default:

      return state
  }

}
