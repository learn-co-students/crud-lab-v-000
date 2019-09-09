
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {

  switch (action.type) {

    case 'ADD_RESTAURANT':
      const text = { id: cuid(), text: action.text }
      return { ...state, restaurants: [...state.restaurants, text] }

    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return { ...state, restaurants }

    case 'ADD_REVIEW':
      const reviewToAdd = { reviewId: cuid(), text: action.text, restaurantId: action.restaurantId }
      console.log('in Reducer', { ...state, reviews: [...state.reviews, reviewToAdd] })
      return { ...state, reviews: [...state.reviews, reviewToAdd] }

    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(reviews => reviews.reviewId !== action.reviewId)
      return { ...state, reviews }

    default:
      return state;
  }
}

