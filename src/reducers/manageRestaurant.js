
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants:[],
  reviews:[],
}, action) {

  switch (action.type) {

    case 'ADD_RESTAURANT':
    const restaurant = {
        id: cuid(),
        text: action.name,
      }
      //return { restaurants: state.restaurants.concat(restaurant),reviews:[] } ;

      return {
        ...state,
        restaurants: [ ...state.restaurants, restaurant]
      }

    case 'DELETE_RESTAURANT':
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return { ...state, restaurants}
      //return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)};

    case 'ADD_REVIEW':
      const review = {
          id: cuid(),
          restaurantId: action.review.restaurantId,
          text: action.review.text
        }

        //return { restaurants: state.restuarants, reviews: state.reviews.concat(review)} ;

        return { ...state,
          reviews: [...state.reviews, review]
        }

    case 'DELETE_REVIEW':

      return { ...state,
        reviews: state.reviews.filter(review => review.id !== action.id)
      }


    default:
      return state;
  }//end switch

}//end export
