
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurant(state={restaurants: [], reviews: []}, action) {
  switch(action.type){
    case "ADD_RESTAURANT":
      let restaurant = Object.assign({}, action.restaurant, {id: cuid()})
      return Object.assign({}, state, {restaurants: state.restaurants.concat(restaurant)})
    case "DELETE_RESTAURANT":
      let restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return Object.assign({}, state, {restaurants})
    case "ADD_REVIEW":
      let review = Object.assign({}, action.review, {id: cuid()})
      return Object.assign({}, state, {reviews: state.reviews.concat(review)})
    case "DELETE_REVIEW":
      let reviews = state.reviews.filter(review => review.id !== action.id)
      return Object.assign({}, state, {reviews})
    default:
      return state
  }

}
