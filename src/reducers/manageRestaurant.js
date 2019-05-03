
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  let restaurant;
  let review;

  switch (action.type) {
    case "ADD_RESTAURANT":
      restaurant = {
        text: action.text,
        id: cuid()
      }
      return {
        ...state,
        restaurants: [...state.restaurants, restaurant]
      }

    case "DELETE_RESTAURANT":
      return {
        ...state,
        restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)
      }

    case "ADD_REVIEW":
      review = { text: action.review.text, id: cuid(), restaurantId: action.review.restaurantId }

      return {
        ...state,
        reviews: [...state.reviews, review]
      }

    case 'DELETE_REVIEW':
      return {
        ...state,
        reviews: state.reviews.filter(review => review.id !== action.id)
      }

    default:
      return state;
  }
}
