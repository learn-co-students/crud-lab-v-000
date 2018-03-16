
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      return Object.assign({}, state, {restaurants: state.restaurants.concat(action.restaurant)});
    case 'ADD_REVIEW':
      return Object.assign({}, state, {reviews: state.reviews.concat(action. review)});
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(r => r.id !== action.id);
      return  { restaurants }
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(r => r.id !== action.id);
      return  { reviews }
    default:
      return state;
  }
}

//
// export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
//   switch (action.type) {
//     case 'ADD_RESTAURANT':
//       return Object.assign({}, state, {restaurants: state.restaurants.concat(action.restaurant)});
//     case 'ADD_REVIEW':
//       return Object.assign({}, state, {reviews: state.reviews.concat(action. review)});
//     case 'DELETE_RESTAURANT':
//       return  Object.assign({}, state, {reviews: state.restaurants.filter(r => r.id !== action.id )});
//     case 'DELETE_REVIEW':
//       return Object.assign({}, state, {reviews: state.reviews.filter(r => r.id !== action.id)});
//     default:
//       return state;
//   }
// }
