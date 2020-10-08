import cuid from 'cuid';

import { combineReducers } from "redux";
 
const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  reviews: reviewReducer
});
 
export default rootReducer;

function restaurantReducer(state = [], action) {

    switch (action.type) {
        case 'ADD_RESTAURANT':
        const restaurant = {
            id: cuid(),
            text: action.text,
        }
     
         return [...state, restaurant];
            
        case 'DELETE_RESTAURANT':
            return state.filter(restaurant => restaurant.id !== action.id)
  
        default:
            return state;
    }

}

function reviewReducer(state = [], action) {

    switch (action.type) {
        case 'ADD_REVIEW':

        console.log(action.text.text)
        const review = {
            id: cuid(),
            text: action.text.text,
            restaurantId: action.text.restaurantId
            
        }
            
        return [...state, review];
        
        case 'DELETE_REVIEW':
            console.log(state)
            console.log(action.id)
            return state.filter(review => review.id !== action.id)
  

        default:
            return state;
    }

}
