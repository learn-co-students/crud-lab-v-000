
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':
    const restaurant = {
      id: cuidFn(),
      text: action.restaurant
    }

    return{ ...state,
      restaurants: state.restaurants.concat(restaurant)
      }

      case 'DELETE_RESTAURANT':
        const restaurants = state.restaurants.filter(restaurant => restaurant !== action.restaurant);
        return { ...state, restaurants}

      case 'ADD_REVIEW':
        const review = {
          id: cuidFn(),
          text: action.review.text,
          restaurantId: action.review.restaurantId
        }
    
        return{ ...state,
          reviews: state.reviews.concat(review)
        }

      case 'DELETE_REVIEW':
        const reviews = state.reviews.filter(review => review.id !== action.review);
        return { ...state, reviews}

  default:
    return state;
  }
}
