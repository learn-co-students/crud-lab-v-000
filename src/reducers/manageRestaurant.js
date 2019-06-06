
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {

  switch (action.type) {

    case 'ADD_RESTAURANT':

      const restaurant = {
        id: cuid(),
        text: action.text
      }

      return {
        restaurants: state.restaurants.concat(restaurant),
        reviews: state.reviews
      }

    case 'DELETE_RESTAURANT': 
      return {
        restaurants: state.restaurants.filter(r=>r.id !== action.id),
        reviews: state.reviews
      } 

    case 'ADD_REVIEW':
        
      const review = {
        id: cuid(),
        text: action.review.text,
        restaurantId: action.review.restaurantId
      }
      
      return {
        restaurants: state.restaurants,
        reviews: state.reviews.concat(review)
      }

      case 'DELETE_REVIEW':
        
      return {  
        restaurants: state.restaurants,
        reviews: state.reviews.filter(r=>r.id !== action.id)
      } 
     

    default:
      return state
  }

}
