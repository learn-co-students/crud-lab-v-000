
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(
  state = {
    restaurants: [],
    reviews: []
  }, action
) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurent = { id: cuidFn(), text: action.text }
      return { ...state, restaurants: [...state.restaurants, restaurent] }

    case 'DELETE_RESTAURANT':
      const restaurants = (state.restaurants.filter(restaurent => restaurent.id !== action.id))
      return { ...state, restaurants }

    case 'ADD_REVIEW':
      const review = { id: cuidFn(), text: action.review.text, restaurantId: action.review.restaurantId }
      return { ...state, reviews: [...state.reviews, review] }

    case 'DELETE_REVIEW':
      const reviews = (state.reviews.filter(review => review.id !== action.id))
      return { ...state, reviews }

    default:
      return state;
  }
}
