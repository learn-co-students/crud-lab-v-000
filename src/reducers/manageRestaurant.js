
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch(action.type){
    case 'ADD_RESTAURANT':
      const newRestaurant = {...action.restaurant, id: cuidFn()}
      return {restaurants: state.restaurants.concat(newRestaurant), reviews: state.reviews}
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      const reviews = state.reviews.filter(review => reviews.restaurantId !== action.id)
      return {restaurants: restaurants, reviews: reviews}
    case 'ADD_REVIEW':
      const newReview = {...action.review, id: cuidFn()}
      return {restaurants: state.restaurants, reviews: state.reviews.concat(newReview)}
    case 'DELETE_REVIEW':
      const review = state.reviews.filter(review => review.id !== action.id)
      return {restaurants: state.restaurants, reviews: review}
    default:
      return state
  }

}
