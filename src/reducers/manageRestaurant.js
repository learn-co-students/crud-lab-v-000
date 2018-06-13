import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    reviews: [],
    restaurants: [],
  }, action) {

  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = Object.assign({}, action.restaurant, {id: cuid()})
      return { restaurants: state.restaurants.concat(restaurant), reviews: state.reviews }
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return { restaurants, reviews: state.reviews } 
    case 'ADD_REVIEW':
      const newReview = Object.assign({}, action.review, { id: cuid() });
      return { restaurants: state.restaurants, reviews: state.reviews.concat(newReview) };
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return Object.assign({}, state, { reviews });
    default:
      return state;
  }
}