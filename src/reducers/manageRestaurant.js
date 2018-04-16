
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const newRestaurant = {
        ...action.restaurant,
        id: cuid(),
      }

      return { ...state, restaurants: [...state.restaurants, newRestaurant] }
    
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(({id}) => id !== action.id)
      return {...state, restaurants}

    case 'ADD_REVIEW':
      const newReview = {
        ...action.review,
        id: cuid()
      }

      return {...state, reviews: [ ...state.reviews, newReview] }

    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(({id}) => id !== action.id)
      return {...state, reviews}

    default: return state
  }
}