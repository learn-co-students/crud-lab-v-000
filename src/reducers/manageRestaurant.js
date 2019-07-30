import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  console.log(action);

  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {
        id: cuidFn(),
        text: action.text
      }
      return {...state, restaurants: [...state.restaurants, restaurant]}

    default:
      return state;
  }
}
