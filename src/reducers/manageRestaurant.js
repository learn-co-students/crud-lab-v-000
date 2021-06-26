import cuid from 'cuid';
import manageReviews from './manageReview';
import { combineReducers } from 'redux';

const manageRestaurants = combineReducers({
  restaurants: manageRestaurants_,
  reviews: manageReviews
});

export default manageRestaurants

function manageRestaurants_(state = [], action) {

    switch (action.type) {
  
      case 'ADD_RESTAURANT':
        const restaurant ={
          text: action.text, 
          id: cuid()
        }
        return  state.concat(restaurant) 
  
      case 'DELETE_RESTAURANT':
        debugger
        return state.filter(restaurant => restaurant.id !== action.id)
  
      default: 
        return state;
    }
}
