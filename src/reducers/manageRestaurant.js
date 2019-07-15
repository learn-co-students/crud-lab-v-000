import cuid from 'cuid';

/*
export const cuidFn = cuid
*/

import { combineReducers } from "redux";
import restaurantReducer from './restaurantReducer';
import reviewReducer from './reviewReducer';


const manageRestaurant = combineReducers({
  restaurants: restaurantReducer,
  reviews: reviewReducer
});

/*
This is equivalent to writing:

function rootReducer(state = {}, action) {
  return {
    restaurants: restaurantReducer(state.restaurants, action),
    reviews: reviewReducer(state.reviews, action),
  };
};
*/

/*
case "ADD_BOOK":
      let existingAuthor = state.filter(
        author => author.authorName === action.book.authorName
      );
      if (existingAuthor.length > 0) {
        return state;
      } else {
        return [...state, { authorName: action.book.authorName, id: uuid() }];
      }

    default:
      return state;
  }
*/

export default manageRestaurant;
