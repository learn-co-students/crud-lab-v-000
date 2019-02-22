
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {
        id: cuid(),
        text: action.text
      }
      return { restaurants: [...state.restaurants, restaurant] };
    
    case 'DELETE_RESTAURANT':
      return { restaurants: state.restaurants.filter(res => res.id !== action.id) };
    
    case 'ADD_REVIEW':
      const review = {
        id: cuid(),
        text: action.review,
        restaurantId: action.restaurantId
      }
      return { reviews: [...state.reviews, review] };
    
    default:
      return state;
  }
}
