
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  // console.log(action)
  switch(action.type) {
    case 'ADD_RESTAURANT':
      const rest = { text: action.text, id: cuid() }
      return Object.assign({}, state, {restaurants: state.restaurants.concat(rest)})

    case 'DELETE_RESTAURANT':
      return Object.assign({}, state, {restaurants: state.restaurants.filter((res) => res.id !== action.id)})

    case 'ADD_REVIEW':
      const review = { text: action.text, restaurantId: action.restaurantId, id: cuid() }
      return Object.assign({}, state, {reviews: state.reviews.concat(review)})

    case 'DELETE_REVIEW':
      return Object.assign({}, state, {reviews: state.reviews.filter((rev) => rev.id !== action.id)})

    default: return state
  }

}
