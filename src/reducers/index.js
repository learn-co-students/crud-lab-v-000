import restaurantReducer from '../reducers/manageRestaurant';
import reviewReducer from '../reducers/reviewReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    restaurants: restaurantReducer,
    reviews: reviewReducer
})

//export default rootReducer;