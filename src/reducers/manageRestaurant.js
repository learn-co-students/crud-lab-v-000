
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {
  console.log('in manageRestaurants - action', action);

  switch (action.type) {

    case 'ADD_RESTAURANT':
      const text = { id: cuid(), text: action.text }
      return { ...state, restaurants: [...state.restaurants, text] }

    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id)
      return { restaurants }

    case 'ADD_REVIEW':
      const reviewToAdd = { reviewId: cuid(), text: action.text }
      // const reviewToAdd = { reviewId: cuid(), text: action.text, restaurantId: restaurantId }

      console.log('in Reducer', { ...state, reviews: [...state.reviews, reviewToAdd] })
      return { ...state, reviews: [...state.reviews, reviewToAdd] }

    default:
      return state;
  }
}

//? I think I need to get restaurant id in here to review To add?