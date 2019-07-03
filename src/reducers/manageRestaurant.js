
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = {
        id: cuid(),
        text: action.name
      }
      console.log(restaurant)
      console.log([...state.restaurants, restaurant])
      return { ...state, restaurants: [...state.restaurants, restaurant] }
    case "DELETE_RESTAURANT":
      const restaurants = state.reviews.filter(restaurant => restaurant.id !== action.id)
      return {restaurants}
    case "ADD_REVIEW":
      const review = {
        id: cuid(),
        text: action.name
      }
      console.log(review)
      console.log([...state.reviews, review])
      return { ...state, reviews: [...state.reviews, review] }
    case "DELETE_REVIEW":
      const reviews = state.reviews.filter(review => review.id !== review.id)
      return {review}
    default:
      return state;
  }
}
