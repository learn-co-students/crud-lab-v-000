import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  let restaurant;
  switch (action.type) {

    case 'ADD_RESTAURANT':
      restaurant = {
        text: action.text,
        id: cuidFn()
      };
      return { ...state, restaurants: [...state.restaurants, restaurant] };

    case 'DELETE_RESTAURANT':
      return { ...state, restaurants: state.restaurants.filter(resto => resto.id !== action.id ) };

    default:
      return state;
  }
};
