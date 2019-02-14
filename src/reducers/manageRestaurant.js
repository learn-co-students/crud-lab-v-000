//import { combineReducers } from "redux";
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {
    
    //  console.log(action)
    //  console.log(action.type)
    //  console.log(action.text)
    //  console.log(state.restaurants)
    switch(action.type){

        case 'ADD_RESTAURANT': 

        
            const restaurant = { text: action.text, id: cuidFn() }

            return {...state, restaurants: [...state.restaurants, restaurant]}
            //alternative:
            //return { restaurants: state.restaurants.concat(restaurant) }
        
        case 'DELETE_RESTAURANT':
            //console.log(state.restaurants)
            const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id )
            //console.log(restaurants)
            //console.log({...state, restaurants})
            return { ...state, restaurants }

        case 'ADD_REVIEW':
            
            const apple = { text: action.review.text, restaurantId: action.review.restaurantId, id: cuidFn() }
            
            return { ...state, reviews: [...state.reviews, apple] }
        
            case 'DELETE_REVIEW':

            const reviews = state.reviews.filter(review => review.id !== action.id)

            return{ ...state, reviews }

        default:
        return state

    }

}
