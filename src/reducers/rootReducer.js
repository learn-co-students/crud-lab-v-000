import { combineReducers } from 'redux';
import manageRestaurants from './manageRestaurant';
import manageReviews from './manageReview';

const rootReducer = combineReducers({
    restaurants: manageRestaurants,
    reviews: manageReviews
})

export default rootReducer;