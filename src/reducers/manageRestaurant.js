import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':
      const rest = Object.assign({}, action.restaurant, {id: cuidFn()})
      return Object.assign({}, state, {
        restaurants: state.restaurants.concat(rest),
      });

    case 'DELETE_RESTAURANT':
      return {
        restaurants: state.restaurants.filter(rest => rest.id !== action.id)
      }

    case 'ADD_REVIEW':
      const rev = Object.assign({}, action.review, {id: cuidFn()})
      return Object.assign({}, state, {
        reviews: state.reviews.concat(rev),
      });

    case 'DELETE_REVIEW':
      return {
        reviews: state.reviews.filter(rev => rev.id !== action.id)
      }

    default:
      return state;
  }
}
