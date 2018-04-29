
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {...action.restaurant, id: cuid()}
      return {...state, restaurants: state.restaurants.concat(restaurant)} // or: Object.assign({}, state, {restaurants: state.restaurants.concat(restaurant)})
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return {...state, restaurants} // the same as: Object.assign({}, state, {restaurants})
    case 'ADD_REVIEW':
      const review = {...action.review, id: cuid()}
      return {...state, reviews: state.reviews.concat(review)} // or: Object.assign({}, state, {reviews: state.reviews.concat(review)})
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id)
      return {...state, reviews}

    default:
      return state;

  }
}
