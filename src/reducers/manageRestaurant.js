
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state ={
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = {
        id: cuid(),
        ...action.restaurant
      }

      return {
        ...state,
        restaurants: [ ...state.restaurants, restaurant ]
      }
    
    case "DELETE_RESTAURANT":
      return {
        ...state,
        restaurants: state.restaurants.filter(r => r.id !== action.id)
      }

    case "UPDATE_RESTAURANT":
      return {
        ...state,
        restaurants: state.restaurants.map(r => r.id === action.restaurant.id ? action.restaurant : r)
      }
    
    case "ADD_REVIEW":
      const review = {
        id: cuid(),
        ...action.review
      }

      return {
        ...state,
        reviews: [...state.reviews, review]
      }

    case "DELETE_REVIEW":
      return {
        ...state,
        reviews: state.reviews.filter(r => r.id !== action.id)
      }

    case "UPDATE_REVIEW":
      return {
        ...state,
        reviews: state.reviews.map(r => r.id === action.review.id ? action.review : r)
      }

    default:
      return state;
  }
}
