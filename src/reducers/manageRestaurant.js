
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  switch(action.type) {
    case 'ADD_RESTAURANT':
      return {
        reviews: state.reviews,
        restaurants: state.restaurants.concat({
          text: action.restaurant,
          id: cuid()
        })
      }
    case 'DELETE_RESTAURANT':
      return {
        reviews: state.reviews.filter(review => {
          return review.restaurantId !== action.id
        }),
        restaurants: state.restaurants.filter(restaurant => {
          return restaurant.id !== action.id
        })
      }
    case 'ADD_REVIEW':
      return {
        restaurants: state.restaurants,
        reviews: state.reviews.concat({
          text: action.review,
          id: cuid(),
          restaurantId: action.restaurantId
        })
      }
    case 'DELETE_REVIEW':
      return {
        restaurants: state.restaurants,
        reviews: state.reviews.filter(review => {
          return review.id !== action.id;
        })
      }
    default:
      return state;
  }
}
