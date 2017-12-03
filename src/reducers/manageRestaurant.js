import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
}, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      return {...state, restaurants: state.restaurants.concat({text: action.restaurant, id: cuid()})}
    case "DELETE_RESTAURANT":
      return {...state, restaurants: state.restaurants.filter(restaurant=> restaurant.id !== action.id)}
    case 'ADD_REVIEW':
      return {...state, reviews: state.reviews.concat({text: action.review, id: cuid(), restaurantId: action.restaurantId})}
    case 'DELETE_REVIEW':
      return {...state, reviews: state.reviews.filter(reviews=> reviews.id !== action.id)}
    default:
      return state
  }
}
