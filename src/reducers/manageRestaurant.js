
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {

  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = Object.assign({}, action.restaurant, {id: cuidFn()})
      const restaurant_state = Object.assign({}, state, { restaurants: state.restaurants.concat(restaurant) });
      //console.log(restaurant_state)
      return restaurant_state
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return { restaurants }
    case 'ADD_REVIEW':
      const reviewId = Object.assign({}, action.review, {id: cuidFn()})
      const review = Object.assign({}, state, { reviews: state.reviews.concat(reviewId) });
      //console.log(review)
      return review
    case 'DELETE_REVIEW':
      console.log(state)
      const reviews = state.reviews.filter(review => review.id !== action.id)
      console.log(reviews)
      return {reviews}
    default:
      return state
  }

}
