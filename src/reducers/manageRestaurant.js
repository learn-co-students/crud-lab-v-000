
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
          text: action.name
      }
      return {restaurants: state.restaurants.concat(restaurant)};

    case 'DELETE_RESTAURANT':

      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return { restaurants };

     case 'ADD_REVIEW':
      
        const review =  {
          text: action.review.text,
          restaurantId: action.review.restaurantId, 
          id: cuidFn(),
        };
        return {reviews: state.reviews.concat(review)};

      case 'DELETE_REVIEW':

       const reviews = state.reviews.filter(review => review.id !== action.id);
       return { reviews };


    default: 
      return state;
  }
};

