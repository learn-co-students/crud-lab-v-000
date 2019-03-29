import { combineReducers } from "redux";
import manageRestaurant from './manageRestaurant'
import manageReview from './manageReview'

import cuid from 'cuid';
export const cuidFn = cuid;

const rootReducer = combineReducers({
  restaurants: manageRestaurant,
  reviews: manageReview
});

export default rootReducer;
