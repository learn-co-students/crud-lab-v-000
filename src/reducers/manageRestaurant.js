// ** comments show possible refactor with combined reducers; disabled to make tests pass

// import { combineReducers } from "redux";
import cuid from 'cuid';

export const cuidFn = cuid;

// const rootReducer = combineReducers({
//   restaurants:  manageRestaurants,
//   reviews: manageReviews
// });

function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
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
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return { ...state, restaurants}
    case 'ADD_REVIEW':
      const review = {
        id: cuidFn(),
        text: action.review.text,
        restaurantId: action.review.restaurantId
      }
      return { ...state,
        reviews: [...state.reviews, review]
      }
    case 'DELETE_REVIEW':
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return {...state, reviews }
    default:
      return state;
  }
};

// function manageReviews(state = [], action) {
//   switch (action.type) {
//     case 'ADD_REVIEW':
//       const review = {
//         id: cuidFn(),
//         text: action.review.text,
//         restaurantId: action.review.restaurantId
//       }
//       return [...state, review];
//     case 'DELETE_REVIEW':
//       return [state.filter(review => review.id !== action.id)]
//     default:
//       return state;
//   }
// }
//
// export default rootReducer

export default manageRestaurants;
