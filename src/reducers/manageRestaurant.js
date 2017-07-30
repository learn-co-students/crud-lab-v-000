
import cuid from 'cuid';
export const cuidFn = cuid;

let reviewCount = 0

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {

  switch (action.type){
    case 'ADD_RESTAURANT':
    var restaurant = {text: action.name, id: cuidFn()}
    return Object.assign({}, state, {restaurants: state.restaurants.concat(restaurant)})

    case 'DELETE_RESTAURANT':
      return Object.assign({}, state, {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)})

      case "ADD_REVIEW":
        reviewCount++
        let review = {text: action.text, restaurantId: action.id, id: reviewCount}
        return Object.assign({}, state, {reviews: state.reviews.concat(review)})

      case 'DELETE_REVIEW':
      return Object.assign({}, state, {reviews: state.reviews.filter(review => review.id !== action.id)})


    default:
      return state
  }

}
