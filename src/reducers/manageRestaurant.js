
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
}, action) {
  switch (action.type) {
    case 'ADD_RESTAURANT':

      const restaurant = {
        id: Math.random(),
        text: action.text
      }

      return { restaurants: state.restaurants.concat(restaurant) };

    case 'DELETE_RESTAURANT':
      return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}

    case 'ADD_REVIEW':

      const review = {
        // id: ,
        text: action.text
      }
      // return { reviews: state.reviews.concat(review) }
      return { ...state,
        reviews: [...state.reviews, review]
      }

    default:
      return state;
  }
}


// const band = {
//   id: cuid(),
//   name: action.name
// }
