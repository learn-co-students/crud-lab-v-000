
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state={
    restaurants: [],
    reviews: [],
  }
    , action) {
    switch (action.type) {

        case 'ADD_RESTAURANT':
    
          const restaurant = { text: action.text, id: cuidFn() };
          return {
            ...state,
            restaurants: [ ...state.restaurants, restaurant]
          }

        case 'ADD_REVIEW':

          const review = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuidFn() };
          return { ...state,
            reviews: [...state.reviews, review]
          }

        default:
            return state;    
    }

}
