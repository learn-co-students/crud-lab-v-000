import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {

  switch (action.type) {
    case 'ADD_RESTAURANT':
      var id = cuid();
      var restaurant = Object.assign({}, {text: action.text}, {id: id})
      return  {restaurants: state.restaurants.concat(restaurant), reviews: state.reviews}
    case 'DELETE_RESTAURANT':
      return { restaurants: state.restaurants.filter( res => res.id !== action.id ), reviews: state.reviews }
    case 'ADD_REVIEW':
      var id = cuid();
      var review = Object.assign({}, action.review, {id: id})
      return  {reviews: state.reviews.concat(review), restaurants: state.restaurants}
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return Object.assign({}, state, { reviews });
    default:
      return state;
  }
}