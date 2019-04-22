import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  switch(action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = {
        text: action.restaurant,
        id: cuid()
      }
      return { ...state, restaurants: [...state.restaurants, restaurant] }
    case 'DELETE_RESTAURANT':
      return { ...state, restaurants: state.restaurants.filter( restaurant => restaurant.id !== action.id) }
    case 'ADD_REVIEW':
      const review = action.review
      console.log(review)
      return { ...state, reviews: [...state.reviews, review] }
    case 'DELETE_REVIEW':
      return { ...state, reviews: state.reviews.filter( review => review.text !== action.text) }
    default:
      return state;
  }
}
