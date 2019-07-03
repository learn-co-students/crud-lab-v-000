
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: []
}, action) {

  switch (action.type) {
    case "ADD_RESTAURANT":
      console.log('adding restaurant', action);
      const restaurant = {
        text: action.name,
        id: cuid()
      };
      return {...state, restaurants: state.restaurants.concat(restaurant)}

    case "DELETE_RESTAURANT":
      console.log('deleting restaurant', action);
      return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id),
        reviews: state.reviews.filter(review => review.restaurantId !== action.id)
      }

    case "ADD_REVIEW":
      console.log('add review', action);
      const review = {
        text: action.review.text,
        restaurantId: action.review.restaurantId,
        id: cuid()
      };
      return {...state, reviews: state.reviews.concat(review)}

    case "DELETE_REVIEW":
      console.log('deleting review', action);
      return {...state, reviews: state.reviews.filter(review => review.id !== action.id)}

    default:
      return state;
  }
}
