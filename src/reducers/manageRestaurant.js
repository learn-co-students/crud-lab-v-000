let id=0;
import cuid from 'cuid';
export const cuidFn = cuid;
const firstState = {restaurants: [], reviews: [], }

export default function manageRestaurant(state = firstState, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      id = cuid();
      const restaurant = Object.assign({}, action.restaurant, { id: id });
      return { restaurants: state.restaurants.concat(restaurant), reviews: state.reviews }
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return { restaurants: restaurants, reviews: state.reviews}
    case 'ADD_REVIEW':
      id = cuid();
      const review = Object.assign({}, action.review, { restaurantId: action.review.restaurantId, id : id, });
      return { reviews: state.reviews.concat(review), restaurants: state.restaurants }
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id );
      return {reviews: reviews, restaurants: state.restaurants,}
    default:
      return state;
  }
};

