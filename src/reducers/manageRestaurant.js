import cuid from 'cuid';
export const cuidFn = cuid;

let id = 0;
let reviewId = 0;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
  }, action) {
    switch (action.type) {
      case 'ADD_RESTAURANT':
        id++
        const restaurant = Object.assign({}, action.restaurant, { id: id });
        return { ...state, restaurants: state.restaurants.concat(restaurant) };
      case 'DELETE_RESTAURANT':
        const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
        return { ...state, restaurants };
      case 'ADD_REVIEW':
        reviewId++
        const review = Object.assign({}, action.review, { id: reviewId, restaurantId: action.restaurantId });
        return { ...state, reviews: state.reviews.concat(review) };
      case 'DELETE_REVIEW':
        const reviews = state.reviews.filter(review => review.id !== action.id);
        return { ...state, reviews };
      default:
        return state;
    }
  }
