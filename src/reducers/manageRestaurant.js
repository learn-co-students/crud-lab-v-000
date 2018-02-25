
import cuid from 'cuid';
export const cuidFn = cuid;
let id;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      id = cuid()
      const restaurant = Object.assign({}, action.restaurant, {id: id})
      return { restaurants: state.restaurants.concat(restaurant), reviews: state.reviews }
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant=> {return restaurant.id !== action.id})
      return {restaurants: restaurants}
    case 'ADD_REVIEW':
      id = cuid()
      const review = Object.assign({}, action.review, {id: id})
      return {reviews: state.reviews === undefined ? [review] : state.reviews.concat(review), restaurants: state.restaurants}
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => {return review.id !== action.id})
      return {reviews: reviews, restaurants: state.restaurants}
    default:
      return state;
  }

}
