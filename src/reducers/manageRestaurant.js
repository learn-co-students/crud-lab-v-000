
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {
        id: cuid(),
        text: action.text
      }
      return { restaurants: [...state.restaurants, restaurant], reviews: [...state.reviews] };
    
    case 'DELETE_RESTAURANT':
      return {
        restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id),
        reviews: [state.reviews.filter(review => review.restaurantId !== action.id)]
      };
    
    case 'ADD_REVIEW':
      if (action.review.restaurantId) {
        const review = {
          id: cuid(),
          text: action.review.text,
          restaurantId: action.review.restaurantId
        }
        return { restaurants: [...state.restaurants], reviews: [...state.reviews, review] };
      }
      else {
        return state;
      }
    case 'DELETE_REVIEW':
      return { restaurants: [...state.restaurants], reviews: state.reviews.filter(review => review.id !== action.id) };
    
    default:
      return state;
  }
}
