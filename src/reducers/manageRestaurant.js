
import cuid from 'cuid';
export const cuidFn = cuid;

const initialState = {
  restaurants: [],
  reviews: []
}

export default function manageRestaurants(state = initialState, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      let restaurant = Object.assign({}, action.restaurant, {id: cuidFn()})
      return Object.assign({}, state, {
        restaurants: state.restaurants.concat(restaurant)
      })

    case 'DELETE_RESTAURANT':
      let restaurants = state.restaurants.filter(restaurant => (
        restaurant.id !== action.id
      ))
      let restaurantReviews = state.reviews.filter(review => (
        review.restaurantId !== action.id
      ))
      return { restaurants, reviews: restaurantReviews }

    case 'ADD_REVIEW':
      let review = Object.assign({}, action.review, {id: cuidFn()})
      return Object.assign({}, state, {
        reviews: state.reviews.concat(review)
      })

    case 'DELETE_REVIEW':
      let reviews = state.reviews.filter(review => (
        review.id !== action.id
      ))
      return Object.assign({}, state, { reviews })

    default:
      return state
  }
}
