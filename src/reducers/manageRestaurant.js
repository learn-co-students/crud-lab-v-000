
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
  }, action) {
 
 let id = cuid();

  switch (action.type) {
    case 'ADD_RESTAURANT':

    const restaurant = {
      id: id,
      text: action.name
    }
    return {...state, restaurants: [...state.restaurants, restaurant] };

    case 'DELETE_RESTAURANT':
    return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}

    case 'ADD_REVIEW':
     const newReview =  {
      id: id,
      text: action.review.text,
      restaurantId: action.review.restaurantId
     }
    
    return {...state, reviews: [...state.reviews, newReview] }
    
    case 'DELETE_REVIEW':

    return {...state, reviews: state.reviews.filter(review => review.id !== action.id)}
    
    default:
    return state;

  }
}
