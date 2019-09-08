
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  console.log('in manageRestaurants - action', action);

  switch (action.type) {
    case 'ADD_RESTAURANT':
      const text = { id: cuid(), text: action.text }
      console.log('in manageRestaurants - action', action);

      return { ...state, restaurants: [...state.restaurants, text] }

    default:
      return state;
  }
}
