
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  switch(action.type){
    case 'ADD_RESTAURANT':
      const restaurant = {id: cuid(), name: action.restaurant.text}
      //Keeping current state adding to restaurants array the new filled out restaurant obj
      return{...state, restaurants: [...state.restaurants, restaurant]}
    default:
      return state;
  }
}
