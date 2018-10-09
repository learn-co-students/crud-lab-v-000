
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [],
     reviews: []
    }, action) {
    // debugger;
    switch (action.type) {
        case "ADD_RESTAURANT":
            const resaurant = {id: cuidFn(), text: action.text}
            return {...state, restaurants: [...state.restaurants, resaurant]}
        case "DELETE_RESTAURANT":
            return {restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.restaurant.id)}
        
        case "ADD_REVIEW":
        const review = {...action.review, id: cuidFn()}
        return {
            ...state,
            reviews: [...state.reviews, review]
        }
            
    
        default:
            return state
    }
}
