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

    case "ADD_REVIEW":
      const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuid() };
      return Object.assign({}, state, { reviews: state.reviews.concat(review) });

    case "DELETE_REVIEW":
      const reviews = state.reviews.filter(r => r.id !== action.id);
      return Object.assign({}, state, { reviews });

    default:
      return state;
  }
}
