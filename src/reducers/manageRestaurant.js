
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {

  switch (action.type) {

    case 'ADD_RESTAURANT':
      const text = { id: cuidFn(), text: action.text }
      return { ...state, restaurants: [...state.restaurants, text] }

    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return { ...state, restaurants }

    case 'ADD_REVIEW':
      const reviewToAdd = { reviewId: cuidFn(), text: action.text, restaurantId: action.restaurantId }
      return { ...state, reviews: [...state.reviews, reviewToAdd] }

    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(reviews => reviews.reviewId !== action.reviewId)
      return { ...state, reviews }

    default:
      return state;
  }
}

