import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch(action.type) {

    case "ADD_RESTAURANT":
      const restaurant = { text: action.restaurant.text, id: cuid() };
      return Object.assign({}, state, { restaurants: state.restaurants.concat(restaurant) });

    case "DELETE_RESTAURANT":
      const restaurants = state.restaurants.filter(r => r.id !== action.id);
      return Object.assign({}, state, {restaurants});

    default:
      return state;
  }
}
