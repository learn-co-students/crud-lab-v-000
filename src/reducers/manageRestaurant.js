
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
    const restaurant = {
      id: cuid(),
      text: action.restaurant
    }
    return {
      reviews: [...state.reviews],
      restaurants: state.restaurants.concat(restaurant)
    }

    case 'DELETE_RESTAURANT':
    const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.restaurantId)
    return {
      reviews: [...state.reviews],
      restaurants: restaurants
    }


    case 'ADD_REVIEW':
    const review = {
      id: cuid(),
      text: action.review.text,
      restaurantId: action.review.restaurantId
    }
    return {
      restaurants: [...state.restaurants],
      reviews: state.reviews.concat(review)
    }

    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.reviewId)
      return {
        restaurants: [...state.restaurants],
        reviews: reviews
      }

    default:
    return state

  }
}
