
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state= {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = { id: cuidFn(), text: action.text }
      return { ...state, restaurants: [...state.restaurants, restaurant] }
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return { ...state, restaurants };
    case 'UPDATE_RESTAURANT':
      const objects = state.restaurants.map(restaurant => {
        if(restaurant.id !== action.restaurant.id){
          return restaurant
        }else{
          return { ...restaurant, ...action.restaurant}
        }
      });
      return { ...state, restaurants: objects };
    case 'ADD_REVIEW':
      let newReview = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuidFn() }
      return { ...state, reviews: [...state.reviews, newReview] }
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return { ...state, reviews };
    default:
      return state;
  }
}
