
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
  switch(action.type) {
    case 'ADD_RESTAURANT':
      const newRestaurant = Object.assign({}, {text: action.text}, { id: cuidFn() } )
      return {...state, restaurants: state.restaurants.concat(newRestaurant) }
    case 'DELETE_RESTAURANT':
      const restaurantArray = state.restaurants.filter((r) => r.id !== action.id)
      console.log(restaurantArray)
      return {...state, restaurants: restaurantArray }
    case 'ADD_REVIEW':
      const newReview = Object.assign({}, {text: action.text, restaurantId: action.restaurantId}, { id: cuidFn() } )
      return {...state, reviews: state.reviews.concat(newReview)}
    case 'DELETE_REVIEW':
      const reviewArray = state.reviews.filter((r) => r.id !== action.id)
      return {...state, reviews: reviewArray}
    default:
      return state
  }
}
