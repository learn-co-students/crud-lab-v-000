
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {

  switch (action.type) {
    case 'ADD_RESTAURANT':
      const newRestaurant = Object.assign({}, 
      action.restaurant, {
        id: cuidFn()
      })
      return {...state, restaurants: state.restaurants.concat(newRestaurant) }

    case 'DELETE_RESTAURANT':
        const restaurants = state.restaurants.filter( restaurant => 
        restaurant.id !== action.id
        )
        return { restaurants }

    case 'ADD_REVIEW':
      const newReview = Object.assign({}, action.review, {
        text: action.review.text, 
        restaurantId: action.review.restaurantId,
        id: cuidFn()
      })
      return {...state, reviews: state.reviews.concat(newReview)}

    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(
        review =>
        review.id !== action.id
      )
      return {...state, reviews: reviews }

    default:
    return state
  }
}