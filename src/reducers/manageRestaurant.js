
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      let restaurant = Object.assign({}, action.restaurant, {id: cuidFn()})
      return {restaurants: state.restaurants.concat(restaurant),
      reviews: state.reviews};
    case 'DELETE_RESTAURANT':
      let restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return {restaurants, reviews: state.reviews};
      case 'ADD_REVIEW':
        let review = Object.assign({}, action.review, {id: cuidFn()})
        return {restaurants: state.restaurants, reviews: state.reviews.concat(review)};
      case 'DELETE_REVIEW':
        let reviews = state.reviews.filter(review => review.id !== action.id);
        return {restaurants: state.restaurants, reviews};
    default:
      return state
  }
}
