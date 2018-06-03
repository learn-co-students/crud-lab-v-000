import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch(action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = Object.assign({}, action.restaurant, {id: cuid()} )
      return { ...state, restaurants: state.restaurants.concat(restaurant) }
    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(rest => rest.id !== action.id )
      return { ...state, restaurants }
    case 'ADD_REVIEW':
      const review = Object.assign({}, action.review, {id: cuid()} )
      return { ...state, reviews: state.reviews.concat(review) }
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(r => r.id !== action.id )
      return { ...state, reviews}
    default:
      return state;
  }
}
