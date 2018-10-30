import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
   restaurants: [], reviews: [],
  }, action) {

  switch(action.type){

    case 'ADD_RESTAURANT':

      const restaurant = {
        id: cuid(),
        text: action.payload,
        reviews: []
      }

      return {...state, restaurants: state.restaurants.concat(restaurant) }

    case 'DELETE_RESTAURANT':

      return {...state, restaurants: state.restaurants.filter(restaurant =>
        restaurant.id !== action.payload)}

    case 'ADD_REVIEW':
      const review = {text: action.payload, restaurantId: action.restaurantId, id: cuid()}

      return {...state, reviews: state.reviews.concat(review) }

    case 'DELETE_REVIEW':
      return {...state, reviews: state.reviews.filter(review => review.id !== action.payload)}

    default:
      return state
  }
}
