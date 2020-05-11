
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants:[], reviews:[],
}, action) {

  switch(action.type){
    case 'ADD_RESTAURANT':
    const restaurant = {
      id: cuidFn(),
      text: action.text
    }

    return{ ...state,
      restaurants: state.restaurants.concat(restaurant)
          }

    case 'DELETE_RESTAURANT':
    return{
      restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)
    }

    case 'ADD_REVIEW':

    const review = {
      id: cuidFn(),
      text: action.review.text,
      restaurantId: action.review.restaurantId
    }

    return{
      reviews: state.reviews.concat(review)
    }




    default:
      return state;
    }
}
