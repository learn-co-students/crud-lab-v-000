import { combineReducers } from 'redux'
import cuid from 'cuid';
export const cuidFn = cuid;


export function restuarantsReducer( state = [], action){

    switch(action.type){

        case "ADD_RESTAURANT":
            return [...state, {text: action.payload, id: cuid() }]

        case "DELETE_RESTAURANT":
            return state.filter(res => res.id !== action.payload)

        default: 
            return state
    }
}

export function reviewsReducer(state = [], action){
    
    switch(action.type){

        case "ADD_REVIEW":
            return [...state, {...action.payload, id: cuid() }]
        case "DELETE_REVIEW":
            return state.filter(rev => rev.id !== action.payload)
        case "DELETE_RESTAURANT":
            return state.filter(rev => rev.restaurantId !== action.payload)

        default: 
            return state
    }
}


const rootReducer = combineReducers({
    restaurants: restuarantsReducer,
    reviews: reviewsReducer
})


export default rootReducer
