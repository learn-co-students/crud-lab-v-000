
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
        text: action.restaurantText
      }
      return {...state, restaurants: state.restaurants.concat(restaurant)}

    case 'DELETE_RESTAURANT':
      return {...state, restaurants: state.restaurants.filter(restaurant=> restaurant.id !== action.payload)}

    case 'ADD_REVIEW':
      console.log(action);
      const review = {
        id: cuid(),
        text: action.review.text,
        restaurantId: action.review.restaurantId
      }
      return {...state, reviews: state.reviews.concat(review)};

    case 'DELETE_REVIEW':
      return {...state, reviews: state.reviews.filter(review => review.id !== action.payload)}
    default:
      return state;
  }

}
