import cuid from 'cuid';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    restaurants: manageRestaurants,
    reviews: manageReviews
});

export default rootReducer;

function manageRestaurants(state = [], action) {
    
    switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: cuid(),
                text: action.text
            }
            // return [ ...state, restaurant]
            return state.concat(restaurant)
        case 'DELETE_RESTAURANT':
            return state.filter(restaurant => restaurant.id !== action.id)
        case 'UPDATE_RESTAURANT':
            return [
                ...state.filter(restaurant => restaurant.id !== action.restaurant.id),
                Object.assign({}, action.restaurant)
            ]
        default:
            return state;
    }
}

function manageReviews(state = [], action) {
    
    switch (action.type) {
        case 'ADD_REVIEW':
            const review = {
                id: cuid(),
                text: action.review.text,
                restaurantId: action.review.restaurantId
            }

            return state.concat(review)
        case 'DELETE_REVIEW':
            return state.filter(review => review.id !== action.id)
        case 'UPDATE_REVIEW':
            return [
                ...state.filter(review => review.id !== action.review.id),
                Object.assign({}, action.review)
            ]
        default:
            return state;
    }
}
