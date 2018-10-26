import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
    switch (action.type) {
      case 'ADD_RESTAURANT':
        const restaurant = {
          id: cuid(),
          text: action.text
        }
        return {...state, restaurants: [...state.restaurants, restaurant] }

      case 'DELETE_RESTAURANT':
        const filteredRestaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
        return {...state, restaurants: filteredRestaurants}

      case 'ADD_REVIEW':
        const review = {
          id: cuid(),
          foreignId: action.object.id,
          text: action.object.text
        }
        return {...state, reviews: [...state.reviews, review]  }

        case 'DELETE_REVIEW':
        const filteredReviews = state.reviews.filter(review => review.id !== action.id)
        return {...state, reviews: filteredReviews}

      default:
      return state;
    }
};
