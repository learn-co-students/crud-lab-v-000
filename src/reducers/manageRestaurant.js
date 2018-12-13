
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch(action.type) {
    case 'ADD_RESTAURANT':
      let newRestaurant = {
        text: action.restaurant,
        id: cuid()
      }
      console.log({
        ...state,
        restaurants: [...state.restaurants, newRestaurant]
      })
      return {
        ...state,
        restaurants: [...state.restaurants, newRestaurant]
      }
    case 'DELETE_RESTAURANT':
      return {
        ...state,
        restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)
      }

    case 'ADD_REVIEW':
      let newReview = {
        text: action.review,
        restaurantId: action.restaurantId,
        id: cuid()
      }
      return {
        ...state,
        reviews: [...state.reviews, newReview]
      }
    case 'DELETE_REVIEW':
      return {
        ...state,
        reviews: state.reviews.filter(review => review.id !== action.id)
      }

    default:
      return state
  }
}
