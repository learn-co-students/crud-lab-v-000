
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = { id: cuid(), text: action.name }
      return { ...state, restaurants: [...state.restaurants, restaurant] }

    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return { ...state, restaurants }

    case 'ADD_REVIEW':
      const review = Object.assign({id: cuid()}, {...action.review} )
      return {...state, reviews: [...state.reviews, review]}

    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id)
      return {...state, reviews}

    default:
      return state
  }
}
