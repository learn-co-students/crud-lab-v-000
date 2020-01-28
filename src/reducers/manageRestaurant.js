
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
      restaurants
    }


    case 'ADD_REVIEW':
    const review = {
      id: cuid(),
      text: action.review,
      restaurantId: action.restaurantId
    }
    return {
      restaurants: [...state.restaurants],
      reviews: state.reviews.concat(review)
    }

    default:
    return state

  }
}
