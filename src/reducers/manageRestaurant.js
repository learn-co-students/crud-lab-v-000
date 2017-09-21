import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = Object.assign({}, action.text, { id: cuid(), reviews: [] });
      return { restaurants: state.restaurants.concat(restaurant) };
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return { restaurants };
      case 'ADD_REVIEW':
        const review = Object.assign({}, action.text, { id: cuid() });
        action.restaurant.reviews = action.restaurant.reviews.concat(review);
        return state;
      case 'DELETE_REVIEW':
        action.restaurant.reviews = action.restaurant.reviews.filter(review => review.id !== action.id);
        return state;
    default:
      return state;
  }
};
