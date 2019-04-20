
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  reviews: [],
  restaurants: [],

}, action) {

  switch (action.type) {
    case 'ADD_RESTAURANT':
     const restaurant = {
       id: cuidFn(),
       text: action.text
     }

     return {
     ...state,
     restaurants: [ ...state.restaurants, restaurant]
   }

     case 'DELETE_RESTAURANT':

       return ({...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)});

     case 'ADD_REVIEW':
       const review = {
         id: cuidFn(),
         text: action.review.text,
         restaurantId: action.review.restaurantId
       };
       return {
       ...state,
       reviews: [...state.reviews,review]
    }

     case 'DELETE_REVIEW':
       return ({...state, reviews: state.reviews.filter(review => review.id !== action.reviewId)});

     default:
       return state;
  }
};
