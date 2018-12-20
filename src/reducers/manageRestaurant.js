import cuid from 'cuid';
export const cuidFn = cuid;

const initState = {
  restaurants: [],
  reviews: []
}

export default function manageRestaurants(state = initState, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':
      const restaurant = {
        text: action.text,
        id: cuid()
      }
      console.log('ADD_RESTAURANT...', { ...state, restaurants: state.restaurants.concat(restaurant) })
      return { ...state, restaurants: state.restaurants.concat(restaurant) };

    case 'DELETE_RESTAURANT':
      console.log('DELETE_RESTAURANT...', { ...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id) })
      return { ...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id) }

    case 'ADD_REVIEW':
      const review = {
        text: action.review.text,
        restaurantId: action.review.restaurantId,
        id: cuid()
      }
      console.log('ADD_REVIEW...', { ...state, reviews: state.reviews.concat(review) })
      return { ...state, reviews: state.reviews.concat(review) };

    case 'DELETE_REVIEW':
      console.log('DELETE_REVIEW...', { ...state, reviews: state.reviews.filter(review => review.id !== action.id) })
      return { ...state, reviews: state.reviews.filter(review => review.id !== action.id) }

    default:
      return state;
  }
}
