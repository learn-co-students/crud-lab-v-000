
import cuid from 'cuid';
export const cuidFn = cuid;


export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  // console.log('action : ', action)
  
  switch (action.type) {
    
    case 'ADD_RESTAURANT':
      const restaurant = {
        id: cuidFn(),
        text: action.text } 
        // console.log('New Restaurant = ', restaurant)
      return { ...state, restaurants: [...state.restaurants, restaurant] }

    case 'DELETE_RESTAURANT':
      return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}

    case 'ADD_REVIEW':
      debugger;
      // console.log('add review action : ', action)
      const review = {
        id: cuidFn(),
        restaurantId: action.review.restaurantId,
        text: action.review.text } 
      return { ...state, reviews: [...state.reviews, review] }

    case 'DELETE_REVIEW':
      return {...state, reviews: state.reviews.filter(review => review.id !== action.id)}

    default:
      return state;
  }

}