import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurant(state={
  restaurants: [],
  reviews: []
}, action) {
  switch (action.type) {

    case "ADD_RESTAURANT":
      const restaurant = {
        id: cuid(),
        text: action.payload
      }
      return {
        reviews: state.reviews,
        restaurants: [...state.restaurants, restaurant]
      }

    case "DELETE_RESTAURANT":
      return {
        reviews: state.reviews,
        restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.payload)
      }

    case "ADD_REVIEW":
      if (state.restaurants.filter(restaurant => restaurant.id === action.review.restaurantId).length > 0) {
        const review = {
          id: cuid(),
          text: action.review.text,
          restaurantId: action.review.restaurantId
        }
        return {
          restaurants: state.restaurants,
          reviews: [...state.reviews, review]
        }
      } else {
        return state;
      }

    case "DELETE_REVIEW":
      return {
        restaurants: state.restaurants,
        reviews: state.reviews.filter(review => review.id !== action.payload.id)
      }

      default:
        return state;
  }
}
