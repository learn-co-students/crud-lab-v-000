import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {text: action.restaurant.text, id: cuid()};
      return { restaurants: state.restaurants.concat(restaurant), reviews: state.reviews };
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return { restaurants, reviews: state.reviews };
    case 'ADD_REVIEW':
      const review = {text: action.review.text, id: cuid(), restaurantId: action.review.restaurantId};
      return { reviews: state.reviews.concat(review), restaurants: state.restaurants};
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id)
      return { reviews, restaurants: state.restaurants };
    default:
      return state;
  }
}
