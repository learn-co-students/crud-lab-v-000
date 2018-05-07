import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const band = Object.assign({}, action.restaurant, {id: cuid()})
      return { restaurants: state.restaurants.concat(band), reviews: state.reviews }

    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return { restaurants }

    case 'ADD_REVIEW':
      const review = Object.assign({}, action.review, { id: cuid() })
      return { restaurants: state.restaurants, reviews: state.reviews.concat(review) }

    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id)
      return Object.assign({}, state, { reviews })
      
    default:
      return state;
  }
}
