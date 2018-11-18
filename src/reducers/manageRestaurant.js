
import cuid from 'cuid';
export const cuidFn = cuid;

let initialState = {
  restaurants: []
}

export default function manageRestaurants(state = initialState, action) {
  switch (action.type){
    case 'ADD_RESTAURANT':
    const restaurant = {
      id: cuid(),
      name: action.name
    }

  return {...state, restaurants:[...state.restaurants, restaurant]}

  default:
    return state;
  }
};
