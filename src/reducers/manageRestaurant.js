
import cuid from 'cuid';
export const cuidFn = cuid;
let id = 0;

export default function manageRestaurants(state={restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = { text: action.restaurant.text, id: cuidFn() };
      const newState = { restaurants: state.restaurants.concat(restaurant) };
      const updatedState = Object.assign({}, state, newState)
      return updatedState
    case 'DELETE_RESTAURANT':
      const restaurantList = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      const reviewList = state.reviews.filter(review => review.restaurantId !== action.id )
      const updatedRestaurant = Object.assign({}, state, {restaurants: restaurantList}, {reviews: reviewList})
      console.log(updatedRestaurant)
      return updatedRestaurant
    case 'ADD_REVIEW':
      id++
      const review = { text: action.review.text, restaurantId: action.id, id: id};
      const newReviews = { reviews: state.reviews.concat(review) };
      const updatedReviews = Object.assign({}, state, newReviews)
      return updatedReviews
    case 'DELETE_REVIEW':
      const findReview = state.reviews.filter(review=> review.id !== action.id)
      const editReview = Object.assign({}, state, {reviews: findReview})
      console.log(editReview)
      return editReview
    default:
      return state
  }

}
