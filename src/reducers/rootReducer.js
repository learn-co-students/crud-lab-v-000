import { combineReducers } from "redux";

import manageRestaurant from './manageRestaurant'
import manageReview from './manageReview'

const rootReducer = combineReducers({
  restaurants: manageRestaurant,
  reviews: manageReview
});
 
export default rootReducer;
 
