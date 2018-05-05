
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: [],}, action) {
    switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = Object.assign({}, action.restaurant, {id: cuidFn()});
      // debugger
      return Object.assign({}, state, {restaurants: state.restaurants.concat(restaurant)});  
      
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return  { restaurants }
      
    case 'ADD_REVIEW':
      // debugger
      const review = Object.assign({}, action.review, {id: cuidFn()});
      // debugger
      return Object.assign({}, state, {reviews: state.reviews.concat(review)});  
      // { ...state, reviews: state.reviews.concat(review) };
      
      
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      // return  { reviews }
      return Object.assign({}, state, {reviews: reviews});
      
    default:
      return state;
  }
    
}