import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
}, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':
      const restaurant = { ...action.restaurant, id: cuid() }
      return(
        { ...state, restaurants: state.restaurants.concat(restaurant) }
      )

    case 'DELETE_RESTAURANT':
      const restaurantId = action.id
      const restaurants = { restaurants: state.restaurants.filter( restaurant => {
        return restaurant.id !== restaurantId
      })}
      return restaurants

    case 'ADD_REVIEW':
      const review = { ...action.review, id: cuid() }
      return(
        { ...state, reviews: state.reviews.concat(review) }
      )

    case 'DELETE_REVIEW':
      const reviewId = action.id
      const reviews = { reviews: state.reviews.filter( review => {
        return review.id !== reviewId
      })}
      return reviews

    default:
      return state
  }
}
