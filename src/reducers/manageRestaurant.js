
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
  let newRestaurants
  let newReviews

  switch(action.type) {

    case "ADD_RESTAURANT":
      const newRestaurant = { text: action.text, id: cuid() }
      newRestaurants = state.restaurants.concat(newRestaurant)
      return {...state, restaurants: newRestaurants}

    case "DELETE_RESTAURANT":
      newRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return {...state, restaurants: newRestaurants}

    case "ADD_REVIEW":
      const newReview = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuid() }
      newReviews = state.reviews.concat(newReview)
      return { ...state, reviews: newReviews }

    case "DELETE_REVIEW":
      newReviews = state.reviews.filter(review => review.id !== action.review.id)
      return { ...state, reviews: newReviews }

    default:
      return state
    }
}
