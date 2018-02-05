
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch(action.type) {
    case "ADD_RESTAURANT":
      let restaurant = {text: action.text, id: cuid()}
      return {...state, restaurants: [...state.restaurants, restaurant]}
    case "DELETE_RESTAURANT":
      let restaurants = state.restaurants.filter(rest => rest.id !== action.id)
      return {...state, restaurants: restaurants}
    case "ADD_REVIEW":
      let review = {id: cuid(), text: action.text, restaurantId: action.restaurantId}
      return {...state, reviews: [...state.reviews, review]}
    case 'DELETE_REVIEW':
      let reviews = state.reviews.filter(review => review.id !== action.id)
      return {...state, reviews: reviews}
    default:
      return state;
  }
}
