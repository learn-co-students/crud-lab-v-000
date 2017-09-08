
import cuid from 'cuid';
export const cuidFn = cuid;
let id = 0;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      id++;
      const restaurant = Object.assign({}, action.restaurant, {id: id})
      return { restaurants: state.restaurants.concat(restaurant), reviews: state.reviews};
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return  { restaurants, reviews: state.reviews }
    case 'ADD_REVIEW':
      id++;
      const review = Object.assign({}, action.review, {id: id})
      return { restaurants: state.restaurants, reviews: state.reviews.concat(review)};
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return  { restaurants: state.restaurants, reviews }
    default:
      return state;
  }
}
