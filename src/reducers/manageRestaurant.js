import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = { text: action.restaurant.text, id: cuidFn() }
      return Object.assign({}, state, { restaurants: state.restaurants.concat(restaurant)})
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return Object.assign({}, state, { restaurants: restaurants })
    case 'ADD_REVIEW':
      const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuidFn() }
      return Object.assign({}, state, { reviews: state.reviews.concat(review)})
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id)
      return Object.assign({}, state, { reviews: reviews })
    default:
      return state;
  }
}
