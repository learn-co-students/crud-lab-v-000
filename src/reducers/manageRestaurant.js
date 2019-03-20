
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: [],
  }, action) {

  switch (action.type) {
    case 'ADD_RESTAURANT':

      const restaurant = {
          id: cuidFn(),
          text: action.text
      }
      return { ...state, restaurants: state.restaurants.concat(restaurant)};

    case 'DELETE_RESTAURANT':

      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return { ...state, restaurants };

     case 'ADD_REVIEW':
      debugger
        const review =  {
          text: action.text.text,
          restaurantId: action.text.restaurantId, 
          id: cuidFn(),
        };
        return { ...state, reviews: state.reviews.concat(review)};

      case 'DELETE_REVIEW':

       const reviews = state.reviews.filter(review => review.id !== action.id);
       return { ...state, reviews };


    default: 
      return state;
  }
};

