
import cuid from 'cuid';
export const cuidFn = cuid;

export const initial_state = {
  restaurants: [],
  reviews: [],
};

export default function manageRestaurants(state = initial_state, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {text: action.text, id: cuidFn()};
      return {restaurants: [...state.restaurants, restaurant], reviews: state.reviews};
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return {restaurants, reviews: state.reviews};
    case 'ADD_REVIEW':
      const review = {text: action.text, restaurantId: action.restaurantId, id: cuidFn()};
      return {restaurants: state.restaurants, reviews: [...state.reviews, review]};
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return {restaurants: state.restaurants, reviews};
    default:
      return state;
  }
}
