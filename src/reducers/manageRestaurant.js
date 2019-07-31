
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':

      const restaurant = {
        id: Math.random(),
        text: action.text
      }

      return { restaurants: state.restaurants.concat(restaurant) };

    case 'DELETE_RESTAURANT':
    console.log(action)
      return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}

    default:
      return state;
  }
}


// const band = {
//   id: cuid(),
//   name: action.name
// }
